---
title: "Fuel System Representation"
date: 2019-08-04T12:46:30+02:00
weight: 5
---

## Introduction

A vehicle may have one or more fuel tanks for combustion engines.
The fuel tanks are logically divided into fuel systems.
If two tanks typically are used independently of each other they are considered to be part of different fuel systems.
If two tanks typically are used at the same time or needs to be used in parallel they are considered belongng to the same fuel system.

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

## Usage in VSS standard Catalog

The VSS standard catalog is based on the assumption that a vehicle has a single fuel system with a single tank.
The fuel in the tank is measured in liters.

```
FuelSystem:
  type: branch
  description: Fuel system data.
#include FuelSystem.vspec FuelSystem
FuelSystem.Tank:
  type: branch
  description: Fuel tank data.
#include FuelSystem/VolumeTank.vspec FuelSystem.Tank
```

Taking tank absolute level as example, this results in 3 signals:

```
Vehicle.Powertrain.FuelSystem.Tank.AbsoluteLevel,sensor,float,,l
```

## Extending for more advanced use-cases.

If using VSS for a vehicle with multiple fuel systems or multiple fuel tanks the following approach is recommended.
Update [Powertrain.vspec](https://github.com/COVESA/vehicle_signal_specification/blob/master/spec/Powertrain/Powertrain.vspec) to fit number of fuel systems and number of tanks in each fuel system.
The snippet below shows a hypothetical setup where:

* The vehicle has two fuel systems
* The first is called `FuelSystem1` and has one tank called `Tank` with volume measured in liters
* The second is called `FuelSystem12` and has one tank called `Tank1` with volume measured in liters and one tank called `Tank2` with volume measured in kilograms.

```
FuelSystem1:
 type: branch
 description: Fuel system data.
#include FuelSystem.vspec FuelSystem1
FuelSystem1.Tank:
  type: branch
  description: Fuel tank data.
#include FuelSystem/VolumeTank.vspec FuelSystem1.Tank


FuelSystem2:
 type: branch
 description: Fuel system data.
#include FuelSystem.vspec FuelSystem2
FuelSystem2.Tank1:
  type: branch
  description: Fuel tank data.
#include FuelSystem/VolumeTank.vspec FuelSystem2.Tank1
FuelSystem2.Tank2:
  type: branch
  description: Fuel tank data.
#include FuelSystem/MassTank.vspec FuelSystem2.Tank2
```

Taking tank absolute level as example, this results in 3 signals:

```
Vehicle.Powertrain.FuelSystem1.Tank.AbsoluteLevel,sensor,float,,l
Vehicle.Powertrain.FuelSystem2.Tank1.AbsoluteLevel,sensor,float,,l
Vehicle.Powertrain.FuelSystem2.Tank2.AbsoluteLevel,sensor,float,,kg
```

### Naming Recommendations

It is up to the user to decide on names on the fuel system and tank branches. The VSS project does not provide any recommendation, but the names must follow VSS branch naming rules
Some possible naming patterns include:

* Numeric suffix, e.g. `FuelSystem1`, `FuelSystem1`, `Tank1`, `Tank2`
* Logical naming, e.g. `Primary`, `Secondary`, `Diesel`, `Gas`
* Location, e.g. `Front`, `Rear, `Left`
