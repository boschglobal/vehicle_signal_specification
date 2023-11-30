# Handling of instances - the problem and possible solutions

## Introduction

* Do we see a need to support both DriverSide/PassengerSide and Left/Right notation?
* If so, do we want signals in tree to be duplicated, i.e. both `Vehicle.Seat.Row1.Left.Position` and
  `Vehicle.Seat.Row1.DriverSide.Position` should exist?
* Or rather a mechanism that to indicate that for example `Vehicle.Seat.Row1.DriverSide` for this particular vehicle
  is a synonym for `Vehicle.Seat.Row1.Left``

This file show some possibilities to solve the problem.

A technically feasible solution (IF we want to change) could be:

* First just expand available names so you can reference by both DriverSide/PassengerSide and Left/Right notation.
* Secondly add support in VSS-tools to control which instances that actually exist and how instances are related

## Background

VSS

For objects/items that exits in multiple instances VSS has an instance concept.
In "unexpanded" VSS represented as a range of values in one or more dimensions.
Historically VSS used Left/Right or numerical position for sideway position

```
Door:
  type: branch
  instances:
    - Row[1,4]
    - ["Left","Right"]

Seat:
  type: branch
  instances:
    - Row[1,4]
    - Pos[1,5]
```

VSS-tools has support for expanding instances, and this also gives the de-factor standard for how
to address instances, used for instance by KUKSA Databroker and VISS.

```
Door.Row1.Left
Door.Row1.Right
Door.Row2.Left
...
Door.Row4.Right
```

VSS-tools will expand to all instance-combinations, there is no VSS syntax to specify that only certain combinations exist.

## Recent Changes

Some time ago we changed to DriverSide/PassengerSide notation.


```
Door:
  type: branch
  instances:
    - Row[1,2]
    - ["DriverSide","PassengerSide"]

    Seat:
  type: branch
  instances:
    - Row[1,2]
    - ["DriverSide","Middle","PassengerSide"]
```

The reasoning was that for some use-cases you do not really care where the item is physically located,
you are rather interested in the logical function of the item.

A hypothetical use-case could be:

```
if <driver door is opened> then
   <unlock all other doors>
   <unlock trunk>
```

That gives easier logic than:


```
if (<driver side is left> AND <left door is opened>) OR ( <driver side is right> AND <right door is opened>) then
   <unlock all other doors>
   <unlock trunk>
```

On the other hand, using Driver/Passenger notation makes it more difficult for cases where you intend to
show actual location, like visualizing opened doors in the UI.

## Usage in other APIs

Android use the concept of zones/areas.
Some signals exists in multiple instances, each covering a specific zone.
Each instance is referenced by the AreaId, which is as bitmask indicating which areas that are managed by that instance.
For HVAC,
[android documentation](https://source.android.com/docs/automotive/vhal/previous/properties) states that:

*Each available seat in the car must be part of an Area ID in the Area ID array.*

Example:

For a normal 5-seats passenger car the following seats exist

```

    ROW_1_LEFT = 0x0001
    ROW_1_RIGHT = 0x0004
    ROW_2_LEFT = 0x0010
    ROW_2_CENTER = 0x0020
    ROW_2_RIGHT = 0x0040
```

If the vehicle has two individually controllable HVAC instances, one serving front row and one serving back row,
then they would be addressed as `0x05` and `0x70` respectively.


## References

See also [Issue #642](https://github.com/COVESA/vehicle_signal_specification/issues/642)


## Solution 1 - Just add more valid values


```
Seat:
  type: branch
  instances:
    - Row[1,2]
    - ["DriverSide","Middle","PassengerSide", "Left","Right"]
```


With this approach (and nothing else) if using VSS in expanded mode you will get 10
instance-branches (2 * 5)  instead of 6 (2 * 3). A server implementation like KUKSA
Databroker will have no information that for example `Seat.Row1.Left.Position` and
`Seat.Row1.DriverSide.Position` means the same seat (in a LHD vehicle) and will treat them as
separate entities. "Someone else" will need to manage the sync between them.
For this two options exist;

* Either the seat service itself know if it is driver or passenger seat and listen/publish
  on two channels
* Or there is a special "LHD_RHD_Service that sync all Driver/Passenger-based instances
  with absolute references

Off course an OEM can decide to only support either Left/Right or Driver/Passenger and remove the
other by an overlay, but maybe not an optimal solution

## Solution 2 - Mechanism to define that something actually is an overlay

An Alternative solution could be to have a mechanism to define relationship with an overlay,
and potentially even require actual instances to be defined in an overlay.

Like, we could have this as a (new) syntax for defining possible instances:

```
Vehicle.Seat:
  type: branch
  instance:
    definition:
        - id: 'Row'
          datatype: uint8
          prefix: 'Row' # Prefix to use in extended names, like "Row1"
        - id: 'Pos'
          datatype: string
          allowed: ['DriverSide','Middle','PassengerSide', 'Left','Right']
```

Note that we do not state how many rows there are, so we cannot expand this file
without deployment information. We also do not state which `Pos` entities that actually exist,
we just state what is allowed

Then for generating an expanded VSS model we would require an overlay like:

```
Vehicle.Seat:
  type: branch
  instance_list:
    - instance: ['Row1','Left']
    - alias: ['Row1','DriverSide'] # If alias, we will not duplicate signals below, just have an empty tree
      alias_for: ['Row1','Left']
    - instance: ['Row1','Right']
    - instance: ['Row1','PassengerSide'] # If instance (i.e. not alias) we will expand but annotate branch
      alias_for: ['Row1','Right']
    - instance: ['Row2','Left']
    - instance: ['Row2','Center']
    - instance: ['Row2','Right']

```

For aliases, we could use either `instance` or `alias` to control if we want alias paths to be extended or not.
With the example above the result would be that you can find `Seat.Row1.PassengerSide.Position` in the tree
but not `Seat.Row1.DriverSide.Position` ( but the branch `Seat.Row1.DriverSide` would exist)


(This overlay style could actually be used also with the old `instance:` syntax to limit/annotate some of the nodes)

... Which specifies exactly which instances that shall exist. It could also support syntax to state that
some instances are just aliases. With that approach the expanded VSS signal tree does not need to include
`Vehicle.Seat.Row1.DriverSide.Position`, with help of the alias definition for `Vehicle.Seat.Row1.DriverSide`
an implementation (like KUKSA Databroker) would know that it should access `Vehicle.Seat.Row1.Left.Position`
for this vehicle. I.e. `Vehicle.Seat.Row1.DriverSide` will in expanded VSS be an empty branch like this

```
Vehicle.Seat.Row1.PassengerSide:
  type: branch
  alias_for:  Vehicle.Seat.Row1.Left
```

A deployment file like below should for clients mean the same as the one above. The only the difference would be
that the data would be persisted with Driver/Passenger as identifier rather than Left/Right.

```
Vehicle.Seat:
  type: branch
  instance_list:
    - instance: ['Row1','DriverSide']
    - alias: ['Row1','Left']
      alias_for: ['Row1','DriverSide']
    - instance: ['Row1','PassengerSide']
    - alias: ['Row1','Right']
      alias_for: ['Row1','PassengerSide']
    - instance: ['Row2','Left']
    - instance: ['Row2','Center']
    - instance: ['Row2','Right']

```

And instead `Vehicle.Seat.Row1.Left`would be an empty branch:

```
Vehicle.Seat.Row1.Left:
  type: branch
  alias_for:  Vehicle.Seat.Row1.PassengerSide
```

### Seats and Zones

In Android you could theoretically have AreaIds for seats that cover multiple seats, which could possibly be
useful if you have an electrically adjustable sofa in the rear row, which you only can handle as a single unit,
but that is maybe a bit too hypothetical. I.e. access by specific seats is likey sufficient for VSS

## HVAC and zones

For HVAC it can be discussed how the stations shall be accessed.
Do we need access by row/pos, or is zoned-based access better
An an example - in Android each HVAC station gets a unique identifier based on which seats it server.
If you want to access the HVAC station serving the driver you must check the AreaID for all existing stations
and do a bitmap to find the unique station that serves the driver seat.
One could think about a similar methodology in VSS.
I.e. addressing stations like `Vehicle.HVAC.Zone1.Temperature`.

An extra challenge here is that in Android you might have different areas for different HVAC properties.
Like temperature may be individually controllable, but not fan direction (air distribution).
This brings up a separate topic if we sometimes rather should have instances on individual signals.


```
Vehicle.HVAC
  type: branch
  instance:
    definition:
        -id: 'Zone'
         datatype: uint8

Vehicle.HVAC.AreaId
  type: attribute
  datatype: uint16 # Or whatever syntax we want to use for area id.

```


Overlay (default VSS):

```
Vehicle.HVAC:
  type: branch
  instance_list:
    - instance: 'Zone1'
    - instance: 'Zone2'
Vehicle.HVAC.Zone1.AreaID:
  type: attribute
  default : 49 # Front left + left plus mid on second row
Vehicle.HVAC.Zone2.AreaID:
  type: attribute
  default : 68 # Front right plus rear right

```

Alternatively for HVAC we could keep seat as basis, but suggest that instances only shall be created for the "master" seat for each station.
For the example above this could be like:


```
Vehicle.HVAC:
  type: branch
  instance:
    definition:
        - id: 'Row'
          datatype: uint8
          prefix: 'Row' # Prefix to use in extended names, like "Row1"
        - id: 'Pos'
          datatype: string
          allowed: ['DriverSide','Middle','PassengerSide', 'Left','Right']

Vehicle.HVAC.AreaId
  type: attribute
  datatype: uint16 # Or whatever syntax we want to use for area id.
```

and overlay:

```
Vehicle.HVAC:
  type: branch
  instance_list:
    - instance: ['Row1','Left']
    - alias: ['Row1','DriverSide']
      alias_for: ['Row1','Left']
    - instance: ['Row1','Right']
    - alias: ['Row1','Right']
      alias_for: ['Row1','PassengerSide']
Vehicle.HVAC.Row1.Left.AreaID:
  type: attribute
  default : 49 # Front left + left plus mid on second row
Vehicle.HVAC.Row1.Right.AreaID:
  type: attribute
  default : 68 # Front right plus rear right

```
