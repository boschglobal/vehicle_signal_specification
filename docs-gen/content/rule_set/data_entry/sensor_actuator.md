---
title: "Sensors & Actuators"
date: 2019-08-04T12:37:03+02:00
weight: 30
---

Sensors are signals to read values of properties in a vehicle. Values of sensors typically change over time. Reading a sensor shall return the current actual value of the related property, e.g. the current speed or the current position of the seat.

Actuators are used to control the desired value of a property. Some properties in a vehicle cannot change instantly. A typical example is position of a seat or a window. Reading a value of an actuator shall return the current actual value, e.g. the current position of the seat, rather than the wanted/desired position. A typical example could be if someone wants to change the position of a seat from 0 to 100. This can be changed by setting the corresponding actuator to 100. If the actuator is read directly after the set request it will still return 0 as it might take some seconds before the seat reaches the wanted position of 100. If the seat by some reason is blocked or cannot be moved due to safety reasons it might never reach the wanted position. It is up to the vehicle to decide how long time it shall try to reach the desired value and what to do if it needs to give up.

A data entry for a sensor or actuator defines its members. A data
entry example is given below:

```YAML
Speed:
  type: sensor
  definition: Vehicle speed relative to the X-axis of the intermediate axis system as defined by ISO 8855 section 2.13.
  description: Vehicle speed relative to road surface. Positive if vehicle is moving forward, negative if vehicle is moving backward.
  comment: For engine speed see Vehicle.Powertrain.CombustionEngine.Engine.Speed.
  datatype: float
  unit: km/h
  min: 0
  max: 300
  allowed: ...
```

**```<signal name>```**
Defines (parts of) the name of the data entry.
The full name/path of a VSS signal, considering parent branches, must be unique,
but the name specified in the **.vspec* file do not necessarily need to be unique.

The VSS **.vspec* format supports [#include](/vehicle_signal_specification/rule_set/includes/) directives.
When including a **.vspec* file it is possible to define a branch prefix that shall be used on entries in the
included file. If the definition above exists in a signal included like:

```YAML
#include Vehicle/Vehicle.vspec Vehicle
```

... then the full name of the signal using VSS dot-notation will be `Vehicle.Speed`

*Note: VSS implementations does not necessarily need to use VSS dot-notation to reference signals, they can use alternative mechanisms to uniquely reference signals!*

**```type```**
Defines the type of the node. This can be `branch`,
`sensor`, `actuator` or `attribute`.

**```datatype```**
The string value of the type specifies the scalar type of the data entry
value. See [data type](/vehicle_signal_specification/rule_set/data_entry/data_types/) chapter for a list of available types.

**```description```**
The description is less formal and provides any kind of information that helps humans to conceptualize the entry.
The `description` member shall together with other mandatory members like `datatype` and `unit` provide sufficient information
to understand what the signal contains and how signal values shall be constructed or interpreted.
Recommended to start with a capital letter and end with a dot (`.`).

<!--
In general VSS community seems to favor definition over description, and ther is limited interest in supporting both.
Changing to definition (only) would however require significant effort as content of descriptions needs to be reviewed/refactored
Proposed first step is to open up for definitions.
When (if ever) the majority of signals have definition it can be discussed if we shall make definition mandatory
and deprecate description.
-->

**```definition```** *[optional]* `since version 5.0`
The definition is a formal specification of the signal that includes necessary and sufficient conditions.
It's the king of specification you find in a dictionary. To state the obvious, that provides unambiguous semantics.
It is recommended that all new signals added to VSS standard catalog shall contain definition.
Recommended to start with a capital letter and end with a dot (`.`).

**```comment ```**  *[optional]* `since version 3.0`
A comment can be used to provide additional informal information on a signal.
This could include background information on the rationale for the signal design,
references to related signals, standards and similar.
Recommended to start with a capital letter and end with a dot (`.`).

**```min```** *[optional]*
The minimum value, within the interval of the given ```type```, that the
data entry can be assigned.
If omitted, the minimum value will be the "Min" value for the given type.

**```max```** *[optional]*
The maximum value, within the interval of the given ```type```, that the
data entry can be assigned.
If omitted, the maximum value will be the "Max" value for the given type.

**```unit```** *[optional]*
The unit of measurement that the data entry has. See [Data Unit Types](/vehicle_signal_specification/rule_set/data_entry/data_unit_types/)
chapter for a list of available unit types.

**```allowed```** *[optional]*
List of values allowed for this signal. See [Allowed](/vehicle_signal_specification/rule_set/data_entry/allowed/).
