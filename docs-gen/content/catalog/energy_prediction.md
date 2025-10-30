---
title: "Energy Prediction"
date: 2019-08-04T12:46:30+02:00
weight: 7
---

## Introduction

The VSS energy prediction concept is based on that when planning a trip and calculating the energy required for that trip a number of estimated values at certain point in time are stored.
These values are then during the trip used to decide if the a new calculation is needed or if the old calculation is still relevant.

In general the system responsible for energy prediction gather actual data from "regular" VSS signals, the `Vehicle.EbergyPrediction` branch is used only for data that only concerns the energy prediction feature.

A large part of the data is stored in arrays

Timestamp | TimestampRelative |Latitude | Longitude | mmm
----|---|---|---|---
1323| 0 | 55.12 | 13.3 | 54
1325| 2 | 55.14 | 13.2 | 54
