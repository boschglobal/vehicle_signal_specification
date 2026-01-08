---
title: "Fuel System Representation"
date: 2019-08-04T12:46:30+02:00
weight: 5
---

## Introduction

A vehicle with a combustion engine may have one or more fuel systems.
Each fuel system can have one or more fuel tanks.
Fuel tanks belonging to the same fuel system are used at the same time or need to be used in parallel.
This means that if two fuel tanks in a vehicle are used independently of each other, they must be part of different fuel systems.


This gives three typical fuel system setups for vehicles with 1-2 fuel tanks, shown as examples below.
The signal `Vehicle.Powertrain.FuelSystemType` can be used to indicate the setup.

### Single Fuel Vehicles

One tank of one fuel source used by the engine.
* Model as one logical fuel system with one fuel source.
*	The fuel source has its own tank, level sensor, and supply path.
*	The system has a single fuel consumption metric (for engine operation)

### Dual-Fuel Heavy-Duty Vehicles (Diesel + NG)

One tank of diesel, one tank of compressed/liquefied natural gas, both delivered simultaneously to the engine. The two fuels are mixed in the engine to produce combustion.

*	Model as one logical fuel system with two fuel sources.
*	Each source has its own tank, level sensors, and supply path.
*	The system has a single combined fuel consumption metric (for engine operation) but still tracks each tank individually.

### Bi-Fuel Vehicles (Gasoline + NG)
Gasoline tank + NG tank, but only one fuel type is used at a time. Unlike dual-fuel HD engines, fuels are not mixed in the engine; vehicle switches between them (separate fuel systems and delivery)
*	Model as two independent fuel systems.
*	Each fuel source has its own tank, sensors, and supply path
*	Each fuel system has its own consumption metrics.


A good article explaining dual fuel systems in HD vehicles (https://ultimatecelldistributors.co.uk/insights/dual-fuel-technology/).

## VSS Representation and usage in VSS standard catalog

The VSS standard catalog is based on the assumption that a vehicle has a single fuel system with a single tank .
The fuel in the tank is measured in liters.

The [Powertrain.vspec](https://github.com/COVESA/vehicle_signal_specification/blob/master/spec/Powertrain/Powertrain.vspec) source file defines the signals to be used in the standard catalog:


```
FuelSystem:
  type: branch
  description: Fuel system data.
#include VolumeFuelSystem.vspec FuelSystem
# Tank integrated by default, not added to a separate branch
#include FuelSystem/VolumeTank.vspec FuelSystem


FuelSystemType:
  type: attribute
  datatype: string
  instantiate: false
  default: "SINGLE_FUEL"
  allowed: ["SINGLE_FUEL", "DUAL_FUEL", "BI_FUEL", "OTHER"]
  description: defines the types of the fuel system in the vehicle;
    SINGLE_FUEL - one fuel system with one fuel type
    DUAL_FUEL - one fuel system with two fuel types
    BI_FUEL - two fuel systems with one fuel type in each system
    OTHER - any other combination
```

The standard catalog only covers the usecase when `Vehicle.Powertrain.FuelSystemType` corresponds `SINGLE_FUEL` and metrics ae based on volume (liters).
The standard catalog however contains source files `MassFuelSystem.vspec` and `MassTank.vpec` that can be used if fuel system metrics are based on mass (kilograms).

Taking range and tank level as example, for the standard setup this results in the following signals:

```
Vehicle.Powertrain.FuelSystem.Range:
  datatype: uint32
  description: Remaining range in meters using fuel in this fuelsystem.
  type: sensor
  unit: m

Vehicle.Powertrain.FuelSystem.AbsoluteLevel:
  datatype: float
  description: Current available fuel in the fuel tank expressed in liters.
  type: sensor
  unit: l
```


## Extending for more advanced use-cases.

If using VSS for a vehicle with a gas fuel system, multiple fuel systems or multiple fuel tanks it is recommended to use an overlay to customize that catalog.
An example overlay exists in [overlays/extensions/multi_fuel_system_example.vspec](https://github.com/COVESA/vehicle_signal_specification/blob/master/overlays/extensions/multi_fuel_system_example.vspec).
That overlay can be used like this:

```bash
vspec export yaml -u ./spec/units.yaml --strict -l overlays/extensions/multi_fuel_system_example.vspec -I spec -s ./spec/VehicleSignalSpecification.vspec -o vss_multi_fuel.yml
```

Two major use cases for customization exist:

* The vehicle has only one single fuel system with one tank, using gas (mass based fuel)
  * In this case it is recommended to continue using `Vehicle.Powertrain.FuelSystem` but if needed remove the volume-based metrics and add weight-based metrics from `MassFuelSystem.vspec` and `MassTank.vpec`.
* The vehicle  has multiple fuel systems, or multiple tanks in a single fuel systems
  * In this case it is recommended to delete the standard path and after add your customized definition into `Vehicle.Powertrain.FuelSystem`. Tanks should be added to a separate sub-branch.

```
Vehicle.Powertrain.FuelSystem:
  type: branch
  delete: true

Vehicle.Powertrain.FuelSystems:
  type: branch
  description: Root node for all fuel systems in the vehicle
```

All examples below can be found combined in the example overlay.

Alternatively if using your own fork/branch you can update [Powertrain.vspec](https://github.com/COVESA/vehicle_signal_specification/blob/master/spec/Powertrain/Powertrain.vspec) directly.

### Fuel system with weight based fuel

If you measure fuel by weight (kilograms) rather than volume you could use the overlay to add a gas fuel system,
using the "mass" versions of the files reporting capacity and consumption based on kilograms rather than liters

```
Vehicle.Powertrain.FuelSystems.FuelSystem1:
  type: branch
  description: A gas/mass fuel system with one tank.
#include Powertrain/MassFuelSystem.vspec Vehicle.Powertrain.FuelSystems.FuelSystem1

Vehicle.Powertrain.FuelSystems.FuelSystem1.Tank1:
  type: branch
  description: Gas tank data.
#include Powertrain/FuelSystem/MassTank.vspec Vehicle.Powertrain.FuelSystems.FuelSystem1.Tank1
```


Taking range and tank level as example, this results in the following signals:


```
Vehicle.Powertrain.FuelSystems.FuelSystem1.Range:
  datatype: uint32
  description: Remaining range in meters using fuel in this fuelsystem.
  type: sensor
  unit: m

Vehicle.Powertrain.FuelSystems.FuelSystem1.Tank1.AbsoluteLevel:
  datatype: float
  description: Current available fuel in the fuel tank expressed in kilograms.
  type: sensor
  unit: kg

```

### Fuel system with two volume based tanks

In this case we represent the tanks on different sub-branches.
It is assumed that general consumption/economy metrics are still relevant, so the fuel system is represented by `VolumeFuelSystem.vspec`.

```

Vehicle.Powertrain.FuelSystems.FuelSystem2:
  type: branch
  description: Fuel system data.
#include Powertrain/VolumeFuelSystem.vspec Vehicle.Powertrain.FuelSystems.FuelSystem2

Vehicle.Powertrain.FuelSystems.FuelSystem2.Tank1:
  type: branch
  description: Fuel tank data.
#include Powertrain/FuelSystem/VolumeTank.vspec Vehicle.Powertrain.FuelSystems.FuelSystem2.Tank1
Vehicle.Powertrain.FuelSystems.FuelSystem2.Tank2:
  type: branch
  description: Fuel tank data.
#include Powertrain/FuelSystem/VolumeTank.vspec Vehicle.Powertrain.FuelSystems.FuelSystem2.Tank2
```

Taking range and tank level as example, this results in the following signals:


```
Vehicle.Powertrain.FuelSystems.FuelSystem2.Range:
  datatype: uint32
  description: Remaining range in meters using fuel in this fuelsystem.
  type: sensor
  unit: m

Vehicle.Powertrain.FuelSystems.FuelSystem2.Tank1.AbsoluteLevel:
  datatype: float
  description: Current available fuel in the fuel tank expressed in liters.
  type: sensor
  unit: l

Vehicle.Powertrain.FuelSystems.FuelSystem2.Tank2.AbsoluteLevel:
  datatype: float
  description: Current available fuel in the fuel tank expressed in liters.
  type: sensor
  unit: l

```

### Fuel system with one volume based and one weight based tank.

In this case we represent the tanks on different sub-branches.
It is assumed that general consumption/economy metrics is not relevant, so the fuel system is represented by `FuelSystem.vspec`.

```
Vehicle.Powertrain.FuelSystems.FuelSystem3:
  type: branch
  description: Fuel system data.
#include Powertrain/FuelSystem.vspec Vehicle.Powertrain.FuelSystems.FuelSystem3

Vehicle.Powertrain.FuelSystems.FuelSystem3.Tank1:
  type: branch
  description: Gas tank data.
#include Powertrain/FuelSystem/MassTank.vspec Vehicle.Powertrain.FuelSystems.FuelSystem3.Tank1

Vehicle.Powertrain.FuelSystems.FuelSystem3.Tank2:
  type: branch
  description: Diesel tank data.
#include Powertrain/FuelSystem/VolumeTank.vspec Vehicle.Powertrain.FuelSystems.FuelSystem3.Tank2
```

Taking range and tank level as example, this results in the following signals:

```

Vehicle.Powertrain.FuelSystems.FuelSystem3.Range:
  datatype: uint32
  description: Remaining range in meters using fuel in this fuelsystem.
  type: sensor
  unit: m

Vehicle.Powertrain.FuelSystems.FuelSystem3.Tank1.AbsoluteLevel:
  datatype: float
  description: Current available fuel in the fuel tank expressed in kilograms.
  type: sensor
  unit: kg

Vehicle.Powertrain.FuelSystems.FuelSystem3.Tank2.AbsoluteLevel:
  datatype: float
  description: Current available fuel in the fuel tank expressed in liters.
  type: sensor
  unit: l
```

### Naming Recommendations

When using `Vehicle.Powertrain.FuelSystems`, it is recommended to use the name pattern `FuelSystem<n>` for each fuel system, and `Tank<n>` for each tank, using 1 as index for the first system/tank. That means for a vehicle with 2 fuel systems, where the first has one tank and the second two, the following branches shall exist.

```
Vehicle.Powertrain.FuelSystems.FuelSystem1.Tank1
Vehicle.Powertrain.FuelSystems.FuelSystem2.Tank1
Vehicle.Powertrain.FuelSystems.FuelSystem2.Tank2
```
