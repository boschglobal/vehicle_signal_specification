---
title: "Energy Prediction"
date: 2019-08-04T12:46:30+02:00
weight: 7
---

## Introduction

The goal of the energy management concept is to precondition the battery in an optimal way (as late as possible during the drive).
When planning a trip optimal battery conditioning for the trip is calculated and stored.
A number of control points are also calculated and followed up to decide if a new calculation is needed or if the old calculation is still relevant.

In general the system responsible for energy prediction gather actual data from "regular" VSS signals, the `Vehicle.EnergyManagement` branch is used only for data that only concerns the energy management feature.

## Logic

Logic to be used is implementation dependent. The example below shows one possible usage of the signals defined.

If the feature is enabled (`EnergyManagement.IsEnabled`) a calculation will be initiated when a destination has been defined in the `Vehicle.Cabin.Infotainment.Navigation` branch.
The calculation will calculate optimal baattery conditioning for the trip.
The estimation will be based on assumptions on e.g. speed and battery temperature.
Number of points stored may depend on the length of the trip and is indicated by `EnergyManagement.ConditioningArraySize`.
Additional tables are populated for control purposes. The lengths of those arrays are indicated by `EnergyManagement.ControlArraySize`.
During the trip, if expected locations at a specified time differs too much from expectations,
the system may request a recalculation by `EnergyManagement.IsRecalculationRequest`.


TODO Update

The table below shows a hypothetical table for a navigation with 100 as array size.

Index | Timestamp | TimestampRelative |Latitude | Longitude | BatteryTemperature | PtcHeaterPower | CoolantMassFlow
---|----|---|---|---|---|---|---
0 | 1763999652| 0 | 55.12 | 13.3 | 54 | 200 | 12.5
1 |1763999654| 2 | 55.14 | 13.2 | 54 | 234 | 12.9
2-98 |...| ... | ... | ... | ... | ... | ...
99|1764000004| 352 | 55.27 | 13.8 | 52 | 231 | 16.3
