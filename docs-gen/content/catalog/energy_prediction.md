---
title: "Energy Prediction"
date: 2019-08-04T12:46:30+02:00
weight: 7
---

## Introduction

The VSS energy prediction concept is based on that when planning a trip and calculating the energy required for that trip a number of estimated values at certain point in time are stored.
These values are then during the trip used to decide if the a new calculation is needed or if the old calculation is still relevant.

In general the system responsible for energy prediction gather actual data from "regular" VSS signals, the `Vehicle.EnergyPrediction` branch is used only for data that only concerns the energy prediction feature.

## Logic

Logic to be used is implementation dependent. The example below shows one possible usage of the signals defined.

A large part of the data is stored in arrays.
The expected size of the arrays is defined by `EnergyPrediction.PredictionArraySize`.
The feature can only be enabled when a destination has been defined in the `Vehicle.Cabin.Infotainment.Navigation` branch.
When enabled by `EnergyPrediction.IsEnabled` a calculation will take place.
When all applicable arrays have been populated `EnergyPrediction.IsDataValid` will be set to True.
A new calculation can be requested by `EnergyPrediction.IsRecalculationRequest`.
It will set `EnergyPrediction.IsDataValid` to False and when recalculation is finished set it back to True.

The arrays will then be populated with estimated locations as well as estimated temperature for the battery, the power usage of the PTC Heater and the coolant mass flow, together with absolute and relative timestamp.

Index | Timestamp | TimestampRelative |Latitude | Longitude | BatteryTemperature | PtcHeaterPower | CoolantMassFlow
---|----|---|---|---|---|---|---
0 | 1763999652| 0 | 55.12 | 13.3 | 54 | 200 | 12.5
1 |1763999654| 2 | 55.14 | 13.2 | 54 | 234 | 12.9
2-98 |...| ... | ... | ... | ... | ... | ...
99|1764000004| 352 | 55.27 | 13.8 | 52 | 231 | 16.3
