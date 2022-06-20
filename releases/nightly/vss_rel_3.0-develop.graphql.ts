type Query {
  vehicle(
    """VIN of the vehicle that you want to request data for."""
    id: String!

    """
    Filter data to only provide information that was sent from the vehicle after that timestamp.
    """
    after: String
  ): Vehicle
}

"""High-level vehicle data."""
type Vehicle {
  """Supported Version of VSS."""
  versionVss: Vehicle_VersionVSS

  """Attributes that identify a vehicle."""
  vehicleIdentification: Vehicle_VehicleIdentification

  """State of the supply voltage of the control units (usually 12V)."""
  lowVoltageSystemState: Vehicle_LowVoltageSystemState

  """Vehicle speed."""
  speed: Vehicle_Speed

  """
  Odometer reading, total distance travelled during the lifetime of the vehicle.
  """
  travelledDistance: Vehicle_TravelledDistance

  """Current trip meter reading."""
  tripMeterReading: Vehicle_TripMeterReading

  """
  Vehicle breakdown or any similar event causing vehicle to stop on the road, that might pose a risk to other road users. True = Vehicle broken down on the road, due to e.g. engine problems, flat tire, out of gas, brake problems. False = Vehicle not broken down.
  """
  isBrokenDown: Vehicle_IsBrokenDown

  """Indicates whether the vehicle is stationary or moving."""
  isMoving: Vehicle_IsMoving

  """Average speed for the current trip."""
  averageSpeed: Vehicle_AverageSpeed

  """Spatial acceleration. Axis definitions according to ISO 8855."""
  acceleration: Vehicle_Acceleration

  """Spatial rotation. Axis definitions according to ISO 8855."""
  angularVelocity: Vehicle_AngularVelocity

  """
  The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.
  """
  roofLoad: Vehicle_RoofLoad

  """
  The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.
  """
  cargoVolume: Vehicle_CargoVolume

  """The CO2 emissions."""
  emissionsCo2: Vehicle_EmissionsCO2

  """
  Current overall Vehicle weight. Including passengers, cargo and other load inside the car.
  """
  currentOverallWeight: Vehicle_CurrentOverallWeight

  """
  Vehicle curb weight, including all liquids and full tank of fuel, but no cargo or passengers.
  """
  curbWeight: Vehicle_CurbWeight

  """
  Curb weight of vehicle, including all liquids and full tank of fuel and full load of cargo and passengers.
  """
  grossWeight: Vehicle_GrossWeight

  """Maximum weight of trailer."""
  maxTowWeight: Vehicle_MaxTowWeight

  """Maximum vertical weight on the tow ball of a trailer."""
  maxTowBallWeight: Vehicle_MaxTowBallWeight

  """Overall vehicle length."""
  length: Vehicle_Length

  """Overall vehicle height."""
  height: Vehicle_Height

  """Overall vehicle width."""
  width: Vehicle_Width

  """Trailer signals."""
  trailer: Vehicle_Trailer

  """The current latitude and longitude of the vehicle."""
  currentLocation: Vehicle_CurrentLocation

  """Powertrain data for battery management, etc."""
  powertrain: Vehicle_Powertrain

  """All body components."""
  body: Vehicle_Body

  """All in-cabin components, including doors."""
  cabin: Vehicle_Cabin

  """All Advanced Driver Assist Systems data."""
  adas: Vehicle_ADAS

  """All data concerning steering, suspension, wheels, and brakes."""
  chassis: Vehicle_Chassis

  """OBD data."""
  obd: Vehicle_OBD

  """Driver data."""
  driver: Vehicle_Driver

  """Information about exterior measured by vehicle."""
  exterior: Vehicle_Exterior

  """Service data."""
  service: Vehicle_Service

  """Connectivity data."""
  connectivity: Vehicle_Connectivity
}

"""Supported Version of VSS."""
type Vehicle_VersionVSS {
  """Supported Version of VSS - Major version."""
  major: Vehicle_VersionVSS_Major

  """Supported Version of VSS - Minor version."""
  minor: Vehicle_VersionVSS_Minor

  """Supported Version of VSS - Patch version."""
  patch: Vehicle_VersionVSS_Patch

  """Label to further describe the version."""
  label: Vehicle_VersionVSS_Label
}

"""Supported Version of VSS - Major version."""
type Vehicle_VersionVSS_Major {
  """Value: Supported Version of VSS - Major version."""
  value: Float

  """Timestamp: Supported Version of VSS - Major version."""
  timestamp: String
}

"""Supported Version of VSS - Minor version."""
type Vehicle_VersionVSS_Minor {
  """Value: Supported Version of VSS - Minor version."""
  value: Float

  """Timestamp: Supported Version of VSS - Minor version."""
  timestamp: String
}

"""Supported Version of VSS - Patch version."""
type Vehicle_VersionVSS_Patch {
  """Value: Supported Version of VSS - Patch version."""
  value: Float

  """Timestamp: Supported Version of VSS - Patch version."""
  timestamp: String
}

"""Label to further describe the version."""
type Vehicle_VersionVSS_Label {
  """Value: Label to further describe the version."""
  value: String

  """Timestamp: Label to further describe the version."""
  timestamp: String
}

"""Attributes that identify a vehicle."""
type Vehicle_VehicleIdentification {
  """
  17-character Vehicle Identification Number (VIN) as defined by ISO 3779.
  """
  vin: Vehicle_VehicleIdentification_VIN

  """
  3-character World Manufacturer Identification (WMI) as defined by ISO 3780.
  """
  wmi: Vehicle_VehicleIdentification_WMI

  """Vehicle brand or manufacturer."""
  brand: Vehicle_VehicleIdentification_Brand

  """Vehicle model."""
  model: Vehicle_VehicleIdentification_Model

  """Model year of the vehicle."""
  year: Vehicle_VehicleIdentification_Year

  """
  The ACRISS Car Classification Code is a code used by many car rental companies.
  """
  acrissCode: Vehicle_VehicleIdentification_AcrissCode

  """
  Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.).
  """
  bodyType: Vehicle_VehicleIdentification_BodyType

  """
  The date in ISO 8601 format of the first registration of the vehicle with the respective public authorities.
  """
  dateVehicleFirstRegistered: Vehicle_VehicleIdentification_DateVehicleFirstRegistered

  """Indicates that the vehicle meets the respective emission standard."""
  meetsEmissionStandard: Vehicle_VehicleIdentification_MeetsEmissionStandard

  """The date in ISO 8601 format of production of the item, e.g. vehicle."""
  productionDate: Vehicle_VehicleIdentification_ProductionDate

  """
  The date in ISO 8601 format of the item e.g. vehicle was purchased by the current owner.
  """
  purchaseDate: Vehicle_VehicleIdentification_PurchaseDate

  """
  The release date in ISO 8601 format of a vehicle model (often used to differentiate versions of the same make and model).
  """
  vehicleModelDate: Vehicle_VehicleIdentification_VehicleModelDate

  """
  A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.
  """
  vehicleConfiguration: Vehicle_VehicleIdentification_VehicleConfiguration

  """
  The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.
  """
  vehicleSeatingCapacity: Vehicle_VehicleIdentification_VehicleSeatingCapacity

  """
  Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school.
  """
  vehicleSpecialUsage: Vehicle_VehicleIdentification_VehicleSpecialUsage

  """The color or color combination of the interior of the vehicle."""
  vehicleInteriorColor: Vehicle_VehicleIdentification_VehicleInteriorColor

  """
  The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.).
  """
  vehicleInteriorType: Vehicle_VehicleIdentification_VehicleInteriorType

  """A textual description of known damages, both repaired and unrepaired."""
  knownVehicleDamages: Vehicle_VehicleIdentification_KnownVehicleDamages
}

"""
17-character Vehicle Identification Number (VIN) as defined by ISO 3779.
"""
type Vehicle_VehicleIdentification_VIN {
  """
  Value: 17-character Vehicle Identification Number (VIN) as defined by ISO 3779.
  """
  value: String

  """
  Timestamp: 17-character Vehicle Identification Number (VIN) as defined by ISO 3779.
  """
  timestamp: String
}

"""
3-character World Manufacturer Identification (WMI) as defined by ISO 3780.
"""
type Vehicle_VehicleIdentification_WMI {
  """
  Value: 3-character World Manufacturer Identification (WMI) as defined by ISO 3780.
  """
  value: String

  """
  Timestamp: 3-character World Manufacturer Identification (WMI) as defined by ISO 3780.
  """
  timestamp: String
}

"""Vehicle brand or manufacturer."""
type Vehicle_VehicleIdentification_Brand {
  """Value: Vehicle brand or manufacturer."""
  value: String

  """Timestamp: Vehicle brand or manufacturer."""
  timestamp: String
}

"""Vehicle model."""
type Vehicle_VehicleIdentification_Model {
  """Value: Vehicle model."""
  value: String

  """Timestamp: Vehicle model."""
  timestamp: String
}

"""Model year of the vehicle."""
type Vehicle_VehicleIdentification_Year {
  """Value: Model year of the vehicle."""
  value: Int

  """Timestamp: Model year of the vehicle."""
  timestamp: String
}

"""
The ACRISS Car Classification Code is a code used by many car rental companies.
"""
type Vehicle_VehicleIdentification_AcrissCode {
  """
  Value: The ACRISS Car Classification Code is a code used by many car rental companies.
  """
  value: String

  """
  Timestamp: The ACRISS Car Classification Code is a code used by many car rental companies.
  """
  timestamp: String
}

"""
Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.).
"""
type Vehicle_VehicleIdentification_BodyType {
  """
  Value: Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.).
  """
  value: String

  """
  Timestamp: Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.).
  """
  timestamp: String
}

"""
The date in ISO 8601 format of the first registration of the vehicle with the respective public authorities.
"""
type Vehicle_VehicleIdentification_DateVehicleFirstRegistered {
  """
  Value: The date in ISO 8601 format of the first registration of the vehicle with the respective public authorities.
  """
  value: String

  """
  Timestamp: The date in ISO 8601 format of the first registration of the vehicle with the respective public authorities.
  """
  timestamp: String
}

"""Indicates that the vehicle meets the respective emission standard."""
type Vehicle_VehicleIdentification_MeetsEmissionStandard {
  """
  Value: Indicates that the vehicle meets the respective emission standard.
  """
  value: String

  """
  Timestamp: Indicates that the vehicle meets the respective emission standard.
  """
  timestamp: String
}

"""The date in ISO 8601 format of production of the item, e.g. vehicle."""
type Vehicle_VehicleIdentification_ProductionDate {
  """
  Value: The date in ISO 8601 format of production of the item, e.g. vehicle.
  """
  value: String

  """
  Timestamp: The date in ISO 8601 format of production of the item, e.g. vehicle.
  """
  timestamp: String
}

"""
The date in ISO 8601 format of the item e.g. vehicle was purchased by the current owner.
"""
type Vehicle_VehicleIdentification_PurchaseDate {
  """
  Value: The date in ISO 8601 format of the item e.g. vehicle was purchased by the current owner.
  """
  value: String

  """
  Timestamp: The date in ISO 8601 format of the item e.g. vehicle was purchased by the current owner.
  """
  timestamp: String
}

"""
The release date in ISO 8601 format of a vehicle model (often used to differentiate versions of the same make and model).
"""
type Vehicle_VehicleIdentification_VehicleModelDate {
  """
  Value: The release date in ISO 8601 format of a vehicle model (often used to differentiate versions of the same make and model).
  """
  value: String

  """
  Timestamp: The release date in ISO 8601 format of a vehicle model (often used to differentiate versions of the same make and model).
  """
  timestamp: String
}

"""
A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.
"""
type Vehicle_VehicleIdentification_VehicleConfiguration {
  """
  Value: A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.
  """
  value: String

  """
  Timestamp: A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.
  """
  timestamp: String
}

"""
The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.
"""
type Vehicle_VehicleIdentification_VehicleSeatingCapacity {
  """
  Value: The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.
  """
  value: Int

  """
  Timestamp: The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.
  """
  timestamp: String
}

"""
Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school.
"""
type Vehicle_VehicleIdentification_VehicleSpecialUsage {
  """
  Value: Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school.
  """
  value: String

  """
  Timestamp: Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school.
  """
  timestamp: String
}

"""The color or color combination of the interior of the vehicle."""
type Vehicle_VehicleIdentification_VehicleInteriorColor {
  """Value: The color or color combination of the interior of the vehicle."""
  value: String

  """
  Timestamp: The color or color combination of the interior of the vehicle.
  """
  timestamp: String
}

"""
The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.).
"""
type Vehicle_VehicleIdentification_VehicleInteriorType {
  """
  Value: The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.).
  """
  value: String

  """
  Timestamp: The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.).
  """
  timestamp: String
}

"""A textual description of known damages, both repaired and unrepaired."""
type Vehicle_VehicleIdentification_KnownVehicleDamages {
  """
  Value: A textual description of known damages, both repaired and unrepaired.
  """
  value: String

  """
  Timestamp: A textual description of known damages, both repaired and unrepaired.
  """
  timestamp: String
}

"""State of the supply voltage of the control units (usually 12V)."""
type Vehicle_LowVoltageSystemState {
  """Value: State of the supply voltage of the control units (usually 12V)."""
  value: String

  """
  Timestamp: State of the supply voltage of the control units (usually 12V).
  """
  timestamp: String
}

"""Vehicle speed."""
type Vehicle_Speed {
  """Value: Vehicle speed."""
  value: Float

  """Timestamp: Vehicle speed."""
  timestamp: String

  """Unit of Vehicle speed."""
  unit: String
}

"""
Odometer reading, total distance travelled during the lifetime of the vehicle.
"""
type Vehicle_TravelledDistance {
  """
  Value: Odometer reading, total distance travelled during the lifetime of the vehicle.
  """
  value: Float

  """
  Timestamp: Odometer reading, total distance travelled during the lifetime of the vehicle.
  """
  timestamp: String

  """
  Unit of Odometer reading, total distance travelled during the lifetime of the vehicle.
  """
  unit: String
}

"""Current trip meter reading."""
type Vehicle_TripMeterReading {
  """Value: Current trip meter reading."""
  value: Float

  """Timestamp: Current trip meter reading."""
  timestamp: String

  """Unit of Current trip meter reading."""
  unit: String
}

"""
Vehicle breakdown or any similar event causing vehicle to stop on the road, that might pose a risk to other road users. True = Vehicle broken down on the road, due to e.g. engine problems, flat tire, out of gas, brake problems. False = Vehicle not broken down.
"""
type Vehicle_IsBrokenDown {
  """
  Value: Vehicle breakdown or any similar event causing vehicle to stop on the road, that might pose a risk to other road users. True = Vehicle broken down on the road, due to e.g. engine problems, flat tire, out of gas, brake problems. False = Vehicle not broken down.
  """
  value: Boolean

  """
  Timestamp: Vehicle breakdown or any similar event causing vehicle to stop on the road, that might pose a risk to other road users. True = Vehicle broken down on the road, due to e.g. engine problems, flat tire, out of gas, brake problems. False = Vehicle not broken down.
  """
  timestamp: String
}

"""Indicates whether the vehicle is stationary or moving."""
type Vehicle_IsMoving {
  """Value: Indicates whether the vehicle is stationary or moving."""
  value: Boolean

  """Timestamp: Indicates whether the vehicle is stationary or moving."""
  timestamp: String
}

"""Average speed for the current trip."""
type Vehicle_AverageSpeed {
  """Value: Average speed for the current trip."""
  value: Float

  """Timestamp: Average speed for the current trip."""
  timestamp: String

  """Unit of Average speed for the current trip."""
  unit: String
}

"""Spatial acceleration. Axis definitions according to ISO 8855."""
type Vehicle_Acceleration {
  """Vehicle acceleration in X (longitudinal acceleration)."""
  longitudinal: Vehicle_Acceleration_Longitudinal

  """Vehicle acceleration in Y (lateral acceleration)."""
  lateral: Vehicle_Acceleration_Lateral

  """Vehicle acceleration in Z (vertical acceleration)."""
  vertical: Vehicle_Acceleration_Vertical
}

"""Vehicle acceleration in X (longitudinal acceleration)."""
type Vehicle_Acceleration_Longitudinal {
  """Value: Vehicle acceleration in X (longitudinal acceleration)."""
  value: Float

  """Timestamp: Vehicle acceleration in X (longitudinal acceleration)."""
  timestamp: String

  """Unit of Vehicle acceleration in X (longitudinal acceleration)."""
  unit: String
}

"""Vehicle acceleration in Y (lateral acceleration)."""
type Vehicle_Acceleration_Lateral {
  """Value: Vehicle acceleration in Y (lateral acceleration)."""
  value: Float

  """Timestamp: Vehicle acceleration in Y (lateral acceleration)."""
  timestamp: String

  """Unit of Vehicle acceleration in Y (lateral acceleration)."""
  unit: String
}

"""Vehicle acceleration in Z (vertical acceleration)."""
type Vehicle_Acceleration_Vertical {
  """Value: Vehicle acceleration in Z (vertical acceleration)."""
  value: Float

  """Timestamp: Vehicle acceleration in Z (vertical acceleration)."""
  timestamp: String

  """Unit of Vehicle acceleration in Z (vertical acceleration)."""
  unit: String
}

"""Spatial rotation. Axis definitions according to ISO 8855."""
type Vehicle_AngularVelocity {
  """Vehicle rotation rate along X (longitudinal)."""
  roll: Vehicle_AngularVelocity_Roll

  """Vehicle rotation rate along Y (lateral)."""
  pitch: Vehicle_AngularVelocity_Pitch

  """Vehicle rotation rate along Z (vertical)."""
  yaw: Vehicle_AngularVelocity_Yaw
}

"""Vehicle rotation rate along X (longitudinal)."""
type Vehicle_AngularVelocity_Roll {
  """Value: Vehicle rotation rate along X (longitudinal)."""
  value: Float

  """Timestamp: Vehicle rotation rate along X (longitudinal)."""
  timestamp: String

  """Unit of Vehicle rotation rate along X (longitudinal)."""
  unit: String
}

"""Vehicle rotation rate along Y (lateral)."""
type Vehicle_AngularVelocity_Pitch {
  """Value: Vehicle rotation rate along Y (lateral)."""
  value: Float

  """Timestamp: Vehicle rotation rate along Y (lateral)."""
  timestamp: String

  """Unit of Vehicle rotation rate along Y (lateral)."""
  unit: String
}

"""Vehicle rotation rate along Z (vertical)."""
type Vehicle_AngularVelocity_Yaw {
  """Value: Vehicle rotation rate along Z (vertical)."""
  value: Float

  """Timestamp: Vehicle rotation rate along Z (vertical)."""
  timestamp: String

  """Unit of Vehicle rotation rate along Z (vertical)."""
  unit: String
}

"""
The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.
"""
type Vehicle_RoofLoad {
  """
  Value: The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.
  """
  value: Int

  """
  Timestamp: The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.
  """
  timestamp: String

  """
  Unit of The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.
  """
  unit: String
}

"""
The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.
"""
type Vehicle_CargoVolume {
  """
  Value: The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.
  """
  value: Float

  """
  Timestamp: The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.
  """
  timestamp: String

  """
  Unit of The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.
  """
  unit: String
}

"""The CO2 emissions."""
type Vehicle_EmissionsCO2 {
  """Value: The CO2 emissions."""
  value: Int

  """Timestamp: The CO2 emissions."""
  timestamp: String

  """Unit of The CO2 emissions."""
  unit: String
}

"""
Current overall Vehicle weight. Including passengers, cargo and other load inside the car.
"""
type Vehicle_CurrentOverallWeight {
  """
  Value: Current overall Vehicle weight. Including passengers, cargo and other load inside the car.
  """
  value: Int

  """
  Timestamp: Current overall Vehicle weight. Including passengers, cargo and other load inside the car.
  """
  timestamp: String

  """
  Unit of Current overall Vehicle weight. Including passengers, cargo and other load inside the car.
  """
  unit: String
}

"""
Vehicle curb weight, including all liquids and full tank of fuel, but no cargo or passengers.
"""
type Vehicle_CurbWeight {
  """
  Value: Vehicle curb weight, including all liquids and full tank of fuel, but no cargo or passengers.
  """
  value: Int

  """
  Timestamp: Vehicle curb weight, including all liquids and full tank of fuel, but no cargo or passengers.
  """
  timestamp: String

  """
  Unit of Vehicle curb weight, including all liquids and full tank of fuel, but no cargo or passengers.
  """
  unit: String
}

"""
Curb weight of vehicle, including all liquids and full tank of fuel and full load of cargo and passengers.
"""
type Vehicle_GrossWeight {
  """
  Value: Curb weight of vehicle, including all liquids and full tank of fuel and full load of cargo and passengers.
  """
  value: Int

  """
  Timestamp: Curb weight of vehicle, including all liquids and full tank of fuel and full load of cargo and passengers.
  """
  timestamp: String

  """
  Unit of Curb weight of vehicle, including all liquids and full tank of fuel and full load of cargo and passengers.
  """
  unit: String
}

"""Maximum weight of trailer."""
type Vehicle_MaxTowWeight {
  """Value: Maximum weight of trailer."""
  value: Int

  """Timestamp: Maximum weight of trailer."""
  timestamp: String

  """Unit of Maximum weight of trailer."""
  unit: String
}

"""Maximum vertical weight on the tow ball of a trailer."""
type Vehicle_MaxTowBallWeight {
  """Value: Maximum vertical weight on the tow ball of a trailer."""
  value: Int

  """Timestamp: Maximum vertical weight on the tow ball of a trailer."""
  timestamp: String

  """Unit of Maximum vertical weight on the tow ball of a trailer."""
  unit: String
}

"""Overall vehicle length."""
type Vehicle_Length {
  """Value: Overall vehicle length."""
  value: Int

  """Timestamp: Overall vehicle length."""
  timestamp: String

  """Unit of Overall vehicle length."""
  unit: String
}

"""Overall vehicle height."""
type Vehicle_Height {
  """Value: Overall vehicle height."""
  value: Int

  """Timestamp: Overall vehicle height."""
  timestamp: String

  """Unit of Overall vehicle height."""
  unit: String
}

"""Overall vehicle width."""
type Vehicle_Width {
  """Value: Overall vehicle width."""
  value: Int

  """Timestamp: Overall vehicle width."""
  timestamp: String

  """Unit of Overall vehicle width."""
  unit: String
}

"""Trailer signals."""
type Vehicle_Trailer {
  """Signal indicating if trailer is connected or not."""
  isConnected: Vehicle_Trailer_IsConnected
}

"""Signal indicating if trailer is connected or not."""
type Vehicle_Trailer_IsConnected {
  """Value: Signal indicating if trailer is connected or not."""
  value: Boolean

  """Timestamp: Signal indicating if trailer is connected or not."""
  timestamp: String
}

"""The current latitude and longitude of the vehicle."""
type Vehicle_CurrentLocation {
  """
  Timestamp from GNSS system for current location, formatted according to ISO 8601 with UTC time zone.
  """
  timestamp: Vehicle_CurrentLocation_Timestamp

  """
  Current latitude of vehicle in WGS 84 geodetic coordinates, as measured at the position of GNSS receiver antenna.
  """
  latitude: Vehicle_CurrentLocation_Latitude

  """
  Current longitude of vehicle in WGS 84 geodetic coordinates, as measured at the position of GNSS receiver antenna.
  """
  longitude: Vehicle_CurrentLocation_Longitude

  """
  Current heading relative to geographic north. 0 = North, 90 = East, 180 = South, 270 = West.
  """
  heading: Vehicle_CurrentLocation_Heading

  """Accuracy of the latitude and longitude coordinates."""
  horizontalAccuracy: Vehicle_CurrentLocation_HorizontalAccuracy

  """
  Current altitude relative to WGS 84 reference ellipsoid, as measured at the position of GNSS receiver antenna.
  """
  altitude: Vehicle_CurrentLocation_Altitude

  """Accuracy of altitude."""
  verticalAccuracy: Vehicle_CurrentLocation_VerticalAccuracy

  """
  Information on the GNSS receiver used for determining current location.
  """
  gnssReceiver: Vehicle_CurrentLocation_GNSSReceiver
}

"""
Timestamp from GNSS system for current location, formatted according to ISO 8601 with UTC time zone.
"""
type Vehicle_CurrentLocation_Timestamp {
  """
  Value: Timestamp from GNSS system for current location, formatted according to ISO 8601 with UTC time zone.
  """
  value: String

  """
  Timestamp: Timestamp from GNSS system for current location, formatted according to ISO 8601 with UTC time zone.
  """
  timestamp: String
}

"""
Current latitude of vehicle in WGS 84 geodetic coordinates, as measured at the position of GNSS receiver antenna.
"""
type Vehicle_CurrentLocation_Latitude {
  """
  Value: Current latitude of vehicle in WGS 84 geodetic coordinates, as measured at the position of GNSS receiver antenna.
  """
  value: Float

  """
  Timestamp: Current latitude of vehicle in WGS 84 geodetic coordinates, as measured at the position of GNSS receiver antenna.
  """
  timestamp: String

  """
  Unit of Current latitude of vehicle in WGS 84 geodetic coordinates, as measured at the position of GNSS receiver antenna.
  """
  unit: String
}

"""
Current longitude of vehicle in WGS 84 geodetic coordinates, as measured at the position of GNSS receiver antenna.
"""
type Vehicle_CurrentLocation_Longitude {
  """
  Value: Current longitude of vehicle in WGS 84 geodetic coordinates, as measured at the position of GNSS receiver antenna.
  """
  value: Float

  """
  Timestamp: Current longitude of vehicle in WGS 84 geodetic coordinates, as measured at the position of GNSS receiver antenna.
  """
  timestamp: String

  """
  Unit of Current longitude of vehicle in WGS 84 geodetic coordinates, as measured at the position of GNSS receiver antenna.
  """
  unit: String
}

"""
Current heading relative to geographic north. 0 = North, 90 = East, 180 = South, 270 = West.
"""
type Vehicle_CurrentLocation_Heading {
  """
  Value: Current heading relative to geographic north. 0 = North, 90 = East, 180 = South, 270 = West.
  """
  value: Float

  """
  Timestamp: Current heading relative to geographic north. 0 = North, 90 = East, 180 = South, 270 = West.
  """
  timestamp: String

  """
  Unit of Current heading relative to geographic north. 0 = North, 90 = East, 180 = South, 270 = West.
  """
  unit: String
}

"""Accuracy of the latitude and longitude coordinates."""
type Vehicle_CurrentLocation_HorizontalAccuracy {
  """Value: Accuracy of the latitude and longitude coordinates."""
  value: Float

  """Timestamp: Accuracy of the latitude and longitude coordinates."""
  timestamp: String

  """Unit of Accuracy of the latitude and longitude coordinates."""
  unit: String
}

"""
Current altitude relative to WGS 84 reference ellipsoid, as measured at the position of GNSS receiver antenna.
"""
type Vehicle_CurrentLocation_Altitude {
  """
  Value: Current altitude relative to WGS 84 reference ellipsoid, as measured at the position of GNSS receiver antenna.
  """
  value: Float

  """
  Timestamp: Current altitude relative to WGS 84 reference ellipsoid, as measured at the position of GNSS receiver antenna.
  """
  timestamp: String

  """
  Unit of Current altitude relative to WGS 84 reference ellipsoid, as measured at the position of GNSS receiver antenna.
  """
  unit: String
}

"""Accuracy of altitude."""
type Vehicle_CurrentLocation_VerticalAccuracy {
  """Value: Accuracy of altitude."""
  value: Float

  """Timestamp: Accuracy of altitude."""
  timestamp: String

  """Unit of Accuracy of altitude."""
  unit: String
}

"""
Information on the GNSS receiver used for determining current location.
"""
type Vehicle_CurrentLocation_GNSSReceiver {
  """Fix status of GNSS receiver."""
  fixType: Vehicle_CurrentLocation_GNSSReceiver_FixType

  """
  Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle.
  """
  mountingPosition: Vehicle_CurrentLocation_GNSSReceiver_MountingPosition
}

"""Fix status of GNSS receiver."""
type Vehicle_CurrentLocation_GNSSReceiver_FixType {
  """Value: Fix status of GNSS receiver."""
  value: String

  """Timestamp: Fix status of GNSS receiver."""
  timestamp: String
}

"""
Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle.
"""
type Vehicle_CurrentLocation_GNSSReceiver_MountingPosition {
  """
  Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = forward of rear axle. Negative values = backward of rear axle.
  """
  x: Vehicle_CurrentLocation_GNSSReceiver_MountingPosition_X

  """
  Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = left of origin. Negative values = right of origin. Left/Right is as seen from driver perspective, i.e. by a person looking forward.
  """
  y: Vehicle_CurrentLocation_GNSSReceiver_MountingPosition_Y

  """
  Mounting position of GNSS receiver on Z-axis. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = above center of rear axle. Negative values = below center of rear axle.
  """
  z: Vehicle_CurrentLocation_GNSSReceiver_MountingPosition_Z
}

"""
Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = forward of rear axle. Negative values = backward of rear axle.
"""
type Vehicle_CurrentLocation_GNSSReceiver_MountingPosition_X {
  """
  Value: Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = forward of rear axle. Negative values = backward of rear axle.
  """
  value: Int

  """
  Timestamp: Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = forward of rear axle. Negative values = backward of rear axle.
  """
  timestamp: String

  """
  Unit of Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = forward of rear axle. Negative values = backward of rear axle.
  """
  unit: String
}

"""
Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = left of origin. Negative values = right of origin. Left/Right is as seen from driver perspective, i.e. by a person looking forward.
"""
type Vehicle_CurrentLocation_GNSSReceiver_MountingPosition_Y {
  """
  Value: Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = left of origin. Negative values = right of origin. Left/Right is as seen from driver perspective, i.e. by a person looking forward.
  """
  value: Int

  """
  Timestamp: Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = left of origin. Negative values = right of origin. Left/Right is as seen from driver perspective, i.e. by a person looking forward.
  """
  timestamp: String

  """
  Unit of Mounting position of GNSS receiver antenna relative to vehicle coordinate system. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = left of origin. Negative values = right of origin. Left/Right is as seen from driver perspective, i.e. by a person looking forward.
  """
  unit: String
}

"""
Mounting position of GNSS receiver on Z-axis. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = above center of rear axle. Negative values = below center of rear axle.
"""
type Vehicle_CurrentLocation_GNSSReceiver_MountingPosition_Z {
  """
  Value: Mounting position of GNSS receiver on Z-axis. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = above center of rear axle. Negative values = below center of rear axle.
  """
  value: Int

  """
  Timestamp: Mounting position of GNSS receiver on Z-axis. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = above center of rear axle. Negative values = below center of rear axle.
  """
  timestamp: String

  """
  Unit of Mounting position of GNSS receiver on Z-axis. Axis definitions according to ISO 8855. Origin at center of (first) rear axle. Positive values = above center of rear axle. Negative values = below center of rear axle.
  """
  unit: String
}

"""Powertrain data for battery management, etc."""
type Vehicle_Powertrain {
  """The accumulated energy from regenerative braking over lifetime."""
  accumulatedBrakingEnergy: Vehicle_Powertrain_AccumulatedBrakingEnergy

  """
  Remaining range in meters using all energy sources available in the vehicle.
  """
  range: Vehicle_Powertrain_Range

  """Defines the powertrain type of the vehicle."""
  type: Vehicle_Powertrain_Type

  """Engine-specific data, stopping at the bell housing."""
  combustionEngine: Vehicle_Powertrain_CombustionEngine

  """Transmission-specific data, stopping at the drive shafts."""
  transmission: Vehicle_Powertrain_Transmission

  """Electric Motor specific data."""
  electricMotor: Vehicle_Powertrain_ElectricMotor

  """Battery Management data."""
  tractionBattery: Vehicle_Powertrain_TractionBattery

  """Fuel system data."""
  fuelSystem: Vehicle_Powertrain_FuelSystem
}

"""The accumulated energy from regenerative braking over lifetime."""
type Vehicle_Powertrain_AccumulatedBrakingEnergy {
  """Value: The accumulated energy from regenerative braking over lifetime."""
  value: Float

  """
  Timestamp: The accumulated energy from regenerative braking over lifetime.
  """
  timestamp: String

  """
  Unit of The accumulated energy from regenerative braking over lifetime.
  """
  unit: String
}

"""
Remaining range in meters using all energy sources available in the vehicle.
"""
type Vehicle_Powertrain_Range {
  """
  Value: Remaining range in meters using all energy sources available in the vehicle.
  """
  value: Float

  """
  Timestamp: Remaining range in meters using all energy sources available in the vehicle.
  """
  timestamp: String

  """
  Unit of Remaining range in meters using all energy sources available in the vehicle.
  """
  unit: String
}

"""Defines the powertrain type of the vehicle."""
type Vehicle_Powertrain_Type {
  """Value: Defines the powertrain type of the vehicle."""
  value: String

  """Timestamp: Defines the powertrain type of the vehicle."""
  timestamp: String
}

"""Engine-specific data, stopping at the bell housing."""
type Vehicle_Powertrain_CombustionEngine {
  """Engine code designation, as specified by vehicle manufacturer."""
  engineCode: Vehicle_Powertrain_CombustionEngine_EngineCode

  """Displacement in cubic centimetres."""
  displacement: Vehicle_Powertrain_CombustionEngine_Displacement

  """Stroke length in millimetres."""
  strokeLength: Vehicle_Powertrain_CombustionEngine_StrokeLength

  """Bore in millimetres."""
  bore: Vehicle_Powertrain_CombustionEngine_Bore

  """Engine configuration."""
  configuration: Vehicle_Powertrain_CombustionEngine_Configuration

  """Number of cylinders."""
  numberOfCylinders: Vehicle_Powertrain_CombustionEngine_NumberOfCylinders

  """Number of valves per cylinder."""
  numberOfValvesPerCylinder: Vehicle_Powertrain_CombustionEngine_NumberOfValvesPerCylinder

  """Engine compression ratio, specified in the format 'X:1', e.g. '9.2:1'."""
  compressionRatio: Vehicle_Powertrain_CombustionEngine_CompressionRatio

  """Engine oil capacity in liters."""
  engineOilCapacity: Vehicle_Powertrain_CombustionEngine_EngineOilCapacity

  """Engine coolant capacity in liters."""
  engineCoolantCapacity: Vehicle_Powertrain_CombustionEngine_EngineCoolantCapacity

  """Peak power, in kilowatts, that engine can generate."""
  maxPower: Vehicle_Powertrain_CombustionEngine_MaxPower

  """Peak torque, in newton meter, that the engine can generate."""
  maxTorque: Vehicle_Powertrain_CombustionEngine_MaxTorque

  """Type of aspiration (natural, turbocharger, supercharger etc)."""
  aspirationType: Vehicle_Powertrain_CombustionEngine_AspirationType

  """Engine oil level."""
  engineOilLevel: Vehicle_Powertrain_CombustionEngine_EngineOilLevel

  """
  Remaining engine oil life in seconds. Negative values can be used to indicate that lifetime has been exceeded.
  """
  oilLifeRemaining: Vehicle_Powertrain_CombustionEngine_OilLifeRemaining

  """Engine Running. True if engine is rotating (Speed > 0)."""
  isRunning: Vehicle_Powertrain_CombustionEngine_IsRunning

  """Engine speed measured as rotations per minute."""
  speed: Vehicle_Powertrain_CombustionEngine_Speed

  """Accumulated time during engine lifetime with 'engine speed (rpm) > 0'."""
  engineHours: Vehicle_Powertrain_CombustionEngine_EngineHours

  """
  Accumulated idling time during engine lifetime. Definition of idling is not standardized.
  """
  idleHours: Vehicle_Powertrain_CombustionEngine_IdleHours

  """Engine coolant temperature."""
  ect: Vehicle_Powertrain_CombustionEngine_ECT

  """Engine oil temperature."""
  eot: Vehicle_Powertrain_CombustionEngine_EOT

  """Manifold absolute pressure possibly boosted using forced induction."""
  map: Vehicle_Powertrain_CombustionEngine_MAP

  """Grams of air drawn into engine per second."""
  maf: Vehicle_Powertrain_CombustionEngine_MAF

  """Current throttle position."""
  tps: Vehicle_Powertrain_CombustionEngine_TPS

  """Engine oil pressure."""
  eop: Vehicle_Powertrain_CombustionEngine_EOP

  """
  Current engine power output. Shall be reported as 0 during engine breaking.
  """
  power: Vehicle_Powertrain_CombustionEngine_Power

  """Current engine torque. Shall be reported as 0 during engine breaking."""
  torque: Vehicle_Powertrain_CombustionEngine_Torque

  """
  Signals related to Diesel Exhaust Fluid (DEF). DEF is called AUS32 in ISO 22241.
  """
  dieselExhaustFluid: Vehicle_Powertrain_CombustionEngine_DieselExhaustFluid

  """Diesel Particulate Filter signals."""
  dieselParticulateFilter: Vehicle_Powertrain_CombustionEngine_DieselParticulateFilter
}

"""Engine code designation, as specified by vehicle manufacturer."""
type Vehicle_Powertrain_CombustionEngine_EngineCode {
  """Value: Engine code designation, as specified by vehicle manufacturer."""
  value: String

  """
  Timestamp: Engine code designation, as specified by vehicle manufacturer.
  """
  timestamp: String
}

"""Displacement in cubic centimetres."""
type Vehicle_Powertrain_CombustionEngine_Displacement {
  """Value: Displacement in cubic centimetres."""
  value: Int

  """Timestamp: Displacement in cubic centimetres."""
  timestamp: String

  """Unit of Displacement in cubic centimetres."""
  unit: String
}

"""Stroke length in millimetres."""
type Vehicle_Powertrain_CombustionEngine_StrokeLength {
  """Value: Stroke length in millimetres."""
  value: Float

  """Timestamp: Stroke length in millimetres."""
  timestamp: String

  """Unit of Stroke length in millimetres."""
  unit: String
}

"""Bore in millimetres."""
type Vehicle_Powertrain_CombustionEngine_Bore {
  """Value: Bore in millimetres."""
  value: Float

  """Timestamp: Bore in millimetres."""
  timestamp: String

  """Unit of Bore in millimetres."""
  unit: String
}

"""Engine configuration."""
type Vehicle_Powertrain_CombustionEngine_Configuration {
  """Value: Engine configuration."""
  value: String

  """Timestamp: Engine configuration."""
  timestamp: String
}

"""Number of cylinders."""
type Vehicle_Powertrain_CombustionEngine_NumberOfCylinders {
  """Value: Number of cylinders."""
  value: Int

  """Timestamp: Number of cylinders."""
  timestamp: String
}

"""Number of valves per cylinder."""
type Vehicle_Powertrain_CombustionEngine_NumberOfValvesPerCylinder {
  """Value: Number of valves per cylinder."""
  value: Int

  """Timestamp: Number of valves per cylinder."""
  timestamp: String
}

"""Engine compression ratio, specified in the format 'X:1', e.g. '9.2:1'."""
type Vehicle_Powertrain_CombustionEngine_CompressionRatio {
  """
  Value: Engine compression ratio, specified in the format 'X:1', e.g. '9.2:1'.
  """
  value: String

  """
  Timestamp: Engine compression ratio, specified in the format 'X:1', e.g. '9.2:1'.
  """
  timestamp: String
}

"""Engine oil capacity in liters."""
type Vehicle_Powertrain_CombustionEngine_EngineOilCapacity {
  """Value: Engine oil capacity in liters."""
  value: Float

  """Timestamp: Engine oil capacity in liters."""
  timestamp: String

  """Unit of Engine oil capacity in liters."""
  unit: String
}

"""Engine coolant capacity in liters."""
type Vehicle_Powertrain_CombustionEngine_EngineCoolantCapacity {
  """Value: Engine coolant capacity in liters."""
  value: Float

  """Timestamp: Engine coolant capacity in liters."""
  timestamp: String

  """Unit of Engine coolant capacity in liters."""
  unit: String
}

"""Peak power, in kilowatts, that engine can generate."""
type Vehicle_Powertrain_CombustionEngine_MaxPower {
  """Value: Peak power, in kilowatts, that engine can generate."""
  value: Int

  """Timestamp: Peak power, in kilowatts, that engine can generate."""
  timestamp: String

  """Unit of Peak power, in kilowatts, that engine can generate."""
  unit: String
}

"""Peak torque, in newton meter, that the engine can generate."""
type Vehicle_Powertrain_CombustionEngine_MaxTorque {
  """Value: Peak torque, in newton meter, that the engine can generate."""
  value: Int

  """Timestamp: Peak torque, in newton meter, that the engine can generate."""
  timestamp: String

  """Unit of Peak torque, in newton meter, that the engine can generate."""
  unit: String
}

"""Type of aspiration (natural, turbocharger, supercharger etc)."""
type Vehicle_Powertrain_CombustionEngine_AspirationType {
  """Value: Type of aspiration (natural, turbocharger, supercharger etc)."""
  value: String

  """
  Timestamp: Type of aspiration (natural, turbocharger, supercharger etc).
  """
  timestamp: String
}

"""Engine oil level."""
type Vehicle_Powertrain_CombustionEngine_EngineOilLevel {
  """Value: Engine oil level."""
  value: String

  """Timestamp: Engine oil level."""
  timestamp: String
}

"""
Remaining engine oil life in seconds. Negative values can be used to indicate that lifetime has been exceeded.
"""
type Vehicle_Powertrain_CombustionEngine_OilLifeRemaining {
  """
  Value: Remaining engine oil life in seconds. Negative values can be used to indicate that lifetime has been exceeded.
  """
  value: Int

  """
  Timestamp: Remaining engine oil life in seconds. Negative values can be used to indicate that lifetime has been exceeded.
  """
  timestamp: String

  """
  Unit of Remaining engine oil life in seconds. Negative values can be used to indicate that lifetime has been exceeded.
  """
  unit: String
}

"""Engine Running. True if engine is rotating (Speed > 0)."""
type Vehicle_Powertrain_CombustionEngine_IsRunning {
  """Value: Engine Running. True if engine is rotating (Speed > 0)."""
  value: Boolean

  """Timestamp: Engine Running. True if engine is rotating (Speed > 0)."""
  timestamp: String
}

"""Engine speed measured as rotations per minute."""
type Vehicle_Powertrain_CombustionEngine_Speed {
  """Value: Engine speed measured as rotations per minute."""
  value: Int

  """Timestamp: Engine speed measured as rotations per minute."""
  timestamp: String

  """Unit of Engine speed measured as rotations per minute."""
  unit: String
}

"""Accumulated time during engine lifetime with 'engine speed (rpm) > 0'."""
type Vehicle_Powertrain_CombustionEngine_EngineHours {
  """
  Value: Accumulated time during engine lifetime with 'engine speed (rpm) > 0'.
  """
  value: Float

  """
  Timestamp: Accumulated time during engine lifetime with 'engine speed (rpm) > 0'.
  """
  timestamp: String

  """
  Unit of Accumulated time during engine lifetime with 'engine speed (rpm) > 0'.
  """
  unit: String
}

"""
Accumulated idling time during engine lifetime. Definition of idling is not standardized.
"""
type Vehicle_Powertrain_CombustionEngine_IdleHours {
  """
  Value: Accumulated idling time during engine lifetime. Definition of idling is not standardized.
  """
  value: Float

  """
  Timestamp: Accumulated idling time during engine lifetime. Definition of idling is not standardized.
  """
  timestamp: String

  """
  Unit of Accumulated idling time during engine lifetime. Definition of idling is not standardized.
  """
  unit: String
}

"""Engine coolant temperature."""
type Vehicle_Powertrain_CombustionEngine_ECT {
  """Value: Engine coolant temperature."""
  value: Int

  """Timestamp: Engine coolant temperature."""
  timestamp: String

  """Unit of Engine coolant temperature."""
  unit: String
}

"""Engine oil temperature."""
type Vehicle_Powertrain_CombustionEngine_EOT {
  """Value: Engine oil temperature."""
  value: Int

  """Timestamp: Engine oil temperature."""
  timestamp: String

  """Unit of Engine oil temperature."""
  unit: String
}

"""Manifold absolute pressure possibly boosted using forced induction."""
type Vehicle_Powertrain_CombustionEngine_MAP {
  """
  Value: Manifold absolute pressure possibly boosted using forced induction.
  """
  value: Int

  """
  Timestamp: Manifold absolute pressure possibly boosted using forced induction.
  """
  timestamp: String

  """
  Unit of Manifold absolute pressure possibly boosted using forced induction.
  """
  unit: String
}

"""Grams of air drawn into engine per second."""
type Vehicle_Powertrain_CombustionEngine_MAF {
  """Value: Grams of air drawn into engine per second."""
  value: Int

  """Timestamp: Grams of air drawn into engine per second."""
  timestamp: String

  """Unit of Grams of air drawn into engine per second."""
  unit: String
}

"""Current throttle position."""
type Vehicle_Powertrain_CombustionEngine_TPS {
  """Value: Current throttle position."""
  value: Int

  """Timestamp: Current throttle position."""
  timestamp: String

  """Unit of Current throttle position."""
  unit: String
}

"""Engine oil pressure."""
type Vehicle_Powertrain_CombustionEngine_EOP {
  """Value: Engine oil pressure."""
  value: Int

  """Timestamp: Engine oil pressure."""
  timestamp: String

  """Unit of Engine oil pressure."""
  unit: String
}

"""
Current engine power output. Shall be reported as 0 during engine breaking.
"""
type Vehicle_Powertrain_CombustionEngine_Power {
  """
  Value: Current engine power output. Shall be reported as 0 during engine breaking.
  """
  value: Int

  """
  Timestamp: Current engine power output. Shall be reported as 0 during engine breaking.
  """
  timestamp: String

  """
  Unit of Current engine power output. Shall be reported as 0 during engine breaking.
  """
  unit: String
}

"""Current engine torque. Shall be reported as 0 during engine breaking."""
type Vehicle_Powertrain_CombustionEngine_Torque {
  """
  Value: Current engine torque. Shall be reported as 0 during engine breaking.
  """
  value: Int

  """
  Timestamp: Current engine torque. Shall be reported as 0 during engine breaking.
  """
  timestamp: String

  """
  Unit of Current engine torque. Shall be reported as 0 during engine breaking.
  """
  unit: String
}

"""
Signals related to Diesel Exhaust Fluid (DEF). DEF is called AUS32 in ISO 22241.
"""
type Vehicle_Powertrain_CombustionEngine_DieselExhaustFluid {
  """Capacity in liters of the Diesel Exhaust Fluid Tank."""
  capacity: Vehicle_Powertrain_CombustionEngine_DieselExhaustFluid_Capacity

  """
  Level of the Diesel Exhaust Fluid tank as percent of capacity. 0 = empty. 100 = full.
  """
  level: Vehicle_Powertrain_CombustionEngine_DieselExhaustFluid_Level

  """
  Remaining range in meters of the Diesel Exhaust Fluid present in the vehicle.
  """
  range: Vehicle_Powertrain_CombustionEngine_DieselExhaustFluid_Range

  """
  Indicates if the Diesel Exhaust Fluid level is low. True if level is low. Definition of low is vehicle dependent.
  """
  isLevelLow: Vehicle_Powertrain_CombustionEngine_DieselExhaustFluid_IsLevelLow
}

"""Capacity in liters of the Diesel Exhaust Fluid Tank."""
type Vehicle_Powertrain_CombustionEngine_DieselExhaustFluid_Capacity {
  """Value: Capacity in liters of the Diesel Exhaust Fluid Tank."""
  value: Float

  """Timestamp: Capacity in liters of the Diesel Exhaust Fluid Tank."""
  timestamp: String

  """Unit of Capacity in liters of the Diesel Exhaust Fluid Tank."""
  unit: String
}

"""
Level of the Diesel Exhaust Fluid tank as percent of capacity. 0 = empty. 100 = full.
"""
type Vehicle_Powertrain_CombustionEngine_DieselExhaustFluid_Level {
  """
  Value: Level of the Diesel Exhaust Fluid tank as percent of capacity. 0 = empty. 100 = full.
  """
  value: Int

  """
  Timestamp: Level of the Diesel Exhaust Fluid tank as percent of capacity. 0 = empty. 100 = full.
  """
  timestamp: String

  """
  Unit of Level of the Diesel Exhaust Fluid tank as percent of capacity. 0 = empty. 100 = full.
  """
  unit: String
}

"""
Remaining range in meters of the Diesel Exhaust Fluid present in the vehicle.
"""
type Vehicle_Powertrain_CombustionEngine_DieselExhaustFluid_Range {
  """
  Value: Remaining range in meters of the Diesel Exhaust Fluid present in the vehicle.
  """
  value: Float

  """
  Timestamp: Remaining range in meters of the Diesel Exhaust Fluid present in the vehicle.
  """
  timestamp: String

  """
  Unit of Remaining range in meters of the Diesel Exhaust Fluid present in the vehicle.
  """
  unit: String
}

"""
Indicates if the Diesel Exhaust Fluid level is low. True if level is low. Definition of low is vehicle dependent.
"""
type Vehicle_Powertrain_CombustionEngine_DieselExhaustFluid_IsLevelLow {
  """
  Value: Indicates if the Diesel Exhaust Fluid level is low. True if level is low. Definition of low is vehicle dependent.
  """
  value: Boolean

  """
  Timestamp: Indicates if the Diesel Exhaust Fluid level is low. True if level is low. Definition of low is vehicle dependent.
  """
  timestamp: String
}

"""Diesel Particulate Filter signals."""
type Vehicle_Powertrain_CombustionEngine_DieselParticulateFilter {
  """Inlet temperature of Diesel Particulate Filter."""
  inletTemperature: Vehicle_Powertrain_CombustionEngine_DieselParticulateFilter_InletTemperature

  """Outlet temperature of Diesel Particulate Filter."""
  outletTemperature: Vehicle_Powertrain_CombustionEngine_DieselParticulateFilter_OutletTemperature

  """Delta Pressure of Diesel Particulate Filter."""
  deltaPressure: Vehicle_Powertrain_CombustionEngine_DieselParticulateFilter_DeltaPressure
}

"""Inlet temperature of Diesel Particulate Filter."""
type Vehicle_Powertrain_CombustionEngine_DieselParticulateFilter_InletTemperature {
  """Value: Inlet temperature of Diesel Particulate Filter."""
  value: Float

  """Timestamp: Inlet temperature of Diesel Particulate Filter."""
  timestamp: String

  """Unit of Inlet temperature of Diesel Particulate Filter."""
  unit: String
}

"""Outlet temperature of Diesel Particulate Filter."""
type Vehicle_Powertrain_CombustionEngine_DieselParticulateFilter_OutletTemperature {
  """Value: Outlet temperature of Diesel Particulate Filter."""
  value: Float

  """Timestamp: Outlet temperature of Diesel Particulate Filter."""
  timestamp: String

  """Unit of Outlet temperature of Diesel Particulate Filter."""
  unit: String
}

"""Delta Pressure of Diesel Particulate Filter."""
type Vehicle_Powertrain_CombustionEngine_DieselParticulateFilter_DeltaPressure {
  """Value: Delta Pressure of Diesel Particulate Filter."""
  value: Float

  """Timestamp: Delta Pressure of Diesel Particulate Filter."""
  timestamp: String

  """Unit of Delta Pressure of Diesel Particulate Filter."""
  unit: String
}

"""Transmission-specific data, stopping at the drive shafts."""
type Vehicle_Powertrain_Transmission {
  """Transmission type."""
  type: Vehicle_Powertrain_Transmission_Type

  """Number of forward gears in the transmission. -1 = CVT."""
  gearCount: Vehicle_Powertrain_Transmission_GearCount

  """Drive type."""
  driveType: Vehicle_Powertrain_Transmission_DriveType

  """
  Odometer reading, total distance travelled during the lifetime of the transmission.
  """
  travelledDistance: Vehicle_Powertrain_Transmission_TravelledDistance

  """The current gear. 0=Neutral, 1/2/..=Forward, -1/-2/..=Reverse."""
  currentGear: Vehicle_Powertrain_Transmission_CurrentGear

  """
  The selected gear. 0=Neutral, 1/2/..=Forward, -1/-2/..=Reverse, 126=Park, 127=Drive.
  """
  selectedGear: Vehicle_Powertrain_Transmission_SelectedGear

  """
  Is the transmission park lock engaged or not. False = Disengaged. True = Engaged.
  """
  isParkLockEngaged: Vehicle_Powertrain_Transmission_IsParkLockEngaged

  """
  Is gearbox in low range mode or not. False = Normal/High range engaged. True = Low range engaged.
  """
  isLowRangeEngaged: Vehicle_Powertrain_Transmission_IsLowRangeEngaged

  """
  Is electrical powertrain mechanically connected/engaged to the drivetrain or not. False = Disconnected/Disengaged. True = Connected/Engaged.
  """
  isElectricalPowertrainEngaged: Vehicle_Powertrain_Transmission_IsElectricalPowertrainEngaged

  """Current gearbox performance mode."""
  performanceMode: Vehicle_Powertrain_Transmission_PerformanceMode

  """Is the gearbox in automatic or manual (paddle) mode."""
  gearChangeMode: Vehicle_Powertrain_Transmission_GearChangeMode

  """The current gearbox temperature."""
  temperature: Vehicle_Powertrain_Transmission_Temperature

  """
  Clutch engagement. 0% = Clutch fully disengaged. 100% = Clutch fully engaged.
  """
  clutchEngagement: Vehicle_Powertrain_Transmission_ClutchEngagement

  """Clutch wear as a percent. 0 = no wear. 100 = worn."""
  clutchWear: Vehicle_Powertrain_Transmission_ClutchWear

  """
  Front Diff Lock engagement. 0% = Diff lock fully disengaged. 100% = Diff lock fully engaged.
  """
  diffLockFrontEngagement: Vehicle_Powertrain_Transmission_DiffLockFrontEngagement

  """
  Rear Diff Lock engagement. 0% = Diff lock fully disengaged. 100% = Diff lock fully engaged.
  """
  diffLockRearEngagement: Vehicle_Powertrain_Transmission_DiffLockRearEngagement

  """
  Torque distribution between front and rear axle in percent. -100% = Full torque to front axle, 0% = 50:50 Front/Rear, 100% = Full torque to rear axle.
  """
  torqueDistribution: Vehicle_Powertrain_Transmission_TorqueDistribution
}

"""Transmission type."""
type Vehicle_Powertrain_Transmission_Type {
  """Value: Transmission type."""
  value: String

  """Timestamp: Transmission type."""
  timestamp: String
}

"""Number of forward gears in the transmission. -1 = CVT."""
type Vehicle_Powertrain_Transmission_GearCount {
  """Value: Number of forward gears in the transmission. -1 = CVT."""
  value: Int

  """Timestamp: Number of forward gears in the transmission. -1 = CVT."""
  timestamp: String
}

"""Drive type."""
type Vehicle_Powertrain_Transmission_DriveType {
  """Value: Drive type."""
  value: String

  """Timestamp: Drive type."""
  timestamp: String
}

"""
Odometer reading, total distance travelled during the lifetime of the transmission.
"""
type Vehicle_Powertrain_Transmission_TravelledDistance {
  """
  Value: Odometer reading, total distance travelled during the lifetime of the transmission.
  """
  value: Float

  """
  Timestamp: Odometer reading, total distance travelled during the lifetime of the transmission.
  """
  timestamp: String

  """
  Unit of Odometer reading, total distance travelled during the lifetime of the transmission.
  """
  unit: String
}

"""The current gear. 0=Neutral, 1/2/..=Forward, -1/-2/..=Reverse."""
type Vehicle_Powertrain_Transmission_CurrentGear {
  """Value: The current gear. 0=Neutral, 1/2/..=Forward, -1/-2/..=Reverse."""
  value: Int

  """
  Timestamp: The current gear. 0=Neutral, 1/2/..=Forward, -1/-2/..=Reverse.
  """
  timestamp: String
}

"""
The selected gear. 0=Neutral, 1/2/..=Forward, -1/-2/..=Reverse, 126=Park, 127=Drive.
"""
type Vehicle_Powertrain_Transmission_SelectedGear {
  """
  Value: The selected gear. 0=Neutral, 1/2/..=Forward, -1/-2/..=Reverse, 126=Park, 127=Drive.
  """
  value: Int

  """
  Timestamp: The selected gear. 0=Neutral, 1/2/..=Forward, -1/-2/..=Reverse, 126=Park, 127=Drive.
  """
  timestamp: String
}

"""
Is the transmission park lock engaged or not. False = Disengaged. True = Engaged.
"""
type Vehicle_Powertrain_Transmission_IsParkLockEngaged {
  """
  Value: Is the transmission park lock engaged or not. False = Disengaged. True = Engaged.
  """
  value: Boolean

  """
  Timestamp: Is the transmission park lock engaged or not. False = Disengaged. True = Engaged.
  """
  timestamp: String
}

"""
Is gearbox in low range mode or not. False = Normal/High range engaged. True = Low range engaged.
"""
type Vehicle_Powertrain_Transmission_IsLowRangeEngaged {
  """
  Value: Is gearbox in low range mode or not. False = Normal/High range engaged. True = Low range engaged.
  """
  value: Boolean

  """
  Timestamp: Is gearbox in low range mode or not. False = Normal/High range engaged. True = Low range engaged.
  """
  timestamp: String
}

"""
Is electrical powertrain mechanically connected/engaged to the drivetrain or not. False = Disconnected/Disengaged. True = Connected/Engaged.
"""
type Vehicle_Powertrain_Transmission_IsElectricalPowertrainEngaged {
  """
  Value: Is electrical powertrain mechanically connected/engaged to the drivetrain or not. False = Disconnected/Disengaged. True = Connected/Engaged.
  """
  value: Boolean

  """
  Timestamp: Is electrical powertrain mechanically connected/engaged to the drivetrain or not. False = Disconnected/Disengaged. True = Connected/Engaged.
  """
  timestamp: String
}

"""Current gearbox performance mode."""
type Vehicle_Powertrain_Transmission_PerformanceMode {
  """Value: Current gearbox performance mode."""
  value: String

  """Timestamp: Current gearbox performance mode."""
  timestamp: String
}

"""Is the gearbox in automatic or manual (paddle) mode."""
type Vehicle_Powertrain_Transmission_GearChangeMode {
  """Value: Is the gearbox in automatic or manual (paddle) mode."""
  value: String

  """Timestamp: Is the gearbox in automatic or manual (paddle) mode."""
  timestamp: String
}

"""The current gearbox temperature."""
type Vehicle_Powertrain_Transmission_Temperature {
  """Value: The current gearbox temperature."""
  value: Int

  """Timestamp: The current gearbox temperature."""
  timestamp: String

  """Unit of The current gearbox temperature."""
  unit: String
}

"""
Clutch engagement. 0% = Clutch fully disengaged. 100% = Clutch fully engaged.
"""
type Vehicle_Powertrain_Transmission_ClutchEngagement {
  """
  Value: Clutch engagement. 0% = Clutch fully disengaged. 100% = Clutch fully engaged.
  """
  value: Float

  """
  Timestamp: Clutch engagement. 0% = Clutch fully disengaged. 100% = Clutch fully engaged.
  """
  timestamp: String

  """
  Unit of Clutch engagement. 0% = Clutch fully disengaged. 100% = Clutch fully engaged.
  """
  unit: String
}

"""Clutch wear as a percent. 0 = no wear. 100 = worn."""
type Vehicle_Powertrain_Transmission_ClutchWear {
  """Value: Clutch wear as a percent. 0 = no wear. 100 = worn."""
  value: Int

  """Timestamp: Clutch wear as a percent. 0 = no wear. 100 = worn."""
  timestamp: String

  """Unit of Clutch wear as a percent. 0 = no wear. 100 = worn."""
  unit: String
}

"""
Front Diff Lock engagement. 0% = Diff lock fully disengaged. 100% = Diff lock fully engaged.
"""
type Vehicle_Powertrain_Transmission_DiffLockFrontEngagement {
  """
  Value: Front Diff Lock engagement. 0% = Diff lock fully disengaged. 100% = Diff lock fully engaged.
  """
  value: Float

  """
  Timestamp: Front Diff Lock engagement. 0% = Diff lock fully disengaged. 100% = Diff lock fully engaged.
  """
  timestamp: String

  """
  Unit of Front Diff Lock engagement. 0% = Diff lock fully disengaged. 100% = Diff lock fully engaged.
  """
  unit: String
}

"""
Rear Diff Lock engagement. 0% = Diff lock fully disengaged. 100% = Diff lock fully engaged.
"""
type Vehicle_Powertrain_Transmission_DiffLockRearEngagement {
  """
  Value: Rear Diff Lock engagement. 0% = Diff lock fully disengaged. 100% = Diff lock fully engaged.
  """
  value: Float

  """
  Timestamp: Rear Diff Lock engagement. 0% = Diff lock fully disengaged. 100% = Diff lock fully engaged.
  """
  timestamp: String

  """
  Unit of Rear Diff Lock engagement. 0% = Diff lock fully disengaged. 100% = Diff lock fully engaged.
  """
  unit: String
}

"""
Torque distribution between front and rear axle in percent. -100% = Full torque to front axle, 0% = 50:50 Front/Rear, 100% = Full torque to rear axle.
"""
type Vehicle_Powertrain_Transmission_TorqueDistribution {
  """
  Value: Torque distribution between front and rear axle in percent. -100% = Full torque to front axle, 0% = 50:50 Front/Rear, 100% = Full torque to rear axle.
  """
  value: Float

  """
  Timestamp: Torque distribution between front and rear axle in percent. -100% = Full torque to front axle, 0% = 50:50 Front/Rear, 100% = Full torque to rear axle.
  """
  timestamp: String

  """
  Unit of Torque distribution between front and rear axle in percent. -100% = Full torque to front axle, 0% = 50:50 Front/Rear, 100% = Full torque to rear axle.
  """
  unit: String
}

"""Electric Motor specific data."""
type Vehicle_Powertrain_ElectricMotor {
  """Engine code designation, as specified by vehicle manufacturer."""
  engineCode: Vehicle_Powertrain_ElectricMotor_EngineCode

  """Peak power, in kilowatts, that motor(s) can generate."""
  maxPower: Vehicle_Powertrain_ElectricMotor_MaxPower

  """Peak power, in newton meter, that the motor(s) can generate."""
  maxTorque: Vehicle_Powertrain_ElectricMotor_MaxTorque

  """Peak regen/brake power, in kilowatts, that motor(s) can generate."""
  maxRegenPower: Vehicle_Powertrain_ElectricMotor_MaxRegenPower

  """
  Peak regen/brake torque, in newton meter, that the motor(s) can generate.
  """
  maxRegenTorque: Vehicle_Powertrain_ElectricMotor_MaxRegenTorque

  """
  Motor rotational speed measured as rotations per minute. Negative values indicate reverse driving mode.
  """
  speed: Vehicle_Powertrain_ElectricMotor_Speed

  """Motor temperature."""
  temperature: Vehicle_Powertrain_ElectricMotor_Temperature

  """Motor coolant temperature (if applicable)."""
  coolantTemperature: Vehicle_Powertrain_ElectricMotor_CoolantTemperature

  """Current motor power output. Negative values indicate regen mode."""
  power: Vehicle_Powertrain_ElectricMotor_Power

  """Current motor torque. Negative values indicate regen mode."""
  torque: Vehicle_Powertrain_ElectricMotor_Torque
}

"""Engine code designation, as specified by vehicle manufacturer."""
type Vehicle_Powertrain_ElectricMotor_EngineCode {
  """Value: Engine code designation, as specified by vehicle manufacturer."""
  value: String

  """
  Timestamp: Engine code designation, as specified by vehicle manufacturer.
  """
  timestamp: String
}

"""Peak power, in kilowatts, that motor(s) can generate."""
type Vehicle_Powertrain_ElectricMotor_MaxPower {
  """Value: Peak power, in kilowatts, that motor(s) can generate."""
  value: Int

  """Timestamp: Peak power, in kilowatts, that motor(s) can generate."""
  timestamp: String

  """Unit of Peak power, in kilowatts, that motor(s) can generate."""
  unit: String
}

"""Peak power, in newton meter, that the motor(s) can generate."""
type Vehicle_Powertrain_ElectricMotor_MaxTorque {
  """Value: Peak power, in newton meter, that the motor(s) can generate."""
  value: Int

  """
  Timestamp: Peak power, in newton meter, that the motor(s) can generate.
  """
  timestamp: String

  """Unit of Peak power, in newton meter, that the motor(s) can generate."""
  unit: String
}

"""Peak regen/brake power, in kilowatts, that motor(s) can generate."""
type Vehicle_Powertrain_ElectricMotor_MaxRegenPower {
  """
  Value: Peak regen/brake power, in kilowatts, that motor(s) can generate.
  """
  value: Int

  """
  Timestamp: Peak regen/brake power, in kilowatts, that motor(s) can generate.
  """
  timestamp: String

  """
  Unit of Peak regen/brake power, in kilowatts, that motor(s) can generate.
  """
  unit: String
}

"""
Peak regen/brake torque, in newton meter, that the motor(s) can generate.
"""
type Vehicle_Powertrain_ElectricMotor_MaxRegenTorque {
  """
  Value: Peak regen/brake torque, in newton meter, that the motor(s) can generate.
  """
  value: Int

  """
  Timestamp: Peak regen/brake torque, in newton meter, that the motor(s) can generate.
  """
  timestamp: String

  """
  Unit of Peak regen/brake torque, in newton meter, that the motor(s) can generate.
  """
  unit: String
}

"""
Motor rotational speed measured as rotations per minute. Negative values indicate reverse driving mode.
"""
type Vehicle_Powertrain_ElectricMotor_Speed {
  """
  Value: Motor rotational speed measured as rotations per minute. Negative values indicate reverse driving mode.
  """
  value: Int

  """
  Timestamp: Motor rotational speed measured as rotations per minute. Negative values indicate reverse driving mode.
  """
  timestamp: String

  """
  Unit of Motor rotational speed measured as rotations per minute. Negative values indicate reverse driving mode.
  """
  unit: String
}

"""Motor temperature."""
type Vehicle_Powertrain_ElectricMotor_Temperature {
  """Value: Motor temperature."""
  value: Int

  """Timestamp: Motor temperature."""
  timestamp: String

  """Unit of Motor temperature."""
  unit: String
}

"""Motor coolant temperature (if applicable)."""
type Vehicle_Powertrain_ElectricMotor_CoolantTemperature {
  """Value: Motor coolant temperature (if applicable)."""
  value: Int

  """Timestamp: Motor coolant temperature (if applicable)."""
  timestamp: String

  """Unit of Motor coolant temperature (if applicable)."""
  unit: String
}

"""Current motor power output. Negative values indicate regen mode."""
type Vehicle_Powertrain_ElectricMotor_Power {
  """
  Value: Current motor power output. Negative values indicate regen mode.
  """
  value: Int

  """
  Timestamp: Current motor power output. Negative values indicate regen mode.
  """
  timestamp: String

  """
  Unit of Current motor power output. Negative values indicate regen mode.
  """
  unit: String
}

"""Current motor torque. Negative values indicate regen mode."""
type Vehicle_Powertrain_ElectricMotor_Torque {
  """Value: Current motor torque. Negative values indicate regen mode."""
  value: Int

  """Timestamp: Current motor torque. Negative values indicate regen mode."""
  timestamp: String

  """Unit of Current motor torque. Negative values indicate regen mode."""
  unit: String
}

"""Battery Management data."""
type Vehicle_Powertrain_TractionBattery {
  """Battery Identification Number as assigned by OEM."""
  id: Vehicle_Powertrain_TractionBattery_Id

  """Production date of battery in ISO8601 format, e.g. YYYY-MM-DD."""
  productionDate: Vehicle_Powertrain_TractionBattery_ProductionDate

  """
  Indicating if the power (positive terminator) of the traction battery is connected to the powertrain.
  """
  isPowerConnected: Vehicle_Powertrain_TractionBattery_IsPowerConnected

  """
  Indicating if the ground (negative terminator) of the traction battery is connected to the powertrain.
  """
  isGroundConnected: Vehicle_Powertrain_TractionBattery_IsGroundConnected

  """Temperature Information for the battery pack."""
  temperature: Vehicle_Powertrain_TractionBattery_Temperature

  """Gross capacity of the battery."""
  grossCapacity: Vehicle_Powertrain_TractionBattery_GrossCapacity

  """Total net capacity of the battery considering aging."""
  netCapacity: Vehicle_Powertrain_TractionBattery_NetCapacity

  """Calculated battery state of health at standard conditions."""
  stateOfHealth: Vehicle_Powertrain_TractionBattery_StateOfHealth

  """
  Information on the state of charge of the vehicle's high voltage battery.
  """
  stateOfCharge: Vehicle_Powertrain_TractionBattery_StateOfCharge

  """Nominal Voltage of the battery."""
  nominalVoltage: Vehicle_Powertrain_TractionBattery_NominalVoltage

  """Max allowed voltage of the battery, e.g. during charging."""
  maxVoltage: Vehicle_Powertrain_TractionBattery_MaxVoltage

  """Current Voltage of the battery."""
  currentVoltage: Vehicle_Powertrain_TractionBattery_CurrentVoltage

  """
  Current current flowing in/out of battery. Positive = Current flowing in to battery, e.g. during charging. Negative = Current flowing out of battery, e.g. during driving.
  """
  currentCurrent: Vehicle_Powertrain_TractionBattery_CurrentCurrent

  """
  Current electrical energy flowing in/out of battery. Positive = Energy flowing in to battery, e.g. during charging. Negative = Energy flowing out of battery, e.g. during driving.
  """
  currentPower: Vehicle_Powertrain_TractionBattery_CurrentPower

  """
  The accumulated energy delivered to the battery during charging over lifetime of the battery.
  """
  accumulatedChargedEnergy: Vehicle_Powertrain_TractionBattery_AccumulatedChargedEnergy

  """
  The accumulated energy leaving HV battery for propulsion and auxiliary loads over lifetime of the battery.
  """
  accumulatedConsumedEnergy: Vehicle_Powertrain_TractionBattery_AccumulatedConsumedEnergy

  """
  The accumulated charge throughput delivered to the battery during charging over lifetime of the battery.
  """
  accumulatedChargedThroughput: Vehicle_Powertrain_TractionBattery_AccumulatedChargedThroughput

  """
  The accumulated charge throughput leaving HV battery for propulsion and auxiliary loads over lifetime of the battery.
  """
  accumulatedConsumedThroughput: Vehicle_Powertrain_TractionBattery_AccumulatedConsumedThroughput

  """
  Electrical energy lost by power dissipation to heat inside the battery.
  """
  powerLoss: Vehicle_Powertrain_TractionBattery_PowerLoss

  """Remaining range in meters using only battery."""
  range: Vehicle_Powertrain_TractionBattery_Range

  """Properties related to battery charging."""
  charging: Vehicle_Powertrain_TractionBattery_Charging

  """
  Properties related to DC/DC converter converting high voltage (from high voltage battery) to vehicle low voltage (supply voltage, typically 12 Volts).
  """
  dcdc: Vehicle_Powertrain_TractionBattery_DCDC
}

"""Battery Identification Number as assigned by OEM."""
type Vehicle_Powertrain_TractionBattery_Id {
  """Value: Battery Identification Number as assigned by OEM."""
  value: String

  """Timestamp: Battery Identification Number as assigned by OEM."""
  timestamp: String
}

"""Production date of battery in ISO8601 format, e.g. YYYY-MM-DD."""
type Vehicle_Powertrain_TractionBattery_ProductionDate {
  """Value: Production date of battery in ISO8601 format, e.g. YYYY-MM-DD."""
  value: String

  """
  Timestamp: Production date of battery in ISO8601 format, e.g. YYYY-MM-DD.
  """
  timestamp: String
}

"""
Indicating if the power (positive terminator) of the traction battery is connected to the powertrain.
"""
type Vehicle_Powertrain_TractionBattery_IsPowerConnected {
  """
  Value: Indicating if the power (positive terminator) of the traction battery is connected to the powertrain.
  """
  value: Boolean

  """
  Timestamp: Indicating if the power (positive terminator) of the traction battery is connected to the powertrain.
  """
  timestamp: String
}

"""
Indicating if the ground (negative terminator) of the traction battery is connected to the powertrain.
"""
type Vehicle_Powertrain_TractionBattery_IsGroundConnected {
  """
  Value: Indicating if the ground (negative terminator) of the traction battery is connected to the powertrain.
  """
  value: Boolean

  """
  Timestamp: Indicating if the ground (negative terminator) of the traction battery is connected to the powertrain.
  """
  timestamp: String
}

"""Temperature Information for the battery pack."""
type Vehicle_Powertrain_TractionBattery_Temperature {
  """Current average temperature of the battery cells."""
  average: Vehicle_Powertrain_TractionBattery_Temperature_Average

  """
  Current minimum temperature of the battery cells, i.e. temperature of the coldest cell.
  """
  min: Vehicle_Powertrain_TractionBattery_Temperature_Min

  """
  Current maximum temperature of the battery cells, i.e. temperature of the hottest cell.
  """
  max: Vehicle_Powertrain_TractionBattery_Temperature_Max
}

"""Current average temperature of the battery cells."""
type Vehicle_Powertrain_TractionBattery_Temperature_Average {
  """Value: Current average temperature of the battery cells."""
  value: Float

  """Timestamp: Current average temperature of the battery cells."""
  timestamp: String

  """Unit of Current average temperature of the battery cells."""
  unit: String
}

"""
Current minimum temperature of the battery cells, i.e. temperature of the coldest cell.
"""
type Vehicle_Powertrain_TractionBattery_Temperature_Min {
  """
  Value: Current minimum temperature of the battery cells, i.e. temperature of the coldest cell.
  """
  value: Float

  """
  Timestamp: Current minimum temperature of the battery cells, i.e. temperature of the coldest cell.
  """
  timestamp: String

  """
  Unit of Current minimum temperature of the battery cells, i.e. temperature of the coldest cell.
  """
  unit: String
}

"""
Current maximum temperature of the battery cells, i.e. temperature of the hottest cell.
"""
type Vehicle_Powertrain_TractionBattery_Temperature_Max {
  """
  Value: Current maximum temperature of the battery cells, i.e. temperature of the hottest cell.
  """
  value: Float

  """
  Timestamp: Current maximum temperature of the battery cells, i.e. temperature of the hottest cell.
  """
  timestamp: String

  """
  Unit of Current maximum temperature of the battery cells, i.e. temperature of the hottest cell.
  """
  unit: String
}

"""Gross capacity of the battery."""
type Vehicle_Powertrain_TractionBattery_GrossCapacity {
  """Value: Gross capacity of the battery."""
  value: Int

  """Timestamp: Gross capacity of the battery."""
  timestamp: String

  """Unit of Gross capacity of the battery."""
  unit: String
}

"""Total net capacity of the battery considering aging."""
type Vehicle_Powertrain_TractionBattery_NetCapacity {
  """Value: Total net capacity of the battery considering aging."""
  value: Int

  """Timestamp: Total net capacity of the battery considering aging."""
  timestamp: String

  """Unit of Total net capacity of the battery considering aging."""
  unit: String
}

"""Calculated battery state of health at standard conditions."""
type Vehicle_Powertrain_TractionBattery_StateOfHealth {
  """Value: Calculated battery state of health at standard conditions."""
  value: Float

  """Timestamp: Calculated battery state of health at standard conditions."""
  timestamp: String

  """Unit of Calculated battery state of health at standard conditions."""
  unit: String
}

"""
Information on the state of charge of the vehicle's high voltage battery.
"""
type Vehicle_Powertrain_TractionBattery_StateOfCharge {
  """
  Physical state of charge of the high voltage battery, relative to net capacity. This is not necessarily the state of charge being displayed to the customer.
  """
  current: Vehicle_Powertrain_TractionBattery_StateOfCharge_Current

  """State of charge displayed to the customer."""
  displayed: Vehicle_Powertrain_TractionBattery_StateOfCharge_Displayed
}

"""
Physical state of charge of the high voltage battery, relative to net capacity. This is not necessarily the state of charge being displayed to the customer.
"""
type Vehicle_Powertrain_TractionBattery_StateOfCharge_Current {
  """
  Value: Physical state of charge of the high voltage battery, relative to net capacity. This is not necessarily the state of charge being displayed to the customer.
  """
  value: Float

  """
  Timestamp: Physical state of charge of the high voltage battery, relative to net capacity. This is not necessarily the state of charge being displayed to the customer.
  """
  timestamp: String

  """
  Unit of Physical state of charge of the high voltage battery, relative to net capacity. This is not necessarily the state of charge being displayed to the customer.
  """
  unit: String
}

"""State of charge displayed to the customer."""
type Vehicle_Powertrain_TractionBattery_StateOfCharge_Displayed {
  """Value: State of charge displayed to the customer."""
  value: Float

  """Timestamp: State of charge displayed to the customer."""
  timestamp: String

  """Unit of State of charge displayed to the customer."""
  unit: String
}

"""Nominal Voltage of the battery."""
type Vehicle_Powertrain_TractionBattery_NominalVoltage {
  """Value: Nominal Voltage of the battery."""
  value: Int

  """Timestamp: Nominal Voltage of the battery."""
  timestamp: String

  """Unit of Nominal Voltage of the battery."""
  unit: String
}

"""Max allowed voltage of the battery, e.g. during charging."""
type Vehicle_Powertrain_TractionBattery_MaxVoltage {
  """Value: Max allowed voltage of the battery, e.g. during charging."""
  value: Int

  """Timestamp: Max allowed voltage of the battery, e.g. during charging."""
  timestamp: String

  """Unit of Max allowed voltage of the battery, e.g. during charging."""
  unit: String
}

"""Current Voltage of the battery."""
type Vehicle_Powertrain_TractionBattery_CurrentVoltage {
  """Value: Current Voltage of the battery."""
  value: Float

  """Timestamp: Current Voltage of the battery."""
  timestamp: String

  """Unit of Current Voltage of the battery."""
  unit: String
}

"""
Current current flowing in/out of battery. Positive = Current flowing in to battery, e.g. during charging. Negative = Current flowing out of battery, e.g. during driving.
"""
type Vehicle_Powertrain_TractionBattery_CurrentCurrent {
  """
  Value: Current current flowing in/out of battery. Positive = Current flowing in to battery, e.g. during charging. Negative = Current flowing out of battery, e.g. during driving.
  """
  value: Float

  """
  Timestamp: Current current flowing in/out of battery. Positive = Current flowing in to battery, e.g. during charging. Negative = Current flowing out of battery, e.g. during driving.
  """
  timestamp: String

  """
  Unit of Current current flowing in/out of battery. Positive = Current flowing in to battery, e.g. during charging. Negative = Current flowing out of battery, e.g. during driving.
  """
  unit: String
}

"""
Current electrical energy flowing in/out of battery. Positive = Energy flowing in to battery, e.g. during charging. Negative = Energy flowing out of battery, e.g. during driving.
"""
type Vehicle_Powertrain_TractionBattery_CurrentPower {
  """
  Value: Current electrical energy flowing in/out of battery. Positive = Energy flowing in to battery, e.g. during charging. Negative = Energy flowing out of battery, e.g. during driving.
  """
  value: Float

  """
  Timestamp: Current electrical energy flowing in/out of battery. Positive = Energy flowing in to battery, e.g. during charging. Negative = Energy flowing out of battery, e.g. during driving.
  """
  timestamp: String

  """
  Unit of Current electrical energy flowing in/out of battery. Positive = Energy flowing in to battery, e.g. during charging. Negative = Energy flowing out of battery, e.g. during driving.
  """
  unit: String
}

"""
The accumulated energy delivered to the battery during charging over lifetime of the battery.
"""
type Vehicle_Powertrain_TractionBattery_AccumulatedChargedEnergy {
  """
  Value: The accumulated energy delivered to the battery during charging over lifetime of the battery.
  """
  value: Float

  """
  Timestamp: The accumulated energy delivered to the battery during charging over lifetime of the battery.
  """
  timestamp: String

  """
  Unit of The accumulated energy delivered to the battery during charging over lifetime of the battery.
  """
  unit: String
}

"""
The accumulated energy leaving HV battery for propulsion and auxiliary loads over lifetime of the battery.
"""
type Vehicle_Powertrain_TractionBattery_AccumulatedConsumedEnergy {
  """
  Value: The accumulated energy leaving HV battery for propulsion and auxiliary loads over lifetime of the battery.
  """
  value: Float

  """
  Timestamp: The accumulated energy leaving HV battery for propulsion and auxiliary loads over lifetime of the battery.
  """
  timestamp: String

  """
  Unit of The accumulated energy leaving HV battery for propulsion and auxiliary loads over lifetime of the battery.
  """
  unit: String
}

"""
The accumulated charge throughput delivered to the battery during charging over lifetime of the battery.
"""
type Vehicle_Powertrain_TractionBattery_AccumulatedChargedThroughput {
  """
  Value: The accumulated charge throughput delivered to the battery during charging over lifetime of the battery.
  """
  value: Float

  """
  Timestamp: The accumulated charge throughput delivered to the battery during charging over lifetime of the battery.
  """
  timestamp: String

  """
  Unit of The accumulated charge throughput delivered to the battery during charging over lifetime of the battery.
  """
  unit: String
}

"""
The accumulated charge throughput leaving HV battery for propulsion and auxiliary loads over lifetime of the battery.
"""
type Vehicle_Powertrain_TractionBattery_AccumulatedConsumedThroughput {
  """
  Value: The accumulated charge throughput leaving HV battery for propulsion and auxiliary loads over lifetime of the battery.
  """
  value: Float

  """
  Timestamp: The accumulated charge throughput leaving HV battery for propulsion and auxiliary loads over lifetime of the battery.
  """
  timestamp: String

  """
  Unit of The accumulated charge throughput leaving HV battery for propulsion and auxiliary loads over lifetime of the battery.
  """
  unit: String
}

"""
Electrical energy lost by power dissipation to heat inside the battery.
"""
type Vehicle_Powertrain_TractionBattery_PowerLoss {
  """
  Value: Electrical energy lost by power dissipation to heat inside the battery.
  """
  value: Float

  """
  Timestamp: Electrical energy lost by power dissipation to heat inside the battery.
  """
  timestamp: String

  """
  Unit of Electrical energy lost by power dissipation to heat inside the battery.
  """
  unit: String
}

"""Remaining range in meters using only battery."""
type Vehicle_Powertrain_TractionBattery_Range {
  """Value: Remaining range in meters using only battery."""
  value: Float

  """Timestamp: Remaining range in meters using only battery."""
  timestamp: String

  """Unit of Remaining range in meters using only battery."""
  unit: String
}

"""Properties related to battery charging."""
type Vehicle_Powertrain_TractionBattery_Charging {
  """Target charge limit (state of charge) for battery."""
  chargeLimit: Vehicle_Powertrain_TractionBattery_Charging_ChargeLimit

  """
  Maximum charging current that can be accepted by the system, as measured at the charging inlet.
  """
  maximumChargingCurrent: Vehicle_Powertrain_TractionBattery_Charging_MaximumChargingCurrent

  """
  Status of the charge port cover, can potentially be controlled manually.
  """
  chargePortFlap: Vehicle_Powertrain_TractionBattery_Charging_ChargePortFlap

  """
  Indicates if a charging cable is physically connected to the vehicle or not.
  """
  isChargingCableConnected: Vehicle_Powertrain_TractionBattery_Charging_IsChargingCableConnected

  """Is charging cable locked to prevent removal."""
  isChargingCableLocked: Vehicle_Powertrain_TractionBattery_Charging_IsChargingCableLocked

  """
  Type of charge plug (charging inlet) available on the vehicle. IEC types refer to IEC 62196,  GBT refers to  GB/T 20234.
  """
  chargePlugType: Vehicle_Powertrain_TractionBattery_Charging_ChargePlugType

  """
  Control of the charge process. MANUAL means manually initiated (plug-in event, companion app, etc). TIMER means timer-based. GRID means grid-controlled (eg ISO 15118). PROFILE means controlled by profile download to vehicle.
  """
  mode: Vehicle_Powertrain_TractionBattery_Charging_Mode

  """
  True if charging is ongoing. Charging is considered to be ongoing if energy is flowing from charger to vehicle.
  """
  isCharging: Vehicle_Powertrain_TractionBattery_Charging_IsCharging

  """
  True if discharging (vehicle to grid) is ongoing. Discharging is considered to be ongoing if energy is flowing from vehicle to charger/grid.
  """
  isDischarging: Vehicle_Powertrain_TractionBattery_Charging_IsDischarging

  """Start or stop the charging process."""
  startStopCharging: Vehicle_Powertrain_TractionBattery_Charging_StartStopCharging

  """Current charging current."""
  chargeCurrent: Vehicle_Powertrain_TractionBattery_Charging_ChargeCurrent

  """Current charging voltage, as measured at the charging inlet."""
  chargeVoltage: Vehicle_Powertrain_TractionBattery_Charging_ChargeVoltage

  """
  Electrical energy lost by power dissipation to heat inside the AC/DC converter.
  """
  powerLoss: Vehicle_Powertrain_TractionBattery_Charging_PowerLoss

  """
  Current temperature of AC/DC converter converting grid voltage to battery voltage.
  """
  temperature: Vehicle_Powertrain_TractionBattery_Charging_Temperature

  """Current charging rate, as in kilometers of range added per hour."""
  chargeRate: Vehicle_Powertrain_TractionBattery_Charging_ChargeRate

  """
  The time needed for the current charging process to reach Charging.ChargeLimit. 0 if charging is complete or no charging process is active or planned.
  """
  timeToComplete: Vehicle_Powertrain_TractionBattery_Charging_TimeToComplete

  """Properties related to timing of battery charging sessions."""
  timer: Vehicle_Powertrain_TractionBattery_Charging_Timer
}

"""Target charge limit (state of charge) for battery."""
type Vehicle_Powertrain_TractionBattery_Charging_ChargeLimit {
  """Value: Target charge limit (state of charge) for battery."""
  value: Int

  """Timestamp: Target charge limit (state of charge) for battery."""
  timestamp: String

  """Unit of Target charge limit (state of charge) for battery."""
  unit: String
}

"""
Maximum charging current that can be accepted by the system, as measured at the charging inlet.
"""
type Vehicle_Powertrain_TractionBattery_Charging_MaximumChargingCurrent {
  """
  Maximum DC charging current at inlet that can be accepted by the system.
  """
  dc: Vehicle_Powertrain_TractionBattery_Charging_MaximumChargingCurrent_DC

  """
  Maximum AC charging current (rms) at inlet for Phase 1 that can be accepted by the system.
  """
  phase1: Vehicle_Powertrain_TractionBattery_Charging_MaximumChargingCurrent_Phase1

  """
  Maximum AC charging current (rms) at inlet for Phase 2 that can be accepted by the system.
  """
  phase2: Vehicle_Powertrain_TractionBattery_Charging_MaximumChargingCurrent_Phase2

  """
  Maximum AC charging current (rms) at inlet for Phase 3 that can be accepted by the system.
  """
  phase3: Vehicle_Powertrain_TractionBattery_Charging_MaximumChargingCurrent_Phase3
}

"""
Maximum DC charging current at inlet that can be accepted by the system.
"""
type Vehicle_Powertrain_TractionBattery_Charging_MaximumChargingCurrent_DC {
  """
  Value: Maximum DC charging current at inlet that can be accepted by the system.
  """
  value: Float

  """
  Timestamp: Maximum DC charging current at inlet that can be accepted by the system.
  """
  timestamp: String

  """
  Unit of Maximum DC charging current at inlet that can be accepted by the system.
  """
  unit: String
}

"""
Maximum AC charging current (rms) at inlet for Phase 1 that can be accepted by the system.
"""
type Vehicle_Powertrain_TractionBattery_Charging_MaximumChargingCurrent_Phase1 {
  """
  Value: Maximum AC charging current (rms) at inlet for Phase 1 that can be accepted by the system.
  """
  value: Float

  """
  Timestamp: Maximum AC charging current (rms) at inlet for Phase 1 that can be accepted by the system.
  """
  timestamp: String

  """
  Unit of Maximum AC charging current (rms) at inlet for Phase 1 that can be accepted by the system.
  """
  unit: String
}

"""
Maximum AC charging current (rms) at inlet for Phase 2 that can be accepted by the system.
"""
type Vehicle_Powertrain_TractionBattery_Charging_MaximumChargingCurrent_Phase2 {
  """
  Value: Maximum AC charging current (rms) at inlet for Phase 2 that can be accepted by the system.
  """
  value: Float

  """
  Timestamp: Maximum AC charging current (rms) at inlet for Phase 2 that can be accepted by the system.
  """
  timestamp: String

  """
  Unit of Maximum AC charging current (rms) at inlet for Phase 2 that can be accepted by the system.
  """
  unit: String
}

"""
Maximum AC charging current (rms) at inlet for Phase 3 that can be accepted by the system.
"""
type Vehicle_Powertrain_TractionBattery_Charging_MaximumChargingCurrent_Phase3 {
  """
  Value: Maximum AC charging current (rms) at inlet for Phase 3 that can be accepted by the system.
  """
  value: Float

  """
  Timestamp: Maximum AC charging current (rms) at inlet for Phase 3 that can be accepted by the system.
  """
  timestamp: String

  """
  Unit of Maximum AC charging current (rms) at inlet for Phase 3 that can be accepted by the system.
  """
  unit: String
}

"""
Status of the charge port cover, can potentially be controlled manually.
"""
type Vehicle_Powertrain_TractionBattery_Charging_ChargePortFlap {
  """
  Value: Status of the charge port cover, can potentially be controlled manually.
  """
  value: String

  """
  Timestamp: Status of the charge port cover, can potentially be controlled manually.
  """
  timestamp: String
}

"""
Indicates if a charging cable is physically connected to the vehicle or not.
"""
type Vehicle_Powertrain_TractionBattery_Charging_IsChargingCableConnected {
  """
  Value: Indicates if a charging cable is physically connected to the vehicle or not.
  """
  value: Boolean

  """
  Timestamp: Indicates if a charging cable is physically connected to the vehicle or not.
  """
  timestamp: String
}

"""Is charging cable locked to prevent removal."""
type Vehicle_Powertrain_TractionBattery_Charging_IsChargingCableLocked {
  """Value: Is charging cable locked to prevent removal."""
  value: Boolean

  """Timestamp: Is charging cable locked to prevent removal."""
  timestamp: String
}

"""
Type of charge plug (charging inlet) available on the vehicle. IEC types refer to IEC 62196,  GBT refers to  GB/T 20234.
"""
type Vehicle_Powertrain_TractionBattery_Charging_ChargePlugType {
  """
  Value: Type of charge plug (charging inlet) available on the vehicle. IEC types refer to IEC 62196,  GBT refers to  GB/T 20234.
  """
  value: [String]

  """
  Timestamp: Type of charge plug (charging inlet) available on the vehicle. IEC types refer to IEC 62196,  GBT refers to  GB/T 20234.
  """
  timestamp: String
}

"""
Control of the charge process. MANUAL means manually initiated (plug-in event, companion app, etc). TIMER means timer-based. GRID means grid-controlled (eg ISO 15118). PROFILE means controlled by profile download to vehicle.
"""
type Vehicle_Powertrain_TractionBattery_Charging_Mode {
  """
  Value: Control of the charge process. MANUAL means manually initiated (plug-in event, companion app, etc). TIMER means timer-based. GRID means grid-controlled (eg ISO 15118). PROFILE means controlled by profile download to vehicle.
  """
  value: String

  """
  Timestamp: Control of the charge process. MANUAL means manually initiated (plug-in event, companion app, etc). TIMER means timer-based. GRID means grid-controlled (eg ISO 15118). PROFILE means controlled by profile download to vehicle.
  """
  timestamp: String
}

"""
True if charging is ongoing. Charging is considered to be ongoing if energy is flowing from charger to vehicle.
"""
type Vehicle_Powertrain_TractionBattery_Charging_IsCharging {
  """
  Value: True if charging is ongoing. Charging is considered to be ongoing if energy is flowing from charger to vehicle.
  """
  value: Boolean

  """
  Timestamp: True if charging is ongoing. Charging is considered to be ongoing if energy is flowing from charger to vehicle.
  """
  timestamp: String
}

"""
True if discharging (vehicle to grid) is ongoing. Discharging is considered to be ongoing if energy is flowing from vehicle to charger/grid.
"""
type Vehicle_Powertrain_TractionBattery_Charging_IsDischarging {
  """
  Value: True if discharging (vehicle to grid) is ongoing. Discharging is considered to be ongoing if energy is flowing from vehicle to charger/grid.
  """
  value: Boolean

  """
  Timestamp: True if discharging (vehicle to grid) is ongoing. Discharging is considered to be ongoing if energy is flowing from vehicle to charger/grid.
  """
  timestamp: String
}

"""Start or stop the charging process."""
type Vehicle_Powertrain_TractionBattery_Charging_StartStopCharging {
  """Value: Start or stop the charging process."""
  value: String

  """Timestamp: Start or stop the charging process."""
  timestamp: String
}

"""Current charging current."""
type Vehicle_Powertrain_TractionBattery_Charging_ChargeCurrent {
  """
  Current DC charging current at inlet. Negative if returning energy to grid.
  """
  dc: Vehicle_Powertrain_TractionBattery_Charging_ChargeCurrent_DC

  """
  Current AC charging current (rms) at inlet for Phase 1. Negative if returning energy to grid.
  """
  phase1: Vehicle_Powertrain_TractionBattery_Charging_ChargeCurrent_Phase1

  """
  Current AC charging current (rms) at inlet for Phase 2. Negative if returning energy to grid.
  """
  phase2: Vehicle_Powertrain_TractionBattery_Charging_ChargeCurrent_Phase2

  """
  Current AC charging current (rms) at inlet for Phase 3. Negative if returning energy to grid.
  """
  phase3: Vehicle_Powertrain_TractionBattery_Charging_ChargeCurrent_Phase3
}

"""
Current DC charging current at inlet. Negative if returning energy to grid.
"""
type Vehicle_Powertrain_TractionBattery_Charging_ChargeCurrent_DC {
  """
  Value: Current DC charging current at inlet. Negative if returning energy to grid.
  """
  value: Float

  """
  Timestamp: Current DC charging current at inlet. Negative if returning energy to grid.
  """
  timestamp: String

  """
  Unit of Current DC charging current at inlet. Negative if returning energy to grid.
  """
  unit: String
}

"""
Current AC charging current (rms) at inlet for Phase 1. Negative if returning energy to grid.
"""
type Vehicle_Powertrain_TractionBattery_Charging_ChargeCurrent_Phase1 {
  """
  Value: Current AC charging current (rms) at inlet for Phase 1. Negative if returning energy to grid.
  """
  value: Float

  """
  Timestamp: Current AC charging current (rms) at inlet for Phase 1. Negative if returning energy to grid.
  """
  timestamp: String

  """
  Unit of Current AC charging current (rms) at inlet for Phase 1. Negative if returning energy to grid.
  """
  unit: String
}

"""
Current AC charging current (rms) at inlet for Phase 2. Negative if returning energy to grid.
"""
type Vehicle_Powertrain_TractionBattery_Charging_ChargeCurrent_Phase2 {
  """
  Value: Current AC charging current (rms) at inlet for Phase 2. Negative if returning energy to grid.
  """
  value: Float

  """
  Timestamp: Current AC charging current (rms) at inlet for Phase 2. Negative if returning energy to grid.
  """
  timestamp: String

  """
  Unit of Current AC charging current (rms) at inlet for Phase 2. Negative if returning energy to grid.
  """
  unit: String
}

"""
Current AC charging current (rms) at inlet for Phase 3. Negative if returning energy to grid.
"""
type Vehicle_Powertrain_TractionBattery_Charging_ChargeCurrent_Phase3 {
  """
  Value: Current AC charging current (rms) at inlet for Phase 3. Negative if returning energy to grid.
  """
  value: Float

  """
  Timestamp: Current AC charging current (rms) at inlet for Phase 3. Negative if returning energy to grid.
  """
  timestamp: String

  """
  Unit of Current AC charging current (rms) at inlet for Phase 3. Negative if returning energy to grid.
  """
  unit: String
}

"""Current charging voltage, as measured at the charging inlet."""
type Vehicle_Powertrain_TractionBattery_Charging_ChargeVoltage {
  """Current DC charging voltage at charging inlet."""
  dc: Vehicle_Powertrain_TractionBattery_Charging_ChargeVoltage_DC

  """Current AC charging voltage (rms) at inlet for Phase 1."""
  phase1: Vehicle_Powertrain_TractionBattery_Charging_ChargeVoltage_Phase1

  """Current AC charging voltage (rms) at inlet for Phase 2."""
  phase2: Vehicle_Powertrain_TractionBattery_Charging_ChargeVoltage_Phase2

  """Current AC charging voltage (rms) at inlet for Phase 3."""
  phase3: Vehicle_Powertrain_TractionBattery_Charging_ChargeVoltage_Phase3
}

"""Current DC charging voltage at charging inlet."""
type Vehicle_Powertrain_TractionBattery_Charging_ChargeVoltage_DC {
  """Value: Current DC charging voltage at charging inlet."""
  value: Float

  """Timestamp: Current DC charging voltage at charging inlet."""
  timestamp: String

  """Unit of Current DC charging voltage at charging inlet."""
  unit: String
}

"""Current AC charging voltage (rms) at inlet for Phase 1."""
type Vehicle_Powertrain_TractionBattery_Charging_ChargeVoltage_Phase1 {
  """Value: Current AC charging voltage (rms) at inlet for Phase 1."""
  value: Float

  """Timestamp: Current AC charging voltage (rms) at inlet for Phase 1."""
  timestamp: String

  """Unit of Current AC charging voltage (rms) at inlet for Phase 1."""
  unit: String
}

"""Current AC charging voltage (rms) at inlet for Phase 2."""
type Vehicle_Powertrain_TractionBattery_Charging_ChargeVoltage_Phase2 {
  """Value: Current AC charging voltage (rms) at inlet for Phase 2."""
  value: Float

  """Timestamp: Current AC charging voltage (rms) at inlet for Phase 2."""
  timestamp: String

  """Unit of Current AC charging voltage (rms) at inlet for Phase 2."""
  unit: String
}

"""Current AC charging voltage (rms) at inlet for Phase 3."""
type Vehicle_Powertrain_TractionBattery_Charging_ChargeVoltage_Phase3 {
  """Value: Current AC charging voltage (rms) at inlet for Phase 3."""
  value: Float

  """Timestamp: Current AC charging voltage (rms) at inlet for Phase 3."""
  timestamp: String

  """Unit of Current AC charging voltage (rms) at inlet for Phase 3."""
  unit: String
}

"""
Electrical energy lost by power dissipation to heat inside the AC/DC converter.
"""
type Vehicle_Powertrain_TractionBattery_Charging_PowerLoss {
  """
  Value: Electrical energy lost by power dissipation to heat inside the AC/DC converter.
  """
  value: Float

  """
  Timestamp: Electrical energy lost by power dissipation to heat inside the AC/DC converter.
  """
  timestamp: String

  """
  Unit of Electrical energy lost by power dissipation to heat inside the AC/DC converter.
  """
  unit: String
}

"""
Current temperature of AC/DC converter converting grid voltage to battery voltage.
"""
type Vehicle_Powertrain_TractionBattery_Charging_Temperature {
  """
  Value: Current temperature of AC/DC converter converting grid voltage to battery voltage.
  """
  value: Float

  """
  Timestamp: Current temperature of AC/DC converter converting grid voltage to battery voltage.
  """
  timestamp: String

  """
  Unit of Current temperature of AC/DC converter converting grid voltage to battery voltage.
  """
  unit: String
}

"""Current charging rate, as in kilometers of range added per hour."""
type Vehicle_Powertrain_TractionBattery_Charging_ChargeRate {
  """
  Value: Current charging rate, as in kilometers of range added per hour.
  """
  value: Float

  """
  Timestamp: Current charging rate, as in kilometers of range added per hour.
  """
  timestamp: String

  """
  Unit of Current charging rate, as in kilometers of range added per hour.
  """
  unit: String
}

"""
The time needed for the current charging process to reach Charging.ChargeLimit. 0 if charging is complete or no charging process is active or planned.
"""
type Vehicle_Powertrain_TractionBattery_Charging_TimeToComplete {
  """
  Value: The time needed for the current charging process to reach Charging.ChargeLimit. 0 if charging is complete or no charging process is active or planned.
  """
  value: Float

  """
  Timestamp: The time needed for the current charging process to reach Charging.ChargeLimit. 0 if charging is complete or no charging process is active or planned.
  """
  timestamp: String

  """
  Unit of The time needed for the current charging process to reach Charging.ChargeLimit. 0 if charging is complete or no charging process is active or planned.
  """
  unit: String
}

"""Properties related to timing of battery charging sessions."""
type Vehicle_Powertrain_TractionBattery_Charging_Timer {
  """
  Defines timer mode for charging: INACTIVE - no timer set, charging may start as soon as battery is connected to a charger. START_TIME - charging shall start at Charging.Timer.Time. END_TIME - charging shall be finished (reach Charging.ChargeLimit) at Charging.Timer.Time. When charging is completed the vehicle shall change mode to 'inactive' or set a new Charging.Timer.Time. Charging shall start immediately if mode is 'starttime' or 'endtime' and Charging.Timer.Time is a time in the past.
  """
  mode: Vehicle_Powertrain_TractionBattery_Charging_Timer_Mode

  """
  Time for next charging-related action, formatted according to ISO 8601 with UTC time zone. Value has no significance if Charging.Timer.Mode is 'inactive'.
  """
  time: Vehicle_Powertrain_TractionBattery_Charging_Timer_Time
}

"""
Defines timer mode for charging: INACTIVE - no timer set, charging may start as soon as battery is connected to a charger. START_TIME - charging shall start at Charging.Timer.Time. END_TIME - charging shall be finished (reach Charging.ChargeLimit) at Charging.Timer.Time. When charging is completed the vehicle shall change mode to 'inactive' or set a new Charging.Timer.Time. Charging shall start immediately if mode is 'starttime' or 'endtime' and Charging.Timer.Time is a time in the past.
"""
type Vehicle_Powertrain_TractionBattery_Charging_Timer_Mode {
  """
  Value: Defines timer mode for charging: INACTIVE - no timer set, charging may start as soon as battery is connected to a charger. START_TIME - charging shall start at Charging.Timer.Time. END_TIME - charging shall be finished (reach Charging.ChargeLimit) at Charging.Timer.Time. When charging is completed the vehicle shall change mode to 'inactive' or set a new Charging.Timer.Time. Charging shall start immediately if mode is 'starttime' or 'endtime' and Charging.Timer.Time is a time in the past.
  """
  value: String

  """
  Timestamp: Defines timer mode for charging: INACTIVE - no timer set, charging may start as soon as battery is connected to a charger. START_TIME - charging shall start at Charging.Timer.Time. END_TIME - charging shall be finished (reach Charging.ChargeLimit) at Charging.Timer.Time. When charging is completed the vehicle shall change mode to 'inactive' or set a new Charging.Timer.Time. Charging shall start immediately if mode is 'starttime' or 'endtime' and Charging.Timer.Time is a time in the past.
  """
  timestamp: String
}

"""
Time for next charging-related action, formatted according to ISO 8601 with UTC time zone. Value has no significance if Charging.Timer.Mode is 'inactive'.
"""
type Vehicle_Powertrain_TractionBattery_Charging_Timer_Time {
  """
  Value: Time for next charging-related action, formatted according to ISO 8601 with UTC time zone. Value has no significance if Charging.Timer.Mode is 'inactive'.
  """
  value: String

  """
  Timestamp: Time for next charging-related action, formatted according to ISO 8601 with UTC time zone. Value has no significance if Charging.Timer.Mode is 'inactive'.
  """
  timestamp: String
}

"""
Properties related to DC/DC converter converting high voltage (from high voltage battery) to vehicle low voltage (supply voltage, typically 12 Volts).
"""
type Vehicle_Powertrain_TractionBattery_DCDC {
  """
  Electrical energy lost by power dissipation to heat inside DC/DC converter.
  """
  powerLoss: Vehicle_Powertrain_TractionBattery_DCDC_PowerLoss

  """
  Current temperature of DC/DC converter converting battery high voltage to vehicle low voltage (typically 12 Volts).
  """
  temperature: Vehicle_Powertrain_TractionBattery_DCDC_Temperature
}

"""
Electrical energy lost by power dissipation to heat inside DC/DC converter.
"""
type Vehicle_Powertrain_TractionBattery_DCDC_PowerLoss {
  """
  Value: Electrical energy lost by power dissipation to heat inside DC/DC converter.
  """
  value: Float

  """
  Timestamp: Electrical energy lost by power dissipation to heat inside DC/DC converter.
  """
  timestamp: String

  """
  Unit of Electrical energy lost by power dissipation to heat inside DC/DC converter.
  """
  unit: String
}

"""
Current temperature of DC/DC converter converting battery high voltage to vehicle low voltage (typically 12 Volts).
"""
type Vehicle_Powertrain_TractionBattery_DCDC_Temperature {
  """
  Value: Current temperature of DC/DC converter converting battery high voltage to vehicle low voltage (typically 12 Volts).
  """
  value: Float

  """
  Timestamp: Current temperature of DC/DC converter converting battery high voltage to vehicle low voltage (typically 12 Volts).
  """
  timestamp: String

  """
  Unit of Current temperature of DC/DC converter converting battery high voltage to vehicle low voltage (typically 12 Volts).
  """
  unit: String
}

"""Fuel system data."""
type Vehicle_Powertrain_FuelSystem {
  """High level information of fuel types supported"""
  supportedFuelTypes: Vehicle_Powertrain_FuelSystem_SupportedFuelTypes

  """
  Detailed information on fuels supported by the vehicle. Identifiers originating from DIN EN 16942:2021-08, appendix B, with additional suffix for octane (RON) where relevant.
  """
  supportedFuel: Vehicle_Powertrain_FuelSystem_SupportedFuel

  """Defines the hybrid type of the vehicle."""
  hybridType: Vehicle_Powertrain_FuelSystem_HybridType

  """Capacity of the fuel tank in liters."""
  tankCapacity: Vehicle_Powertrain_FuelSystem_TankCapacity

  """Level in fuel tank as percent of capacity. 0 = empty. 100 = full."""
  level: Vehicle_Powertrain_FuelSystem_Level

  """Remaining range in meters using only liquid fuel."""
  range: Vehicle_Powertrain_FuelSystem_Range

  """Current consumption in liters per 100 km."""
  instantConsumption: Vehicle_Powertrain_FuelSystem_InstantConsumption

  """Average consumption in liters per 100 km."""
  averageConsumption: Vehicle_Powertrain_FuelSystem_AverageConsumption

  """Fuel amount in liters consumed since start of current trip."""
  consumptionSinceStart: Vehicle_Powertrain_FuelSystem_ConsumptionSinceStart

  """Time in seconds elapsed since start of current trip."""
  timeSinceStart: Vehicle_Powertrain_FuelSystem_TimeSinceStart

  """Indicates whether eco start stop is currently enabled."""
  isEngineStopStartEnabled: Vehicle_Powertrain_FuelSystem_IsEngineStopStartEnabled

  """Indicates that the fuel level is low (e.g. <50km range)."""
  isFuelLevelLow: Vehicle_Powertrain_FuelSystem_IsFuelLevelLow
}

"""High level information of fuel types supported"""
type Vehicle_Powertrain_FuelSystem_SupportedFuelTypes {
  """Value: High level information of fuel types supported"""
  value: [String]

  """Timestamp: High level information of fuel types supported"""
  timestamp: String
}

"""
Detailed information on fuels supported by the vehicle. Identifiers originating from DIN EN 16942:2021-08, appendix B, with additional suffix for octane (RON) where relevant.
"""
type Vehicle_Powertrain_FuelSystem_SupportedFuel {
  """
  Value: Detailed information on fuels supported by the vehicle. Identifiers originating from DIN EN 16942:2021-08, appendix B, with additional suffix for octane (RON) where relevant.
  """
  value: [String]

  """
  Timestamp: Detailed information on fuels supported by the vehicle. Identifiers originating from DIN EN 16942:2021-08, appendix B, with additional suffix for octane (RON) where relevant.
  """
  timestamp: String
}

"""Defines the hybrid type of the vehicle."""
type Vehicle_Powertrain_FuelSystem_HybridType {
  """Value: Defines the hybrid type of the vehicle."""
  value: String

  """Timestamp: Defines the hybrid type of the vehicle."""
  timestamp: String
}

"""Capacity of the fuel tank in liters."""
type Vehicle_Powertrain_FuelSystem_TankCapacity {
  """Value: Capacity of the fuel tank in liters."""
  value: Float

  """Timestamp: Capacity of the fuel tank in liters."""
  timestamp: String

  """Unit of Capacity of the fuel tank in liters."""
  unit: String
}

"""Level in fuel tank as percent of capacity. 0 = empty. 100 = full."""
type Vehicle_Powertrain_FuelSystem_Level {
  """
  Value: Level in fuel tank as percent of capacity. 0 = empty. 100 = full.
  """
  value: Int

  """
  Timestamp: Level in fuel tank as percent of capacity. 0 = empty. 100 = full.
  """
  timestamp: String

  """
  Unit of Level in fuel tank as percent of capacity. 0 = empty. 100 = full.
  """
  unit: String
}

"""Remaining range in meters using only liquid fuel."""
type Vehicle_Powertrain_FuelSystem_Range {
  """Value: Remaining range in meters using only liquid fuel."""
  value: Float

  """Timestamp: Remaining range in meters using only liquid fuel."""
  timestamp: String

  """Unit of Remaining range in meters using only liquid fuel."""
  unit: String
}

"""Current consumption in liters per 100 km."""
type Vehicle_Powertrain_FuelSystem_InstantConsumption {
  """Value: Current consumption in liters per 100 km."""
  value: Float

  """Timestamp: Current consumption in liters per 100 km."""
  timestamp: String

  """Unit of Current consumption in liters per 100 km."""
  unit: String
}

"""Average consumption in liters per 100 km."""
type Vehicle_Powertrain_FuelSystem_AverageConsumption {
  """Value: Average consumption in liters per 100 km."""
  value: Float

  """Timestamp: Average consumption in liters per 100 km."""
  timestamp: String

  """Unit of Average consumption in liters per 100 km."""
  unit: String
}

"""Fuel amount in liters consumed since start of current trip."""
type Vehicle_Powertrain_FuelSystem_ConsumptionSinceStart {
  """Value: Fuel amount in liters consumed since start of current trip."""
  value: Float

  """Timestamp: Fuel amount in liters consumed since start of current trip."""
  timestamp: String

  """Unit of Fuel amount in liters consumed since start of current trip."""
  unit: String
}

"""Time in seconds elapsed since start of current trip."""
type Vehicle_Powertrain_FuelSystem_TimeSinceStart {
  """Value: Time in seconds elapsed since start of current trip."""
  value: Float

  """Timestamp: Time in seconds elapsed since start of current trip."""
  timestamp: String

  """Unit of Time in seconds elapsed since start of current trip."""
  unit: String
}

"""Indicates whether eco start stop is currently enabled."""
type Vehicle_Powertrain_FuelSystem_IsEngineStopStartEnabled {
  """Value: Indicates whether eco start stop is currently enabled."""
  value: Boolean

  """Timestamp: Indicates whether eco start stop is currently enabled."""
  timestamp: String
}

"""Indicates that the fuel level is low (e.g. <50km range)."""
type Vehicle_Powertrain_FuelSystem_IsFuelLevelLow {
  """Value: Indicates that the fuel level is low (e.g. <50km range)."""
  value: Boolean

  """Timestamp: Indicates that the fuel level is low (e.g. <50km range)."""
  timestamp: String
}

"""All body components."""
type Vehicle_Body {
  """Body type code as defined by ISO 3779."""
  bodyType: Vehicle_Body_BodyType

  """Location of the fuel cap or charge port."""
  refuelPosition: Vehicle_Body_RefuelPosition

  """Hood status."""
  hood: Vehicle_Body_Hood

  """Trunk status."""
  trunk: Vehicle_Body_Trunk

  """Horn signals."""
  horn: Vehicle_Body_Horn

  """Rainsensor signals."""
  raindetection: Vehicle_Body_Raindetection

  """Windshield signals."""
  windshield: Vehicle_Body_Windshield

  """All lights."""
  lights: Vehicle_Body_Lights

  """All mirrors."""
  mirrors: Vehicle_Body_Mirrors

  """
  Rear spoiler position, 0% = Spoiler fully stowed. 100% = Spoiler fully exposed.
  """
  rearMainSpoilerPosition: Vehicle_Body_RearMainSpoilerPosition
}

"""Body type code as defined by ISO 3779."""
type Vehicle_Body_BodyType {
  """Value: Body type code as defined by ISO 3779."""
  value: String

  """Timestamp: Body type code as defined by ISO 3779."""
  timestamp: String
}

"""Location of the fuel cap or charge port."""
type Vehicle_Body_RefuelPosition {
  """Value: Location of the fuel cap or charge port."""
  value: String

  """Timestamp: Location of the fuel cap or charge port."""
  timestamp: String
}

"""Hood status."""
type Vehicle_Body_Hood {
  """Hood open or closed. True = Open. False = Closed."""
  isOpen: Vehicle_Body_Hood_IsOpen
}

"""Hood open or closed. True = Open. False = Closed."""
type Vehicle_Body_Hood_IsOpen {
  """Value: Hood open or closed. True = Open. False = Closed."""
  value: Boolean

  """Timestamp: Hood open or closed. True = Open. False = Closed."""
  timestamp: String
}

"""Trunk status."""
type Vehicle_Body_Trunk {
  """Trunk status."""
  front: Vehicle_Body_Trunk_Front

  """Trunk status."""
  rear: Vehicle_Body_Trunk_Rear
}

"""Trunk status."""
type Vehicle_Body_Trunk_Front {
  """Trunk open or closed. True = Open. False = Closed."""
  isOpen: Vehicle_Body_Trunk_Front_IsOpen

  """Is trunk locked or unlocked. True = Locked. False = Unlocked."""
  isLocked: Vehicle_Body_Trunk_Front_IsLocked
}

"""Trunk open or closed. True = Open. False = Closed."""
type Vehicle_Body_Trunk_Front_IsOpen {
  """Value: Trunk open or closed. True = Open. False = Closed."""
  value: Boolean

  """Timestamp: Trunk open or closed. True = Open. False = Closed."""
  timestamp: String
}

"""Is trunk locked or unlocked. True = Locked. False = Unlocked."""
type Vehicle_Body_Trunk_Front_IsLocked {
  """Value: Is trunk locked or unlocked. True = Locked. False = Unlocked."""
  value: Boolean

  """
  Timestamp: Is trunk locked or unlocked. True = Locked. False = Unlocked.
  """
  timestamp: String
}

"""Trunk status."""
type Vehicle_Body_Trunk_Rear {
  """Trunk open or closed. True = Open. False = Closed."""
  isOpen: Vehicle_Body_Trunk_Rear_IsOpen

  """Is trunk locked or unlocked. True = Locked. False = Unlocked."""
  isLocked: Vehicle_Body_Trunk_Rear_IsLocked
}

"""Trunk open or closed. True = Open. False = Closed."""
type Vehicle_Body_Trunk_Rear_IsOpen {
  """Value: Trunk open or closed. True = Open. False = Closed."""
  value: Boolean

  """Timestamp: Trunk open or closed. True = Open. False = Closed."""
  timestamp: String
}

"""Is trunk locked or unlocked. True = Locked. False = Unlocked."""
type Vehicle_Body_Trunk_Rear_IsLocked {
  """Value: Is trunk locked or unlocked. True = Locked. False = Unlocked."""
  value: Boolean

  """
  Timestamp: Is trunk locked or unlocked. True = Locked. False = Unlocked.
  """
  timestamp: String
}

"""Horn signals."""
type Vehicle_Body_Horn {
  """Horn active or inactive. True = Active. False = Inactive."""
  isActive: Vehicle_Body_Horn_IsActive
}

"""Horn active or inactive. True = Active. False = Inactive."""
type Vehicle_Body_Horn_IsActive {
  """Value: Horn active or inactive. True = Active. False = Inactive."""
  value: Boolean

  """Timestamp: Horn active or inactive. True = Active. False = Inactive."""
  timestamp: String
}

"""Rainsensor signals."""
type Vehicle_Body_Raindetection {
  """Rain intensity. 0 = Dry, No Rain. 100 = Covered."""
  intensity: Vehicle_Body_Raindetection_Intensity
}

"""Rain intensity. 0 = Dry, No Rain. 100 = Covered."""
type Vehicle_Body_Raindetection_Intensity {
  """Value: Rain intensity. 0 = Dry, No Rain. 100 = Covered."""
  value: Int

  """Timestamp: Rain intensity. 0 = Dry, No Rain. 100 = Covered."""
  timestamp: String

  """Unit of Rain intensity. 0 = Dry, No Rain. 100 = Covered."""
  unit: String
}

"""Windshield signals."""
type Vehicle_Body_Windshield {
  """Windshield signals."""
  front: Vehicle_Body_Windshield_Front

  """Windshield signals."""
  rear: Vehicle_Body_Windshield_Rear
}

"""Windshield signals."""
type Vehicle_Body_Windshield_Front {
  """Windshield wiper signals."""
  wiping: Vehicle_Body_Windshield_Front_Wiping

  """Windshield heater status. False - off, True - on."""
  isHeatingOn: Vehicle_Body_Windshield_Front_IsHeatingOn

  """Windshield washer fluid signals"""
  washerFluid: Vehicle_Body_Windshield_Front_WasherFluid
}

"""Windshield wiper signals."""
type Vehicle_Body_Windshield_Front_Wiping {
  """
  Wiper mode requested by user/driver. INTERVAL indicates intermittent wiping, with fixed time interval between each wipe. RAIN_SENSOR indicates intermittent wiping based on rain intensity.
  """
  mode: Vehicle_Body_Windshield_Front_Wiping_Mode

  """
  Relative intensity/sensitivity for interval and rain sensor mode as requested by user/driver. Has no significance if Windshield.Wiping.Mode is OFF/SLOW/MEDIUM/FAST 0 - wipers inactive. 1 - minimum intensity (lowest frequency/sensitivity, longest interval). 2/3/4/... - higher intensity (higher frequency/sensitivity, shorter interval). Maximum value supported is vehicle specific.
  """
  intensity: Vehicle_Body_Windshield_Front_Wiping_Intensity

  """
  Signals to control behavior of wipers in detail. By default VSS expects only one instance.
  """
  system: Vehicle_Body_Windshield_Front_Wiping_System

  """
  Wiper wear as percent. 0 = No Wear. 100 = Worn. Replacement required. Method for calculating or estimating wiper wear is vehicle specific. For windshields with multiple wipers the wear reported shall correspond to the most worn wiper.
  """
  wiperWear: Vehicle_Body_Windshield_Front_Wiping_WiperWear

  """
  Wiper wear status. True = Worn, Replacement recommended or required. False = Not Worn.
  """
  isWipersWorn: Vehicle_Body_Windshield_Front_Wiping_IsWipersWorn
}

"""
Wiper mode requested by user/driver. INTERVAL indicates intermittent wiping, with fixed time interval between each wipe. RAIN_SENSOR indicates intermittent wiping based on rain intensity.
"""
type Vehicle_Body_Windshield_Front_Wiping_Mode {
  """
  Value: Wiper mode requested by user/driver. INTERVAL indicates intermittent wiping, with fixed time interval between each wipe. RAIN_SENSOR indicates intermittent wiping based on rain intensity.
  """
  value: String

  """
  Timestamp: Wiper mode requested by user/driver. INTERVAL indicates intermittent wiping, with fixed time interval between each wipe. RAIN_SENSOR indicates intermittent wiping based on rain intensity.
  """
  timestamp: String
}

"""
Relative intensity/sensitivity for interval and rain sensor mode as requested by user/driver. Has no significance if Windshield.Wiping.Mode is OFF/SLOW/MEDIUM/FAST 0 - wipers inactive. 1 - minimum intensity (lowest frequency/sensitivity, longest interval). 2/3/4/... - higher intensity (higher frequency/sensitivity, shorter interval). Maximum value supported is vehicle specific.
"""
type Vehicle_Body_Windshield_Front_Wiping_Intensity {
  """
  Value: Relative intensity/sensitivity for interval and rain sensor mode as requested by user/driver. Has no significance if Windshield.Wiping.Mode is OFF/SLOW/MEDIUM/FAST 0 - wipers inactive. 1 - minimum intensity (lowest frequency/sensitivity, longest interval). 2/3/4/... - higher intensity (higher frequency/sensitivity, shorter interval). Maximum value supported is vehicle specific.
  """
  value: Int

  """
  Timestamp: Relative intensity/sensitivity for interval and rain sensor mode as requested by user/driver. Has no significance if Windshield.Wiping.Mode is OFF/SLOW/MEDIUM/FAST 0 - wipers inactive. 1 - minimum intensity (lowest frequency/sensitivity, longest interval). 2/3/4/... - higher intensity (higher frequency/sensitivity, shorter interval). Maximum value supported is vehicle specific.
  """
  timestamp: String
}

"""
Signals to control behavior of wipers in detail. By default VSS expects only one instance.
"""
type Vehicle_Body_Windshield_Front_Wiping_System {
  """
  Requested mode of wiper system. STOP_HOLD means that the wipers shall move to position given by TargetPosition and then hold the position. WIPE means that wipers shall move to the position given by TargetPosition and then hold the position if no new TargetPosition is requested. PLANT_MODE means that wiping is disabled. Exact behavior is vehicle specific. EMERGENCY_STOP means that wiping shall be immediately stopped without holding the position.
  """
  mode: Vehicle_Body_Windshield_Front_Wiping_System_Mode

  """
  Wiping frequency/speed, measured in cycles per minute. The signal concerns the actual speed of the wiper blades when moving. Intervals/pauses are excluded, i.e. the value corresponds to the number of cycles that would be completed in 1 minute if wiping permanently over default range.
  """
  frequency: Vehicle_Body_Windshield_Front_Wiping_System_Frequency

  """
  Requested position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific. System behavior when receiving TargetPosition depends on Mode and IsEndingWipeCycle. Supported values are vehicle specific and might be dynamically corrected. If IsEndingWipeCycle=True then wipers will complete current movement before actuating new TargetPosition. If IsEndingWipeCycle=False then wipers will directly change destination if the TargetPosition is changed.
  """
  targetPosition: Vehicle_Body_Windshield_Front_Wiping_System_TargetPosition

  """
  Actual position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific.
  """
  actualPosition: Vehicle_Body_Windshield_Front_Wiping_System_ActualPosition

  """Actual current used by wiper drive."""
  driveCurrent: Vehicle_Body_Windshield_Front_Wiping_System_DriveCurrent

  """
  Indicates wiper movement. True if wiper blades are moving. Change of direction shall be considered as IsWiping if wipers will continue to move directly after the change of direction.
  """
  isWiping: Vehicle_Body_Windshield_Front_Wiping_System_IsWiping

  """
  Indicates if current wipe movement is completed or near completion. True = Movement is completed or near completion. Changes to RequestedPosition will be executed first after reaching previous RequestedPosition, if it has not already been reached. False = Movement is not near completion. Any change to RequestedPosition will be executed immediately. Change of direction may not be allowed.
  """
  isEndingWipeCycle: Vehicle_Body_Windshield_Front_Wiping_System_IsEndingWipeCycle

  """
  Indicates system failure. True if wiping is disabled due to system failure.
  """
  isWiperError: Vehicle_Body_Windshield_Front_Wiping_System_IsWiperError

  """
  Indicates if a requested position has been reached. IsPositionReached refers to the previous position in case the TargetPosition is updated while IsEndingWipeCycle=True. True = Current or Previous TargetPosition reached. False = Position not (yet) reached, or wipers have moved away from the reached position.
  """
  isPositionReached: Vehicle_Body_Windshield_Front_Wiping_System_IsPositionReached

  """
  Indicates if wiper movement is blocked. True = Movement blocked. False = Movement not blocked.
  """
  isBlocked: Vehicle_Body_Windshield_Front_Wiping_System_IsBlocked

  """
  Indicates if wiper system is overheated. True = Wiper system overheated. False = Wiper system not overheated.
  """
  isOverheated: Vehicle_Body_Windshield_Front_Wiping_System_IsOverheated
}

"""
Requested mode of wiper system. STOP_HOLD means that the wipers shall move to position given by TargetPosition and then hold the position. WIPE means that wipers shall move to the position given by TargetPosition and then hold the position if no new TargetPosition is requested. PLANT_MODE means that wiping is disabled. Exact behavior is vehicle specific. EMERGENCY_STOP means that wiping shall be immediately stopped without holding the position.
"""
type Vehicle_Body_Windshield_Front_Wiping_System_Mode {
  """
  Value: Requested mode of wiper system. STOP_HOLD means that the wipers shall move to position given by TargetPosition and then hold the position. WIPE means that wipers shall move to the position given by TargetPosition and then hold the position if no new TargetPosition is requested. PLANT_MODE means that wiping is disabled. Exact behavior is vehicle specific. EMERGENCY_STOP means that wiping shall be immediately stopped without holding the position.
  """
  value: String

  """
  Timestamp: Requested mode of wiper system. STOP_HOLD means that the wipers shall move to position given by TargetPosition and then hold the position. WIPE means that wipers shall move to the position given by TargetPosition and then hold the position if no new TargetPosition is requested. PLANT_MODE means that wiping is disabled. Exact behavior is vehicle specific. EMERGENCY_STOP means that wiping shall be immediately stopped without holding the position.
  """
  timestamp: String
}

"""
Wiping frequency/speed, measured in cycles per minute. The signal concerns the actual speed of the wiper blades when moving. Intervals/pauses are excluded, i.e. the value corresponds to the number of cycles that would be completed in 1 minute if wiping permanently over default range.
"""
type Vehicle_Body_Windshield_Front_Wiping_System_Frequency {
  """
  Value: Wiping frequency/speed, measured in cycles per minute. The signal concerns the actual speed of the wiper blades when moving. Intervals/pauses are excluded, i.e. the value corresponds to the number of cycles that would be completed in 1 minute if wiping permanently over default range.
  """
  value: Int

  """
  Timestamp: Wiping frequency/speed, measured in cycles per minute. The signal concerns the actual speed of the wiper blades when moving. Intervals/pauses are excluded, i.e. the value corresponds to the number of cycles that would be completed in 1 minute if wiping permanently over default range.
  """
  timestamp: String
}

"""
Requested position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific. System behavior when receiving TargetPosition depends on Mode and IsEndingWipeCycle. Supported values are vehicle specific and might be dynamically corrected. If IsEndingWipeCycle=True then wipers will complete current movement before actuating new TargetPosition. If IsEndingWipeCycle=False then wipers will directly change destination if the TargetPosition is changed.
"""
type Vehicle_Body_Windshield_Front_Wiping_System_TargetPosition {
  """
  Value: Requested position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific. System behavior when receiving TargetPosition depends on Mode and IsEndingWipeCycle. Supported values are vehicle specific and might be dynamically corrected. If IsEndingWipeCycle=True then wipers will complete current movement before actuating new TargetPosition. If IsEndingWipeCycle=False then wipers will directly change destination if the TargetPosition is changed.
  """
  value: Float

  """
  Timestamp: Requested position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific. System behavior when receiving TargetPosition depends on Mode and IsEndingWipeCycle. Supported values are vehicle specific and might be dynamically corrected. If IsEndingWipeCycle=True then wipers will complete current movement before actuating new TargetPosition. If IsEndingWipeCycle=False then wipers will directly change destination if the TargetPosition is changed.
  """
  timestamp: String

  """
  Unit of Requested position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific. System behavior when receiving TargetPosition depends on Mode and IsEndingWipeCycle. Supported values are vehicle specific and might be dynamically corrected. If IsEndingWipeCycle=True then wipers will complete current movement before actuating new TargetPosition. If IsEndingWipeCycle=False then wipers will directly change destination if the TargetPosition is changed.
  """
  unit: String
}

"""
Actual position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific.
"""
type Vehicle_Body_Windshield_Front_Wiping_System_ActualPosition {
  """
  Value: Actual position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific.
  """
  value: Float

  """
  Timestamp: Actual position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific.
  """
  timestamp: String

  """
  Unit of Actual position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific.
  """
  unit: String
}

"""Actual current used by wiper drive."""
type Vehicle_Body_Windshield_Front_Wiping_System_DriveCurrent {
  """Value: Actual current used by wiper drive."""
  value: Float

  """Timestamp: Actual current used by wiper drive."""
  timestamp: String

  """Unit of Actual current used by wiper drive."""
  unit: String
}

"""
Indicates wiper movement. True if wiper blades are moving. Change of direction shall be considered as IsWiping if wipers will continue to move directly after the change of direction.
"""
type Vehicle_Body_Windshield_Front_Wiping_System_IsWiping {
  """
  Value: Indicates wiper movement. True if wiper blades are moving. Change of direction shall be considered as IsWiping if wipers will continue to move directly after the change of direction.
  """
  value: Boolean

  """
  Timestamp: Indicates wiper movement. True if wiper blades are moving. Change of direction shall be considered as IsWiping if wipers will continue to move directly after the change of direction.
  """
  timestamp: String
}

"""
Indicates if current wipe movement is completed or near completion. True = Movement is completed or near completion. Changes to RequestedPosition will be executed first after reaching previous RequestedPosition, if it has not already been reached. False = Movement is not near completion. Any change to RequestedPosition will be executed immediately. Change of direction may not be allowed.
"""
type Vehicle_Body_Windshield_Front_Wiping_System_IsEndingWipeCycle {
  """
  Value: Indicates if current wipe movement is completed or near completion. True = Movement is completed or near completion. Changes to RequestedPosition will be executed first after reaching previous RequestedPosition, if it has not already been reached. False = Movement is not near completion. Any change to RequestedPosition will be executed immediately. Change of direction may not be allowed.
  """
  value: Boolean

  """
  Timestamp: Indicates if current wipe movement is completed or near completion. True = Movement is completed or near completion. Changes to RequestedPosition will be executed first after reaching previous RequestedPosition, if it has not already been reached. False = Movement is not near completion. Any change to RequestedPosition will be executed immediately. Change of direction may not be allowed.
  """
  timestamp: String
}

"""
Indicates system failure. True if wiping is disabled due to system failure.
"""
type Vehicle_Body_Windshield_Front_Wiping_System_IsWiperError {
  """
  Value: Indicates system failure. True if wiping is disabled due to system failure.
  """
  value: Boolean

  """
  Timestamp: Indicates system failure. True if wiping is disabled due to system failure.
  """
  timestamp: String
}

"""
Indicates if a requested position has been reached. IsPositionReached refers to the previous position in case the TargetPosition is updated while IsEndingWipeCycle=True. True = Current or Previous TargetPosition reached. False = Position not (yet) reached, or wipers have moved away from the reached position.
"""
type Vehicle_Body_Windshield_Front_Wiping_System_IsPositionReached {
  """
  Value: Indicates if a requested position has been reached. IsPositionReached refers to the previous position in case the TargetPosition is updated while IsEndingWipeCycle=True. True = Current or Previous TargetPosition reached. False = Position not (yet) reached, or wipers have moved away from the reached position.
  """
  value: Boolean

  """
  Timestamp: Indicates if a requested position has been reached. IsPositionReached refers to the previous position in case the TargetPosition is updated while IsEndingWipeCycle=True. True = Current or Previous TargetPosition reached. False = Position not (yet) reached, or wipers have moved away from the reached position.
  """
  timestamp: String
}

"""
Indicates if wiper movement is blocked. True = Movement blocked. False = Movement not blocked.
"""
type Vehicle_Body_Windshield_Front_Wiping_System_IsBlocked {
  """
  Value: Indicates if wiper movement is blocked. True = Movement blocked. False = Movement not blocked.
  """
  value: Boolean

  """
  Timestamp: Indicates if wiper movement is blocked. True = Movement blocked. False = Movement not blocked.
  """
  timestamp: String
}

"""
Indicates if wiper system is overheated. True = Wiper system overheated. False = Wiper system not overheated.
"""
type Vehicle_Body_Windshield_Front_Wiping_System_IsOverheated {
  """
  Value: Indicates if wiper system is overheated. True = Wiper system overheated. False = Wiper system not overheated.
  """
  value: Boolean

  """
  Timestamp: Indicates if wiper system is overheated. True = Wiper system overheated. False = Wiper system not overheated.
  """
  timestamp: String
}

"""
Wiper wear as percent. 0 = No Wear. 100 = Worn. Replacement required. Method for calculating or estimating wiper wear is vehicle specific. For windshields with multiple wipers the wear reported shall correspond to the most worn wiper.
"""
type Vehicle_Body_Windshield_Front_Wiping_WiperWear {
  """
  Value: Wiper wear as percent. 0 = No Wear. 100 = Worn. Replacement required. Method for calculating or estimating wiper wear is vehicle specific. For windshields with multiple wipers the wear reported shall correspond to the most worn wiper.
  """
  value: Int

  """
  Timestamp: Wiper wear as percent. 0 = No Wear. 100 = Worn. Replacement required. Method for calculating or estimating wiper wear is vehicle specific. For windshields with multiple wipers the wear reported shall correspond to the most worn wiper.
  """
  timestamp: String
}

"""
Wiper wear status. True = Worn, Replacement recommended or required. False = Not Worn.
"""
type Vehicle_Body_Windshield_Front_Wiping_IsWipersWorn {
  """
  Value: Wiper wear status. True = Worn, Replacement recommended or required. False = Not Worn.
  """
  value: Boolean

  """
  Timestamp: Wiper wear status. True = Worn, Replacement recommended or required. False = Not Worn.
  """
  timestamp: String
}

"""Windshield heater status. False - off, True - on."""
type Vehicle_Body_Windshield_Front_IsHeatingOn {
  """Value: Windshield heater status. False - off, True - on."""
  value: Boolean

  """Timestamp: Windshield heater status. False - off, True - on."""
  timestamp: String
}

"""Windshield washer fluid signals"""
type Vehicle_Body_Windshield_Front_WasherFluid {
  """
  Low level indication for washer fluid. True = Level Low. False = Level OK.
  """
  isLevelLow: Vehicle_Body_Windshield_Front_WasherFluid_IsLevelLow

  """Washer fluid level as a percent. 0 = Empty. 100 = Full."""
  level: Vehicle_Body_Windshield_Front_WasherFluid_Level
}

"""
Low level indication for washer fluid. True = Level Low. False = Level OK.
"""
type Vehicle_Body_Windshield_Front_WasherFluid_IsLevelLow {
  """
  Value: Low level indication for washer fluid. True = Level Low. False = Level OK.
  """
  value: Boolean

  """
  Timestamp: Low level indication for washer fluid. True = Level Low. False = Level OK.
  """
  timestamp: String
}

"""Washer fluid level as a percent. 0 = Empty. 100 = Full."""
type Vehicle_Body_Windshield_Front_WasherFluid_Level {
  """Value: Washer fluid level as a percent. 0 = Empty. 100 = Full."""
  value: Int

  """Timestamp: Washer fluid level as a percent. 0 = Empty. 100 = Full."""
  timestamp: String

  """Unit of Washer fluid level as a percent. 0 = Empty. 100 = Full."""
  unit: String
}

"""Windshield signals."""
type Vehicle_Body_Windshield_Rear {
  """Windshield wiper signals."""
  wiping: Vehicle_Body_Windshield_Rear_Wiping

  """Windshield heater status. False - off, True - on."""
  isHeatingOn: Vehicle_Body_Windshield_Rear_IsHeatingOn

  """Windshield washer fluid signals"""
  washerFluid: Vehicle_Body_Windshield_Rear_WasherFluid
}

"""Windshield wiper signals."""
type Vehicle_Body_Windshield_Rear_Wiping {
  """
  Wiper mode requested by user/driver. INTERVAL indicates intermittent wiping, with fixed time interval between each wipe. RAIN_SENSOR indicates intermittent wiping based on rain intensity.
  """
  mode: Vehicle_Body_Windshield_Rear_Wiping_Mode

  """
  Relative intensity/sensitivity for interval and rain sensor mode as requested by user/driver. Has no significance if Windshield.Wiping.Mode is OFF/SLOW/MEDIUM/FAST 0 - wipers inactive. 1 - minimum intensity (lowest frequency/sensitivity, longest interval). 2/3/4/... - higher intensity (higher frequency/sensitivity, shorter interval). Maximum value supported is vehicle specific.
  """
  intensity: Vehicle_Body_Windshield_Rear_Wiping_Intensity

  """
  Signals to control behavior of wipers in detail. By default VSS expects only one instance.
  """
  system: Vehicle_Body_Windshield_Rear_Wiping_System

  """
  Wiper wear as percent. 0 = No Wear. 100 = Worn. Replacement required. Method for calculating or estimating wiper wear is vehicle specific. For windshields with multiple wipers the wear reported shall correspond to the most worn wiper.
  """
  wiperWear: Vehicle_Body_Windshield_Rear_Wiping_WiperWear

  """
  Wiper wear status. True = Worn, Replacement recommended or required. False = Not Worn.
  """
  isWipersWorn: Vehicle_Body_Windshield_Rear_Wiping_IsWipersWorn
}

"""
Wiper mode requested by user/driver. INTERVAL indicates intermittent wiping, with fixed time interval between each wipe. RAIN_SENSOR indicates intermittent wiping based on rain intensity.
"""
type Vehicle_Body_Windshield_Rear_Wiping_Mode {
  """
  Value: Wiper mode requested by user/driver. INTERVAL indicates intermittent wiping, with fixed time interval between each wipe. RAIN_SENSOR indicates intermittent wiping based on rain intensity.
  """
  value: String

  """
  Timestamp: Wiper mode requested by user/driver. INTERVAL indicates intermittent wiping, with fixed time interval between each wipe. RAIN_SENSOR indicates intermittent wiping based on rain intensity.
  """
  timestamp: String
}

"""
Relative intensity/sensitivity for interval and rain sensor mode as requested by user/driver. Has no significance if Windshield.Wiping.Mode is OFF/SLOW/MEDIUM/FAST 0 - wipers inactive. 1 - minimum intensity (lowest frequency/sensitivity, longest interval). 2/3/4/... - higher intensity (higher frequency/sensitivity, shorter interval). Maximum value supported is vehicle specific.
"""
type Vehicle_Body_Windshield_Rear_Wiping_Intensity {
  """
  Value: Relative intensity/sensitivity for interval and rain sensor mode as requested by user/driver. Has no significance if Windshield.Wiping.Mode is OFF/SLOW/MEDIUM/FAST 0 - wipers inactive. 1 - minimum intensity (lowest frequency/sensitivity, longest interval). 2/3/4/... - higher intensity (higher frequency/sensitivity, shorter interval). Maximum value supported is vehicle specific.
  """
  value: Int

  """
  Timestamp: Relative intensity/sensitivity for interval and rain sensor mode as requested by user/driver. Has no significance if Windshield.Wiping.Mode is OFF/SLOW/MEDIUM/FAST 0 - wipers inactive. 1 - minimum intensity (lowest frequency/sensitivity, longest interval). 2/3/4/... - higher intensity (higher frequency/sensitivity, shorter interval). Maximum value supported is vehicle specific.
  """
  timestamp: String
}

"""
Signals to control behavior of wipers in detail. By default VSS expects only one instance.
"""
type Vehicle_Body_Windshield_Rear_Wiping_System {
  """
  Requested mode of wiper system. STOP_HOLD means that the wipers shall move to position given by TargetPosition and then hold the position. WIPE means that wipers shall move to the position given by TargetPosition and then hold the position if no new TargetPosition is requested. PLANT_MODE means that wiping is disabled. Exact behavior is vehicle specific. EMERGENCY_STOP means that wiping shall be immediately stopped without holding the position.
  """
  mode: Vehicle_Body_Windshield_Rear_Wiping_System_Mode

  """
  Wiping frequency/speed, measured in cycles per minute. The signal concerns the actual speed of the wiper blades when moving. Intervals/pauses are excluded, i.e. the value corresponds to the number of cycles that would be completed in 1 minute if wiping permanently over default range.
  """
  frequency: Vehicle_Body_Windshield_Rear_Wiping_System_Frequency

  """
  Requested position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific. System behavior when receiving TargetPosition depends on Mode and IsEndingWipeCycle. Supported values are vehicle specific and might be dynamically corrected. If IsEndingWipeCycle=True then wipers will complete current movement before actuating new TargetPosition. If IsEndingWipeCycle=False then wipers will directly change destination if the TargetPosition is changed.
  """
  targetPosition: Vehicle_Body_Windshield_Rear_Wiping_System_TargetPosition

  """
  Actual position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific.
  """
  actualPosition: Vehicle_Body_Windshield_Rear_Wiping_System_ActualPosition

  """Actual current used by wiper drive."""
  driveCurrent: Vehicle_Body_Windshield_Rear_Wiping_System_DriveCurrent

  """
  Indicates wiper movement. True if wiper blades are moving. Change of direction shall be considered as IsWiping if wipers will continue to move directly after the change of direction.
  """
  isWiping: Vehicle_Body_Windshield_Rear_Wiping_System_IsWiping

  """
  Indicates if current wipe movement is completed or near completion. True = Movement is completed or near completion. Changes to RequestedPosition will be executed first after reaching previous RequestedPosition, if it has not already been reached. False = Movement is not near completion. Any change to RequestedPosition will be executed immediately. Change of direction may not be allowed.
  """
  isEndingWipeCycle: Vehicle_Body_Windshield_Rear_Wiping_System_IsEndingWipeCycle

  """
  Indicates system failure. True if wiping is disabled due to system failure.
  """
  isWiperError: Vehicle_Body_Windshield_Rear_Wiping_System_IsWiperError

  """
  Indicates if a requested position has been reached. IsPositionReached refers to the previous position in case the TargetPosition is updated while IsEndingWipeCycle=True. True = Current or Previous TargetPosition reached. False = Position not (yet) reached, or wipers have moved away from the reached position.
  """
  isPositionReached: Vehicle_Body_Windshield_Rear_Wiping_System_IsPositionReached

  """
  Indicates if wiper movement is blocked. True = Movement blocked. False = Movement not blocked.
  """
  isBlocked: Vehicle_Body_Windshield_Rear_Wiping_System_IsBlocked

  """
  Indicates if wiper system is overheated. True = Wiper system overheated. False = Wiper system not overheated.
  """
  isOverheated: Vehicle_Body_Windshield_Rear_Wiping_System_IsOverheated
}

"""
Requested mode of wiper system. STOP_HOLD means that the wipers shall move to position given by TargetPosition and then hold the position. WIPE means that wipers shall move to the position given by TargetPosition and then hold the position if no new TargetPosition is requested. PLANT_MODE means that wiping is disabled. Exact behavior is vehicle specific. EMERGENCY_STOP means that wiping shall be immediately stopped without holding the position.
"""
type Vehicle_Body_Windshield_Rear_Wiping_System_Mode {
  """
  Value: Requested mode of wiper system. STOP_HOLD means that the wipers shall move to position given by TargetPosition and then hold the position. WIPE means that wipers shall move to the position given by TargetPosition and then hold the position if no new TargetPosition is requested. PLANT_MODE means that wiping is disabled. Exact behavior is vehicle specific. EMERGENCY_STOP means that wiping shall be immediately stopped without holding the position.
  """
  value: String

  """
  Timestamp: Requested mode of wiper system. STOP_HOLD means that the wipers shall move to position given by TargetPosition and then hold the position. WIPE means that wipers shall move to the position given by TargetPosition and then hold the position if no new TargetPosition is requested. PLANT_MODE means that wiping is disabled. Exact behavior is vehicle specific. EMERGENCY_STOP means that wiping shall be immediately stopped without holding the position.
  """
  timestamp: String
}

"""
Wiping frequency/speed, measured in cycles per minute. The signal concerns the actual speed of the wiper blades when moving. Intervals/pauses are excluded, i.e. the value corresponds to the number of cycles that would be completed in 1 minute if wiping permanently over default range.
"""
type Vehicle_Body_Windshield_Rear_Wiping_System_Frequency {
  """
  Value: Wiping frequency/speed, measured in cycles per minute. The signal concerns the actual speed of the wiper blades when moving. Intervals/pauses are excluded, i.e. the value corresponds to the number of cycles that would be completed in 1 minute if wiping permanently over default range.
  """
  value: Int

  """
  Timestamp: Wiping frequency/speed, measured in cycles per minute. The signal concerns the actual speed of the wiper blades when moving. Intervals/pauses are excluded, i.e. the value corresponds to the number of cycles that would be completed in 1 minute if wiping permanently over default range.
  """
  timestamp: String
}

"""
Requested position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific. System behavior when receiving TargetPosition depends on Mode and IsEndingWipeCycle. Supported values are vehicle specific and might be dynamically corrected. If IsEndingWipeCycle=True then wipers will complete current movement before actuating new TargetPosition. If IsEndingWipeCycle=False then wipers will directly change destination if the TargetPosition is changed.
"""
type Vehicle_Body_Windshield_Rear_Wiping_System_TargetPosition {
  """
  Value: Requested position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific. System behavior when receiving TargetPosition depends on Mode and IsEndingWipeCycle. Supported values are vehicle specific and might be dynamically corrected. If IsEndingWipeCycle=True then wipers will complete current movement before actuating new TargetPosition. If IsEndingWipeCycle=False then wipers will directly change destination if the TargetPosition is changed.
  """
  value: Float

  """
  Timestamp: Requested position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific. System behavior when receiving TargetPosition depends on Mode and IsEndingWipeCycle. Supported values are vehicle specific and might be dynamically corrected. If IsEndingWipeCycle=True then wipers will complete current movement before actuating new TargetPosition. If IsEndingWipeCycle=False then wipers will directly change destination if the TargetPosition is changed.
  """
  timestamp: String

  """
  Unit of Requested position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific. System behavior when receiving TargetPosition depends on Mode and IsEndingWipeCycle. Supported values are vehicle specific and might be dynamically corrected. If IsEndingWipeCycle=True then wipers will complete current movement before actuating new TargetPosition. If IsEndingWipeCycle=False then wipers will directly change destination if the TargetPosition is changed.
  """
  unit: String
}

"""
Actual position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific.
"""
type Vehicle_Body_Windshield_Rear_Wiping_System_ActualPosition {
  """
  Value: Actual position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific.
  """
  value: Float

  """
  Timestamp: Actual position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific.
  """
  timestamp: String

  """
  Unit of Actual position of main wiper blade for the wiper system relative to reference position. Location of reference position (0 degrees) and direction of positive/negative degrees is vehicle specific.
  """
  unit: String
}

"""Actual current used by wiper drive."""
type Vehicle_Body_Windshield_Rear_Wiping_System_DriveCurrent {
  """Value: Actual current used by wiper drive."""
  value: Float

  """Timestamp: Actual current used by wiper drive."""
  timestamp: String

  """Unit of Actual current used by wiper drive."""
  unit: String
}

"""
Indicates wiper movement. True if wiper blades are moving. Change of direction shall be considered as IsWiping if wipers will continue to move directly after the change of direction.
"""
type Vehicle_Body_Windshield_Rear_Wiping_System_IsWiping {
  """
  Value: Indicates wiper movement. True if wiper blades are moving. Change of direction shall be considered as IsWiping if wipers will continue to move directly after the change of direction.
  """
  value: Boolean

  """
  Timestamp: Indicates wiper movement. True if wiper blades are moving. Change of direction shall be considered as IsWiping if wipers will continue to move directly after the change of direction.
  """
  timestamp: String
}

"""
Indicates if current wipe movement is completed or near completion. True = Movement is completed or near completion. Changes to RequestedPosition will be executed first after reaching previous RequestedPosition, if it has not already been reached. False = Movement is not near completion. Any change to RequestedPosition will be executed immediately. Change of direction may not be allowed.
"""
type Vehicle_Body_Windshield_Rear_Wiping_System_IsEndingWipeCycle {
  """
  Value: Indicates if current wipe movement is completed or near completion. True = Movement is completed or near completion. Changes to RequestedPosition will be executed first after reaching previous RequestedPosition, if it has not already been reached. False = Movement is not near completion. Any change to RequestedPosition will be executed immediately. Change of direction may not be allowed.
  """
  value: Boolean

  """
  Timestamp: Indicates if current wipe movement is completed or near completion. True = Movement is completed or near completion. Changes to RequestedPosition will be executed first after reaching previous RequestedPosition, if it has not already been reached. False = Movement is not near completion. Any change to RequestedPosition will be executed immediately. Change of direction may not be allowed.
  """
  timestamp: String
}

"""
Indicates system failure. True if wiping is disabled due to system failure.
"""
type Vehicle_Body_Windshield_Rear_Wiping_System_IsWiperError {
  """
  Value: Indicates system failure. True if wiping is disabled due to system failure.
  """
  value: Boolean

  """
  Timestamp: Indicates system failure. True if wiping is disabled due to system failure.
  """
  timestamp: String
}

"""
Indicates if a requested position has been reached. IsPositionReached refers to the previous position in case the TargetPosition is updated while IsEndingWipeCycle=True. True = Current or Previous TargetPosition reached. False = Position not (yet) reached, or wipers have moved away from the reached position.
"""
type Vehicle_Body_Windshield_Rear_Wiping_System_IsPositionReached {
  """
  Value: Indicates if a requested position has been reached. IsPositionReached refers to the previous position in case the TargetPosition is updated while IsEndingWipeCycle=True. True = Current or Previous TargetPosition reached. False = Position not (yet) reached, or wipers have moved away from the reached position.
  """
  value: Boolean

  """
  Timestamp: Indicates if a requested position has been reached. IsPositionReached refers to the previous position in case the TargetPosition is updated while IsEndingWipeCycle=True. True = Current or Previous TargetPosition reached. False = Position not (yet) reached, or wipers have moved away from the reached position.
  """
  timestamp: String
}

"""
Indicates if wiper movement is blocked. True = Movement blocked. False = Movement not blocked.
"""
type Vehicle_Body_Windshield_Rear_Wiping_System_IsBlocked {
  """
  Value: Indicates if wiper movement is blocked. True = Movement blocked. False = Movement not blocked.
  """
  value: Boolean

  """
  Timestamp: Indicates if wiper movement is blocked. True = Movement blocked. False = Movement not blocked.
  """
  timestamp: String
}

"""
Indicates if wiper system is overheated. True = Wiper system overheated. False = Wiper system not overheated.
"""
type Vehicle_Body_Windshield_Rear_Wiping_System_IsOverheated {
  """
  Value: Indicates if wiper system is overheated. True = Wiper system overheated. False = Wiper system not overheated.
  """
  value: Boolean

  """
  Timestamp: Indicates if wiper system is overheated. True = Wiper system overheated. False = Wiper system not overheated.
  """
  timestamp: String
}

"""
Wiper wear as percent. 0 = No Wear. 100 = Worn. Replacement required. Method for calculating or estimating wiper wear is vehicle specific. For windshields with multiple wipers the wear reported shall correspond to the most worn wiper.
"""
type Vehicle_Body_Windshield_Rear_Wiping_WiperWear {
  """
  Value: Wiper wear as percent. 0 = No Wear. 100 = Worn. Replacement required. Method for calculating or estimating wiper wear is vehicle specific. For windshields with multiple wipers the wear reported shall correspond to the most worn wiper.
  """
  value: Int

  """
  Timestamp: Wiper wear as percent. 0 = No Wear. 100 = Worn. Replacement required. Method for calculating or estimating wiper wear is vehicle specific. For windshields with multiple wipers the wear reported shall correspond to the most worn wiper.
  """
  timestamp: String
}

"""
Wiper wear status. True = Worn, Replacement recommended or required. False = Not Worn.
"""
type Vehicle_Body_Windshield_Rear_Wiping_IsWipersWorn {
  """
  Value: Wiper wear status. True = Worn, Replacement recommended or required. False = Not Worn.
  """
  value: Boolean

  """
  Timestamp: Wiper wear status. True = Worn, Replacement recommended or required. False = Not Worn.
  """
  timestamp: String
}

"""Windshield heater status. False - off, True - on."""
type Vehicle_Body_Windshield_Rear_IsHeatingOn {
  """Value: Windshield heater status. False - off, True - on."""
  value: Boolean

  """Timestamp: Windshield heater status. False - off, True - on."""
  timestamp: String
}

"""Windshield washer fluid signals"""
type Vehicle_Body_Windshield_Rear_WasherFluid {
  """
  Low level indication for washer fluid. True = Level Low. False = Level OK.
  """
  isLevelLow: Vehicle_Body_Windshield_Rear_WasherFluid_IsLevelLow

  """Washer fluid level as a percent. 0 = Empty. 100 = Full."""
  level: Vehicle_Body_Windshield_Rear_WasherFluid_Level
}

"""
Low level indication for washer fluid. True = Level Low. False = Level OK.
"""
type Vehicle_Body_Windshield_Rear_WasherFluid_IsLevelLow {
  """
  Value: Low level indication for washer fluid. True = Level Low. False = Level OK.
  """
  value: Boolean

  """
  Timestamp: Low level indication for washer fluid. True = Level Low. False = Level OK.
  """
  timestamp: String
}

"""Washer fluid level as a percent. 0 = Empty. 100 = Full."""
type Vehicle_Body_Windshield_Rear_WasherFluid_Level {
  """Value: Washer fluid level as a percent. 0 = Empty. 100 = Full."""
  value: Int

  """Timestamp: Washer fluid level as a percent. 0 = Empty. 100 = Full."""
  timestamp: String

  """Unit of Washer fluid level as a percent. 0 = Empty. 100 = Full."""
  unit: String
}

"""All lights."""
type Vehicle_Body_Lights {
  """Is high beam on?"""
  isHighBeamOn: Vehicle_Body_Lights_IsHighBeamOn

  """Is low beam on?"""
  isLowBeamOn: Vehicle_Body_Lights_IsLowBeamOn

  """Are running lights on?"""
  isRunningOn: Vehicle_Body_Lights_IsRunningOn

  """Is backup (reverse) light on?"""
  isBackupOn: Vehicle_Body_Lights_IsBackupOn

  """Is parking light on?"""
  isParkingOn: Vehicle_Body_Lights_IsParkingOn

  """Is brake light on?"""
  isBrakeOn: Vehicle_Body_Lights_IsBrakeOn

  """Is rear fog light on?"""
  isRearFogOn: Vehicle_Body_Lights_IsRearFogOn

  """Is front fog light on?"""
  isFrontFogOn: Vehicle_Body_Lights_IsFrontFogOn

  """Are hazards on?"""
  isHazardOn: Vehicle_Body_Lights_IsHazardOn

  """Is left indicator flashing?"""
  isLeftIndicatorOn: Vehicle_Body_Lights_IsLeftIndicatorOn

  """Is right indicator flashing?"""
  isRightIndicatorOn: Vehicle_Body_Lights_IsRightIndicatorOn
}

"""Is high beam on?"""
type Vehicle_Body_Lights_IsHighBeamOn {
  """Value: Is high beam on?"""
  value: Boolean

  """Timestamp: Is high beam on?"""
  timestamp: String
}

"""Is low beam on?"""
type Vehicle_Body_Lights_IsLowBeamOn {
  """Value: Is low beam on?"""
  value: Boolean

  """Timestamp: Is low beam on?"""
  timestamp: String
}

"""Are running lights on?"""
type Vehicle_Body_Lights_IsRunningOn {
  """Value: Are running lights on?"""
  value: Boolean

  """Timestamp: Are running lights on?"""
  timestamp: String
}

"""Is backup (reverse) light on?"""
type Vehicle_Body_Lights_IsBackupOn {
  """Value: Is backup (reverse) light on?"""
  value: Boolean

  """Timestamp: Is backup (reverse) light on?"""
  timestamp: String
}

"""Is parking light on?"""
type Vehicle_Body_Lights_IsParkingOn {
  """Value: Is parking light on?"""
  value: Boolean

  """Timestamp: Is parking light on?"""
  timestamp: String
}

"""Is brake light on?"""
type Vehicle_Body_Lights_IsBrakeOn {
  """Value: Is brake light on?"""
  value: Boolean

  """Timestamp: Is brake light on?"""
  timestamp: String
}

"""Is rear fog light on?"""
type Vehicle_Body_Lights_IsRearFogOn {
  """Value: Is rear fog light on?"""
  value: Boolean

  """Timestamp: Is rear fog light on?"""
  timestamp: String
}

"""Is front fog light on?"""
type Vehicle_Body_Lights_IsFrontFogOn {
  """Value: Is front fog light on?"""
  value: Boolean

  """Timestamp: Is front fog light on?"""
  timestamp: String
}

"""Are hazards on?"""
type Vehicle_Body_Lights_IsHazardOn {
  """Value: Are hazards on?"""
  value: Boolean

  """Timestamp: Are hazards on?"""
  timestamp: String
}

"""Is left indicator flashing?"""
type Vehicle_Body_Lights_IsLeftIndicatorOn {
  """Value: Is left indicator flashing?"""
  value: Boolean

  """Timestamp: Is left indicator flashing?"""
  timestamp: String
}

"""Is right indicator flashing?"""
type Vehicle_Body_Lights_IsRightIndicatorOn {
  """Value: Is right indicator flashing?"""
  value: Boolean

  """Timestamp: Is right indicator flashing?"""
  timestamp: String
}

"""All mirrors."""
type Vehicle_Body_Mirrors {
  """All mirrors."""
  left: Vehicle_Body_Mirrors_Left

  """All mirrors."""
  right: Vehicle_Body_Mirrors_Right
}

"""All mirrors."""
type Vehicle_Body_Mirrors_Left {
  """
  Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.
  """
  tilt: Vehicle_Body_Mirrors_Left_Tilt

  """
  Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.
  """
  pan: Vehicle_Body_Mirrors_Left_Pan

  """Mirror Heater on or off. True = Heater On. False = Heater Off."""
  isHeatingOn: Vehicle_Body_Mirrors_Left_IsHeatingOn
}

"""
Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.
"""
type Vehicle_Body_Mirrors_Left_Tilt {
  """
  Value: Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.
  """
  value: Int

  """
  Timestamp: Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.
  """
  timestamp: String

  """
  Unit of Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.
  """
  unit: String
}

"""
Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.
"""
type Vehicle_Body_Mirrors_Left_Pan {
  """
  Value: Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.
  """
  value: Int

  """
  Timestamp: Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.
  """
  timestamp: String

  """
  Unit of Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.
  """
  unit: String
}

"""Mirror Heater on or off. True = Heater On. False = Heater Off."""
type Vehicle_Body_Mirrors_Left_IsHeatingOn {
  """Value: Mirror Heater on or off. True = Heater On. False = Heater Off."""
  value: Boolean

  """
  Timestamp: Mirror Heater on or off. True = Heater On. False = Heater Off.
  """
  timestamp: String
}

"""All mirrors."""
type Vehicle_Body_Mirrors_Right {
  """
  Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.
  """
  tilt: Vehicle_Body_Mirrors_Right_Tilt

  """
  Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.
  """
  pan: Vehicle_Body_Mirrors_Right_Pan

  """Mirror Heater on or off. True = Heater On. False = Heater Off."""
  isHeatingOn: Vehicle_Body_Mirrors_Right_IsHeatingOn
}

"""
Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.
"""
type Vehicle_Body_Mirrors_Right_Tilt {
  """
  Value: Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.
  """
  value: Int

  """
  Timestamp: Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.
  """
  timestamp: String

  """
  Unit of Mirror tilt as a percent. 0 = Center Position. 100 = Fully Upward Position. -100 = Fully Downward Position.
  """
  unit: String
}

"""
Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.
"""
type Vehicle_Body_Mirrors_Right_Pan {
  """
  Value: Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.
  """
  value: Int

  """
  Timestamp: Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.
  """
  timestamp: String

  """
  Unit of Mirror pan as a percent. 0 = Center Position. 100 = Fully Left Position. -100 = Fully Right Position.
  """
  unit: String
}

"""Mirror Heater on or off. True = Heater On. False = Heater Off."""
type Vehicle_Body_Mirrors_Right_IsHeatingOn {
  """Value: Mirror Heater on or off. True = Heater On. False = Heater Off."""
  value: Boolean

  """
  Timestamp: Mirror Heater on or off. True = Heater On. False = Heater Off.
  """
  timestamp: String
}

"""
Rear spoiler position, 0% = Spoiler fully stowed. 100% = Spoiler fully exposed.
"""
type Vehicle_Body_RearMainSpoilerPosition {
  """
  Value: Rear spoiler position, 0% = Spoiler fully stowed. 100% = Spoiler fully exposed.
  """
  value: Float

  """
  Timestamp: Rear spoiler position, 0% = Spoiler fully stowed. 100% = Spoiler fully exposed.
  """
  timestamp: String

  """
  Unit of Rear spoiler position, 0% = Spoiler fully stowed. 100% = Spoiler fully exposed.
  """
  unit: String
}

"""All in-cabin components, including doors."""
type Vehicle_Cabin {
  """Rear window shade."""
  rearShade: Vehicle_Cabin_RearShade

  """Climate control"""
  hvac: Vehicle_Cabin_HVAC

  """Infotainment system."""
  infotainment: Vehicle_Cabin_Infotainment

  """Sun roof status."""
  sunroof: Vehicle_Cabin_Sunroof

  """Rearview mirror."""
  rearviewMirror: Vehicle_Cabin_RearviewMirror

  """Interior lights signals and sensors."""
  lights: Vehicle_Cabin_Lights

  """All doors, including windows and switches."""
  door: Vehicle_Cabin_Door

  """Number of doors in vehicle."""
  doorCount: Vehicle_Cabin_DoorCount

  """All seats."""
  seat: Vehicle_Cabin_Seat

  """The position of the driver seat in row 1."""
  driverPosition: Vehicle_Cabin_DriverPosition

  """Number of seat rows in vehicle."""
  seatRowCount: Vehicle_Cabin_SeatRowCount

  """Number of seats across each row from the front to the rear."""
  seatPosCount: Vehicle_Cabin_SeatPosCount

  """Convertible roof."""
  convertible: Vehicle_Cabin_Convertible
}

"""Rear window shade."""
type Vehicle_Cabin_RearShade {
  """Switch controlling sliding action such as window, sunroof, or blind."""
  switch: Vehicle_Cabin_RearShade_Switch

  """Position of window blind. 0 = Fully retracted. 100 = Fully deployed."""
  position: Vehicle_Cabin_RearShade_Position
}

"""Switch controlling sliding action such as window, sunroof, or blind."""
type Vehicle_Cabin_RearShade_Switch {
  """
  Value: Switch controlling sliding action such as window, sunroof, or blind.
  """
  value: String

  """
  Timestamp: Switch controlling sliding action such as window, sunroof, or blind.
  """
  timestamp: String
}

"""Position of window blind. 0 = Fully retracted. 100 = Fully deployed."""
type Vehicle_Cabin_RearShade_Position {
  """
  Value: Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  value: Int

  """
  Timestamp: Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  timestamp: String

  """
  Unit of Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  unit: String
}

"""Climate control"""
type Vehicle_Cabin_HVAC {
  """HVAC for single station in the vehicle"""
  station: Vehicle_Cabin_HVAC_Station

  """Is recirculation active."""
  isRecirculationActive: Vehicle_Cabin_HVAC_IsRecirculationActive

  """Is front defroster active."""
  isFrontDefrosterActive: Vehicle_Cabin_HVAC_IsFrontDefrosterActive

  """Is rear defroster active."""
  isRearDefrosterActive: Vehicle_Cabin_HVAC_IsRearDefrosterActive

  """Is Air conditioning active."""
  isAirConditioningActive: Vehicle_Cabin_HVAC_IsAirConditioningActive

  """Ambient air temperature inside the vehicle."""
  ambientAirTemperature: Vehicle_Cabin_HVAC_AmbientAirTemperature
}

"""HVAC for single station in the vehicle"""
type Vehicle_Cabin_HVAC_Station {
  """HVAC for single station in the vehicle"""
  row1: Vehicle_Cabin_HVAC_Station_Row1

  """HVAC for single station in the vehicle"""
  row2: Vehicle_Cabin_HVAC_Station_Row2

  """HVAC for single station in the vehicle"""
  row3: Vehicle_Cabin_HVAC_Station_Row3

  """HVAC for single station in the vehicle"""
  row4: Vehicle_Cabin_HVAC_Station_Row4
}

"""HVAC for single station in the vehicle"""
type Vehicle_Cabin_HVAC_Station_Row1 {
  """HVAC for single station in the vehicle"""
  left: Vehicle_Cabin_HVAC_Station_Row1_Left

  """HVAC for single station in the vehicle"""
  right: Vehicle_Cabin_HVAC_Station_Row1_Right
}

"""HVAC for single station in the vehicle"""
type Vehicle_Cabin_HVAC_Station_Row1_Left {
  """Fan Speed, 0 = off. 100 = max"""
  fanSpeed: Vehicle_Cabin_HVAC_Station_Row1_Left_FanSpeed

  """Temperature"""
  temperature: Vehicle_Cabin_HVAC_Station_Row1_Left_Temperature

  """Direction of airstream"""
  airDistribution: Vehicle_Cabin_HVAC_Station_Row1_Left_AirDistribution
}

"""Fan Speed, 0 = off. 100 = max"""
type Vehicle_Cabin_HVAC_Station_Row1_Left_FanSpeed {
  """Value: Fan Speed, 0 = off. 100 = max"""
  value: Int

  """Timestamp: Fan Speed, 0 = off. 100 = max"""
  timestamp: String

  """Unit of Fan Speed, 0 = off. 100 = max"""
  unit: String
}

"""Temperature"""
type Vehicle_Cabin_HVAC_Station_Row1_Left_Temperature {
  """Value: Temperature"""
  value: Int

  """Timestamp: Temperature"""
  timestamp: String

  """Unit of Temperature"""
  unit: String
}

"""Direction of airstream"""
type Vehicle_Cabin_HVAC_Station_Row1_Left_AirDistribution {
  """Value: Direction of airstream"""
  value: String

  """Timestamp: Direction of airstream"""
  timestamp: String
}

"""HVAC for single station in the vehicle"""
type Vehicle_Cabin_HVAC_Station_Row1_Right {
  """Fan Speed, 0 = off. 100 = max"""
  fanSpeed: Vehicle_Cabin_HVAC_Station_Row1_Right_FanSpeed

  """Temperature"""
  temperature: Vehicle_Cabin_HVAC_Station_Row1_Right_Temperature

  """Direction of airstream"""
  airDistribution: Vehicle_Cabin_HVAC_Station_Row1_Right_AirDistribution
}

"""Fan Speed, 0 = off. 100 = max"""
type Vehicle_Cabin_HVAC_Station_Row1_Right_FanSpeed {
  """Value: Fan Speed, 0 = off. 100 = max"""
  value: Int

  """Timestamp: Fan Speed, 0 = off. 100 = max"""
  timestamp: String

  """Unit of Fan Speed, 0 = off. 100 = max"""
  unit: String
}

"""Temperature"""
type Vehicle_Cabin_HVAC_Station_Row1_Right_Temperature {
  """Value: Temperature"""
  value: Int

  """Timestamp: Temperature"""
  timestamp: String

  """Unit of Temperature"""
  unit: String
}

"""Direction of airstream"""
type Vehicle_Cabin_HVAC_Station_Row1_Right_AirDistribution {
  """Value: Direction of airstream"""
  value: String

  """Timestamp: Direction of airstream"""
  timestamp: String
}

"""HVAC for single station in the vehicle"""
type Vehicle_Cabin_HVAC_Station_Row2 {
  """HVAC for single station in the vehicle"""
  left: Vehicle_Cabin_HVAC_Station_Row2_Left

  """HVAC for single station in the vehicle"""
  right: Vehicle_Cabin_HVAC_Station_Row2_Right
}

"""HVAC for single station in the vehicle"""
type Vehicle_Cabin_HVAC_Station_Row2_Left {
  """Fan Speed, 0 = off. 100 = max"""
  fanSpeed: Vehicle_Cabin_HVAC_Station_Row2_Left_FanSpeed

  """Temperature"""
  temperature: Vehicle_Cabin_HVAC_Station_Row2_Left_Temperature

  """Direction of airstream"""
  airDistribution: Vehicle_Cabin_HVAC_Station_Row2_Left_AirDistribution
}

"""Fan Speed, 0 = off. 100 = max"""
type Vehicle_Cabin_HVAC_Station_Row2_Left_FanSpeed {
  """Value: Fan Speed, 0 = off. 100 = max"""
  value: Int

  """Timestamp: Fan Speed, 0 = off. 100 = max"""
  timestamp: String

  """Unit of Fan Speed, 0 = off. 100 = max"""
  unit: String
}

"""Temperature"""
type Vehicle_Cabin_HVAC_Station_Row2_Left_Temperature {
  """Value: Temperature"""
  value: Int

  """Timestamp: Temperature"""
  timestamp: String

  """Unit of Temperature"""
  unit: String
}

"""Direction of airstream"""
type Vehicle_Cabin_HVAC_Station_Row2_Left_AirDistribution {
  """Value: Direction of airstream"""
  value: String

  """Timestamp: Direction of airstream"""
  timestamp: String
}

"""HVAC for single station in the vehicle"""
type Vehicle_Cabin_HVAC_Station_Row2_Right {
  """Fan Speed, 0 = off. 100 = max"""
  fanSpeed: Vehicle_Cabin_HVAC_Station_Row2_Right_FanSpeed

  """Temperature"""
  temperature: Vehicle_Cabin_HVAC_Station_Row2_Right_Temperature

  """Direction of airstream"""
  airDistribution: Vehicle_Cabin_HVAC_Station_Row2_Right_AirDistribution
}

"""Fan Speed, 0 = off. 100 = max"""
type Vehicle_Cabin_HVAC_Station_Row2_Right_FanSpeed {
  """Value: Fan Speed, 0 = off. 100 = max"""
  value: Int

  """Timestamp: Fan Speed, 0 = off. 100 = max"""
  timestamp: String

  """Unit of Fan Speed, 0 = off. 100 = max"""
  unit: String
}

"""Temperature"""
type Vehicle_Cabin_HVAC_Station_Row2_Right_Temperature {
  """Value: Temperature"""
  value: Int

  """Timestamp: Temperature"""
  timestamp: String

  """Unit of Temperature"""
  unit: String
}

"""Direction of airstream"""
type Vehicle_Cabin_HVAC_Station_Row2_Right_AirDistribution {
  """Value: Direction of airstream"""
  value: String

  """Timestamp: Direction of airstream"""
  timestamp: String
}

"""HVAC for single station in the vehicle"""
type Vehicle_Cabin_HVAC_Station_Row3 {
  """HVAC for single station in the vehicle"""
  left: Vehicle_Cabin_HVAC_Station_Row3_Left

  """HVAC for single station in the vehicle"""
  right: Vehicle_Cabin_HVAC_Station_Row3_Right
}

"""HVAC for single station in the vehicle"""
type Vehicle_Cabin_HVAC_Station_Row3_Left {
  """Fan Speed, 0 = off. 100 = max"""
  fanSpeed: Vehicle_Cabin_HVAC_Station_Row3_Left_FanSpeed

  """Temperature"""
  temperature: Vehicle_Cabin_HVAC_Station_Row3_Left_Temperature

  """Direction of airstream"""
  airDistribution: Vehicle_Cabin_HVAC_Station_Row3_Left_AirDistribution
}

"""Fan Speed, 0 = off. 100 = max"""
type Vehicle_Cabin_HVAC_Station_Row3_Left_FanSpeed {
  """Value: Fan Speed, 0 = off. 100 = max"""
  value: Int

  """Timestamp: Fan Speed, 0 = off. 100 = max"""
  timestamp: String

  """Unit of Fan Speed, 0 = off. 100 = max"""
  unit: String
}

"""Temperature"""
type Vehicle_Cabin_HVAC_Station_Row3_Left_Temperature {
  """Value: Temperature"""
  value: Int

  """Timestamp: Temperature"""
  timestamp: String

  """Unit of Temperature"""
  unit: String
}

"""Direction of airstream"""
type Vehicle_Cabin_HVAC_Station_Row3_Left_AirDistribution {
  """Value: Direction of airstream"""
  value: String

  """Timestamp: Direction of airstream"""
  timestamp: String
}

"""HVAC for single station in the vehicle"""
type Vehicle_Cabin_HVAC_Station_Row3_Right {
  """Fan Speed, 0 = off. 100 = max"""
  fanSpeed: Vehicle_Cabin_HVAC_Station_Row3_Right_FanSpeed

  """Temperature"""
  temperature: Vehicle_Cabin_HVAC_Station_Row3_Right_Temperature

  """Direction of airstream"""
  airDistribution: Vehicle_Cabin_HVAC_Station_Row3_Right_AirDistribution
}

"""Fan Speed, 0 = off. 100 = max"""
type Vehicle_Cabin_HVAC_Station_Row3_Right_FanSpeed {
  """Value: Fan Speed, 0 = off. 100 = max"""
  value: Int

  """Timestamp: Fan Speed, 0 = off. 100 = max"""
  timestamp: String

  """Unit of Fan Speed, 0 = off. 100 = max"""
  unit: String
}

"""Temperature"""
type Vehicle_Cabin_HVAC_Station_Row3_Right_Temperature {
  """Value: Temperature"""
  value: Int

  """Timestamp: Temperature"""
  timestamp: String

  """Unit of Temperature"""
  unit: String
}

"""Direction of airstream"""
type Vehicle_Cabin_HVAC_Station_Row3_Right_AirDistribution {
  """Value: Direction of airstream"""
  value: String

  """Timestamp: Direction of airstream"""
  timestamp: String
}

"""HVAC for single station in the vehicle"""
type Vehicle_Cabin_HVAC_Station_Row4 {
  """HVAC for single station in the vehicle"""
  left: Vehicle_Cabin_HVAC_Station_Row4_Left

  """HVAC for single station in the vehicle"""
  right: Vehicle_Cabin_HVAC_Station_Row4_Right
}

"""HVAC for single station in the vehicle"""
type Vehicle_Cabin_HVAC_Station_Row4_Left {
  """Fan Speed, 0 = off. 100 = max"""
  fanSpeed: Vehicle_Cabin_HVAC_Station_Row4_Left_FanSpeed

  """Temperature"""
  temperature: Vehicle_Cabin_HVAC_Station_Row4_Left_Temperature

  """Direction of airstream"""
  airDistribution: Vehicle_Cabin_HVAC_Station_Row4_Left_AirDistribution
}

"""Fan Speed, 0 = off. 100 = max"""
type Vehicle_Cabin_HVAC_Station_Row4_Left_FanSpeed {
  """Value: Fan Speed, 0 = off. 100 = max"""
  value: Int

  """Timestamp: Fan Speed, 0 = off. 100 = max"""
  timestamp: String

  """Unit of Fan Speed, 0 = off. 100 = max"""
  unit: String
}

"""Temperature"""
type Vehicle_Cabin_HVAC_Station_Row4_Left_Temperature {
  """Value: Temperature"""
  value: Int

  """Timestamp: Temperature"""
  timestamp: String

  """Unit of Temperature"""
  unit: String
}

"""Direction of airstream"""
type Vehicle_Cabin_HVAC_Station_Row4_Left_AirDistribution {
  """Value: Direction of airstream"""
  value: String

  """Timestamp: Direction of airstream"""
  timestamp: String
}

"""HVAC for single station in the vehicle"""
type Vehicle_Cabin_HVAC_Station_Row4_Right {
  """Fan Speed, 0 = off. 100 = max"""
  fanSpeed: Vehicle_Cabin_HVAC_Station_Row4_Right_FanSpeed

  """Temperature"""
  temperature: Vehicle_Cabin_HVAC_Station_Row4_Right_Temperature

  """Direction of airstream"""
  airDistribution: Vehicle_Cabin_HVAC_Station_Row4_Right_AirDistribution
}

"""Fan Speed, 0 = off. 100 = max"""
type Vehicle_Cabin_HVAC_Station_Row4_Right_FanSpeed {
  """Value: Fan Speed, 0 = off. 100 = max"""
  value: Int

  """Timestamp: Fan Speed, 0 = off. 100 = max"""
  timestamp: String

  """Unit of Fan Speed, 0 = off. 100 = max"""
  unit: String
}

"""Temperature"""
type Vehicle_Cabin_HVAC_Station_Row4_Right_Temperature {
  """Value: Temperature"""
  value: Int

  """Timestamp: Temperature"""
  timestamp: String

  """Unit of Temperature"""
  unit: String
}

"""Direction of airstream"""
type Vehicle_Cabin_HVAC_Station_Row4_Right_AirDistribution {
  """Value: Direction of airstream"""
  value: String

  """Timestamp: Direction of airstream"""
  timestamp: String
}

"""Is recirculation active."""
type Vehicle_Cabin_HVAC_IsRecirculationActive {
  """Value: Is recirculation active."""
  value: Boolean

  """Timestamp: Is recirculation active."""
  timestamp: String
}

"""Is front defroster active."""
type Vehicle_Cabin_HVAC_IsFrontDefrosterActive {
  """Value: Is front defroster active."""
  value: Boolean

  """Timestamp: Is front defroster active."""
  timestamp: String
}

"""Is rear defroster active."""
type Vehicle_Cabin_HVAC_IsRearDefrosterActive {
  """Value: Is rear defroster active."""
  value: Boolean

  """Timestamp: Is rear defroster active."""
  timestamp: String
}

"""Is Air conditioning active."""
type Vehicle_Cabin_HVAC_IsAirConditioningActive {
  """Value: Is Air conditioning active."""
  value: Boolean

  """Timestamp: Is Air conditioning active."""
  timestamp: String
}

"""Ambient air temperature inside the vehicle."""
type Vehicle_Cabin_HVAC_AmbientAirTemperature {
  """Value: Ambient air temperature inside the vehicle."""
  value: Float

  """Timestamp: Ambient air temperature inside the vehicle."""
  timestamp: String

  """Unit of Ambient air temperature inside the vehicle."""
  unit: String
}

"""Infotainment system."""
type Vehicle_Cabin_Infotainment {
  """All Media actions"""
  media: Vehicle_Cabin_Infotainment_Media

  """All navigation actions"""
  navigation: Vehicle_Cabin_Infotainment_Navigation

  """HMI related signals"""
  hmi: Vehicle_Cabin_Infotainment_HMI
}

"""All Media actions"""
type Vehicle_Cabin_Infotainment_Media {
  """Tells if the media was"""
  action: Vehicle_Cabin_Infotainment_Media_Action

  """Collection of signals updated in concert when a new media is played"""
  played: Vehicle_Cabin_Infotainment_Media_Played

  """URI of suggested media that was declined"""
  declinedUri: Vehicle_Cabin_Infotainment_Media_DeclinedURI

  """URI of suggested media that was selected"""
  selectedUri: Vehicle_Cabin_Infotainment_Media_SelectedURI

  """Current Media Volume"""
  volume: Vehicle_Cabin_Infotainment_Media_Volume
}

"""Tells if the media was"""
type Vehicle_Cabin_Infotainment_Media_Action {
  """Value: Tells if the media was"""
  value: String

  """Timestamp: Tells if the media was"""
  timestamp: String
}

"""Collection of signals updated in concert when a new media is played"""
type Vehicle_Cabin_Infotainment_Media_Played {
  """Media selected for playback"""
  source: Vehicle_Cabin_Infotainment_Media_Played_Source

  """Name of artist being played"""
  artist: Vehicle_Cabin_Infotainment_Media_Played_Artist

  """Name of album being played"""
  album: Vehicle_Cabin_Infotainment_Media_Played_Album

  """Name of track being played"""
  track: Vehicle_Cabin_Infotainment_Media_Played_Track

  """User Resource associated with the media"""
  uri: Vehicle_Cabin_Infotainment_Media_Played_URI
}

"""Media selected for playback"""
type Vehicle_Cabin_Infotainment_Media_Played_Source {
  """Value: Media selected for playback"""
  value: String

  """Timestamp: Media selected for playback"""
  timestamp: String
}

"""Name of artist being played"""
type Vehicle_Cabin_Infotainment_Media_Played_Artist {
  """Value: Name of artist being played"""
  value: String

  """Timestamp: Name of artist being played"""
  timestamp: String
}

"""Name of album being played"""
type Vehicle_Cabin_Infotainment_Media_Played_Album {
  """Value: Name of album being played"""
  value: String

  """Timestamp: Name of album being played"""
  timestamp: String
}

"""Name of track being played"""
type Vehicle_Cabin_Infotainment_Media_Played_Track {
  """Value: Name of track being played"""
  value: String

  """Timestamp: Name of track being played"""
  timestamp: String
}

"""User Resource associated with the media"""
type Vehicle_Cabin_Infotainment_Media_Played_URI {
  """Value: User Resource associated with the media"""
  value: String

  """Timestamp: User Resource associated with the media"""
  timestamp: String
}

"""URI of suggested media that was declined"""
type Vehicle_Cabin_Infotainment_Media_DeclinedURI {
  """Value: URI of suggested media that was declined"""
  value: String

  """Timestamp: URI of suggested media that was declined"""
  timestamp: String
}

"""URI of suggested media that was selected"""
type Vehicle_Cabin_Infotainment_Media_SelectedURI {
  """Value: URI of suggested media that was selected"""
  value: String

  """Timestamp: URI of suggested media that was selected"""
  timestamp: String
}

"""Current Media Volume"""
type Vehicle_Cabin_Infotainment_Media_Volume {
  """Value: Current Media Volume"""
  value: Int

  """Timestamp: Current Media Volume"""
  timestamp: String
}

"""All navigation actions"""
type Vehicle_Cabin_Infotainment_Navigation {
  """A navigation has been selected."""
  destinationSet: Vehicle_Cabin_Infotainment_Navigation_DestinationSet
}

"""A navigation has been selected."""
type Vehicle_Cabin_Infotainment_Navigation_DestinationSet {
  """Latitude of destination in WGS 84 geodetic coordinates."""
  latitude: Vehicle_Cabin_Infotainment_Navigation_DestinationSet_Latitude

  """Longitude of destination in WGS 84 geodetic coordinates."""
  longitude: Vehicle_Cabin_Infotainment_Navigation_DestinationSet_Longitude
}

"""Latitude of destination in WGS 84 geodetic coordinates."""
type Vehicle_Cabin_Infotainment_Navigation_DestinationSet_Latitude {
  """Value: Latitude of destination in WGS 84 geodetic coordinates."""
  value: Float

  """Timestamp: Latitude of destination in WGS 84 geodetic coordinates."""
  timestamp: String

  """Unit of Latitude of destination in WGS 84 geodetic coordinates."""
  unit: String
}

"""Longitude of destination in WGS 84 geodetic coordinates."""
type Vehicle_Cabin_Infotainment_Navigation_DestinationSet_Longitude {
  """Value: Longitude of destination in WGS 84 geodetic coordinates."""
  value: Float

  """Timestamp: Longitude of destination in WGS 84 geodetic coordinates."""
  timestamp: String

  """Unit of Longitude of destination in WGS 84 geodetic coordinates."""
  unit: String
}

"""HMI related signals"""
type Vehicle_Cabin_Infotainment_HMI {
  """ISO 639-1 standard language code for the current HMI"""
  currentLanguage: Vehicle_Cabin_Infotainment_HMI_CurrentLanguage

  """Date format used in the current HMI"""
  dateFormat: Vehicle_Cabin_Infotainment_HMI_DateFormat

  """Time format used in the current HMI"""
  timeFormat: Vehicle_Cabin_Infotainment_HMI_TimeFormat

  """Distance unit used in the current HMI"""
  distanceUnit: Vehicle_Cabin_Infotainment_HMI_DistanceUnit

  """Fuel economy unit used in the current HMI"""
  fuelEconomyUnits: Vehicle_Cabin_Infotainment_HMI_FuelEconomyUnits

  """EV fuel economy unit used in the current HMI"""
  evEconomyUnits: Vehicle_Cabin_Infotainment_HMI_EVEconomyUnits

  """Temperature unit used in the current HMI"""
  temperatureUnit: Vehicle_Cabin_Infotainment_HMI_TemperatureUnit

  """Current display theme"""
  dayNightMode: Vehicle_Cabin_Infotainment_HMI_DayNightMode
}

"""ISO 639-1 standard language code for the current HMI"""
type Vehicle_Cabin_Infotainment_HMI_CurrentLanguage {
  """Value: ISO 639-1 standard language code for the current HMI"""
  value: String

  """Timestamp: ISO 639-1 standard language code for the current HMI"""
  timestamp: String
}

"""Date format used in the current HMI"""
type Vehicle_Cabin_Infotainment_HMI_DateFormat {
  """Value: Date format used in the current HMI"""
  value: String

  """Timestamp: Date format used in the current HMI"""
  timestamp: String
}

"""Time format used in the current HMI"""
type Vehicle_Cabin_Infotainment_HMI_TimeFormat {
  """Value: Time format used in the current HMI"""
  value: String

  """Timestamp: Time format used in the current HMI"""
  timestamp: String
}

"""Distance unit used in the current HMI"""
type Vehicle_Cabin_Infotainment_HMI_DistanceUnit {
  """Value: Distance unit used in the current HMI"""
  value: String

  """Timestamp: Distance unit used in the current HMI"""
  timestamp: String
}

"""Fuel economy unit used in the current HMI"""
type Vehicle_Cabin_Infotainment_HMI_FuelEconomyUnits {
  """Value: Fuel economy unit used in the current HMI"""
  value: String

  """Timestamp: Fuel economy unit used in the current HMI"""
  timestamp: String
}

"""EV fuel economy unit used in the current HMI"""
type Vehicle_Cabin_Infotainment_HMI_EVEconomyUnits {
  """Value: EV fuel economy unit used in the current HMI"""
  value: String

  """Timestamp: EV fuel economy unit used in the current HMI"""
  timestamp: String
}

"""Temperature unit used in the current HMI"""
type Vehicle_Cabin_Infotainment_HMI_TemperatureUnit {
  """Value: Temperature unit used in the current HMI"""
  value: String

  """Timestamp: Temperature unit used in the current HMI"""
  timestamp: String
}

"""Current display theme"""
type Vehicle_Cabin_Infotainment_HMI_DayNightMode {
  """Value: Current display theme"""
  value: String

  """Timestamp: Current display theme"""
  timestamp: String
}

"""Sun roof status."""
type Vehicle_Cabin_Sunroof {
  """
  Sunroof position. 0 = Fully closed 100 = Fully opened. -100 = Fully tilted.
  """
  position: Vehicle_Cabin_Sunroof_Position

  """Switch controlling sliding action such as window, sunroof, or shade."""
  switch: Vehicle_Cabin_Sunroof_Switch

  """Sun roof shade status."""
  shade: Vehicle_Cabin_Sunroof_Shade
}

"""
Sunroof position. 0 = Fully closed 100 = Fully opened. -100 = Fully tilted.
"""
type Vehicle_Cabin_Sunroof_Position {
  """
  Value: Sunroof position. 0 = Fully closed 100 = Fully opened. -100 = Fully tilted.
  """
  value: Int

  """
  Timestamp: Sunroof position. 0 = Fully closed 100 = Fully opened. -100 = Fully tilted.
  """
  timestamp: String
}

"""Switch controlling sliding action such as window, sunroof, or shade."""
type Vehicle_Cabin_Sunroof_Switch {
  """
  Value: Switch controlling sliding action such as window, sunroof, or shade.
  """
  value: String

  """
  Timestamp: Switch controlling sliding action such as window, sunroof, or shade.
  """
  timestamp: String
}

"""Sun roof shade status."""
type Vehicle_Cabin_Sunroof_Shade {
  """Switch controlling sliding action such as window, sunroof, or blind."""
  switch: Vehicle_Cabin_Sunroof_Shade_Switch

  """Position of window blind. 0 = Fully retracted. 100 = Fully deployed."""
  position: Vehicle_Cabin_Sunroof_Shade_Position
}

"""Switch controlling sliding action such as window, sunroof, or blind."""
type Vehicle_Cabin_Sunroof_Shade_Switch {
  """
  Value: Switch controlling sliding action such as window, sunroof, or blind.
  """
  value: String

  """
  Timestamp: Switch controlling sliding action such as window, sunroof, or blind.
  """
  timestamp: String
}

"""Position of window blind. 0 = Fully retracted. 100 = Fully deployed."""
type Vehicle_Cabin_Sunroof_Shade_Position {
  """
  Value: Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  value: Int

  """
  Timestamp: Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  timestamp: String

  """
  Unit of Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  unit: String
}

"""Rearview mirror."""
type Vehicle_Cabin_RearviewMirror {
  """Dimming level of rearview mirror. 0 = undimmed. 100 = fully dimmed."""
  dimmingLevel: Vehicle_Cabin_RearviewMirror_DimmingLevel
}

"""Dimming level of rearview mirror. 0 = undimmed. 100 = fully dimmed."""
type Vehicle_Cabin_RearviewMirror_DimmingLevel {
  """
  Value: Dimming level of rearview mirror. 0 = undimmed. 100 = fully dimmed.
  """
  value: Int

  """
  Timestamp: Dimming level of rearview mirror. 0 = undimmed. 100 = fully dimmed.
  """
  timestamp: String

  """
  Unit of Dimming level of rearview mirror. 0 = undimmed. 100 = fully dimmed.
  """
  unit: String
}

"""Interior lights signals and sensors."""
type Vehicle_Cabin_Lights {
  """Is glove box light on"""
  isGloveBoxOn: Vehicle_Cabin_Lights_IsGloveBoxOn

  """Is trunk light light on"""
  isTrunkOn: Vehicle_Cabin_Lights_IsTrunkOn

  """Is central dome light light on"""
  isDomeOn: Vehicle_Cabin_Lights_IsDomeOn

  """
  How much ambient light is detected in cabin. 0 = No ambient light. 100 = Full brightness
  """
  ambientLight: Vehicle_Cabin_Lights_AmbientLight

  """Intensity of the interior lights. 0 = Off. 100 = Full brightness."""
  lightIntensity: Vehicle_Cabin_Lights_LightIntensity

  """Spotlight for a specific area in the vehicle."""
  spotlight: Vehicle_Cabin_Lights_Spotlight
}

"""Is glove box light on"""
type Vehicle_Cabin_Lights_IsGloveBoxOn {
  """Value: Is glove box light on"""
  value: Boolean

  """Timestamp: Is glove box light on"""
  timestamp: String
}

"""Is trunk light light on"""
type Vehicle_Cabin_Lights_IsTrunkOn {
  """Value: Is trunk light light on"""
  value: Boolean

  """Timestamp: Is trunk light light on"""
  timestamp: String
}

"""Is central dome light light on"""
type Vehicle_Cabin_Lights_IsDomeOn {
  """Value: Is central dome light light on"""
  value: Boolean

  """Timestamp: Is central dome light light on"""
  timestamp: String
}

"""
How much ambient light is detected in cabin. 0 = No ambient light. 100 = Full brightness
"""
type Vehicle_Cabin_Lights_AmbientLight {
  """
  Value: How much ambient light is detected in cabin. 0 = No ambient light. 100 = Full brightness
  """
  value: Int

  """
  Timestamp: How much ambient light is detected in cabin. 0 = No ambient light. 100 = Full brightness
  """
  timestamp: String

  """
  Unit of How much ambient light is detected in cabin. 0 = No ambient light. 100 = Full brightness
  """
  unit: String
}

"""Intensity of the interior lights. 0 = Off. 100 = Full brightness."""
type Vehicle_Cabin_Lights_LightIntensity {
  """
  Value: Intensity of the interior lights. 0 = Off. 100 = Full brightness.
  """
  value: Int

  """
  Timestamp: Intensity of the interior lights. 0 = Off. 100 = Full brightness.
  """
  timestamp: String

  """
  Unit of Intensity of the interior lights. 0 = Off. 100 = Full brightness.
  """
  unit: String
}

"""Spotlight for a specific area in the vehicle."""
type Vehicle_Cabin_Lights_Spotlight {
  """Spotlight for a specific area in the vehicle."""
  row1: Vehicle_Cabin_Lights_Spotlight_Row1

  """Spotlight for a specific area in the vehicle."""
  row2: Vehicle_Cabin_Lights_Spotlight_Row2

  """Spotlight for a specific area in the vehicle."""
  row3: Vehicle_Cabin_Lights_Spotlight_Row3

  """Spotlight for a specific area in the vehicle."""
  row4: Vehicle_Cabin_Lights_Spotlight_Row4
}

"""Spotlight for a specific area in the vehicle."""
type Vehicle_Cabin_Lights_Spotlight_Row1 {
  """Is a shared light across a specific row on"""
  isSharedOn: Vehicle_Cabin_Lights_Spotlight_Row1_IsSharedOn

  """Is light on the left side switched on"""
  isLeftOn: Vehicle_Cabin_Lights_Spotlight_Row1_IsLeftOn

  """Is light on the right side switched on"""
  isRightOn: Vehicle_Cabin_Lights_Spotlight_Row1_IsRightOn
}

"""Is a shared light across a specific row on"""
type Vehicle_Cabin_Lights_Spotlight_Row1_IsSharedOn {
  """Value: Is a shared light across a specific row on"""
  value: Boolean

  """Timestamp: Is a shared light across a specific row on"""
  timestamp: String
}

"""Is light on the left side switched on"""
type Vehicle_Cabin_Lights_Spotlight_Row1_IsLeftOn {
  """Value: Is light on the left side switched on"""
  value: Boolean

  """Timestamp: Is light on the left side switched on"""
  timestamp: String
}

"""Is light on the right side switched on"""
type Vehicle_Cabin_Lights_Spotlight_Row1_IsRightOn {
  """Value: Is light on the right side switched on"""
  value: Boolean

  """Timestamp: Is light on the right side switched on"""
  timestamp: String
}

"""Spotlight for a specific area in the vehicle."""
type Vehicle_Cabin_Lights_Spotlight_Row2 {
  """Is a shared light across a specific row on"""
  isSharedOn: Vehicle_Cabin_Lights_Spotlight_Row2_IsSharedOn

  """Is light on the left side switched on"""
  isLeftOn: Vehicle_Cabin_Lights_Spotlight_Row2_IsLeftOn

  """Is light on the right side switched on"""
  isRightOn: Vehicle_Cabin_Lights_Spotlight_Row2_IsRightOn
}

"""Is a shared light across a specific row on"""
type Vehicle_Cabin_Lights_Spotlight_Row2_IsSharedOn {
  """Value: Is a shared light across a specific row on"""
  value: Boolean

  """Timestamp: Is a shared light across a specific row on"""
  timestamp: String
}

"""Is light on the left side switched on"""
type Vehicle_Cabin_Lights_Spotlight_Row2_IsLeftOn {
  """Value: Is light on the left side switched on"""
  value: Boolean

  """Timestamp: Is light on the left side switched on"""
  timestamp: String
}

"""Is light on the right side switched on"""
type Vehicle_Cabin_Lights_Spotlight_Row2_IsRightOn {
  """Value: Is light on the right side switched on"""
  value: Boolean

  """Timestamp: Is light on the right side switched on"""
  timestamp: String
}

"""Spotlight for a specific area in the vehicle."""
type Vehicle_Cabin_Lights_Spotlight_Row3 {
  """Is a shared light across a specific row on"""
  isSharedOn: Vehicle_Cabin_Lights_Spotlight_Row3_IsSharedOn

  """Is light on the left side switched on"""
  isLeftOn: Vehicle_Cabin_Lights_Spotlight_Row3_IsLeftOn

  """Is light on the right side switched on"""
  isRightOn: Vehicle_Cabin_Lights_Spotlight_Row3_IsRightOn
}

"""Is a shared light across a specific row on"""
type Vehicle_Cabin_Lights_Spotlight_Row3_IsSharedOn {
  """Value: Is a shared light across a specific row on"""
  value: Boolean

  """Timestamp: Is a shared light across a specific row on"""
  timestamp: String
}

"""Is light on the left side switched on"""
type Vehicle_Cabin_Lights_Spotlight_Row3_IsLeftOn {
  """Value: Is light on the left side switched on"""
  value: Boolean

  """Timestamp: Is light on the left side switched on"""
  timestamp: String
}

"""Is light on the right side switched on"""
type Vehicle_Cabin_Lights_Spotlight_Row3_IsRightOn {
  """Value: Is light on the right side switched on"""
  value: Boolean

  """Timestamp: Is light on the right side switched on"""
  timestamp: String
}

"""Spotlight for a specific area in the vehicle."""
type Vehicle_Cabin_Lights_Spotlight_Row4 {
  """Is a shared light across a specific row on"""
  isSharedOn: Vehicle_Cabin_Lights_Spotlight_Row4_IsSharedOn

  """Is light on the left side switched on"""
  isLeftOn: Vehicle_Cabin_Lights_Spotlight_Row4_IsLeftOn

  """Is light on the right side switched on"""
  isRightOn: Vehicle_Cabin_Lights_Spotlight_Row4_IsRightOn
}

"""Is a shared light across a specific row on"""
type Vehicle_Cabin_Lights_Spotlight_Row4_IsSharedOn {
  """Value: Is a shared light across a specific row on"""
  value: Boolean

  """Timestamp: Is a shared light across a specific row on"""
  timestamp: String
}

"""Is light on the left side switched on"""
type Vehicle_Cabin_Lights_Spotlight_Row4_IsLeftOn {
  """Value: Is light on the left side switched on"""
  value: Boolean

  """Timestamp: Is light on the left side switched on"""
  timestamp: String
}

"""Is light on the right side switched on"""
type Vehicle_Cabin_Lights_Spotlight_Row4_IsRightOn {
  """Value: Is light on the right side switched on"""
  value: Boolean

  """Timestamp: Is light on the right side switched on"""
  timestamp: String
}

"""All doors, including windows and switches."""
type Vehicle_Cabin_Door {
  """All doors, including windows and switches."""
  row1: Vehicle_Cabin_Door_Row1

  """All doors, including windows and switches."""
  row2: Vehicle_Cabin_Door_Row2
}

"""All doors, including windows and switches."""
type Vehicle_Cabin_Door_Row1 {
  """All doors, including windows and switches."""
  left: Vehicle_Cabin_Door_Row1_Left

  """All doors, including windows and switches."""
  right: Vehicle_Cabin_Door_Row1_Right
}

"""All doors, including windows and switches."""
type Vehicle_Cabin_Door_Row1_Left {
  """Is door open or closed"""
  isOpen: Vehicle_Cabin_Door_Row1_Left_IsOpen

  """Is door locked or unlocked. True = Locked. False = Unlocked."""
  isLocked: Vehicle_Cabin_Door_Row1_Left_IsLocked

  """Door window status"""
  window: Vehicle_Cabin_Door_Row1_Left_Window

  """Is door child lock engaged. True = Engaged. False = Disengaged."""
  isChildLockActive: Vehicle_Cabin_Door_Row1_Left_IsChildLockActive

  """Side window shade"""
  shade: Vehicle_Cabin_Door_Row1_Left_Shade
}

"""Is door open or closed"""
type Vehicle_Cabin_Door_Row1_Left_IsOpen {
  """Value: Is door open or closed"""
  value: Boolean

  """Timestamp: Is door open or closed"""
  timestamp: String
}

"""Is door locked or unlocked. True = Locked. False = Unlocked."""
type Vehicle_Cabin_Door_Row1_Left_IsLocked {
  """Value: Is door locked or unlocked. True = Locked. False = Unlocked."""
  value: Boolean

  """
  Timestamp: Is door locked or unlocked. True = Locked. False = Unlocked.
  """
  timestamp: String
}

"""Door window status"""
type Vehicle_Cabin_Door_Row1_Left_Window {
  """Is window open or closed?"""
  isOpen: Vehicle_Cabin_Door_Row1_Left_Window_IsOpen

  """Window position. 0 = Fully closed 100 = Fully opened."""
  position: Vehicle_Cabin_Door_Row1_Left_Window_Position

  """Is window child lock engaged. True = Engaged. False = Disengaged."""
  isChildLockEngaged: Vehicle_Cabin_Door_Row1_Left_Window_IsChildLockEngaged

  """Switch controlling sliding action such as window, sunroof, or blind."""
  switch: Vehicle_Cabin_Door_Row1_Left_Window_Switch
}

"""Is window open or closed?"""
type Vehicle_Cabin_Door_Row1_Left_Window_IsOpen {
  """Value: Is window open or closed?"""
  value: Boolean

  """Timestamp: Is window open or closed?"""
  timestamp: String
}

"""Window position. 0 = Fully closed 100 = Fully opened."""
type Vehicle_Cabin_Door_Row1_Left_Window_Position {
  """Value: Window position. 0 = Fully closed 100 = Fully opened."""
  value: Int

  """Timestamp: Window position. 0 = Fully closed 100 = Fully opened."""
  timestamp: String

  """Unit of Window position. 0 = Fully closed 100 = Fully opened."""
  unit: String
}

"""Is window child lock engaged. True = Engaged. False = Disengaged."""
type Vehicle_Cabin_Door_Row1_Left_Window_IsChildLockEngaged {
  """
  Value: Is window child lock engaged. True = Engaged. False = Disengaged.
  """
  value: Boolean

  """
  Timestamp: Is window child lock engaged. True = Engaged. False = Disengaged.
  """
  timestamp: String
}

"""Switch controlling sliding action such as window, sunroof, or blind."""
type Vehicle_Cabin_Door_Row1_Left_Window_Switch {
  """
  Value: Switch controlling sliding action such as window, sunroof, or blind.
  """
  value: String

  """
  Timestamp: Switch controlling sliding action such as window, sunroof, or blind.
  """
  timestamp: String
}

"""Is door child lock engaged. True = Engaged. False = Disengaged."""
type Vehicle_Cabin_Door_Row1_Left_IsChildLockActive {
  """Value: Is door child lock engaged. True = Engaged. False = Disengaged."""
  value: Boolean

  """
  Timestamp: Is door child lock engaged. True = Engaged. False = Disengaged.
  """
  timestamp: String
}

"""Side window shade"""
type Vehicle_Cabin_Door_Row1_Left_Shade {
  """Switch controlling sliding action such as window, sunroof, or blind."""
  switch: Vehicle_Cabin_Door_Row1_Left_Shade_Switch

  """Position of window blind. 0 = Fully retracted. 100 = Fully deployed."""
  position: Vehicle_Cabin_Door_Row1_Left_Shade_Position
}

"""Switch controlling sliding action such as window, sunroof, or blind."""
type Vehicle_Cabin_Door_Row1_Left_Shade_Switch {
  """
  Value: Switch controlling sliding action such as window, sunroof, or blind.
  """
  value: String

  """
  Timestamp: Switch controlling sliding action such as window, sunroof, or blind.
  """
  timestamp: String
}

"""Position of window blind. 0 = Fully retracted. 100 = Fully deployed."""
type Vehicle_Cabin_Door_Row1_Left_Shade_Position {
  """
  Value: Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  value: Int

  """
  Timestamp: Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  timestamp: String

  """
  Unit of Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  unit: String
}

"""All doors, including windows and switches."""
type Vehicle_Cabin_Door_Row1_Right {
  """Is door open or closed"""
  isOpen: Vehicle_Cabin_Door_Row1_Right_IsOpen

  """Is door locked or unlocked. True = Locked. False = Unlocked."""
  isLocked: Vehicle_Cabin_Door_Row1_Right_IsLocked

  """Door window status"""
  window: Vehicle_Cabin_Door_Row1_Right_Window

  """Is door child lock engaged. True = Engaged. False = Disengaged."""
  isChildLockActive: Vehicle_Cabin_Door_Row1_Right_IsChildLockActive

  """Side window shade"""
  shade: Vehicle_Cabin_Door_Row1_Right_Shade
}

"""Is door open or closed"""
type Vehicle_Cabin_Door_Row1_Right_IsOpen {
  """Value: Is door open or closed"""
  value: Boolean

  """Timestamp: Is door open or closed"""
  timestamp: String
}

"""Is door locked or unlocked. True = Locked. False = Unlocked."""
type Vehicle_Cabin_Door_Row1_Right_IsLocked {
  """Value: Is door locked or unlocked. True = Locked. False = Unlocked."""
  value: Boolean

  """
  Timestamp: Is door locked or unlocked. True = Locked. False = Unlocked.
  """
  timestamp: String
}

"""Door window status"""
type Vehicle_Cabin_Door_Row1_Right_Window {
  """Is window open or closed?"""
  isOpen: Vehicle_Cabin_Door_Row1_Right_Window_IsOpen

  """Window position. 0 = Fully closed 100 = Fully opened."""
  position: Vehicle_Cabin_Door_Row1_Right_Window_Position

  """Is window child lock engaged. True = Engaged. False = Disengaged."""
  isChildLockEngaged: Vehicle_Cabin_Door_Row1_Right_Window_IsChildLockEngaged

  """Switch controlling sliding action such as window, sunroof, or blind."""
  switch: Vehicle_Cabin_Door_Row1_Right_Window_Switch
}

"""Is window open or closed?"""
type Vehicle_Cabin_Door_Row1_Right_Window_IsOpen {
  """Value: Is window open or closed?"""
  value: Boolean

  """Timestamp: Is window open or closed?"""
  timestamp: String
}

"""Window position. 0 = Fully closed 100 = Fully opened."""
type Vehicle_Cabin_Door_Row1_Right_Window_Position {
  """Value: Window position. 0 = Fully closed 100 = Fully opened."""
  value: Int

  """Timestamp: Window position. 0 = Fully closed 100 = Fully opened."""
  timestamp: String

  """Unit of Window position. 0 = Fully closed 100 = Fully opened."""
  unit: String
}

"""Is window child lock engaged. True = Engaged. False = Disengaged."""
type Vehicle_Cabin_Door_Row1_Right_Window_IsChildLockEngaged {
  """
  Value: Is window child lock engaged. True = Engaged. False = Disengaged.
  """
  value: Boolean

  """
  Timestamp: Is window child lock engaged. True = Engaged. False = Disengaged.
  """
  timestamp: String
}

"""Switch controlling sliding action such as window, sunroof, or blind."""
type Vehicle_Cabin_Door_Row1_Right_Window_Switch {
  """
  Value: Switch controlling sliding action such as window, sunroof, or blind.
  """
  value: String

  """
  Timestamp: Switch controlling sliding action such as window, sunroof, or blind.
  """
  timestamp: String
}

"""Is door child lock engaged. True = Engaged. False = Disengaged."""
type Vehicle_Cabin_Door_Row1_Right_IsChildLockActive {
  """Value: Is door child lock engaged. True = Engaged. False = Disengaged."""
  value: Boolean

  """
  Timestamp: Is door child lock engaged. True = Engaged. False = Disengaged.
  """
  timestamp: String
}

"""Side window shade"""
type Vehicle_Cabin_Door_Row1_Right_Shade {
  """Switch controlling sliding action such as window, sunroof, or blind."""
  switch: Vehicle_Cabin_Door_Row1_Right_Shade_Switch

  """Position of window blind. 0 = Fully retracted. 100 = Fully deployed."""
  position: Vehicle_Cabin_Door_Row1_Right_Shade_Position
}

"""Switch controlling sliding action such as window, sunroof, or blind."""
type Vehicle_Cabin_Door_Row1_Right_Shade_Switch {
  """
  Value: Switch controlling sliding action such as window, sunroof, or blind.
  """
  value: String

  """
  Timestamp: Switch controlling sliding action such as window, sunroof, or blind.
  """
  timestamp: String
}

"""Position of window blind. 0 = Fully retracted. 100 = Fully deployed."""
type Vehicle_Cabin_Door_Row1_Right_Shade_Position {
  """
  Value: Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  value: Int

  """
  Timestamp: Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  timestamp: String

  """
  Unit of Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  unit: String
}

"""All doors, including windows and switches."""
type Vehicle_Cabin_Door_Row2 {
  """All doors, including windows and switches."""
  left: Vehicle_Cabin_Door_Row2_Left

  """All doors, including windows and switches."""
  right: Vehicle_Cabin_Door_Row2_Right
}

"""All doors, including windows and switches."""
type Vehicle_Cabin_Door_Row2_Left {
  """Is door open or closed"""
  isOpen: Vehicle_Cabin_Door_Row2_Left_IsOpen

  """Is door locked or unlocked. True = Locked. False = Unlocked."""
  isLocked: Vehicle_Cabin_Door_Row2_Left_IsLocked

  """Door window status"""
  window: Vehicle_Cabin_Door_Row2_Left_Window

  """Is door child lock engaged. True = Engaged. False = Disengaged."""
  isChildLockActive: Vehicle_Cabin_Door_Row2_Left_IsChildLockActive

  """Side window shade"""
  shade: Vehicle_Cabin_Door_Row2_Left_Shade
}

"""Is door open or closed"""
type Vehicle_Cabin_Door_Row2_Left_IsOpen {
  """Value: Is door open or closed"""
  value: Boolean

  """Timestamp: Is door open or closed"""
  timestamp: String
}

"""Is door locked or unlocked. True = Locked. False = Unlocked."""
type Vehicle_Cabin_Door_Row2_Left_IsLocked {
  """Value: Is door locked or unlocked. True = Locked. False = Unlocked."""
  value: Boolean

  """
  Timestamp: Is door locked or unlocked. True = Locked. False = Unlocked.
  """
  timestamp: String
}

"""Door window status"""
type Vehicle_Cabin_Door_Row2_Left_Window {
  """Is window open or closed?"""
  isOpen: Vehicle_Cabin_Door_Row2_Left_Window_IsOpen

  """Window position. 0 = Fully closed 100 = Fully opened."""
  position: Vehicle_Cabin_Door_Row2_Left_Window_Position

  """Is window child lock engaged. True = Engaged. False = Disengaged."""
  isChildLockEngaged: Vehicle_Cabin_Door_Row2_Left_Window_IsChildLockEngaged

  """Switch controlling sliding action such as window, sunroof, or blind."""
  switch: Vehicle_Cabin_Door_Row2_Left_Window_Switch
}

"""Is window open or closed?"""
type Vehicle_Cabin_Door_Row2_Left_Window_IsOpen {
  """Value: Is window open or closed?"""
  value: Boolean

  """Timestamp: Is window open or closed?"""
  timestamp: String
}

"""Window position. 0 = Fully closed 100 = Fully opened."""
type Vehicle_Cabin_Door_Row2_Left_Window_Position {
  """Value: Window position. 0 = Fully closed 100 = Fully opened."""
  value: Int

  """Timestamp: Window position. 0 = Fully closed 100 = Fully opened."""
  timestamp: String

  """Unit of Window position. 0 = Fully closed 100 = Fully opened."""
  unit: String
}

"""Is window child lock engaged. True = Engaged. False = Disengaged."""
type Vehicle_Cabin_Door_Row2_Left_Window_IsChildLockEngaged {
  """
  Value: Is window child lock engaged. True = Engaged. False = Disengaged.
  """
  value: Boolean

  """
  Timestamp: Is window child lock engaged. True = Engaged. False = Disengaged.
  """
  timestamp: String
}

"""Switch controlling sliding action such as window, sunroof, or blind."""
type Vehicle_Cabin_Door_Row2_Left_Window_Switch {
  """
  Value: Switch controlling sliding action such as window, sunroof, or blind.
  """
  value: String

  """
  Timestamp: Switch controlling sliding action such as window, sunroof, or blind.
  """
  timestamp: String
}

"""Is door child lock engaged. True = Engaged. False = Disengaged."""
type Vehicle_Cabin_Door_Row2_Left_IsChildLockActive {
  """Value: Is door child lock engaged. True = Engaged. False = Disengaged."""
  value: Boolean

  """
  Timestamp: Is door child lock engaged. True = Engaged. False = Disengaged.
  """
  timestamp: String
}

"""Side window shade"""
type Vehicle_Cabin_Door_Row2_Left_Shade {
  """Switch controlling sliding action such as window, sunroof, or blind."""
  switch: Vehicle_Cabin_Door_Row2_Left_Shade_Switch

  """Position of window blind. 0 = Fully retracted. 100 = Fully deployed."""
  position: Vehicle_Cabin_Door_Row2_Left_Shade_Position
}

"""Switch controlling sliding action such as window, sunroof, or blind."""
type Vehicle_Cabin_Door_Row2_Left_Shade_Switch {
  """
  Value: Switch controlling sliding action such as window, sunroof, or blind.
  """
  value: String

  """
  Timestamp: Switch controlling sliding action such as window, sunroof, or blind.
  """
  timestamp: String
}

"""Position of window blind. 0 = Fully retracted. 100 = Fully deployed."""
type Vehicle_Cabin_Door_Row2_Left_Shade_Position {
  """
  Value: Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  value: Int

  """
  Timestamp: Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  timestamp: String

  """
  Unit of Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  unit: String
}

"""All doors, including windows and switches."""
type Vehicle_Cabin_Door_Row2_Right {
  """Is door open or closed"""
  isOpen: Vehicle_Cabin_Door_Row2_Right_IsOpen

  """Is door locked or unlocked. True = Locked. False = Unlocked."""
  isLocked: Vehicle_Cabin_Door_Row2_Right_IsLocked

  """Door window status"""
  window: Vehicle_Cabin_Door_Row2_Right_Window

  """Is door child lock engaged. True = Engaged. False = Disengaged."""
  isChildLockActive: Vehicle_Cabin_Door_Row2_Right_IsChildLockActive

  """Side window shade"""
  shade: Vehicle_Cabin_Door_Row2_Right_Shade
}

"""Is door open or closed"""
type Vehicle_Cabin_Door_Row2_Right_IsOpen {
  """Value: Is door open or closed"""
  value: Boolean

  """Timestamp: Is door open or closed"""
  timestamp: String
}

"""Is door locked or unlocked. True = Locked. False = Unlocked."""
type Vehicle_Cabin_Door_Row2_Right_IsLocked {
  """Value: Is door locked or unlocked. True = Locked. False = Unlocked."""
  value: Boolean

  """
  Timestamp: Is door locked or unlocked. True = Locked. False = Unlocked.
  """
  timestamp: String
}

"""Door window status"""
type Vehicle_Cabin_Door_Row2_Right_Window {
  """Is window open or closed?"""
  isOpen: Vehicle_Cabin_Door_Row2_Right_Window_IsOpen

  """Window position. 0 = Fully closed 100 = Fully opened."""
  position: Vehicle_Cabin_Door_Row2_Right_Window_Position

  """Is window child lock engaged. True = Engaged. False = Disengaged."""
  isChildLockEngaged: Vehicle_Cabin_Door_Row2_Right_Window_IsChildLockEngaged

  """Switch controlling sliding action such as window, sunroof, or blind."""
  switch: Vehicle_Cabin_Door_Row2_Right_Window_Switch
}

"""Is window open or closed?"""
type Vehicle_Cabin_Door_Row2_Right_Window_IsOpen {
  """Value: Is window open or closed?"""
  value: Boolean

  """Timestamp: Is window open or closed?"""
  timestamp: String
}

"""Window position. 0 = Fully closed 100 = Fully opened."""
type Vehicle_Cabin_Door_Row2_Right_Window_Position {
  """Value: Window position. 0 = Fully closed 100 = Fully opened."""
  value: Int

  """Timestamp: Window position. 0 = Fully closed 100 = Fully opened."""
  timestamp: String

  """Unit of Window position. 0 = Fully closed 100 = Fully opened."""
  unit: String
}

"""Is window child lock engaged. True = Engaged. False = Disengaged."""
type Vehicle_Cabin_Door_Row2_Right_Window_IsChildLockEngaged {
  """
  Value: Is window child lock engaged. True = Engaged. False = Disengaged.
  """
  value: Boolean

  """
  Timestamp: Is window child lock engaged. True = Engaged. False = Disengaged.
  """
  timestamp: String
}

"""Switch controlling sliding action such as window, sunroof, or blind."""
type Vehicle_Cabin_Door_Row2_Right_Window_Switch {
  """
  Value: Switch controlling sliding action such as window, sunroof, or blind.
  """
  value: String

  """
  Timestamp: Switch controlling sliding action such as window, sunroof, or blind.
  """
  timestamp: String
}

"""Is door child lock engaged. True = Engaged. False = Disengaged."""
type Vehicle_Cabin_Door_Row2_Right_IsChildLockActive {
  """Value: Is door child lock engaged. True = Engaged. False = Disengaged."""
  value: Boolean

  """
  Timestamp: Is door child lock engaged. True = Engaged. False = Disengaged.
  """
  timestamp: String
}

"""Side window shade"""
type Vehicle_Cabin_Door_Row2_Right_Shade {
  """Switch controlling sliding action such as window, sunroof, or blind."""
  switch: Vehicle_Cabin_Door_Row2_Right_Shade_Switch

  """Position of window blind. 0 = Fully retracted. 100 = Fully deployed."""
  position: Vehicle_Cabin_Door_Row2_Right_Shade_Position
}

"""Switch controlling sliding action such as window, sunroof, or blind."""
type Vehicle_Cabin_Door_Row2_Right_Shade_Switch {
  """
  Value: Switch controlling sliding action such as window, sunroof, or blind.
  """
  value: String

  """
  Timestamp: Switch controlling sliding action such as window, sunroof, or blind.
  """
  timestamp: String
}

"""Position of window blind. 0 = Fully retracted. 100 = Fully deployed."""
type Vehicle_Cabin_Door_Row2_Right_Shade_Position {
  """
  Value: Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  value: Int

  """
  Timestamp: Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  timestamp: String

  """
  Unit of Position of window blind. 0 = Fully retracted. 100 = Fully deployed.
  """
  unit: String
}

"""Number of doors in vehicle."""
type Vehicle_Cabin_DoorCount {
  """Value: Number of doors in vehicle."""
  value: Int

  """Timestamp: Number of doors in vehicle."""
  timestamp: String
}

"""All seats."""
type Vehicle_Cabin_Seat {
  """All seats."""
  row1: Vehicle_Cabin_Seat_Row1

  """All seats."""
  row2: Vehicle_Cabin_Seat_Row2
}

"""All seats."""
type Vehicle_Cabin_Seat_Row1 {
  """All seats."""
  pos1: Vehicle_Cabin_Seat_Row1_Pos1

  """All seats."""
  pos2: Vehicle_Cabin_Seat_Row1_Pos2

  """All seats."""
  pos3: Vehicle_Cabin_Seat_Row1_Pos3
}

"""All seats."""
type Vehicle_Cabin_Seat_Row1_Pos1 {
  """Does the seat have a passenger in it."""
  isOccupied: Vehicle_Cabin_Seat_Row1_Pos1_IsOccupied

  """Occupant data."""
  occupant: Vehicle_Cabin_Seat_Row1_Pos1_Occupant

  """Is the belt engaged."""
  isBelted: Vehicle_Cabin_Seat_Row1_Pos1_IsBelted

  """Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat."""
  heating: Vehicle_Cabin_Seat_Row1_Pos1_Heating

  """Seat massage level. 0 = off. 100 = max massage."""
  massage: Vehicle_Cabin_Seat_Row1_Pos1_Massage

  """
  Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  position: Vehicle_Cabin_Seat_Row1_Pos1_Position

  """
  Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  height: Vehicle_Cabin_Seat_Row1_Pos1_Height

  """
  Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  tilt: Vehicle_Cabin_Seat_Row1_Pos1_Tilt

  """Describes signals related to the backrest of the seat."""
  backrest: Vehicle_Cabin_Seat_Row1_Pos1_Backrest

  """Describes signals related to the seating/base of the seat."""
  seating: Vehicle_Cabin_Seat_Row1_Pos1_Seating

  """Headrest settings."""
  headrest: Vehicle_Cabin_Seat_Row1_Pos1_Headrest

  """Airbag signals."""
  airbag: Vehicle_Cabin_Seat_Row1_Pos1_Airbag

  """Seat switch signals"""
  switch: Vehicle_Cabin_Seat_Row1_Pos1_Switch
}

"""Does the seat have a passenger in it."""
type Vehicle_Cabin_Seat_Row1_Pos1_IsOccupied {
  """Value: Does the seat have a passenger in it."""
  value: Boolean

  """Timestamp: Does the seat have a passenger in it."""
  timestamp: String
}

"""Occupant data."""
type Vehicle_Cabin_Seat_Row1_Pos1_Occupant {
  """Identifier attributes based on OAuth 2.0."""
  identifier: Vehicle_Cabin_Seat_Row1_Pos1_Occupant_Identifier
}

"""Identifier attributes based on OAuth 2.0."""
type Vehicle_Cabin_Seat_Row1_Pos1_Occupant_Identifier {
  """Subject for the authentication of the occupant. E.g. UserID 7331677."""
  subject: Vehicle_Cabin_Seat_Row1_Pos1_Occupant_Identifier_Subject

  """
  Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  issuer: Vehicle_Cabin_Seat_Row1_Pos1_Occupant_Identifier_Issuer
}

"""Subject for the authentication of the occupant. E.g. UserID 7331677."""
type Vehicle_Cabin_Seat_Row1_Pos1_Occupant_Identifier_Subject {
  """
  Value: Subject for the authentication of the occupant. E.g. UserID 7331677.
  """
  value: String

  """
  Timestamp: Subject for the authentication of the occupant. E.g. UserID 7331677.
  """
  timestamp: String
}

"""
Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Occupant_Identifier_Issuer {
  """
  Value: Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  value: String

  """
  Timestamp: Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  timestamp: String
}

"""Is the belt engaged."""
type Vehicle_Cabin_Seat_Row1_Pos1_IsBelted {
  """Value: Is the belt engaged."""
  value: Boolean

  """Timestamp: Is the belt engaged."""
  timestamp: String
}

"""Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat."""
type Vehicle_Cabin_Seat_Row1_Pos1_Heating {
  """
  Value: Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  value: Int

  """
  Timestamp: Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  timestamp: String

  """
  Unit of Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  unit: String
}

"""Seat massage level. 0 = off. 100 = max massage."""
type Vehicle_Cabin_Seat_Row1_Pos1_Massage {
  """Value: Seat massage level. 0 = off. 100 = max massage."""
  value: Int

  """Timestamp: Seat massage level. 0 = off. 100 = max massage."""
  timestamp: String

  """Unit of Seat massage level. 0 = off. 100 = max massage."""
  unit: String
}

"""
Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Position {
  """
  Value: Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  value: Int

  """
  Timestamp: Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  timestamp: String

  """
  Unit of Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  unit: String
}

"""
Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Height {
  """
  Value: Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  value: Int

  """
  Timestamp: Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  timestamp: String

  """
  Unit of Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  unit: String
}

"""
Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Tilt {
  """
  Value: Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  value: Float

  """
  Timestamp: Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  timestamp: String

  """
  Unit of Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  unit: String
}

"""Describes signals related to the backrest of the seat."""
type Vehicle_Cabin_Seat_Row1_Pos1_Backrest {
  """
  Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  recline: Vehicle_Cabin_Seat_Row1_Pos1_Backrest_Recline

  """
  Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.
  """
  lumbar: Vehicle_Cabin_Seat_Row1_Pos1_Backrest_Lumbar

  """Backrest side bolster (lumbar side support) settings."""
  sideBolster: Vehicle_Cabin_Seat_Row1_Pos1_Backrest_SideBolster
}

"""
Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Backrest_Recline {
  """
  Value: Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  value: Float

  """
  Timestamp: Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  timestamp: String

  """
  Unit of Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  unit: String
}

"""
Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Backrest_Lumbar {
  """
  Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  support: Vehicle_Cabin_Seat_Row1_Pos1_Backrest_Lumbar_Support

  """
  Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  height: Vehicle_Cabin_Seat_Row1_Pos1_Backrest_Lumbar_Height
}

"""
Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Backrest_Lumbar_Support {
  """
  Value: Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  value: Float

  """
  Timestamp: Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  timestamp: String

  """
  Unit of Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  unit: String
}

"""
Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Backrest_Lumbar_Height {
  """
  Value: Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  value: Int

  """
  Timestamp: Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  timestamp: String

  """
  Unit of Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  unit: String
}

"""Backrest side bolster (lumbar side support) settings."""
type Vehicle_Cabin_Seat_Row1_Pos1_Backrest_SideBolster {
  """
  Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  support: Vehicle_Cabin_Seat_Row1_Pos1_Backrest_SideBolster_Support
}

"""
Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Backrest_SideBolster_Support {
  """
  Value: Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  value: Float

  """
  Timestamp: Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  timestamp: String

  """
  Unit of Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  unit: String
}

"""Describes signals related to the seating/base of the seat."""
type Vehicle_Cabin_Seat_Row1_Pos1_Seating {
  """
  Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  length: Vehicle_Cabin_Seat_Row1_Pos1_Seating_Length
}

"""
Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Seating_Length {
  """
  Value: Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  value: Int

  """
  Timestamp: Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  timestamp: String

  """
  Unit of Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  unit: String
}

"""Headrest settings."""
type Vehicle_Cabin_Seat_Row1_Pos1_Headrest {
  """
  Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  height: Vehicle_Cabin_Seat_Row1_Pos1_Headrest_Height

  """
  Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  angle: Vehicle_Cabin_Seat_Row1_Pos1_Headrest_Angle
}

"""
Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Headrest_Height {
  """
  Value: Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  value: Int

  """
  Timestamp: Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  timestamp: String

  """
  Unit of Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  unit: String
}

"""
Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Headrest_Angle {
  """
  Value: Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  value: Float

  """
  Timestamp: Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  timestamp: String

  """
  Unit of Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  unit: String
}

"""Airbag signals."""
type Vehicle_Cabin_Seat_Row1_Pos1_Airbag {
  """
  Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  isDeployed: Vehicle_Cabin_Seat_Row1_Pos1_Airbag_IsDeployed
}

"""
Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Airbag_IsDeployed {
  """
  Value: Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  value: Boolean

  """
  Timestamp: Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  timestamp: String
}

"""Seat switch signals"""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch {
  """Warmer switch for Seat heater (SingleSeat.Heating)."""
  isWarmerEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsWarmerEngaged

  """Cooler switch for Seat heater (SingleSeat.Heating)."""
  isCoolerEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsCoolerEngaged

  """Seat forward switch engaged (SingleSeat.Position)."""
  isForwardEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsForwardEngaged

  """Seat backward switch engaged (SingleSeat.Position)."""
  isBackwardEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsBackwardEngaged

  """Seat up switch engaged (SingleSeat.Height)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsUpEngaged

  """Seat down switch engaged (SingleSeat.Height)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsDownEngaged

  """Tilt forward switch engaged (SingleSeat.Tilt)."""
  isTiltForwardEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsTiltForwardEngaged

  """Tilt backward switch engaged (SingleSeat.Tilt)."""
  isTiltBackwardEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsTiltBackwardEngaged

  """Describes switches related to the backrest of the seat."""
  backrest: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest

  """Describes switches related to the seating of the seat."""
  seating: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Seating

  """Switches for SingleSeat.Headrest."""
  headrest: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Headrest

  """Switches for SingleSeat.Massage."""
  massage: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Massage
}

"""Warmer switch for Seat heater (SingleSeat.Heating)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsWarmerEngaged {
  """Value: Warmer switch for Seat heater (SingleSeat.Heating)."""
  value: Boolean

  """Timestamp: Warmer switch for Seat heater (SingleSeat.Heating)."""
  timestamp: String
}

"""Cooler switch for Seat heater (SingleSeat.Heating)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsCoolerEngaged {
  """Value: Cooler switch for Seat heater (SingleSeat.Heating)."""
  value: Boolean

  """Timestamp: Cooler switch for Seat heater (SingleSeat.Heating)."""
  timestamp: String
}

"""Seat forward switch engaged (SingleSeat.Position)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsForwardEngaged {
  """Value: Seat forward switch engaged (SingleSeat.Position)."""
  value: Boolean

  """Timestamp: Seat forward switch engaged (SingleSeat.Position)."""
  timestamp: String
}

"""Seat backward switch engaged (SingleSeat.Position)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsBackwardEngaged {
  """Value: Seat backward switch engaged (SingleSeat.Position)."""
  value: Boolean

  """Timestamp: Seat backward switch engaged (SingleSeat.Position)."""
  timestamp: String
}

"""Seat up switch engaged (SingleSeat.Height)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsUpEngaged {
  """Value: Seat up switch engaged (SingleSeat.Height)."""
  value: Boolean

  """Timestamp: Seat up switch engaged (SingleSeat.Height)."""
  timestamp: String
}

"""Seat down switch engaged (SingleSeat.Height)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsDownEngaged {
  """Value: Seat down switch engaged (SingleSeat.Height)."""
  value: Boolean

  """Timestamp: Seat down switch engaged (SingleSeat.Height)."""
  timestamp: String
}

"""Tilt forward switch engaged (SingleSeat.Tilt)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsTiltForwardEngaged {
  """Value: Tilt forward switch engaged (SingleSeat.Tilt)."""
  value: Boolean

  """Timestamp: Tilt forward switch engaged (SingleSeat.Tilt)."""
  timestamp: String
}

"""Tilt backward switch engaged (SingleSeat.Tilt)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_IsTiltBackwardEngaged {
  """Value: Tilt backward switch engaged (SingleSeat.Tilt)."""
  value: Boolean

  """Timestamp: Tilt backward switch engaged (SingleSeat.Tilt)."""
  timestamp: String
}

"""Describes switches related to the backrest of the seat."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest {
  """Backrest recline forward switch engaged (SingleSeat.Backrest.Recline)."""
  isReclineForwardEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_IsReclineForwardEngaged

  """
  Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  isReclineBackwardEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_IsReclineBackwardEngaged

  """Switches for SingleSeat.Backrest.Lumbar."""
  lumbar: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_Lumbar

  """Switches for SingleSeat.Backrest.SideBolster."""
  sideBolster: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_SideBolster
}

"""Backrest recline forward switch engaged (SingleSeat.Backrest.Recline)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_IsReclineForwardEngaged {
  """
  Value: Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).
  """
  value: Boolean

  """
  Timestamp: Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).
  """
  timestamp: String
}

"""
Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_IsReclineBackwardEngaged {
  """
  Value: Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  value: Boolean

  """
  Timestamp: Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  timestamp: String
}

"""Switches for SingleSeat.Backrest.Lumbar."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_Lumbar {
  """
  Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  isMoreSupportEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_Lumbar_IsMoreSupportEngaged

  """
  Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  isLessSupportEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_Lumbar_IsLessSupportEngaged

  """Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_Lumbar_IsUpEngaged

  """Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_Lumbar_IsDownEngaged
}

"""
Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_Lumbar_IsMoreSupportEngaged {
  """
  Value: Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""
Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_Lumbar_IsLessSupportEngaged {
  """
  Value: Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_Lumbar_IsUpEngaged {
  """Value: Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  value: Boolean

  """
  Timestamp: Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_Lumbar_IsDownEngaged {
  """
  Value: Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Switches for SingleSeat.Backrest.SideBolster."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_SideBolster {
  """
  Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  isMoreSupportEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_SideBolster_IsMoreSupportEngaged

  """
  Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  isLessSupportEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_SideBolster_IsLessSupportEngaged
}

"""
Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_SideBolster_IsMoreSupportEngaged {
  """
  Value: Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  timestamp: String
}

"""
Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Backrest_SideBolster_IsLessSupportEngaged {
  """
  Value: Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  timestamp: String
}

"""Describes switches related to the seating of the seat."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Seating {
  """
  Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  isForwardEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Seating_IsForwardEngaged

  """
  Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  isBackwardEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Seating_IsBackwardEngaged
}

"""
Is switch to increase seating length engaged (SingleSeat.Seating.Length).
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Seating_IsForwardEngaged {
  """
  Value: Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  value: Boolean

  """
  Timestamp: Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  timestamp: String
}

"""
Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
"""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Seating_IsBackwardEngaged {
  """
  Value: Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  value: Boolean

  """
  Timestamp: Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  timestamp: String
}

"""Switches for SingleSeat.Headrest."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Headrest {
  """Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Headrest_IsUpEngaged

  """Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Headrest_IsDownEngaged

  """Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
  isForwardEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Headrest_IsForwardEngaged

  """Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
  isBackwardEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Headrest_IsBackwardEngaged
}

"""Head rest up switch engaged (SingleSeat.Headrest.Height)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Headrest_IsUpEngaged {
  """Value: Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  value: Boolean

  """Timestamp: Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  timestamp: String
}

"""Head rest down switch engaged (SingleSeat.Headrest.Height)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Headrest_IsDownEngaged {
  """Value: Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  value: Boolean

  """Timestamp: Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  timestamp: String
}

"""Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Headrest_IsForwardEngaged {
  """Value: Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
  value: Boolean

  """
  Timestamp: Head rest forward switch engaged (SingleSeat.Headrest.Angle).
  """
  timestamp: String
}

"""Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Headrest_IsBackwardEngaged {
  """Value: Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
  value: Boolean

  """
  Timestamp: Head rest backward switch engaged (SingleSeat.Headrest.Angle).
  """
  timestamp: String
}

"""Switches for SingleSeat.Massage."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Massage {
  """Increase massage level switch engaged (SingleSeat.Massage)."""
  isIncreaseEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Massage_IsIncreaseEngaged

  """Decrease massage level switch engaged (SingleSeat.Massage)."""
  isDecreaseEngaged: Vehicle_Cabin_Seat_Row1_Pos1_Switch_Massage_IsDecreaseEngaged
}

"""Increase massage level switch engaged (SingleSeat.Massage)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Massage_IsIncreaseEngaged {
  """Value: Increase massage level switch engaged (SingleSeat.Massage)."""
  value: Boolean

  """Timestamp: Increase massage level switch engaged (SingleSeat.Massage)."""
  timestamp: String
}

"""Decrease massage level switch engaged (SingleSeat.Massage)."""
type Vehicle_Cabin_Seat_Row1_Pos1_Switch_Massage_IsDecreaseEngaged {
  """Value: Decrease massage level switch engaged (SingleSeat.Massage)."""
  value: Boolean

  """Timestamp: Decrease massage level switch engaged (SingleSeat.Massage)."""
  timestamp: String
}

"""All seats."""
type Vehicle_Cabin_Seat_Row1_Pos2 {
  """Does the seat have a passenger in it."""
  isOccupied: Vehicle_Cabin_Seat_Row1_Pos2_IsOccupied

  """Occupant data."""
  occupant: Vehicle_Cabin_Seat_Row1_Pos2_Occupant

  """Is the belt engaged."""
  isBelted: Vehicle_Cabin_Seat_Row1_Pos2_IsBelted

  """Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat."""
  heating: Vehicle_Cabin_Seat_Row1_Pos2_Heating

  """Seat massage level. 0 = off. 100 = max massage."""
  massage: Vehicle_Cabin_Seat_Row1_Pos2_Massage

  """
  Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  position: Vehicle_Cabin_Seat_Row1_Pos2_Position

  """
  Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  height: Vehicle_Cabin_Seat_Row1_Pos2_Height

  """
  Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  tilt: Vehicle_Cabin_Seat_Row1_Pos2_Tilt

  """Describes signals related to the backrest of the seat."""
  backrest: Vehicle_Cabin_Seat_Row1_Pos2_Backrest

  """Describes signals related to the seating/base of the seat."""
  seating: Vehicle_Cabin_Seat_Row1_Pos2_Seating

  """Headrest settings."""
  headrest: Vehicle_Cabin_Seat_Row1_Pos2_Headrest

  """Airbag signals."""
  airbag: Vehicle_Cabin_Seat_Row1_Pos2_Airbag

  """Seat switch signals"""
  switch: Vehicle_Cabin_Seat_Row1_Pos2_Switch
}

"""Does the seat have a passenger in it."""
type Vehicle_Cabin_Seat_Row1_Pos2_IsOccupied {
  """Value: Does the seat have a passenger in it."""
  value: Boolean

  """Timestamp: Does the seat have a passenger in it."""
  timestamp: String
}

"""Occupant data."""
type Vehicle_Cabin_Seat_Row1_Pos2_Occupant {
  """Identifier attributes based on OAuth 2.0."""
  identifier: Vehicle_Cabin_Seat_Row1_Pos2_Occupant_Identifier
}

"""Identifier attributes based on OAuth 2.0."""
type Vehicle_Cabin_Seat_Row1_Pos2_Occupant_Identifier {
  """Subject for the authentication of the occupant. E.g. UserID 7331677."""
  subject: Vehicle_Cabin_Seat_Row1_Pos2_Occupant_Identifier_Subject

  """
  Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  issuer: Vehicle_Cabin_Seat_Row1_Pos2_Occupant_Identifier_Issuer
}

"""Subject for the authentication of the occupant. E.g. UserID 7331677."""
type Vehicle_Cabin_Seat_Row1_Pos2_Occupant_Identifier_Subject {
  """
  Value: Subject for the authentication of the occupant. E.g. UserID 7331677.
  """
  value: String

  """
  Timestamp: Subject for the authentication of the occupant. E.g. UserID 7331677.
  """
  timestamp: String
}

"""
Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Occupant_Identifier_Issuer {
  """
  Value: Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  value: String

  """
  Timestamp: Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  timestamp: String
}

"""Is the belt engaged."""
type Vehicle_Cabin_Seat_Row1_Pos2_IsBelted {
  """Value: Is the belt engaged."""
  value: Boolean

  """Timestamp: Is the belt engaged."""
  timestamp: String
}

"""Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat."""
type Vehicle_Cabin_Seat_Row1_Pos2_Heating {
  """
  Value: Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  value: Int

  """
  Timestamp: Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  timestamp: String

  """
  Unit of Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  unit: String
}

"""Seat massage level. 0 = off. 100 = max massage."""
type Vehicle_Cabin_Seat_Row1_Pos2_Massage {
  """Value: Seat massage level. 0 = off. 100 = max massage."""
  value: Int

  """Timestamp: Seat massage level. 0 = off. 100 = max massage."""
  timestamp: String

  """Unit of Seat massage level. 0 = off. 100 = max massage."""
  unit: String
}

"""
Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Position {
  """
  Value: Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  value: Int

  """
  Timestamp: Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  timestamp: String

  """
  Unit of Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  unit: String
}

"""
Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Height {
  """
  Value: Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  value: Int

  """
  Timestamp: Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  timestamp: String

  """
  Unit of Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  unit: String
}

"""
Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Tilt {
  """
  Value: Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  value: Float

  """
  Timestamp: Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  timestamp: String

  """
  Unit of Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  unit: String
}

"""Describes signals related to the backrest of the seat."""
type Vehicle_Cabin_Seat_Row1_Pos2_Backrest {
  """
  Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  recline: Vehicle_Cabin_Seat_Row1_Pos2_Backrest_Recline

  """
  Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.
  """
  lumbar: Vehicle_Cabin_Seat_Row1_Pos2_Backrest_Lumbar

  """Backrest side bolster (lumbar side support) settings."""
  sideBolster: Vehicle_Cabin_Seat_Row1_Pos2_Backrest_SideBolster
}

"""
Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Backrest_Recline {
  """
  Value: Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  value: Float

  """
  Timestamp: Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  timestamp: String

  """
  Unit of Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  unit: String
}

"""
Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Backrest_Lumbar {
  """
  Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  support: Vehicle_Cabin_Seat_Row1_Pos2_Backrest_Lumbar_Support

  """
  Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  height: Vehicle_Cabin_Seat_Row1_Pos2_Backrest_Lumbar_Height
}

"""
Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Backrest_Lumbar_Support {
  """
  Value: Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  value: Float

  """
  Timestamp: Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  timestamp: String

  """
  Unit of Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  unit: String
}

"""
Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Backrest_Lumbar_Height {
  """
  Value: Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  value: Int

  """
  Timestamp: Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  timestamp: String

  """
  Unit of Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  unit: String
}

"""Backrest side bolster (lumbar side support) settings."""
type Vehicle_Cabin_Seat_Row1_Pos2_Backrest_SideBolster {
  """
  Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  support: Vehicle_Cabin_Seat_Row1_Pos2_Backrest_SideBolster_Support
}

"""
Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Backrest_SideBolster_Support {
  """
  Value: Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  value: Float

  """
  Timestamp: Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  timestamp: String

  """
  Unit of Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  unit: String
}

"""Describes signals related to the seating/base of the seat."""
type Vehicle_Cabin_Seat_Row1_Pos2_Seating {
  """
  Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  length: Vehicle_Cabin_Seat_Row1_Pos2_Seating_Length
}

"""
Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Seating_Length {
  """
  Value: Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  value: Int

  """
  Timestamp: Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  timestamp: String

  """
  Unit of Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  unit: String
}

"""Headrest settings."""
type Vehicle_Cabin_Seat_Row1_Pos2_Headrest {
  """
  Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  height: Vehicle_Cabin_Seat_Row1_Pos2_Headrest_Height

  """
  Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  angle: Vehicle_Cabin_Seat_Row1_Pos2_Headrest_Angle
}

"""
Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Headrest_Height {
  """
  Value: Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  value: Int

  """
  Timestamp: Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  timestamp: String

  """
  Unit of Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  unit: String
}

"""
Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Headrest_Angle {
  """
  Value: Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  value: Float

  """
  Timestamp: Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  timestamp: String

  """
  Unit of Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  unit: String
}

"""Airbag signals."""
type Vehicle_Cabin_Seat_Row1_Pos2_Airbag {
  """
  Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  isDeployed: Vehicle_Cabin_Seat_Row1_Pos2_Airbag_IsDeployed
}

"""
Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Airbag_IsDeployed {
  """
  Value: Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  value: Boolean

  """
  Timestamp: Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  timestamp: String
}

"""Seat switch signals"""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch {
  """Warmer switch for Seat heater (SingleSeat.Heating)."""
  isWarmerEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsWarmerEngaged

  """Cooler switch for Seat heater (SingleSeat.Heating)."""
  isCoolerEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsCoolerEngaged

  """Seat forward switch engaged (SingleSeat.Position)."""
  isForwardEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsForwardEngaged

  """Seat backward switch engaged (SingleSeat.Position)."""
  isBackwardEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsBackwardEngaged

  """Seat up switch engaged (SingleSeat.Height)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsUpEngaged

  """Seat down switch engaged (SingleSeat.Height)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsDownEngaged

  """Tilt forward switch engaged (SingleSeat.Tilt)."""
  isTiltForwardEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsTiltForwardEngaged

  """Tilt backward switch engaged (SingleSeat.Tilt)."""
  isTiltBackwardEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsTiltBackwardEngaged

  """Describes switches related to the backrest of the seat."""
  backrest: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest

  """Describes switches related to the seating of the seat."""
  seating: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Seating

  """Switches for SingleSeat.Headrest."""
  headrest: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Headrest

  """Switches for SingleSeat.Massage."""
  massage: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Massage
}

"""Warmer switch for Seat heater (SingleSeat.Heating)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsWarmerEngaged {
  """Value: Warmer switch for Seat heater (SingleSeat.Heating)."""
  value: Boolean

  """Timestamp: Warmer switch for Seat heater (SingleSeat.Heating)."""
  timestamp: String
}

"""Cooler switch for Seat heater (SingleSeat.Heating)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsCoolerEngaged {
  """Value: Cooler switch for Seat heater (SingleSeat.Heating)."""
  value: Boolean

  """Timestamp: Cooler switch for Seat heater (SingleSeat.Heating)."""
  timestamp: String
}

"""Seat forward switch engaged (SingleSeat.Position)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsForwardEngaged {
  """Value: Seat forward switch engaged (SingleSeat.Position)."""
  value: Boolean

  """Timestamp: Seat forward switch engaged (SingleSeat.Position)."""
  timestamp: String
}

"""Seat backward switch engaged (SingleSeat.Position)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsBackwardEngaged {
  """Value: Seat backward switch engaged (SingleSeat.Position)."""
  value: Boolean

  """Timestamp: Seat backward switch engaged (SingleSeat.Position)."""
  timestamp: String
}

"""Seat up switch engaged (SingleSeat.Height)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsUpEngaged {
  """Value: Seat up switch engaged (SingleSeat.Height)."""
  value: Boolean

  """Timestamp: Seat up switch engaged (SingleSeat.Height)."""
  timestamp: String
}

"""Seat down switch engaged (SingleSeat.Height)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsDownEngaged {
  """Value: Seat down switch engaged (SingleSeat.Height)."""
  value: Boolean

  """Timestamp: Seat down switch engaged (SingleSeat.Height)."""
  timestamp: String
}

"""Tilt forward switch engaged (SingleSeat.Tilt)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsTiltForwardEngaged {
  """Value: Tilt forward switch engaged (SingleSeat.Tilt)."""
  value: Boolean

  """Timestamp: Tilt forward switch engaged (SingleSeat.Tilt)."""
  timestamp: String
}

"""Tilt backward switch engaged (SingleSeat.Tilt)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_IsTiltBackwardEngaged {
  """Value: Tilt backward switch engaged (SingleSeat.Tilt)."""
  value: Boolean

  """Timestamp: Tilt backward switch engaged (SingleSeat.Tilt)."""
  timestamp: String
}

"""Describes switches related to the backrest of the seat."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest {
  """Backrest recline forward switch engaged (SingleSeat.Backrest.Recline)."""
  isReclineForwardEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_IsReclineForwardEngaged

  """
  Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  isReclineBackwardEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_IsReclineBackwardEngaged

  """Switches for SingleSeat.Backrest.Lumbar."""
  lumbar: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_Lumbar

  """Switches for SingleSeat.Backrest.SideBolster."""
  sideBolster: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_SideBolster
}

"""Backrest recline forward switch engaged (SingleSeat.Backrest.Recline)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_IsReclineForwardEngaged {
  """
  Value: Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).
  """
  value: Boolean

  """
  Timestamp: Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).
  """
  timestamp: String
}

"""
Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_IsReclineBackwardEngaged {
  """
  Value: Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  value: Boolean

  """
  Timestamp: Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  timestamp: String
}

"""Switches for SingleSeat.Backrest.Lumbar."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_Lumbar {
  """
  Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  isMoreSupportEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_Lumbar_IsMoreSupportEngaged

  """
  Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  isLessSupportEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_Lumbar_IsLessSupportEngaged

  """Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_Lumbar_IsUpEngaged

  """Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_Lumbar_IsDownEngaged
}

"""
Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_Lumbar_IsMoreSupportEngaged {
  """
  Value: Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""
Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_Lumbar_IsLessSupportEngaged {
  """
  Value: Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_Lumbar_IsUpEngaged {
  """Value: Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  value: Boolean

  """
  Timestamp: Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_Lumbar_IsDownEngaged {
  """
  Value: Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Switches for SingleSeat.Backrest.SideBolster."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_SideBolster {
  """
  Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  isMoreSupportEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_SideBolster_IsMoreSupportEngaged

  """
  Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  isLessSupportEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_SideBolster_IsLessSupportEngaged
}

"""
Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_SideBolster_IsMoreSupportEngaged {
  """
  Value: Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  timestamp: String
}

"""
Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Backrest_SideBolster_IsLessSupportEngaged {
  """
  Value: Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  timestamp: String
}

"""Describes switches related to the seating of the seat."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Seating {
  """
  Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  isForwardEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Seating_IsForwardEngaged

  """
  Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  isBackwardEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Seating_IsBackwardEngaged
}

"""
Is switch to increase seating length engaged (SingleSeat.Seating.Length).
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Seating_IsForwardEngaged {
  """
  Value: Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  value: Boolean

  """
  Timestamp: Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  timestamp: String
}

"""
Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
"""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Seating_IsBackwardEngaged {
  """
  Value: Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  value: Boolean

  """
  Timestamp: Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  timestamp: String
}

"""Switches for SingleSeat.Headrest."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Headrest {
  """Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Headrest_IsUpEngaged

  """Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Headrest_IsDownEngaged

  """Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
  isForwardEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Headrest_IsForwardEngaged

  """Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
  isBackwardEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Headrest_IsBackwardEngaged
}

"""Head rest up switch engaged (SingleSeat.Headrest.Height)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Headrest_IsUpEngaged {
  """Value: Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  value: Boolean

  """Timestamp: Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  timestamp: String
}

"""Head rest down switch engaged (SingleSeat.Headrest.Height)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Headrest_IsDownEngaged {
  """Value: Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  value: Boolean

  """Timestamp: Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  timestamp: String
}

"""Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Headrest_IsForwardEngaged {
  """Value: Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
  value: Boolean

  """
  Timestamp: Head rest forward switch engaged (SingleSeat.Headrest.Angle).
  """
  timestamp: String
}

"""Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Headrest_IsBackwardEngaged {
  """Value: Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
  value: Boolean

  """
  Timestamp: Head rest backward switch engaged (SingleSeat.Headrest.Angle).
  """
  timestamp: String
}

"""Switches for SingleSeat.Massage."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Massage {
  """Increase massage level switch engaged (SingleSeat.Massage)."""
  isIncreaseEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Massage_IsIncreaseEngaged

  """Decrease massage level switch engaged (SingleSeat.Massage)."""
  isDecreaseEngaged: Vehicle_Cabin_Seat_Row1_Pos2_Switch_Massage_IsDecreaseEngaged
}

"""Increase massage level switch engaged (SingleSeat.Massage)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Massage_IsIncreaseEngaged {
  """Value: Increase massage level switch engaged (SingleSeat.Massage)."""
  value: Boolean

  """Timestamp: Increase massage level switch engaged (SingleSeat.Massage)."""
  timestamp: String
}

"""Decrease massage level switch engaged (SingleSeat.Massage)."""
type Vehicle_Cabin_Seat_Row1_Pos2_Switch_Massage_IsDecreaseEngaged {
  """Value: Decrease massage level switch engaged (SingleSeat.Massage)."""
  value: Boolean

  """Timestamp: Decrease massage level switch engaged (SingleSeat.Massage)."""
  timestamp: String
}

"""All seats."""
type Vehicle_Cabin_Seat_Row1_Pos3 {
  """Does the seat have a passenger in it."""
  isOccupied: Vehicle_Cabin_Seat_Row1_Pos3_IsOccupied

  """Occupant data."""
  occupant: Vehicle_Cabin_Seat_Row1_Pos3_Occupant

  """Is the belt engaged."""
  isBelted: Vehicle_Cabin_Seat_Row1_Pos3_IsBelted

  """Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat."""
  heating: Vehicle_Cabin_Seat_Row1_Pos3_Heating

  """Seat massage level. 0 = off. 100 = max massage."""
  massage: Vehicle_Cabin_Seat_Row1_Pos3_Massage

  """
  Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  position: Vehicle_Cabin_Seat_Row1_Pos3_Position

  """
  Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  height: Vehicle_Cabin_Seat_Row1_Pos3_Height

  """
  Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  tilt: Vehicle_Cabin_Seat_Row1_Pos3_Tilt

  """Describes signals related to the backrest of the seat."""
  backrest: Vehicle_Cabin_Seat_Row1_Pos3_Backrest

  """Describes signals related to the seating/base of the seat."""
  seating: Vehicle_Cabin_Seat_Row1_Pos3_Seating

  """Headrest settings."""
  headrest: Vehicle_Cabin_Seat_Row1_Pos3_Headrest

  """Airbag signals."""
  airbag: Vehicle_Cabin_Seat_Row1_Pos3_Airbag

  """Seat switch signals"""
  switch: Vehicle_Cabin_Seat_Row1_Pos3_Switch
}

"""Does the seat have a passenger in it."""
type Vehicle_Cabin_Seat_Row1_Pos3_IsOccupied {
  """Value: Does the seat have a passenger in it."""
  value: Boolean

  """Timestamp: Does the seat have a passenger in it."""
  timestamp: String
}

"""Occupant data."""
type Vehicle_Cabin_Seat_Row1_Pos3_Occupant {
  """Identifier attributes based on OAuth 2.0."""
  identifier: Vehicle_Cabin_Seat_Row1_Pos3_Occupant_Identifier
}

"""Identifier attributes based on OAuth 2.0."""
type Vehicle_Cabin_Seat_Row1_Pos3_Occupant_Identifier {
  """Subject for the authentication of the occupant. E.g. UserID 7331677."""
  subject: Vehicle_Cabin_Seat_Row1_Pos3_Occupant_Identifier_Subject

  """
  Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  issuer: Vehicle_Cabin_Seat_Row1_Pos3_Occupant_Identifier_Issuer
}

"""Subject for the authentication of the occupant. E.g. UserID 7331677."""
type Vehicle_Cabin_Seat_Row1_Pos3_Occupant_Identifier_Subject {
  """
  Value: Subject for the authentication of the occupant. E.g. UserID 7331677.
  """
  value: String

  """
  Timestamp: Subject for the authentication of the occupant. E.g. UserID 7331677.
  """
  timestamp: String
}

"""
Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Occupant_Identifier_Issuer {
  """
  Value: Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  value: String

  """
  Timestamp: Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  timestamp: String
}

"""Is the belt engaged."""
type Vehicle_Cabin_Seat_Row1_Pos3_IsBelted {
  """Value: Is the belt engaged."""
  value: Boolean

  """Timestamp: Is the belt engaged."""
  timestamp: String
}

"""Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat."""
type Vehicle_Cabin_Seat_Row1_Pos3_Heating {
  """
  Value: Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  value: Int

  """
  Timestamp: Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  timestamp: String

  """
  Unit of Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  unit: String
}

"""Seat massage level. 0 = off. 100 = max massage."""
type Vehicle_Cabin_Seat_Row1_Pos3_Massage {
  """Value: Seat massage level. 0 = off. 100 = max massage."""
  value: Int

  """Timestamp: Seat massage level. 0 = off. 100 = max massage."""
  timestamp: String

  """Unit of Seat massage level. 0 = off. 100 = max massage."""
  unit: String
}

"""
Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Position {
  """
  Value: Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  value: Int

  """
  Timestamp: Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  timestamp: String

  """
  Unit of Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  unit: String
}

"""
Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Height {
  """
  Value: Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  value: Int

  """
  Timestamp: Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  timestamp: String

  """
  Unit of Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  unit: String
}

"""
Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Tilt {
  """
  Value: Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  value: Float

  """
  Timestamp: Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  timestamp: String

  """
  Unit of Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  unit: String
}

"""Describes signals related to the backrest of the seat."""
type Vehicle_Cabin_Seat_Row1_Pos3_Backrest {
  """
  Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  recline: Vehicle_Cabin_Seat_Row1_Pos3_Backrest_Recline

  """
  Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.
  """
  lumbar: Vehicle_Cabin_Seat_Row1_Pos3_Backrest_Lumbar

  """Backrest side bolster (lumbar side support) settings."""
  sideBolster: Vehicle_Cabin_Seat_Row1_Pos3_Backrest_SideBolster
}

"""
Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Backrest_Recline {
  """
  Value: Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  value: Float

  """
  Timestamp: Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  timestamp: String

  """
  Unit of Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  unit: String
}

"""
Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Backrest_Lumbar {
  """
  Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  support: Vehicle_Cabin_Seat_Row1_Pos3_Backrest_Lumbar_Support

  """
  Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  height: Vehicle_Cabin_Seat_Row1_Pos3_Backrest_Lumbar_Height
}

"""
Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Backrest_Lumbar_Support {
  """
  Value: Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  value: Float

  """
  Timestamp: Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  timestamp: String

  """
  Unit of Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  unit: String
}

"""
Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Backrest_Lumbar_Height {
  """
  Value: Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  value: Int

  """
  Timestamp: Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  timestamp: String

  """
  Unit of Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  unit: String
}

"""Backrest side bolster (lumbar side support) settings."""
type Vehicle_Cabin_Seat_Row1_Pos3_Backrest_SideBolster {
  """
  Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  support: Vehicle_Cabin_Seat_Row1_Pos3_Backrest_SideBolster_Support
}

"""
Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Backrest_SideBolster_Support {
  """
  Value: Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  value: Float

  """
  Timestamp: Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  timestamp: String

  """
  Unit of Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  unit: String
}

"""Describes signals related to the seating/base of the seat."""
type Vehicle_Cabin_Seat_Row1_Pos3_Seating {
  """
  Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  length: Vehicle_Cabin_Seat_Row1_Pos3_Seating_Length
}

"""
Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Seating_Length {
  """
  Value: Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  value: Int

  """
  Timestamp: Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  timestamp: String

  """
  Unit of Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  unit: String
}

"""Headrest settings."""
type Vehicle_Cabin_Seat_Row1_Pos3_Headrest {
  """
  Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  height: Vehicle_Cabin_Seat_Row1_Pos3_Headrest_Height

  """
  Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  angle: Vehicle_Cabin_Seat_Row1_Pos3_Headrest_Angle
}

"""
Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Headrest_Height {
  """
  Value: Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  value: Int

  """
  Timestamp: Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  timestamp: String

  """
  Unit of Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  unit: String
}

"""
Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Headrest_Angle {
  """
  Value: Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  value: Float

  """
  Timestamp: Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  timestamp: String

  """
  Unit of Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  unit: String
}

"""Airbag signals."""
type Vehicle_Cabin_Seat_Row1_Pos3_Airbag {
  """
  Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  isDeployed: Vehicle_Cabin_Seat_Row1_Pos3_Airbag_IsDeployed
}

"""
Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Airbag_IsDeployed {
  """
  Value: Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  value: Boolean

  """
  Timestamp: Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  timestamp: String
}

"""Seat switch signals"""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch {
  """Warmer switch for Seat heater (SingleSeat.Heating)."""
  isWarmerEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsWarmerEngaged

  """Cooler switch for Seat heater (SingleSeat.Heating)."""
  isCoolerEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsCoolerEngaged

  """Seat forward switch engaged (SingleSeat.Position)."""
  isForwardEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsForwardEngaged

  """Seat backward switch engaged (SingleSeat.Position)."""
  isBackwardEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsBackwardEngaged

  """Seat up switch engaged (SingleSeat.Height)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsUpEngaged

  """Seat down switch engaged (SingleSeat.Height)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsDownEngaged

  """Tilt forward switch engaged (SingleSeat.Tilt)."""
  isTiltForwardEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsTiltForwardEngaged

  """Tilt backward switch engaged (SingleSeat.Tilt)."""
  isTiltBackwardEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsTiltBackwardEngaged

  """Describes switches related to the backrest of the seat."""
  backrest: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest

  """Describes switches related to the seating of the seat."""
  seating: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Seating

  """Switches for SingleSeat.Headrest."""
  headrest: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Headrest

  """Switches for SingleSeat.Massage."""
  massage: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Massage
}

"""Warmer switch for Seat heater (SingleSeat.Heating)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsWarmerEngaged {
  """Value: Warmer switch for Seat heater (SingleSeat.Heating)."""
  value: Boolean

  """Timestamp: Warmer switch for Seat heater (SingleSeat.Heating)."""
  timestamp: String
}

"""Cooler switch for Seat heater (SingleSeat.Heating)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsCoolerEngaged {
  """Value: Cooler switch for Seat heater (SingleSeat.Heating)."""
  value: Boolean

  """Timestamp: Cooler switch for Seat heater (SingleSeat.Heating)."""
  timestamp: String
}

"""Seat forward switch engaged (SingleSeat.Position)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsForwardEngaged {
  """Value: Seat forward switch engaged (SingleSeat.Position)."""
  value: Boolean

  """Timestamp: Seat forward switch engaged (SingleSeat.Position)."""
  timestamp: String
}

"""Seat backward switch engaged (SingleSeat.Position)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsBackwardEngaged {
  """Value: Seat backward switch engaged (SingleSeat.Position)."""
  value: Boolean

  """Timestamp: Seat backward switch engaged (SingleSeat.Position)."""
  timestamp: String
}

"""Seat up switch engaged (SingleSeat.Height)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsUpEngaged {
  """Value: Seat up switch engaged (SingleSeat.Height)."""
  value: Boolean

  """Timestamp: Seat up switch engaged (SingleSeat.Height)."""
  timestamp: String
}

"""Seat down switch engaged (SingleSeat.Height)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsDownEngaged {
  """Value: Seat down switch engaged (SingleSeat.Height)."""
  value: Boolean

  """Timestamp: Seat down switch engaged (SingleSeat.Height)."""
  timestamp: String
}

"""Tilt forward switch engaged (SingleSeat.Tilt)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsTiltForwardEngaged {
  """Value: Tilt forward switch engaged (SingleSeat.Tilt)."""
  value: Boolean

  """Timestamp: Tilt forward switch engaged (SingleSeat.Tilt)."""
  timestamp: String
}

"""Tilt backward switch engaged (SingleSeat.Tilt)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_IsTiltBackwardEngaged {
  """Value: Tilt backward switch engaged (SingleSeat.Tilt)."""
  value: Boolean

  """Timestamp: Tilt backward switch engaged (SingleSeat.Tilt)."""
  timestamp: String
}

"""Describes switches related to the backrest of the seat."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest {
  """Backrest recline forward switch engaged (SingleSeat.Backrest.Recline)."""
  isReclineForwardEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_IsReclineForwardEngaged

  """
  Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  isReclineBackwardEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_IsReclineBackwardEngaged

  """Switches for SingleSeat.Backrest.Lumbar."""
  lumbar: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_Lumbar

  """Switches for SingleSeat.Backrest.SideBolster."""
  sideBolster: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_SideBolster
}

"""Backrest recline forward switch engaged (SingleSeat.Backrest.Recline)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_IsReclineForwardEngaged {
  """
  Value: Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).
  """
  value: Boolean

  """
  Timestamp: Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).
  """
  timestamp: String
}

"""
Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_IsReclineBackwardEngaged {
  """
  Value: Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  value: Boolean

  """
  Timestamp: Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  timestamp: String
}

"""Switches for SingleSeat.Backrest.Lumbar."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_Lumbar {
  """
  Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  isMoreSupportEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_Lumbar_IsMoreSupportEngaged

  """
  Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  isLessSupportEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_Lumbar_IsLessSupportEngaged

  """Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_Lumbar_IsUpEngaged

  """Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_Lumbar_IsDownEngaged
}

"""
Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_Lumbar_IsMoreSupportEngaged {
  """
  Value: Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""
Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_Lumbar_IsLessSupportEngaged {
  """
  Value: Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_Lumbar_IsUpEngaged {
  """Value: Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  value: Boolean

  """
  Timestamp: Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_Lumbar_IsDownEngaged {
  """
  Value: Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Switches for SingleSeat.Backrest.SideBolster."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_SideBolster {
  """
  Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  isMoreSupportEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_SideBolster_IsMoreSupportEngaged

  """
  Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  isLessSupportEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_SideBolster_IsLessSupportEngaged
}

"""
Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_SideBolster_IsMoreSupportEngaged {
  """
  Value: Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  timestamp: String
}

"""
Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Backrest_SideBolster_IsLessSupportEngaged {
  """
  Value: Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  timestamp: String
}

"""Describes switches related to the seating of the seat."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Seating {
  """
  Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  isForwardEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Seating_IsForwardEngaged

  """
  Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  isBackwardEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Seating_IsBackwardEngaged
}

"""
Is switch to increase seating length engaged (SingleSeat.Seating.Length).
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Seating_IsForwardEngaged {
  """
  Value: Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  value: Boolean

  """
  Timestamp: Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  timestamp: String
}

"""
Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
"""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Seating_IsBackwardEngaged {
  """
  Value: Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  value: Boolean

  """
  Timestamp: Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  timestamp: String
}

"""Switches for SingleSeat.Headrest."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Headrest {
  """Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Headrest_IsUpEngaged

  """Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Headrest_IsDownEngaged

  """Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
  isForwardEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Headrest_IsForwardEngaged

  """Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
  isBackwardEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Headrest_IsBackwardEngaged
}

"""Head rest up switch engaged (SingleSeat.Headrest.Height)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Headrest_IsUpEngaged {
  """Value: Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  value: Boolean

  """Timestamp: Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  timestamp: String
}

"""Head rest down switch engaged (SingleSeat.Headrest.Height)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Headrest_IsDownEngaged {
  """Value: Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  value: Boolean

  """Timestamp: Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  timestamp: String
}

"""Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Headrest_IsForwardEngaged {
  """Value: Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
  value: Boolean

  """
  Timestamp: Head rest forward switch engaged (SingleSeat.Headrest.Angle).
  """
  timestamp: String
}

"""Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Headrest_IsBackwardEngaged {
  """Value: Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
  value: Boolean

  """
  Timestamp: Head rest backward switch engaged (SingleSeat.Headrest.Angle).
  """
  timestamp: String
}

"""Switches for SingleSeat.Massage."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Massage {
  """Increase massage level switch engaged (SingleSeat.Massage)."""
  isIncreaseEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Massage_IsIncreaseEngaged

  """Decrease massage level switch engaged (SingleSeat.Massage)."""
  isDecreaseEngaged: Vehicle_Cabin_Seat_Row1_Pos3_Switch_Massage_IsDecreaseEngaged
}

"""Increase massage level switch engaged (SingleSeat.Massage)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Massage_IsIncreaseEngaged {
  """Value: Increase massage level switch engaged (SingleSeat.Massage)."""
  value: Boolean

  """Timestamp: Increase massage level switch engaged (SingleSeat.Massage)."""
  timestamp: String
}

"""Decrease massage level switch engaged (SingleSeat.Massage)."""
type Vehicle_Cabin_Seat_Row1_Pos3_Switch_Massage_IsDecreaseEngaged {
  """Value: Decrease massage level switch engaged (SingleSeat.Massage)."""
  value: Boolean

  """Timestamp: Decrease massage level switch engaged (SingleSeat.Massage)."""
  timestamp: String
}

"""All seats."""
type Vehicle_Cabin_Seat_Row2 {
  """All seats."""
  pos1: Vehicle_Cabin_Seat_Row2_Pos1

  """All seats."""
  pos2: Vehicle_Cabin_Seat_Row2_Pos2

  """All seats."""
  pos3: Vehicle_Cabin_Seat_Row2_Pos3
}

"""All seats."""
type Vehicle_Cabin_Seat_Row2_Pos1 {
  """Does the seat have a passenger in it."""
  isOccupied: Vehicle_Cabin_Seat_Row2_Pos1_IsOccupied

  """Occupant data."""
  occupant: Vehicle_Cabin_Seat_Row2_Pos1_Occupant

  """Is the belt engaged."""
  isBelted: Vehicle_Cabin_Seat_Row2_Pos1_IsBelted

  """Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat."""
  heating: Vehicle_Cabin_Seat_Row2_Pos1_Heating

  """Seat massage level. 0 = off. 100 = max massage."""
  massage: Vehicle_Cabin_Seat_Row2_Pos1_Massage

  """
  Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  position: Vehicle_Cabin_Seat_Row2_Pos1_Position

  """
  Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  height: Vehicle_Cabin_Seat_Row2_Pos1_Height

  """
  Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  tilt: Vehicle_Cabin_Seat_Row2_Pos1_Tilt

  """Describes signals related to the backrest of the seat."""
  backrest: Vehicle_Cabin_Seat_Row2_Pos1_Backrest

  """Describes signals related to the seating/base of the seat."""
  seating: Vehicle_Cabin_Seat_Row2_Pos1_Seating

  """Headrest settings."""
  headrest: Vehicle_Cabin_Seat_Row2_Pos1_Headrest

  """Airbag signals."""
  airbag: Vehicle_Cabin_Seat_Row2_Pos1_Airbag

  """Seat switch signals"""
  switch: Vehicle_Cabin_Seat_Row2_Pos1_Switch
}

"""Does the seat have a passenger in it."""
type Vehicle_Cabin_Seat_Row2_Pos1_IsOccupied {
  """Value: Does the seat have a passenger in it."""
  value: Boolean

  """Timestamp: Does the seat have a passenger in it."""
  timestamp: String
}

"""Occupant data."""
type Vehicle_Cabin_Seat_Row2_Pos1_Occupant {
  """Identifier attributes based on OAuth 2.0."""
  identifier: Vehicle_Cabin_Seat_Row2_Pos1_Occupant_Identifier
}

"""Identifier attributes based on OAuth 2.0."""
type Vehicle_Cabin_Seat_Row2_Pos1_Occupant_Identifier {
  """Subject for the authentication of the occupant. E.g. UserID 7331677."""
  subject: Vehicle_Cabin_Seat_Row2_Pos1_Occupant_Identifier_Subject

  """
  Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  issuer: Vehicle_Cabin_Seat_Row2_Pos1_Occupant_Identifier_Issuer
}

"""Subject for the authentication of the occupant. E.g. UserID 7331677."""
type Vehicle_Cabin_Seat_Row2_Pos1_Occupant_Identifier_Subject {
  """
  Value: Subject for the authentication of the occupant. E.g. UserID 7331677.
  """
  value: String

  """
  Timestamp: Subject for the authentication of the occupant. E.g. UserID 7331677.
  """
  timestamp: String
}

"""
Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Occupant_Identifier_Issuer {
  """
  Value: Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  value: String

  """
  Timestamp: Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  timestamp: String
}

"""Is the belt engaged."""
type Vehicle_Cabin_Seat_Row2_Pos1_IsBelted {
  """Value: Is the belt engaged."""
  value: Boolean

  """Timestamp: Is the belt engaged."""
  timestamp: String
}

"""Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat."""
type Vehicle_Cabin_Seat_Row2_Pos1_Heating {
  """
  Value: Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  value: Int

  """
  Timestamp: Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  timestamp: String

  """
  Unit of Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  unit: String
}

"""Seat massage level. 0 = off. 100 = max massage."""
type Vehicle_Cabin_Seat_Row2_Pos1_Massage {
  """Value: Seat massage level. 0 = off. 100 = max massage."""
  value: Int

  """Timestamp: Seat massage level. 0 = off. 100 = max massage."""
  timestamp: String

  """Unit of Seat massage level. 0 = off. 100 = max massage."""
  unit: String
}

"""
Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Position {
  """
  Value: Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  value: Int

  """
  Timestamp: Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  timestamp: String

  """
  Unit of Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  unit: String
}

"""
Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Height {
  """
  Value: Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  value: Int

  """
  Timestamp: Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  timestamp: String

  """
  Unit of Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  unit: String
}

"""
Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Tilt {
  """
  Value: Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  value: Float

  """
  Timestamp: Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  timestamp: String

  """
  Unit of Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  unit: String
}

"""Describes signals related to the backrest of the seat."""
type Vehicle_Cabin_Seat_Row2_Pos1_Backrest {
  """
  Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  recline: Vehicle_Cabin_Seat_Row2_Pos1_Backrest_Recline

  """
  Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.
  """
  lumbar: Vehicle_Cabin_Seat_Row2_Pos1_Backrest_Lumbar

  """Backrest side bolster (lumbar side support) settings."""
  sideBolster: Vehicle_Cabin_Seat_Row2_Pos1_Backrest_SideBolster
}

"""
Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Backrest_Recline {
  """
  Value: Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  value: Float

  """
  Timestamp: Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  timestamp: String

  """
  Unit of Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  unit: String
}

"""
Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Backrest_Lumbar {
  """
  Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  support: Vehicle_Cabin_Seat_Row2_Pos1_Backrest_Lumbar_Support

  """
  Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  height: Vehicle_Cabin_Seat_Row2_Pos1_Backrest_Lumbar_Height
}

"""
Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Backrest_Lumbar_Support {
  """
  Value: Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  value: Float

  """
  Timestamp: Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  timestamp: String

  """
  Unit of Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  unit: String
}

"""
Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Backrest_Lumbar_Height {
  """
  Value: Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  value: Int

  """
  Timestamp: Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  timestamp: String

  """
  Unit of Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  unit: String
}

"""Backrest side bolster (lumbar side support) settings."""
type Vehicle_Cabin_Seat_Row2_Pos1_Backrest_SideBolster {
  """
  Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  support: Vehicle_Cabin_Seat_Row2_Pos1_Backrest_SideBolster_Support
}

"""
Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Backrest_SideBolster_Support {
  """
  Value: Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  value: Float

  """
  Timestamp: Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  timestamp: String

  """
  Unit of Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  unit: String
}

"""Describes signals related to the seating/base of the seat."""
type Vehicle_Cabin_Seat_Row2_Pos1_Seating {
  """
  Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  length: Vehicle_Cabin_Seat_Row2_Pos1_Seating_Length
}

"""
Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Seating_Length {
  """
  Value: Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  value: Int

  """
  Timestamp: Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  timestamp: String

  """
  Unit of Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  unit: String
}

"""Headrest settings."""
type Vehicle_Cabin_Seat_Row2_Pos1_Headrest {
  """
  Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  height: Vehicle_Cabin_Seat_Row2_Pos1_Headrest_Height

  """
  Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  angle: Vehicle_Cabin_Seat_Row2_Pos1_Headrest_Angle
}

"""
Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Headrest_Height {
  """
  Value: Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  value: Int

  """
  Timestamp: Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  timestamp: String

  """
  Unit of Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  unit: String
}

"""
Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Headrest_Angle {
  """
  Value: Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  value: Float

  """
  Timestamp: Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  timestamp: String

  """
  Unit of Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  unit: String
}

"""Airbag signals."""
type Vehicle_Cabin_Seat_Row2_Pos1_Airbag {
  """
  Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  isDeployed: Vehicle_Cabin_Seat_Row2_Pos1_Airbag_IsDeployed
}

"""
Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Airbag_IsDeployed {
  """
  Value: Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  value: Boolean

  """
  Timestamp: Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  timestamp: String
}

"""Seat switch signals"""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch {
  """Warmer switch for Seat heater (SingleSeat.Heating)."""
  isWarmerEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsWarmerEngaged

  """Cooler switch for Seat heater (SingleSeat.Heating)."""
  isCoolerEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsCoolerEngaged

  """Seat forward switch engaged (SingleSeat.Position)."""
  isForwardEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsForwardEngaged

  """Seat backward switch engaged (SingleSeat.Position)."""
  isBackwardEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsBackwardEngaged

  """Seat up switch engaged (SingleSeat.Height)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsUpEngaged

  """Seat down switch engaged (SingleSeat.Height)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsDownEngaged

  """Tilt forward switch engaged (SingleSeat.Tilt)."""
  isTiltForwardEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsTiltForwardEngaged

  """Tilt backward switch engaged (SingleSeat.Tilt)."""
  isTiltBackwardEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsTiltBackwardEngaged

  """Describes switches related to the backrest of the seat."""
  backrest: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest

  """Describes switches related to the seating of the seat."""
  seating: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Seating

  """Switches for SingleSeat.Headrest."""
  headrest: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Headrest

  """Switches for SingleSeat.Massage."""
  massage: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Massage
}

"""Warmer switch for Seat heater (SingleSeat.Heating)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsWarmerEngaged {
  """Value: Warmer switch for Seat heater (SingleSeat.Heating)."""
  value: Boolean

  """Timestamp: Warmer switch for Seat heater (SingleSeat.Heating)."""
  timestamp: String
}

"""Cooler switch for Seat heater (SingleSeat.Heating)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsCoolerEngaged {
  """Value: Cooler switch for Seat heater (SingleSeat.Heating)."""
  value: Boolean

  """Timestamp: Cooler switch for Seat heater (SingleSeat.Heating)."""
  timestamp: String
}

"""Seat forward switch engaged (SingleSeat.Position)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsForwardEngaged {
  """Value: Seat forward switch engaged (SingleSeat.Position)."""
  value: Boolean

  """Timestamp: Seat forward switch engaged (SingleSeat.Position)."""
  timestamp: String
}

"""Seat backward switch engaged (SingleSeat.Position)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsBackwardEngaged {
  """Value: Seat backward switch engaged (SingleSeat.Position)."""
  value: Boolean

  """Timestamp: Seat backward switch engaged (SingleSeat.Position)."""
  timestamp: String
}

"""Seat up switch engaged (SingleSeat.Height)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsUpEngaged {
  """Value: Seat up switch engaged (SingleSeat.Height)."""
  value: Boolean

  """Timestamp: Seat up switch engaged (SingleSeat.Height)."""
  timestamp: String
}

"""Seat down switch engaged (SingleSeat.Height)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsDownEngaged {
  """Value: Seat down switch engaged (SingleSeat.Height)."""
  value: Boolean

  """Timestamp: Seat down switch engaged (SingleSeat.Height)."""
  timestamp: String
}

"""Tilt forward switch engaged (SingleSeat.Tilt)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsTiltForwardEngaged {
  """Value: Tilt forward switch engaged (SingleSeat.Tilt)."""
  value: Boolean

  """Timestamp: Tilt forward switch engaged (SingleSeat.Tilt)."""
  timestamp: String
}

"""Tilt backward switch engaged (SingleSeat.Tilt)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_IsTiltBackwardEngaged {
  """Value: Tilt backward switch engaged (SingleSeat.Tilt)."""
  value: Boolean

  """Timestamp: Tilt backward switch engaged (SingleSeat.Tilt)."""
  timestamp: String
}

"""Describes switches related to the backrest of the seat."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest {
  """Backrest recline forward switch engaged (SingleSeat.Backrest.Recline)."""
  isReclineForwardEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_IsReclineForwardEngaged

  """
  Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  isReclineBackwardEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_IsReclineBackwardEngaged

  """Switches for SingleSeat.Backrest.Lumbar."""
  lumbar: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_Lumbar

  """Switches for SingleSeat.Backrest.SideBolster."""
  sideBolster: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_SideBolster
}

"""Backrest recline forward switch engaged (SingleSeat.Backrest.Recline)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_IsReclineForwardEngaged {
  """
  Value: Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).
  """
  value: Boolean

  """
  Timestamp: Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).
  """
  timestamp: String
}

"""
Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_IsReclineBackwardEngaged {
  """
  Value: Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  value: Boolean

  """
  Timestamp: Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  timestamp: String
}

"""Switches for SingleSeat.Backrest.Lumbar."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_Lumbar {
  """
  Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  isMoreSupportEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_Lumbar_IsMoreSupportEngaged

  """
  Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  isLessSupportEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_Lumbar_IsLessSupportEngaged

  """Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_Lumbar_IsUpEngaged

  """Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_Lumbar_IsDownEngaged
}

"""
Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_Lumbar_IsMoreSupportEngaged {
  """
  Value: Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""
Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_Lumbar_IsLessSupportEngaged {
  """
  Value: Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_Lumbar_IsUpEngaged {
  """Value: Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  value: Boolean

  """
  Timestamp: Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_Lumbar_IsDownEngaged {
  """
  Value: Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Switches for SingleSeat.Backrest.SideBolster."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_SideBolster {
  """
  Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  isMoreSupportEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_SideBolster_IsMoreSupportEngaged

  """
  Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  isLessSupportEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_SideBolster_IsLessSupportEngaged
}

"""
Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_SideBolster_IsMoreSupportEngaged {
  """
  Value: Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  timestamp: String
}

"""
Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Backrest_SideBolster_IsLessSupportEngaged {
  """
  Value: Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  timestamp: String
}

"""Describes switches related to the seating of the seat."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Seating {
  """
  Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  isForwardEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Seating_IsForwardEngaged

  """
  Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  isBackwardEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Seating_IsBackwardEngaged
}

"""
Is switch to increase seating length engaged (SingleSeat.Seating.Length).
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Seating_IsForwardEngaged {
  """
  Value: Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  value: Boolean

  """
  Timestamp: Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  timestamp: String
}

"""
Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
"""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Seating_IsBackwardEngaged {
  """
  Value: Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  value: Boolean

  """
  Timestamp: Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  timestamp: String
}

"""Switches for SingleSeat.Headrest."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Headrest {
  """Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Headrest_IsUpEngaged

  """Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Headrest_IsDownEngaged

  """Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
  isForwardEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Headrest_IsForwardEngaged

  """Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
  isBackwardEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Headrest_IsBackwardEngaged
}

"""Head rest up switch engaged (SingleSeat.Headrest.Height)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Headrest_IsUpEngaged {
  """Value: Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  value: Boolean

  """Timestamp: Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  timestamp: String
}

"""Head rest down switch engaged (SingleSeat.Headrest.Height)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Headrest_IsDownEngaged {
  """Value: Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  value: Boolean

  """Timestamp: Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  timestamp: String
}

"""Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Headrest_IsForwardEngaged {
  """Value: Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
  value: Boolean

  """
  Timestamp: Head rest forward switch engaged (SingleSeat.Headrest.Angle).
  """
  timestamp: String
}

"""Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Headrest_IsBackwardEngaged {
  """Value: Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
  value: Boolean

  """
  Timestamp: Head rest backward switch engaged (SingleSeat.Headrest.Angle).
  """
  timestamp: String
}

"""Switches for SingleSeat.Massage."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Massage {
  """Increase massage level switch engaged (SingleSeat.Massage)."""
  isIncreaseEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Massage_IsIncreaseEngaged

  """Decrease massage level switch engaged (SingleSeat.Massage)."""
  isDecreaseEngaged: Vehicle_Cabin_Seat_Row2_Pos1_Switch_Massage_IsDecreaseEngaged
}

"""Increase massage level switch engaged (SingleSeat.Massage)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Massage_IsIncreaseEngaged {
  """Value: Increase massage level switch engaged (SingleSeat.Massage)."""
  value: Boolean

  """Timestamp: Increase massage level switch engaged (SingleSeat.Massage)."""
  timestamp: String
}

"""Decrease massage level switch engaged (SingleSeat.Massage)."""
type Vehicle_Cabin_Seat_Row2_Pos1_Switch_Massage_IsDecreaseEngaged {
  """Value: Decrease massage level switch engaged (SingleSeat.Massage)."""
  value: Boolean

  """Timestamp: Decrease massage level switch engaged (SingleSeat.Massage)."""
  timestamp: String
}

"""All seats."""
type Vehicle_Cabin_Seat_Row2_Pos2 {
  """Does the seat have a passenger in it."""
  isOccupied: Vehicle_Cabin_Seat_Row2_Pos2_IsOccupied

  """Occupant data."""
  occupant: Vehicle_Cabin_Seat_Row2_Pos2_Occupant

  """Is the belt engaged."""
  isBelted: Vehicle_Cabin_Seat_Row2_Pos2_IsBelted

  """Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat."""
  heating: Vehicle_Cabin_Seat_Row2_Pos2_Heating

  """Seat massage level. 0 = off. 100 = max massage."""
  massage: Vehicle_Cabin_Seat_Row2_Pos2_Massage

  """
  Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  position: Vehicle_Cabin_Seat_Row2_Pos2_Position

  """
  Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  height: Vehicle_Cabin_Seat_Row2_Pos2_Height

  """
  Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  tilt: Vehicle_Cabin_Seat_Row2_Pos2_Tilt

  """Describes signals related to the backrest of the seat."""
  backrest: Vehicle_Cabin_Seat_Row2_Pos2_Backrest

  """Describes signals related to the seating/base of the seat."""
  seating: Vehicle_Cabin_Seat_Row2_Pos2_Seating

  """Headrest settings."""
  headrest: Vehicle_Cabin_Seat_Row2_Pos2_Headrest

  """Airbag signals."""
  airbag: Vehicle_Cabin_Seat_Row2_Pos2_Airbag

  """Seat switch signals"""
  switch: Vehicle_Cabin_Seat_Row2_Pos2_Switch
}

"""Does the seat have a passenger in it."""
type Vehicle_Cabin_Seat_Row2_Pos2_IsOccupied {
  """Value: Does the seat have a passenger in it."""
  value: Boolean

  """Timestamp: Does the seat have a passenger in it."""
  timestamp: String
}

"""Occupant data."""
type Vehicle_Cabin_Seat_Row2_Pos2_Occupant {
  """Identifier attributes based on OAuth 2.0."""
  identifier: Vehicle_Cabin_Seat_Row2_Pos2_Occupant_Identifier
}

"""Identifier attributes based on OAuth 2.0."""
type Vehicle_Cabin_Seat_Row2_Pos2_Occupant_Identifier {
  """Subject for the authentication of the occupant. E.g. UserID 7331677."""
  subject: Vehicle_Cabin_Seat_Row2_Pos2_Occupant_Identifier_Subject

  """
  Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  issuer: Vehicle_Cabin_Seat_Row2_Pos2_Occupant_Identifier_Issuer
}

"""Subject for the authentication of the occupant. E.g. UserID 7331677."""
type Vehicle_Cabin_Seat_Row2_Pos2_Occupant_Identifier_Subject {
  """
  Value: Subject for the authentication of the occupant. E.g. UserID 7331677.
  """
  value: String

  """
  Timestamp: Subject for the authentication of the occupant. E.g. UserID 7331677.
  """
  timestamp: String
}

"""
Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Occupant_Identifier_Issuer {
  """
  Value: Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  value: String

  """
  Timestamp: Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  timestamp: String
}

"""Is the belt engaged."""
type Vehicle_Cabin_Seat_Row2_Pos2_IsBelted {
  """Value: Is the belt engaged."""
  value: Boolean

  """Timestamp: Is the belt engaged."""
  timestamp: String
}

"""Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat."""
type Vehicle_Cabin_Seat_Row2_Pos2_Heating {
  """
  Value: Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  value: Int

  """
  Timestamp: Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  timestamp: String

  """
  Unit of Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  unit: String
}

"""Seat massage level. 0 = off. 100 = max massage."""
type Vehicle_Cabin_Seat_Row2_Pos2_Massage {
  """Value: Seat massage level. 0 = off. 100 = max massage."""
  value: Int

  """Timestamp: Seat massage level. 0 = off. 100 = max massage."""
  timestamp: String

  """Unit of Seat massage level. 0 = off. 100 = max massage."""
  unit: String
}

"""
Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Position {
  """
  Value: Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  value: Int

  """
  Timestamp: Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  timestamp: String

  """
  Unit of Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  unit: String
}

"""
Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Height {
  """
  Value: Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  value: Int

  """
  Timestamp: Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  timestamp: String

  """
  Unit of Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  unit: String
}

"""
Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Tilt {
  """
  Value: Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  value: Float

  """
  Timestamp: Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  timestamp: String

  """
  Unit of Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  unit: String
}

"""Describes signals related to the backrest of the seat."""
type Vehicle_Cabin_Seat_Row2_Pos2_Backrest {
  """
  Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  recline: Vehicle_Cabin_Seat_Row2_Pos2_Backrest_Recline

  """
  Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.
  """
  lumbar: Vehicle_Cabin_Seat_Row2_Pos2_Backrest_Lumbar

  """Backrest side bolster (lumbar side support) settings."""
  sideBolster: Vehicle_Cabin_Seat_Row2_Pos2_Backrest_SideBolster
}

"""
Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Backrest_Recline {
  """
  Value: Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  value: Float

  """
  Timestamp: Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  timestamp: String

  """
  Unit of Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  unit: String
}

"""
Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Backrest_Lumbar {
  """
  Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  support: Vehicle_Cabin_Seat_Row2_Pos2_Backrest_Lumbar_Support

  """
  Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  height: Vehicle_Cabin_Seat_Row2_Pos2_Backrest_Lumbar_Height
}

"""
Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Backrest_Lumbar_Support {
  """
  Value: Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  value: Float

  """
  Timestamp: Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  timestamp: String

  """
  Unit of Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  unit: String
}

"""
Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Backrest_Lumbar_Height {
  """
  Value: Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  value: Int

  """
  Timestamp: Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  timestamp: String

  """
  Unit of Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  unit: String
}

"""Backrest side bolster (lumbar side support) settings."""
type Vehicle_Cabin_Seat_Row2_Pos2_Backrest_SideBolster {
  """
  Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  support: Vehicle_Cabin_Seat_Row2_Pos2_Backrest_SideBolster_Support
}

"""
Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Backrest_SideBolster_Support {
  """
  Value: Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  value: Float

  """
  Timestamp: Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  timestamp: String

  """
  Unit of Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  unit: String
}

"""Describes signals related to the seating/base of the seat."""
type Vehicle_Cabin_Seat_Row2_Pos2_Seating {
  """
  Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  length: Vehicle_Cabin_Seat_Row2_Pos2_Seating_Length
}

"""
Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Seating_Length {
  """
  Value: Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  value: Int

  """
  Timestamp: Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  timestamp: String

  """
  Unit of Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  unit: String
}

"""Headrest settings."""
type Vehicle_Cabin_Seat_Row2_Pos2_Headrest {
  """
  Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  height: Vehicle_Cabin_Seat_Row2_Pos2_Headrest_Height

  """
  Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  angle: Vehicle_Cabin_Seat_Row2_Pos2_Headrest_Angle
}

"""
Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Headrest_Height {
  """
  Value: Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  value: Int

  """
  Timestamp: Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  timestamp: String

  """
  Unit of Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  unit: String
}

"""
Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Headrest_Angle {
  """
  Value: Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  value: Float

  """
  Timestamp: Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  timestamp: String

  """
  Unit of Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  unit: String
}

"""Airbag signals."""
type Vehicle_Cabin_Seat_Row2_Pos2_Airbag {
  """
  Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  isDeployed: Vehicle_Cabin_Seat_Row2_Pos2_Airbag_IsDeployed
}

"""
Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Airbag_IsDeployed {
  """
  Value: Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  value: Boolean

  """
  Timestamp: Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  timestamp: String
}

"""Seat switch signals"""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch {
  """Warmer switch for Seat heater (SingleSeat.Heating)."""
  isWarmerEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsWarmerEngaged

  """Cooler switch for Seat heater (SingleSeat.Heating)."""
  isCoolerEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsCoolerEngaged

  """Seat forward switch engaged (SingleSeat.Position)."""
  isForwardEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsForwardEngaged

  """Seat backward switch engaged (SingleSeat.Position)."""
  isBackwardEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsBackwardEngaged

  """Seat up switch engaged (SingleSeat.Height)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsUpEngaged

  """Seat down switch engaged (SingleSeat.Height)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsDownEngaged

  """Tilt forward switch engaged (SingleSeat.Tilt)."""
  isTiltForwardEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsTiltForwardEngaged

  """Tilt backward switch engaged (SingleSeat.Tilt)."""
  isTiltBackwardEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsTiltBackwardEngaged

  """Describes switches related to the backrest of the seat."""
  backrest: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest

  """Describes switches related to the seating of the seat."""
  seating: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Seating

  """Switches for SingleSeat.Headrest."""
  headrest: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Headrest

  """Switches for SingleSeat.Massage."""
  massage: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Massage
}

"""Warmer switch for Seat heater (SingleSeat.Heating)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsWarmerEngaged {
  """Value: Warmer switch for Seat heater (SingleSeat.Heating)."""
  value: Boolean

  """Timestamp: Warmer switch for Seat heater (SingleSeat.Heating)."""
  timestamp: String
}

"""Cooler switch for Seat heater (SingleSeat.Heating)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsCoolerEngaged {
  """Value: Cooler switch for Seat heater (SingleSeat.Heating)."""
  value: Boolean

  """Timestamp: Cooler switch for Seat heater (SingleSeat.Heating)."""
  timestamp: String
}

"""Seat forward switch engaged (SingleSeat.Position)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsForwardEngaged {
  """Value: Seat forward switch engaged (SingleSeat.Position)."""
  value: Boolean

  """Timestamp: Seat forward switch engaged (SingleSeat.Position)."""
  timestamp: String
}

"""Seat backward switch engaged (SingleSeat.Position)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsBackwardEngaged {
  """Value: Seat backward switch engaged (SingleSeat.Position)."""
  value: Boolean

  """Timestamp: Seat backward switch engaged (SingleSeat.Position)."""
  timestamp: String
}

"""Seat up switch engaged (SingleSeat.Height)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsUpEngaged {
  """Value: Seat up switch engaged (SingleSeat.Height)."""
  value: Boolean

  """Timestamp: Seat up switch engaged (SingleSeat.Height)."""
  timestamp: String
}

"""Seat down switch engaged (SingleSeat.Height)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsDownEngaged {
  """Value: Seat down switch engaged (SingleSeat.Height)."""
  value: Boolean

  """Timestamp: Seat down switch engaged (SingleSeat.Height)."""
  timestamp: String
}

"""Tilt forward switch engaged (SingleSeat.Tilt)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsTiltForwardEngaged {
  """Value: Tilt forward switch engaged (SingleSeat.Tilt)."""
  value: Boolean

  """Timestamp: Tilt forward switch engaged (SingleSeat.Tilt)."""
  timestamp: String
}

"""Tilt backward switch engaged (SingleSeat.Tilt)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_IsTiltBackwardEngaged {
  """Value: Tilt backward switch engaged (SingleSeat.Tilt)."""
  value: Boolean

  """Timestamp: Tilt backward switch engaged (SingleSeat.Tilt)."""
  timestamp: String
}

"""Describes switches related to the backrest of the seat."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest {
  """Backrest recline forward switch engaged (SingleSeat.Backrest.Recline)."""
  isReclineForwardEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_IsReclineForwardEngaged

  """
  Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  isReclineBackwardEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_IsReclineBackwardEngaged

  """Switches for SingleSeat.Backrest.Lumbar."""
  lumbar: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_Lumbar

  """Switches for SingleSeat.Backrest.SideBolster."""
  sideBolster: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_SideBolster
}

"""Backrest recline forward switch engaged (SingleSeat.Backrest.Recline)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_IsReclineForwardEngaged {
  """
  Value: Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).
  """
  value: Boolean

  """
  Timestamp: Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).
  """
  timestamp: String
}

"""
Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_IsReclineBackwardEngaged {
  """
  Value: Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  value: Boolean

  """
  Timestamp: Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  timestamp: String
}

"""Switches for SingleSeat.Backrest.Lumbar."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_Lumbar {
  """
  Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  isMoreSupportEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_Lumbar_IsMoreSupportEngaged

  """
  Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  isLessSupportEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_Lumbar_IsLessSupportEngaged

  """Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_Lumbar_IsUpEngaged

  """Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_Lumbar_IsDownEngaged
}

"""
Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_Lumbar_IsMoreSupportEngaged {
  """
  Value: Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""
Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_Lumbar_IsLessSupportEngaged {
  """
  Value: Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_Lumbar_IsUpEngaged {
  """Value: Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  value: Boolean

  """
  Timestamp: Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_Lumbar_IsDownEngaged {
  """
  Value: Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Switches for SingleSeat.Backrest.SideBolster."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_SideBolster {
  """
  Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  isMoreSupportEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_SideBolster_IsMoreSupportEngaged

  """
  Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  isLessSupportEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_SideBolster_IsLessSupportEngaged
}

"""
Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_SideBolster_IsMoreSupportEngaged {
  """
  Value: Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  timestamp: String
}

"""
Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Backrest_SideBolster_IsLessSupportEngaged {
  """
  Value: Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  timestamp: String
}

"""Describes switches related to the seating of the seat."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Seating {
  """
  Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  isForwardEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Seating_IsForwardEngaged

  """
  Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  isBackwardEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Seating_IsBackwardEngaged
}

"""
Is switch to increase seating length engaged (SingleSeat.Seating.Length).
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Seating_IsForwardEngaged {
  """
  Value: Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  value: Boolean

  """
  Timestamp: Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  timestamp: String
}

"""
Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
"""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Seating_IsBackwardEngaged {
  """
  Value: Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  value: Boolean

  """
  Timestamp: Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  timestamp: String
}

"""Switches for SingleSeat.Headrest."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Headrest {
  """Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Headrest_IsUpEngaged

  """Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Headrest_IsDownEngaged

  """Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
  isForwardEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Headrest_IsForwardEngaged

  """Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
  isBackwardEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Headrest_IsBackwardEngaged
}

"""Head rest up switch engaged (SingleSeat.Headrest.Height)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Headrest_IsUpEngaged {
  """Value: Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  value: Boolean

  """Timestamp: Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  timestamp: String
}

"""Head rest down switch engaged (SingleSeat.Headrest.Height)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Headrest_IsDownEngaged {
  """Value: Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  value: Boolean

  """Timestamp: Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  timestamp: String
}

"""Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Headrest_IsForwardEngaged {
  """Value: Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
  value: Boolean

  """
  Timestamp: Head rest forward switch engaged (SingleSeat.Headrest.Angle).
  """
  timestamp: String
}

"""Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Headrest_IsBackwardEngaged {
  """Value: Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
  value: Boolean

  """
  Timestamp: Head rest backward switch engaged (SingleSeat.Headrest.Angle).
  """
  timestamp: String
}

"""Switches for SingleSeat.Massage."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Massage {
  """Increase massage level switch engaged (SingleSeat.Massage)."""
  isIncreaseEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Massage_IsIncreaseEngaged

  """Decrease massage level switch engaged (SingleSeat.Massage)."""
  isDecreaseEngaged: Vehicle_Cabin_Seat_Row2_Pos2_Switch_Massage_IsDecreaseEngaged
}

"""Increase massage level switch engaged (SingleSeat.Massage)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Massage_IsIncreaseEngaged {
  """Value: Increase massage level switch engaged (SingleSeat.Massage)."""
  value: Boolean

  """Timestamp: Increase massage level switch engaged (SingleSeat.Massage)."""
  timestamp: String
}

"""Decrease massage level switch engaged (SingleSeat.Massage)."""
type Vehicle_Cabin_Seat_Row2_Pos2_Switch_Massage_IsDecreaseEngaged {
  """Value: Decrease massage level switch engaged (SingleSeat.Massage)."""
  value: Boolean

  """Timestamp: Decrease massage level switch engaged (SingleSeat.Massage)."""
  timestamp: String
}

"""All seats."""
type Vehicle_Cabin_Seat_Row2_Pos3 {
  """Does the seat have a passenger in it."""
  isOccupied: Vehicle_Cabin_Seat_Row2_Pos3_IsOccupied

  """Occupant data."""
  occupant: Vehicle_Cabin_Seat_Row2_Pos3_Occupant

  """Is the belt engaged."""
  isBelted: Vehicle_Cabin_Seat_Row2_Pos3_IsBelted

  """Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat."""
  heating: Vehicle_Cabin_Seat_Row2_Pos3_Heating

  """Seat massage level. 0 = off. 100 = max massage."""
  massage: Vehicle_Cabin_Seat_Row2_Pos3_Massage

  """
  Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  position: Vehicle_Cabin_Seat_Row2_Pos3_Position

  """
  Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  height: Vehicle_Cabin_Seat_Row2_Pos3_Height

  """
  Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  tilt: Vehicle_Cabin_Seat_Row2_Pos3_Tilt

  """Describes signals related to the backrest of the seat."""
  backrest: Vehicle_Cabin_Seat_Row2_Pos3_Backrest

  """Describes signals related to the seating/base of the seat."""
  seating: Vehicle_Cabin_Seat_Row2_Pos3_Seating

  """Headrest settings."""
  headrest: Vehicle_Cabin_Seat_Row2_Pos3_Headrest

  """Airbag signals."""
  airbag: Vehicle_Cabin_Seat_Row2_Pos3_Airbag

  """Seat switch signals"""
  switch: Vehicle_Cabin_Seat_Row2_Pos3_Switch
}

"""Does the seat have a passenger in it."""
type Vehicle_Cabin_Seat_Row2_Pos3_IsOccupied {
  """Value: Does the seat have a passenger in it."""
  value: Boolean

  """Timestamp: Does the seat have a passenger in it."""
  timestamp: String
}

"""Occupant data."""
type Vehicle_Cabin_Seat_Row2_Pos3_Occupant {
  """Identifier attributes based on OAuth 2.0."""
  identifier: Vehicle_Cabin_Seat_Row2_Pos3_Occupant_Identifier
}

"""Identifier attributes based on OAuth 2.0."""
type Vehicle_Cabin_Seat_Row2_Pos3_Occupant_Identifier {
  """Subject for the authentication of the occupant. E.g. UserID 7331677."""
  subject: Vehicle_Cabin_Seat_Row2_Pos3_Occupant_Identifier_Subject

  """
  Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  issuer: Vehicle_Cabin_Seat_Row2_Pos3_Occupant_Identifier_Issuer
}

"""Subject for the authentication of the occupant. E.g. UserID 7331677."""
type Vehicle_Cabin_Seat_Row2_Pos3_Occupant_Identifier_Subject {
  """
  Value: Subject for the authentication of the occupant. E.g. UserID 7331677.
  """
  value: String

  """
  Timestamp: Subject for the authentication of the occupant. E.g. UserID 7331677.
  """
  timestamp: String
}

"""
Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Occupant_Identifier_Issuer {
  """
  Value: Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  value: String

  """
  Timestamp: Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  timestamp: String
}

"""Is the belt engaged."""
type Vehicle_Cabin_Seat_Row2_Pos3_IsBelted {
  """Value: Is the belt engaged."""
  value: Boolean

  """Timestamp: Is the belt engaged."""
  timestamp: String
}

"""Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat."""
type Vehicle_Cabin_Seat_Row2_Pos3_Heating {
  """
  Value: Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  value: Int

  """
  Timestamp: Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  timestamp: String

  """
  Unit of Seat cooling / heating. 0 = off. -100 = max cold. +100 = max heat.
  """
  unit: String
}

"""Seat massage level. 0 = off. 100 = max massage."""
type Vehicle_Cabin_Seat_Row2_Pos3_Massage {
  """Value: Seat massage level. 0 = off. 100 = max massage."""
  value: Int

  """Timestamp: Seat massage level. 0 = off. 100 = max massage."""
  timestamp: String

  """Unit of Seat massage level. 0 = off. 100 = max massage."""
  unit: String
}

"""
Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Position {
  """
  Value: Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  value: Int

  """
  Timestamp: Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  timestamp: String

  """
  Unit of Seat position on vehicle x-axis. Position is relative to the frontmost position supported by the seat. 0 = Frontmost position supported.
  """
  unit: String
}

"""
Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Height {
  """
  Value: Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  value: Int

  """
  Timestamp: Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  timestamp: String

  """
  Unit of Seat position on vehicle z-axis. Position is relative within available movable range of the seating. 0 = Lowermost position supported.
  """
  unit: String
}

"""
Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Tilt {
  """
  Value: Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  value: Float

  """
  Timestamp: Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  timestamp: String

  """
  Unit of Tilting of seat relative to vehicle z-axis. 0 = seating is flat, seat and vehicle z-axis are parallel. Positive degrees = seat tilted backwards, seat z-axis is tilted backward.
  """
  unit: String
}

"""Describes signals related to the backrest of the seat."""
type Vehicle_Cabin_Seat_Row2_Pos3_Backrest {
  """
  Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  recline: Vehicle_Cabin_Seat_Row2_Pos3_Backrest_Recline

  """
  Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.
  """
  lumbar: Vehicle_Cabin_Seat_Row2_Pos3_Backrest_Lumbar

  """Backrest side bolster (lumbar side support) settings."""
  sideBolster: Vehicle_Cabin_Seat_Row2_Pos3_Backrest_SideBolster
}

"""
Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Backrest_Recline {
  """
  Value: Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  value: Float

  """
  Timestamp: Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  timestamp: String

  """
  Unit of Backrest recline compared to seat z-axis (seat vertical axis). 0 degrees = Upright/Vertical backrest. Negative degrees for forward recline. Positive degrees for backward recline.
  """
  unit: String
}

"""
Adjustable lumbar support mechanisms in seats allow the user to change the seat back shape.
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Backrest_Lumbar {
  """
  Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  support: Vehicle_Cabin_Seat_Row2_Pos3_Backrest_Lumbar_Support

  """
  Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  height: Vehicle_Cabin_Seat_Row2_Pos3_Backrest_Lumbar_Height
}

"""
Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Backrest_Lumbar_Support {
  """
  Value: Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  value: Float

  """
  Timestamp: Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  timestamp: String

  """
  Unit of Lumbar support (in/out position). 0 = Innermost position. 100 = Outermost position.
  """
  unit: String
}

"""
Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Backrest_Lumbar_Height {
  """
  Value: Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  value: Int

  """
  Timestamp: Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  timestamp: String

  """
  Unit of Height of lumbar support. Position is relative within available movable range of the lumbar support. 0 = Lowermost position supported.
  """
  unit: String
}

"""Backrest side bolster (lumbar side support) settings."""
type Vehicle_Cabin_Seat_Row2_Pos3_Backrest_SideBolster {
  """
  Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  support: Vehicle_Cabin_Seat_Row2_Pos3_Backrest_SideBolster_Support
}

"""
Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Backrest_SideBolster_Support {
  """
  Value: Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  value: Float

  """
  Timestamp: Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  timestamp: String

  """
  Unit of Side bolster support. 0 = Minimum support (widest side bolster setting). 100 = Maximum support.
  """
  unit: String
}

"""Describes signals related to the seating/base of the seat."""
type Vehicle_Cabin_Seat_Row2_Pos3_Seating {
  """
  Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  length: Vehicle_Cabin_Seat_Row2_Pos3_Seating_Length
}

"""
Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Seating_Length {
  """
  Value: Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  value: Int

  """
  Timestamp: Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  timestamp: String

  """
  Unit of Length adjustment of seating. 0 = Adjustable part of seating in rearmost position (Shortest length of seating).
  """
  unit: String
}

"""Headrest settings."""
type Vehicle_Cabin_Seat_Row2_Pos3_Headrest {
  """
  Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  height: Vehicle_Cabin_Seat_Row2_Pos3_Headrest_Height

  """
  Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  angle: Vehicle_Cabin_Seat_Row2_Pos3_Headrest_Angle
}

"""
Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Headrest_Height {
  """
  Value: Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  value: Int

  """
  Timestamp: Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  timestamp: String

  """
  Unit of Position of headrest relative to movable range of the head rest. 0 = Bottommost position supported.
  """
  unit: String
}

"""
Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Headrest_Angle {
  """
  Value: Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  value: Float

  """
  Timestamp: Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  timestamp: String

  """
  Unit of Headrest angle, relative to backrest, 0 degrees if parallel to backrest, Positive degrees = tilted forward.
  """
  unit: String
}

"""Airbag signals."""
type Vehicle_Cabin_Seat_Row2_Pos3_Airbag {
  """
  Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  isDeployed: Vehicle_Cabin_Seat_Row2_Pos3_Airbag_IsDeployed
}

"""
Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Airbag_IsDeployed {
  """
  Value: Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  value: Boolean

  """
  Timestamp: Airbag deployment status. True = Airbag deployed. False = Airbag not deployed.
  """
  timestamp: String
}

"""Seat switch signals"""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch {
  """Warmer switch for Seat heater (SingleSeat.Heating)."""
  isWarmerEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsWarmerEngaged

  """Cooler switch for Seat heater (SingleSeat.Heating)."""
  isCoolerEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsCoolerEngaged

  """Seat forward switch engaged (SingleSeat.Position)."""
  isForwardEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsForwardEngaged

  """Seat backward switch engaged (SingleSeat.Position)."""
  isBackwardEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsBackwardEngaged

  """Seat up switch engaged (SingleSeat.Height)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsUpEngaged

  """Seat down switch engaged (SingleSeat.Height)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsDownEngaged

  """Tilt forward switch engaged (SingleSeat.Tilt)."""
  isTiltForwardEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsTiltForwardEngaged

  """Tilt backward switch engaged (SingleSeat.Tilt)."""
  isTiltBackwardEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsTiltBackwardEngaged

  """Describes switches related to the backrest of the seat."""
  backrest: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest

  """Describes switches related to the seating of the seat."""
  seating: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Seating

  """Switches for SingleSeat.Headrest."""
  headrest: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Headrest

  """Switches for SingleSeat.Massage."""
  massage: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Massage
}

"""Warmer switch for Seat heater (SingleSeat.Heating)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsWarmerEngaged {
  """Value: Warmer switch for Seat heater (SingleSeat.Heating)."""
  value: Boolean

  """Timestamp: Warmer switch for Seat heater (SingleSeat.Heating)."""
  timestamp: String
}

"""Cooler switch for Seat heater (SingleSeat.Heating)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsCoolerEngaged {
  """Value: Cooler switch for Seat heater (SingleSeat.Heating)."""
  value: Boolean

  """Timestamp: Cooler switch for Seat heater (SingleSeat.Heating)."""
  timestamp: String
}

"""Seat forward switch engaged (SingleSeat.Position)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsForwardEngaged {
  """Value: Seat forward switch engaged (SingleSeat.Position)."""
  value: Boolean

  """Timestamp: Seat forward switch engaged (SingleSeat.Position)."""
  timestamp: String
}

"""Seat backward switch engaged (SingleSeat.Position)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsBackwardEngaged {
  """Value: Seat backward switch engaged (SingleSeat.Position)."""
  value: Boolean

  """Timestamp: Seat backward switch engaged (SingleSeat.Position)."""
  timestamp: String
}

"""Seat up switch engaged (SingleSeat.Height)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsUpEngaged {
  """Value: Seat up switch engaged (SingleSeat.Height)."""
  value: Boolean

  """Timestamp: Seat up switch engaged (SingleSeat.Height)."""
  timestamp: String
}

"""Seat down switch engaged (SingleSeat.Height)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsDownEngaged {
  """Value: Seat down switch engaged (SingleSeat.Height)."""
  value: Boolean

  """Timestamp: Seat down switch engaged (SingleSeat.Height)."""
  timestamp: String
}

"""Tilt forward switch engaged (SingleSeat.Tilt)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsTiltForwardEngaged {
  """Value: Tilt forward switch engaged (SingleSeat.Tilt)."""
  value: Boolean

  """Timestamp: Tilt forward switch engaged (SingleSeat.Tilt)."""
  timestamp: String
}

"""Tilt backward switch engaged (SingleSeat.Tilt)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_IsTiltBackwardEngaged {
  """Value: Tilt backward switch engaged (SingleSeat.Tilt)."""
  value: Boolean

  """Timestamp: Tilt backward switch engaged (SingleSeat.Tilt)."""
  timestamp: String
}

"""Describes switches related to the backrest of the seat."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest {
  """Backrest recline forward switch engaged (SingleSeat.Backrest.Recline)."""
  isReclineForwardEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_IsReclineForwardEngaged

  """
  Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  isReclineBackwardEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_IsReclineBackwardEngaged

  """Switches for SingleSeat.Backrest.Lumbar."""
  lumbar: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_Lumbar

  """Switches for SingleSeat.Backrest.SideBolster."""
  sideBolster: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_SideBolster
}

"""Backrest recline forward switch engaged (SingleSeat.Backrest.Recline)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_IsReclineForwardEngaged {
  """
  Value: Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).
  """
  value: Boolean

  """
  Timestamp: Backrest recline forward switch engaged (SingleSeat.Backrest.Recline).
  """
  timestamp: String
}

"""
Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_IsReclineBackwardEngaged {
  """
  Value: Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  value: Boolean

  """
  Timestamp: Backrest recline backward switch engaged (SingleSeat.Backrest.Recline).
  """
  timestamp: String
}

"""Switches for SingleSeat.Backrest.Lumbar."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_Lumbar {
  """
  Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  isMoreSupportEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_Lumbar_IsMoreSupportEngaged

  """
  Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  isLessSupportEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_Lumbar_IsLessSupportEngaged

  """Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_Lumbar_IsUpEngaged

  """Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_Lumbar_IsDownEngaged
}

"""
Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_Lumbar_IsMoreSupportEngaged {
  """
  Value: Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for more lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""
Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_Lumbar_IsLessSupportEngaged {
  """
  Value: Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for less lumbar support engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_Lumbar_IsUpEngaged {
  """Value: Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
  value: Boolean

  """
  Timestamp: Lumbar up switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_Lumbar_IsDownEngaged {
  """
  Value: Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  value: Boolean

  """
  Timestamp: Lumbar down switch engaged (SingleSeat.Backrest.Lumbar.Support).
  """
  timestamp: String
}

"""Switches for SingleSeat.Backrest.SideBolster."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_SideBolster {
  """
  Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  isMoreSupportEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_SideBolster_IsMoreSupportEngaged

  """
  Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  isLessSupportEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_SideBolster_IsLessSupportEngaged
}

"""
Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_SideBolster_IsMoreSupportEngaged {
  """
  Value: Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for more side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  timestamp: String
}

"""
Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Backrest_SideBolster_IsLessSupportEngaged {
  """
  Value: Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  value: Boolean

  """
  Timestamp: Is switch for less side bolster support engaged (SingleSeat.Backrest.SideBolster.Support).
  """
  timestamp: String
}

"""Describes switches related to the seating of the seat."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Seating {
  """
  Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  isForwardEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Seating_IsForwardEngaged

  """
  Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  isBackwardEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Seating_IsBackwardEngaged
}

"""
Is switch to increase seating length engaged (SingleSeat.Seating.Length).
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Seating_IsForwardEngaged {
  """
  Value: Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  value: Boolean

  """
  Timestamp: Is switch to increase seating length engaged (SingleSeat.Seating.Length).
  """
  timestamp: String
}

"""
Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
"""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Seating_IsBackwardEngaged {
  """
  Value: Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  value: Boolean

  """
  Timestamp: Is switch to decrease seating length engaged (SingleSeat.Seating.Length).
  """
  timestamp: String
}

"""Switches for SingleSeat.Headrest."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Headrest {
  """Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  isUpEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Headrest_IsUpEngaged

  """Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  isDownEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Headrest_IsDownEngaged

  """Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
  isForwardEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Headrest_IsForwardEngaged

  """Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
  isBackwardEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Headrest_IsBackwardEngaged
}

"""Head rest up switch engaged (SingleSeat.Headrest.Height)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Headrest_IsUpEngaged {
  """Value: Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  value: Boolean

  """Timestamp: Head rest up switch engaged (SingleSeat.Headrest.Height)."""
  timestamp: String
}

"""Head rest down switch engaged (SingleSeat.Headrest.Height)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Headrest_IsDownEngaged {
  """Value: Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  value: Boolean

  """Timestamp: Head rest down switch engaged (SingleSeat.Headrest.Height)."""
  timestamp: String
}

"""Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Headrest_IsForwardEngaged {
  """Value: Head rest forward switch engaged (SingleSeat.Headrest.Angle)."""
  value: Boolean

  """
  Timestamp: Head rest forward switch engaged (SingleSeat.Headrest.Angle).
  """
  timestamp: String
}

"""Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Headrest_IsBackwardEngaged {
  """Value: Head rest backward switch engaged (SingleSeat.Headrest.Angle)."""
  value: Boolean

  """
  Timestamp: Head rest backward switch engaged (SingleSeat.Headrest.Angle).
  """
  timestamp: String
}

"""Switches for SingleSeat.Massage."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Massage {
  """Increase massage level switch engaged (SingleSeat.Massage)."""
  isIncreaseEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Massage_IsIncreaseEngaged

  """Decrease massage level switch engaged (SingleSeat.Massage)."""
  isDecreaseEngaged: Vehicle_Cabin_Seat_Row2_Pos3_Switch_Massage_IsDecreaseEngaged
}

"""Increase massage level switch engaged (SingleSeat.Massage)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Massage_IsIncreaseEngaged {
  """Value: Increase massage level switch engaged (SingleSeat.Massage)."""
  value: Boolean

  """Timestamp: Increase massage level switch engaged (SingleSeat.Massage)."""
  timestamp: String
}

"""Decrease massage level switch engaged (SingleSeat.Massage)."""
type Vehicle_Cabin_Seat_Row2_Pos3_Switch_Massage_IsDecreaseEngaged {
  """Value: Decrease massage level switch engaged (SingleSeat.Massage)."""
  value: Boolean

  """Timestamp: Decrease massage level switch engaged (SingleSeat.Massage)."""
  timestamp: String
}

"""The position of the driver seat in row 1."""
type Vehicle_Cabin_DriverPosition {
  """Value: The position of the driver seat in row 1."""
  value: Int

  """Timestamp: The position of the driver seat in row 1."""
  timestamp: String
}

"""Number of seat rows in vehicle."""
type Vehicle_Cabin_SeatRowCount {
  """Value: Number of seat rows in vehicle."""
  value: Int

  """Timestamp: Number of seat rows in vehicle."""
  timestamp: String
}

"""Number of seats across each row from the front to the rear."""
type Vehicle_Cabin_SeatPosCount {
  """Value: Number of seats across each row from the front to the rear."""
  value: [Int]

  """Timestamp: Number of seats across each row from the front to the rear."""
  timestamp: String
}

"""Convertible roof."""
type Vehicle_Cabin_Convertible {
  """Roof status on convertible vehicles."""
  status: Vehicle_Cabin_Convertible_Status
}

"""Roof status on convertible vehicles."""
type Vehicle_Cabin_Convertible_Status {
  """Value: Roof status on convertible vehicles."""
  value: String

  """Timestamp: Roof status on convertible vehicles."""
  timestamp: String
}

"""All Advanced Driver Assist Systems data."""
type Vehicle_ADAS {
  """
  Indicates the currently active level of autonomy according to SAE J3016 taxonomy.
  """
  activeAutonomyLevel: Vehicle_ADAS_ActiveAutonomyLevel

  """
  Indicates the highest level of autonomy according to SAE J3016 taxonomy the vehicle is capable of.
  """
  supportedAutonomyLevel: Vehicle_ADAS_SupportedAutonomyLevel

  """Signals from Cruise Control system."""
  cruiseControl: Vehicle_ADAS_CruiseControl

  """Signals from Lane Departure Detection System."""
  laneDepartureDetection: Vehicle_ADAS_LaneDepartureDetection

  """Signals form Obstacle Sensor System."""
  obstacleDetection: Vehicle_ADAS_ObstacleDetection

  """Antilock Braking System signals."""
  abs: Vehicle_ADAS_ABS

  """Traction Control System signals."""
  tcs: Vehicle_ADAS_TCS

  """Electronic Stability Control System signals."""
  esc: Vehicle_ADAS_ESC

  """Electronic Brakeforce Distribution (EBD) System signals."""
  ebd: Vehicle_ADAS_EBD

  """Emergency Brake Assist (EBA) System signals."""
  eba: Vehicle_ADAS_EBA
}

"""
Indicates the currently active level of autonomy according to SAE J3016 taxonomy.
"""
type Vehicle_ADAS_ActiveAutonomyLevel {
  """
  Value: Indicates the currently active level of autonomy according to SAE J3016 taxonomy.
  """
  value: String

  """
  Timestamp: Indicates the currently active level of autonomy according to SAE J3016 taxonomy.
  """
  timestamp: String
}

"""
Indicates the highest level of autonomy according to SAE J3016 taxonomy the vehicle is capable of.
"""
type Vehicle_ADAS_SupportedAutonomyLevel {
  """
  Value: Indicates the highest level of autonomy according to SAE J3016 taxonomy the vehicle is capable of.
  """
  value: String

  """
  Timestamp: Indicates the highest level of autonomy according to SAE J3016 taxonomy the vehicle is capable of.
  """
  timestamp: String
}

"""Signals from Cruise Control system."""
type Vehicle_ADAS_CruiseControl {
  """
  Indicates if cruise control system is enabled (e.g. ready to receive configurations and settings) True = Enabled. False = Disabled.
  """
  isEnabled: Vehicle_ADAS_CruiseControl_IsEnabled

  """
  Indicates if cruise control system is active (i.e. actively controls speed). True = Active. False = Inactive.
  """
  isActive: Vehicle_ADAS_CruiseControl_IsActive

  """Set cruise control speed in kilometers per hour."""
  speedSet: Vehicle_ADAS_CruiseControl_SpeedSet

  """
  Indicates if cruise control system incurred an error condition. True = Error. False = No Error.
  """
  isError: Vehicle_ADAS_CruiseControl_IsError
}

"""
Indicates if cruise control system is enabled (e.g. ready to receive configurations and settings) True = Enabled. False = Disabled.
"""
type Vehicle_ADAS_CruiseControl_IsEnabled {
  """
  Value: Indicates if cruise control system is enabled (e.g. ready to receive configurations and settings) True = Enabled. False = Disabled.
  """
  value: Boolean

  """
  Timestamp: Indicates if cruise control system is enabled (e.g. ready to receive configurations and settings) True = Enabled. False = Disabled.
  """
  timestamp: String
}

"""
Indicates if cruise control system is active (i.e. actively controls speed). True = Active. False = Inactive.
"""
type Vehicle_ADAS_CruiseControl_IsActive {
  """
  Value: Indicates if cruise control system is active (i.e. actively controls speed). True = Active. False = Inactive.
  """
  value: Boolean

  """
  Timestamp: Indicates if cruise control system is active (i.e. actively controls speed). True = Active. False = Inactive.
  """
  timestamp: String
}

"""Set cruise control speed in kilometers per hour."""
type Vehicle_ADAS_CruiseControl_SpeedSet {
  """Value: Set cruise control speed in kilometers per hour."""
  value: Float

  """Timestamp: Set cruise control speed in kilometers per hour."""
  timestamp: String

  """Unit of Set cruise control speed in kilometers per hour."""
  unit: String
}

"""
Indicates if cruise control system incurred an error condition. True = Error. False = No Error.
"""
type Vehicle_ADAS_CruiseControl_IsError {
  """
  Value: Indicates if cruise control system incurred an error condition. True = Error. False = No Error.
  """
  value: Boolean

  """
  Timestamp: Indicates if cruise control system incurred an error condition. True = Error. False = No Error.
  """
  timestamp: String
}

"""Signals from Lane Departure Detection System."""
type Vehicle_ADAS_LaneDepartureDetection {
  """
  Indicates if lane departure detection system is enabled. True = Enabled. False = Disabled.
  """
  isEnabled: Vehicle_ADAS_LaneDepartureDetection_IsEnabled

  """Indicates if lane departure detection registered a lane departure."""
  isWarning: Vehicle_ADAS_LaneDepartureDetection_IsWarning

  """
  Indicates if lane departure system incurred an error condition. True = Error. False = No Error.
  """
  isError: Vehicle_ADAS_LaneDepartureDetection_IsError
}

"""
Indicates if lane departure detection system is enabled. True = Enabled. False = Disabled.
"""
type Vehicle_ADAS_LaneDepartureDetection_IsEnabled {
  """
  Value: Indicates if lane departure detection system is enabled. True = Enabled. False = Disabled.
  """
  value: Boolean

  """
  Timestamp: Indicates if lane departure detection system is enabled. True = Enabled. False = Disabled.
  """
  timestamp: String
}

"""Indicates if lane departure detection registered a lane departure."""
type Vehicle_ADAS_LaneDepartureDetection_IsWarning {
  """
  Value: Indicates if lane departure detection registered a lane departure.
  """
  value: Boolean

  """
  Timestamp: Indicates if lane departure detection registered a lane departure.
  """
  timestamp: String
}

"""
Indicates if lane departure system incurred an error condition. True = Error. False = No Error.
"""
type Vehicle_ADAS_LaneDepartureDetection_IsError {
  """
  Value: Indicates if lane departure system incurred an error condition. True = Error. False = No Error.
  """
  value: Boolean

  """
  Timestamp: Indicates if lane departure system incurred an error condition. True = Error. False = No Error.
  """
  timestamp: String
}

"""Signals form Obstacle Sensor System."""
type Vehicle_ADAS_ObstacleDetection {
  """
  Indicates if obstacle sensor system is enabled (i.e. monitoring for obstacles). True = Enabled. False = Disabled.
  """
  isEnabled: Vehicle_ADAS_ObstacleDetection_IsEnabled

  """Indicates if obstacle sensor system registered an obstacle."""
  isWarning: Vehicle_ADAS_ObstacleDetection_IsWarning

  """
  Indicates if obstacle sensor system incurred an error condition. True = Error. False = No Error.
  """
  isError: Vehicle_ADAS_ObstacleDetection_IsError
}

"""
Indicates if obstacle sensor system is enabled (i.e. monitoring for obstacles). True = Enabled. False = Disabled.
"""
type Vehicle_ADAS_ObstacleDetection_IsEnabled {
  """
  Value: Indicates if obstacle sensor system is enabled (i.e. monitoring for obstacles). True = Enabled. False = Disabled.
  """
  value: Boolean

  """
  Timestamp: Indicates if obstacle sensor system is enabled (i.e. monitoring for obstacles). True = Enabled. False = Disabled.
  """
  timestamp: String
}

"""Indicates if obstacle sensor system registered an obstacle."""
type Vehicle_ADAS_ObstacleDetection_IsWarning {
  """Value: Indicates if obstacle sensor system registered an obstacle."""
  value: Boolean

  """Timestamp: Indicates if obstacle sensor system registered an obstacle."""
  timestamp: String
}

"""
Indicates if obstacle sensor system incurred an error condition. True = Error. False = No Error.
"""
type Vehicle_ADAS_ObstacleDetection_IsError {
  """
  Value: Indicates if obstacle sensor system incurred an error condition. True = Error. False = No Error.
  """
  value: Boolean

  """
  Timestamp: Indicates if obstacle sensor system incurred an error condition. True = Error. False = No Error.
  """
  timestamp: String
}

"""Antilock Braking System signals."""
type Vehicle_ADAS_ABS {
  """Indicates if ABS is enabled. True = Enabled. False = Disabled."""
  isEnabled: Vehicle_ADAS_ABS_IsEnabled

  """
  Indicates if ABS incurred an error condition. True = Error. False = No Error.
  """
  isError: Vehicle_ADAS_ABS_IsError

  """
  Indicates if ABS is currently regulating brake pressure. True = Engaged. False = Not Engaged.
  """
  isEngaged: Vehicle_ADAS_ABS_IsEngaged
}

"""Indicates if ABS is enabled. True = Enabled. False = Disabled."""
type Vehicle_ADAS_ABS_IsEnabled {
  """Value: Indicates if ABS is enabled. True = Enabled. False = Disabled."""
  value: Boolean

  """
  Timestamp: Indicates if ABS is enabled. True = Enabled. False = Disabled.
  """
  timestamp: String
}

"""
Indicates if ABS incurred an error condition. True = Error. False = No Error.
"""
type Vehicle_ADAS_ABS_IsError {
  """
  Value: Indicates if ABS incurred an error condition. True = Error. False = No Error.
  """
  value: Boolean

  """
  Timestamp: Indicates if ABS incurred an error condition. True = Error. False = No Error.
  """
  timestamp: String
}

"""
Indicates if ABS is currently regulating brake pressure. True = Engaged. False = Not Engaged.
"""
type Vehicle_ADAS_ABS_IsEngaged {
  """
  Value: Indicates if ABS is currently regulating brake pressure. True = Engaged. False = Not Engaged.
  """
  value: Boolean

  """
  Timestamp: Indicates if ABS is currently regulating brake pressure. True = Engaged. False = Not Engaged.
  """
  timestamp: String
}

"""Traction Control System signals."""
type Vehicle_ADAS_TCS {
  """Indicates if TCS is enabled. True = Enabled. False = Disabled."""
  isEnabled: Vehicle_ADAS_TCS_IsEnabled

  """
  Indicates if TCS incurred an error condition. True = Error. False = No Error.
  """
  isError: Vehicle_ADAS_TCS_IsError

  """
  Indicates if TCS is currently regulating traction. True = Engaged. False = Not Engaged.
  """
  isEngaged: Vehicle_ADAS_TCS_IsEngaged
}

"""Indicates if TCS is enabled. True = Enabled. False = Disabled."""
type Vehicle_ADAS_TCS_IsEnabled {
  """Value: Indicates if TCS is enabled. True = Enabled. False = Disabled."""
  value: Boolean

  """
  Timestamp: Indicates if TCS is enabled. True = Enabled. False = Disabled.
  """
  timestamp: String
}

"""
Indicates if TCS incurred an error condition. True = Error. False = No Error.
"""
type Vehicle_ADAS_TCS_IsError {
  """
  Value: Indicates if TCS incurred an error condition. True = Error. False = No Error.
  """
  value: Boolean

  """
  Timestamp: Indicates if TCS incurred an error condition. True = Error. False = No Error.
  """
  timestamp: String
}

"""
Indicates if TCS is currently regulating traction. True = Engaged. False = Not Engaged.
"""
type Vehicle_ADAS_TCS_IsEngaged {
  """
  Value: Indicates if TCS is currently regulating traction. True = Engaged. False = Not Engaged.
  """
  value: Boolean

  """
  Timestamp: Indicates if TCS is currently regulating traction. True = Engaged. False = Not Engaged.
  """
  timestamp: String
}

"""Electronic Stability Control System signals."""
type Vehicle_ADAS_ESC {
  """Indicates if ESC is enabled. True = Enabled. False = Disabled."""
  isEnabled: Vehicle_ADAS_ESC_IsEnabled

  """
  Indicates if ESC incurred an error condition. True = Error. False = No Error.
  """
  isError: Vehicle_ADAS_ESC_IsError

  """
  Indicates if ESC is currently regulating vehicle stability. True = Engaged. False = Not Engaged.
  """
  isEngaged: Vehicle_ADAS_ESC_IsEngaged

  """
  Indicates if the ESC system is detecting strong cross winds. True = Strong cross winds detected. False = No strong cross winds detected.
  """
  isStrongCrossWindDetected: Vehicle_ADAS_ESC_IsStrongCrossWindDetected

  """Road friction values reported by the ESC system."""
  roadFriction: Vehicle_ADAS_ESC_RoadFriction
}

"""Indicates if ESC is enabled. True = Enabled. False = Disabled."""
type Vehicle_ADAS_ESC_IsEnabled {
  """Value: Indicates if ESC is enabled. True = Enabled. False = Disabled."""
  value: Boolean

  """
  Timestamp: Indicates if ESC is enabled. True = Enabled. False = Disabled.
  """
  timestamp: String
}

"""
Indicates if ESC incurred an error condition. True = Error. False = No Error.
"""
type Vehicle_ADAS_ESC_IsError {
  """
  Value: Indicates if ESC incurred an error condition. True = Error. False = No Error.
  """
  value: Boolean

  """
  Timestamp: Indicates if ESC incurred an error condition. True = Error. False = No Error.
  """
  timestamp: String
}

"""
Indicates if ESC is currently regulating vehicle stability. True = Engaged. False = Not Engaged.
"""
type Vehicle_ADAS_ESC_IsEngaged {
  """
  Value: Indicates if ESC is currently regulating vehicle stability. True = Engaged. False = Not Engaged.
  """
  value: Boolean

  """
  Timestamp: Indicates if ESC is currently regulating vehicle stability. True = Engaged. False = Not Engaged.
  """
  timestamp: String
}

"""
Indicates if the ESC system is detecting strong cross winds. True = Strong cross winds detected. False = No strong cross winds detected.
"""
type Vehicle_ADAS_ESC_IsStrongCrossWindDetected {
  """
  Value: Indicates if the ESC system is detecting strong cross winds. True = Strong cross winds detected. False = No strong cross winds detected.
  """
  value: Boolean

  """
  Timestamp: Indicates if the ESC system is detecting strong cross winds. True = Strong cross winds detected. False = No strong cross winds detected.
  """
  timestamp: String
}

"""Road friction values reported by the ESC system."""
type Vehicle_ADAS_ESC_RoadFriction {
  """
  Most probable road friction, as calculated by the ESC system. Exact meaning of most probable is implementation specific. 0 = no friction, 100 = maximum friction.
  """
  mostProbable: Vehicle_ADAS_ESC_RoadFriction_MostProbable

  """
  Lower bound road friction, as calculated by the ESC system. 5% possibility that road friction is below this value. 0 = no friction, 100 = maximum friction.
  """
  lowerBound: Vehicle_ADAS_ESC_RoadFriction_LowerBound

  """
  Upper bound road friction, as calculated by the ESC system. 95% possibility that road friction is below this value. 0 = no friction, 100 = maximum friction.
  """
  upperBound: Vehicle_ADAS_ESC_RoadFriction_UpperBound
}

"""
Most probable road friction, as calculated by the ESC system. Exact meaning of most probable is implementation specific. 0 = no friction, 100 = maximum friction.
"""
type Vehicle_ADAS_ESC_RoadFriction_MostProbable {
  """
  Value: Most probable road friction, as calculated by the ESC system. Exact meaning of most probable is implementation specific. 0 = no friction, 100 = maximum friction.
  """
  value: Float

  """
  Timestamp: Most probable road friction, as calculated by the ESC system. Exact meaning of most probable is implementation specific. 0 = no friction, 100 = maximum friction.
  """
  timestamp: String

  """
  Unit of Most probable road friction, as calculated by the ESC system. Exact meaning of most probable is implementation specific. 0 = no friction, 100 = maximum friction.
  """
  unit: String
}

"""
Lower bound road friction, as calculated by the ESC system. 5% possibility that road friction is below this value. 0 = no friction, 100 = maximum friction.
"""
type Vehicle_ADAS_ESC_RoadFriction_LowerBound {
  """
  Value: Lower bound road friction, as calculated by the ESC system. 5% possibility that road friction is below this value. 0 = no friction, 100 = maximum friction.
  """
  value: Float

  """
  Timestamp: Lower bound road friction, as calculated by the ESC system. 5% possibility that road friction is below this value. 0 = no friction, 100 = maximum friction.
  """
  timestamp: String

  """
  Unit of Lower bound road friction, as calculated by the ESC system. 5% possibility that road friction is below this value. 0 = no friction, 100 = maximum friction.
  """
  unit: String
}

"""
Upper bound road friction, as calculated by the ESC system. 95% possibility that road friction is below this value. 0 = no friction, 100 = maximum friction.
"""
type Vehicle_ADAS_ESC_RoadFriction_UpperBound {
  """
  Value: Upper bound road friction, as calculated by the ESC system. 95% possibility that road friction is below this value. 0 = no friction, 100 = maximum friction.
  """
  value: Float

  """
  Timestamp: Upper bound road friction, as calculated by the ESC system. 95% possibility that road friction is below this value. 0 = no friction, 100 = maximum friction.
  """
  timestamp: String

  """
  Unit of Upper bound road friction, as calculated by the ESC system. 95% possibility that road friction is below this value. 0 = no friction, 100 = maximum friction.
  """
  unit: String
}

"""Electronic Brakeforce Distribution (EBD) System signals."""
type Vehicle_ADAS_EBD {
  """Indicates if EBD is enabled. True = Enabled. False = Disabled."""
  isEnabled: Vehicle_ADAS_EBD_IsEnabled

  """
  Indicates if EBD incurred an error condition. True = Error. False = No Error.
  """
  isError: Vehicle_ADAS_EBD_IsError

  """
  Indicates if EBD is currently regulating vehicle brakeforce distribution. True = Engaged. False = Not Engaged.
  """
  isEngaged: Vehicle_ADAS_EBD_IsEngaged
}

"""Indicates if EBD is enabled. True = Enabled. False = Disabled."""
type Vehicle_ADAS_EBD_IsEnabled {
  """Value: Indicates if EBD is enabled. True = Enabled. False = Disabled."""
  value: Boolean

  """
  Timestamp: Indicates if EBD is enabled. True = Enabled. False = Disabled.
  """
  timestamp: String
}

"""
Indicates if EBD incurred an error condition. True = Error. False = No Error.
"""
type Vehicle_ADAS_EBD_IsError {
  """
  Value: Indicates if EBD incurred an error condition. True = Error. False = No Error.
  """
  value: Boolean

  """
  Timestamp: Indicates if EBD incurred an error condition. True = Error. False = No Error.
  """
  timestamp: String
}

"""
Indicates if EBD is currently regulating vehicle brakeforce distribution. True = Engaged. False = Not Engaged.
"""
type Vehicle_ADAS_EBD_IsEngaged {
  """
  Value: Indicates if EBD is currently regulating vehicle brakeforce distribution. True = Engaged. False = Not Engaged.
  """
  value: Boolean

  """
  Timestamp: Indicates if EBD is currently regulating vehicle brakeforce distribution. True = Engaged. False = Not Engaged.
  """
  timestamp: String
}

"""Emergency Brake Assist (EBA) System signals."""
type Vehicle_ADAS_EBA {
  """Indicates if EBA is enabled. True = Enabled. False = Disabled."""
  isEnabled: Vehicle_ADAS_EBA_IsEnabled

  """
  Indicates if EBA incurred an error condition. True = Error. False = No Error.
  """
  isError: Vehicle_ADAS_EBA_IsError

  """
  Indicates if EBA is currently regulating brake pressure. True = Engaged. False = Not Engaged.
  """
  isEngaged: Vehicle_ADAS_EBA_IsEngaged
}

"""Indicates if EBA is enabled. True = Enabled. False = Disabled."""
type Vehicle_ADAS_EBA_IsEnabled {
  """Value: Indicates if EBA is enabled. True = Enabled. False = Disabled."""
  value: Boolean

  """
  Timestamp: Indicates if EBA is enabled. True = Enabled. False = Disabled.
  """
  timestamp: String
}

"""
Indicates if EBA incurred an error condition. True = Error. False = No Error.
"""
type Vehicle_ADAS_EBA_IsError {
  """
  Value: Indicates if EBA incurred an error condition. True = Error. False = No Error.
  """
  value: Boolean

  """
  Timestamp: Indicates if EBA incurred an error condition. True = Error. False = No Error.
  """
  timestamp: String
}

"""
Indicates if EBA is currently regulating brake pressure. True = Engaged. False = Not Engaged.
"""
type Vehicle_ADAS_EBA_IsEngaged {
  """
  Value: Indicates if EBA is currently regulating brake pressure. True = Engaged. False = Not Engaged.
  """
  value: Boolean

  """
  Timestamp: Indicates if EBA is currently regulating brake pressure. True = Engaged. False = Not Engaged.
  """
  timestamp: String
}

"""All data concerning steering, suspension, wheels, and brakes."""
type Vehicle_Chassis {
  """Overall wheel base, in mm."""
  wheelbase: Vehicle_Chassis_Wheelbase

  """Overall wheel tracking, in mm."""
  track: Vehicle_Chassis_Track

  """Axle signals"""
  axle: Vehicle_Chassis_Axle

  """Number of axles on the vehicle"""
  axleCount: Vehicle_Chassis_AxleCount

  """Parking brake signals"""
  parkingBrake: Vehicle_Chassis_ParkingBrake

  """Steering wheel signals"""
  steeringWheel: Vehicle_Chassis_SteeringWheel

  """Accelerator signals"""
  accelerator: Vehicle_Chassis_Accelerator

  """Brake system signals"""
  brake: Vehicle_Chassis_Brake
}

"""Overall wheel base, in mm."""
type Vehicle_Chassis_Wheelbase {
  """Value: Overall wheel base, in mm."""
  value: Int

  """Timestamp: Overall wheel base, in mm."""
  timestamp: String

  """Unit of Overall wheel base, in mm."""
  unit: String
}

"""Overall wheel tracking, in mm."""
type Vehicle_Chassis_Track {
  """Value: Overall wheel tracking, in mm."""
  value: Int

  """Timestamp: Overall wheel tracking, in mm."""
  timestamp: String

  """Unit of Overall wheel tracking, in mm."""
  unit: String
}

"""Axle signals"""
type Vehicle_Chassis_Axle {
  """Axle signals"""
  row1: Vehicle_Chassis_Axle_Row1

  """Axle signals"""
  row2: Vehicle_Chassis_Axle_Row2
}

"""Axle signals"""
type Vehicle_Chassis_Axle_Row1 {
  """Number of wheels on the axle"""
  wheelCount: Vehicle_Chassis_Axle_Row1_WheelCount

  """
  Diameter of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  wheelDiameter: Vehicle_Chassis_Axle_Row1_WheelDiameter

  """
  Width of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  wheelWidth: Vehicle_Chassis_Axle_Row1_WheelWidth

  """Outer diameter of tires, in inches, as per ETRTO / TRA standard."""
  tireDiameter: Vehicle_Chassis_Axle_Row1_TireDiameter

  """Nominal section width of tires, in mm, as per ETRTO / TRA standard."""
  tireWidth: Vehicle_Chassis_Axle_Row1_TireWidth

  """
  Aspect ratio between tire section height and tire section width, as per ETRTO / TRA standard.
  """
  tireAspectRatio: Vehicle_Chassis_Axle_Row1_TireAspectRatio

  """Wheel signals for axle"""
  wheel: Vehicle_Chassis_Axle_Row1_Wheel
}

"""Number of wheels on the axle"""
type Vehicle_Chassis_Axle_Row1_WheelCount {
  """Value: Number of wheels on the axle"""
  value: Int

  """Timestamp: Number of wheels on the axle"""
  timestamp: String
}

"""
Diameter of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
"""
type Vehicle_Chassis_Axle_Row1_WheelDiameter {
  """
  Value: Diameter of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  value: Float

  """
  Timestamp: Diameter of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  timestamp: String

  """
  Unit of Diameter of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  unit: String
}

"""
Width of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
"""
type Vehicle_Chassis_Axle_Row1_WheelWidth {
  """
  Value: Width of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  value: Float

  """
  Timestamp: Width of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  timestamp: String

  """
  Unit of Width of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  unit: String
}

"""Outer diameter of tires, in inches, as per ETRTO / TRA standard."""
type Vehicle_Chassis_Axle_Row1_TireDiameter {
  """
  Value: Outer diameter of tires, in inches, as per ETRTO / TRA standard.
  """
  value: Float

  """
  Timestamp: Outer diameter of tires, in inches, as per ETRTO / TRA standard.
  """
  timestamp: String

  """
  Unit of Outer diameter of tires, in inches, as per ETRTO / TRA standard.
  """
  unit: String
}

"""Nominal section width of tires, in mm, as per ETRTO / TRA standard."""
type Vehicle_Chassis_Axle_Row1_TireWidth {
  """
  Value: Nominal section width of tires, in mm, as per ETRTO / TRA standard.
  """
  value: Int

  """
  Timestamp: Nominal section width of tires, in mm, as per ETRTO / TRA standard.
  """
  timestamp: String

  """
  Unit of Nominal section width of tires, in mm, as per ETRTO / TRA standard.
  """
  unit: String
}

"""
Aspect ratio between tire section height and tire section width, as per ETRTO / TRA standard.
"""
type Vehicle_Chassis_Axle_Row1_TireAspectRatio {
  """
  Value: Aspect ratio between tire section height and tire section width, as per ETRTO / TRA standard.
  """
  value: Int

  """
  Timestamp: Aspect ratio between tire section height and tire section width, as per ETRTO / TRA standard.
  """
  timestamp: String

  """
  Unit of Aspect ratio between tire section height and tire section width, as per ETRTO / TRA standard.
  """
  unit: String
}

"""Wheel signals for axle"""
type Vehicle_Chassis_Axle_Row1_Wheel {
  """Wheel signals for axle"""
  left: Vehicle_Chassis_Axle_Row1_Wheel_Left

  """Wheel signals for axle"""
  right: Vehicle_Chassis_Axle_Row1_Wheel_Right
}

"""Wheel signals for axle"""
type Vehicle_Chassis_Axle_Row1_Wheel_Left {
  """Brake signals for wheel"""
  brake: Vehicle_Chassis_Axle_Row1_Wheel_Left_Brake

  """Tire signals for wheel."""
  tire: Vehicle_Chassis_Axle_Row1_Wheel_Left_Tire
}

"""Brake signals for wheel"""
type Vehicle_Chassis_Axle_Row1_Wheel_Left_Brake {
  """Brake fluid level as percent. 0 = Empty. 100 = Full."""
  fluidLevel: Vehicle_Chassis_Axle_Row1_Wheel_Left_Brake_FluidLevel

  """
  Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
  """
  isFluidLevelLow: Vehicle_Chassis_Axle_Row1_Wheel_Left_Brake_IsFluidLevelLow

  """Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  padWear: Vehicle_Chassis_Axle_Row1_Wheel_Left_Brake_PadWear

  """Brake pad wear status. True = Worn. False = Not Worn."""
  isBrakesWorn: Vehicle_Chassis_Axle_Row1_Wheel_Left_Brake_IsBrakesWorn
}

"""Brake fluid level as percent. 0 = Empty. 100 = Full."""
type Vehicle_Chassis_Axle_Row1_Wheel_Left_Brake_FluidLevel {
  """Value: Brake fluid level as percent. 0 = Empty. 100 = Full."""
  value: Int

  """Timestamp: Brake fluid level as percent. 0 = Empty. 100 = Full."""
  timestamp: String

  """Unit of Brake fluid level as percent. 0 = Empty. 100 = Full."""
  unit: String
}

"""
Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
"""
type Vehicle_Chassis_Axle_Row1_Wheel_Left_Brake_IsFluidLevelLow {
  """
  Value: Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
  """
  value: Boolean

  """
  Timestamp: Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
  """
  timestamp: String
}

"""Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
type Vehicle_Chassis_Axle_Row1_Wheel_Left_Brake_PadWear {
  """Value: Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  value: Int

  """Timestamp: Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  timestamp: String

  """Unit of Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  unit: String
}

"""Brake pad wear status. True = Worn. False = Not Worn."""
type Vehicle_Chassis_Axle_Row1_Wheel_Left_Brake_IsBrakesWorn {
  """Value: Brake pad wear status. True = Worn. False = Not Worn."""
  value: Boolean

  """Timestamp: Brake pad wear status. True = Worn. False = Not Worn."""
  timestamp: String
}

"""Tire signals for wheel."""
type Vehicle_Chassis_Axle_Row1_Wheel_Left_Tire {
  """Tire pressure in kilo-Pascal."""
  pressure: Vehicle_Chassis_Axle_Row1_Wheel_Left_Tire_Pressure

  """
  Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
  """
  isPressureLow: Vehicle_Chassis_Axle_Row1_Wheel_Left_Tire_IsPressureLow

  """Tire temperature in Celsius."""
  temperature: Vehicle_Chassis_Axle_Row1_Wheel_Left_Tire_Temperature
}

"""Tire pressure in kilo-Pascal."""
type Vehicle_Chassis_Axle_Row1_Wheel_Left_Tire_Pressure {
  """Value: Tire pressure in kilo-Pascal."""
  value: Int

  """Timestamp: Tire pressure in kilo-Pascal."""
  timestamp: String

  """Unit of Tire pressure in kilo-Pascal."""
  unit: String
}

"""
Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
"""
type Vehicle_Chassis_Axle_Row1_Wheel_Left_Tire_IsPressureLow {
  """
  Value: Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
  """
  value: Boolean

  """
  Timestamp: Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
  """
  timestamp: String
}

"""Tire temperature in Celsius."""
type Vehicle_Chassis_Axle_Row1_Wheel_Left_Tire_Temperature {
  """Value: Tire temperature in Celsius."""
  value: Float

  """Timestamp: Tire temperature in Celsius."""
  timestamp: String

  """Unit of Tire temperature in Celsius."""
  unit: String
}

"""Wheel signals for axle"""
type Vehicle_Chassis_Axle_Row1_Wheel_Right {
  """Brake signals for wheel"""
  brake: Vehicle_Chassis_Axle_Row1_Wheel_Right_Brake

  """Tire signals for wheel."""
  tire: Vehicle_Chassis_Axle_Row1_Wheel_Right_Tire
}

"""Brake signals for wheel"""
type Vehicle_Chassis_Axle_Row1_Wheel_Right_Brake {
  """Brake fluid level as percent. 0 = Empty. 100 = Full."""
  fluidLevel: Vehicle_Chassis_Axle_Row1_Wheel_Right_Brake_FluidLevel

  """
  Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
  """
  isFluidLevelLow: Vehicle_Chassis_Axle_Row1_Wheel_Right_Brake_IsFluidLevelLow

  """Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  padWear: Vehicle_Chassis_Axle_Row1_Wheel_Right_Brake_PadWear

  """Brake pad wear status. True = Worn. False = Not Worn."""
  isBrakesWorn: Vehicle_Chassis_Axle_Row1_Wheel_Right_Brake_IsBrakesWorn
}

"""Brake fluid level as percent. 0 = Empty. 100 = Full."""
type Vehicle_Chassis_Axle_Row1_Wheel_Right_Brake_FluidLevel {
  """Value: Brake fluid level as percent. 0 = Empty. 100 = Full."""
  value: Int

  """Timestamp: Brake fluid level as percent. 0 = Empty. 100 = Full."""
  timestamp: String

  """Unit of Brake fluid level as percent. 0 = Empty. 100 = Full."""
  unit: String
}

"""
Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
"""
type Vehicle_Chassis_Axle_Row1_Wheel_Right_Brake_IsFluidLevelLow {
  """
  Value: Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
  """
  value: Boolean

  """
  Timestamp: Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
  """
  timestamp: String
}

"""Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
type Vehicle_Chassis_Axle_Row1_Wheel_Right_Brake_PadWear {
  """Value: Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  value: Int

  """Timestamp: Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  timestamp: String

  """Unit of Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  unit: String
}

"""Brake pad wear status. True = Worn. False = Not Worn."""
type Vehicle_Chassis_Axle_Row1_Wheel_Right_Brake_IsBrakesWorn {
  """Value: Brake pad wear status. True = Worn. False = Not Worn."""
  value: Boolean

  """Timestamp: Brake pad wear status. True = Worn. False = Not Worn."""
  timestamp: String
}

"""Tire signals for wheel."""
type Vehicle_Chassis_Axle_Row1_Wheel_Right_Tire {
  """Tire pressure in kilo-Pascal."""
  pressure: Vehicle_Chassis_Axle_Row1_Wheel_Right_Tire_Pressure

  """
  Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
  """
  isPressureLow: Vehicle_Chassis_Axle_Row1_Wheel_Right_Tire_IsPressureLow

  """Tire temperature in Celsius."""
  temperature: Vehicle_Chassis_Axle_Row1_Wheel_Right_Tire_Temperature
}

"""Tire pressure in kilo-Pascal."""
type Vehicle_Chassis_Axle_Row1_Wheel_Right_Tire_Pressure {
  """Value: Tire pressure in kilo-Pascal."""
  value: Int

  """Timestamp: Tire pressure in kilo-Pascal."""
  timestamp: String

  """Unit of Tire pressure in kilo-Pascal."""
  unit: String
}

"""
Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
"""
type Vehicle_Chassis_Axle_Row1_Wheel_Right_Tire_IsPressureLow {
  """
  Value: Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
  """
  value: Boolean

  """
  Timestamp: Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
  """
  timestamp: String
}

"""Tire temperature in Celsius."""
type Vehicle_Chassis_Axle_Row1_Wheel_Right_Tire_Temperature {
  """Value: Tire temperature in Celsius."""
  value: Float

  """Timestamp: Tire temperature in Celsius."""
  timestamp: String

  """Unit of Tire temperature in Celsius."""
  unit: String
}

"""Axle signals"""
type Vehicle_Chassis_Axle_Row2 {
  """Number of wheels on the axle"""
  wheelCount: Vehicle_Chassis_Axle_Row2_WheelCount

  """
  Diameter of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  wheelDiameter: Vehicle_Chassis_Axle_Row2_WheelDiameter

  """
  Width of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  wheelWidth: Vehicle_Chassis_Axle_Row2_WheelWidth

  """Outer diameter of tires, in inches, as per ETRTO / TRA standard."""
  tireDiameter: Vehicle_Chassis_Axle_Row2_TireDiameter

  """Nominal section width of tires, in mm, as per ETRTO / TRA standard."""
  tireWidth: Vehicle_Chassis_Axle_Row2_TireWidth

  """
  Aspect ratio between tire section height and tire section width, as per ETRTO / TRA standard.
  """
  tireAspectRatio: Vehicle_Chassis_Axle_Row2_TireAspectRatio

  """Wheel signals for axle"""
  wheel: Vehicle_Chassis_Axle_Row2_Wheel
}

"""Number of wheels on the axle"""
type Vehicle_Chassis_Axle_Row2_WheelCount {
  """Value: Number of wheels on the axle"""
  value: Int

  """Timestamp: Number of wheels on the axle"""
  timestamp: String
}

"""
Diameter of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
"""
type Vehicle_Chassis_Axle_Row2_WheelDiameter {
  """
  Value: Diameter of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  value: Float

  """
  Timestamp: Diameter of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  timestamp: String

  """
  Unit of Diameter of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  unit: String
}

"""
Width of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
"""
type Vehicle_Chassis_Axle_Row2_WheelWidth {
  """
  Value: Width of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  value: Float

  """
  Timestamp: Width of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  timestamp: String

  """
  Unit of Width of wheels (rims without tires), in inches, as per ETRTO / TRA standard.
  """
  unit: String
}

"""Outer diameter of tires, in inches, as per ETRTO / TRA standard."""
type Vehicle_Chassis_Axle_Row2_TireDiameter {
  """
  Value: Outer diameter of tires, in inches, as per ETRTO / TRA standard.
  """
  value: Float

  """
  Timestamp: Outer diameter of tires, in inches, as per ETRTO / TRA standard.
  """
  timestamp: String

  """
  Unit of Outer diameter of tires, in inches, as per ETRTO / TRA standard.
  """
  unit: String
}

"""Nominal section width of tires, in mm, as per ETRTO / TRA standard."""
type Vehicle_Chassis_Axle_Row2_TireWidth {
  """
  Value: Nominal section width of tires, in mm, as per ETRTO / TRA standard.
  """
  value: Int

  """
  Timestamp: Nominal section width of tires, in mm, as per ETRTO / TRA standard.
  """
  timestamp: String

  """
  Unit of Nominal section width of tires, in mm, as per ETRTO / TRA standard.
  """
  unit: String
}

"""
Aspect ratio between tire section height and tire section width, as per ETRTO / TRA standard.
"""
type Vehicle_Chassis_Axle_Row2_TireAspectRatio {
  """
  Value: Aspect ratio between tire section height and tire section width, as per ETRTO / TRA standard.
  """
  value: Int

  """
  Timestamp: Aspect ratio between tire section height and tire section width, as per ETRTO / TRA standard.
  """
  timestamp: String

  """
  Unit of Aspect ratio between tire section height and tire section width, as per ETRTO / TRA standard.
  """
  unit: String
}

"""Wheel signals for axle"""
type Vehicle_Chassis_Axle_Row2_Wheel {
  """Wheel signals for axle"""
  left: Vehicle_Chassis_Axle_Row2_Wheel_Left

  """Wheel signals for axle"""
  right: Vehicle_Chassis_Axle_Row2_Wheel_Right
}

"""Wheel signals for axle"""
type Vehicle_Chassis_Axle_Row2_Wheel_Left {
  """Brake signals for wheel"""
  brake: Vehicle_Chassis_Axle_Row2_Wheel_Left_Brake

  """Tire signals for wheel."""
  tire: Vehicle_Chassis_Axle_Row2_Wheel_Left_Tire
}

"""Brake signals for wheel"""
type Vehicle_Chassis_Axle_Row2_Wheel_Left_Brake {
  """Brake fluid level as percent. 0 = Empty. 100 = Full."""
  fluidLevel: Vehicle_Chassis_Axle_Row2_Wheel_Left_Brake_FluidLevel

  """
  Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
  """
  isFluidLevelLow: Vehicle_Chassis_Axle_Row2_Wheel_Left_Brake_IsFluidLevelLow

  """Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  padWear: Vehicle_Chassis_Axle_Row2_Wheel_Left_Brake_PadWear

  """Brake pad wear status. True = Worn. False = Not Worn."""
  isBrakesWorn: Vehicle_Chassis_Axle_Row2_Wheel_Left_Brake_IsBrakesWorn
}

"""Brake fluid level as percent. 0 = Empty. 100 = Full."""
type Vehicle_Chassis_Axle_Row2_Wheel_Left_Brake_FluidLevel {
  """Value: Brake fluid level as percent. 0 = Empty. 100 = Full."""
  value: Int

  """Timestamp: Brake fluid level as percent. 0 = Empty. 100 = Full."""
  timestamp: String

  """Unit of Brake fluid level as percent. 0 = Empty. 100 = Full."""
  unit: String
}

"""
Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
"""
type Vehicle_Chassis_Axle_Row2_Wheel_Left_Brake_IsFluidLevelLow {
  """
  Value: Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
  """
  value: Boolean

  """
  Timestamp: Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
  """
  timestamp: String
}

"""Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
type Vehicle_Chassis_Axle_Row2_Wheel_Left_Brake_PadWear {
  """Value: Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  value: Int

  """Timestamp: Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  timestamp: String

  """Unit of Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  unit: String
}

"""Brake pad wear status. True = Worn. False = Not Worn."""
type Vehicle_Chassis_Axle_Row2_Wheel_Left_Brake_IsBrakesWorn {
  """Value: Brake pad wear status. True = Worn. False = Not Worn."""
  value: Boolean

  """Timestamp: Brake pad wear status. True = Worn. False = Not Worn."""
  timestamp: String
}

"""Tire signals for wheel."""
type Vehicle_Chassis_Axle_Row2_Wheel_Left_Tire {
  """Tire pressure in kilo-Pascal."""
  pressure: Vehicle_Chassis_Axle_Row2_Wheel_Left_Tire_Pressure

  """
  Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
  """
  isPressureLow: Vehicle_Chassis_Axle_Row2_Wheel_Left_Tire_IsPressureLow

  """Tire temperature in Celsius."""
  temperature: Vehicle_Chassis_Axle_Row2_Wheel_Left_Tire_Temperature
}

"""Tire pressure in kilo-Pascal."""
type Vehicle_Chassis_Axle_Row2_Wheel_Left_Tire_Pressure {
  """Value: Tire pressure in kilo-Pascal."""
  value: Int

  """Timestamp: Tire pressure in kilo-Pascal."""
  timestamp: String

  """Unit of Tire pressure in kilo-Pascal."""
  unit: String
}

"""
Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
"""
type Vehicle_Chassis_Axle_Row2_Wheel_Left_Tire_IsPressureLow {
  """
  Value: Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
  """
  value: Boolean

  """
  Timestamp: Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
  """
  timestamp: String
}

"""Tire temperature in Celsius."""
type Vehicle_Chassis_Axle_Row2_Wheel_Left_Tire_Temperature {
  """Value: Tire temperature in Celsius."""
  value: Float

  """Timestamp: Tire temperature in Celsius."""
  timestamp: String

  """Unit of Tire temperature in Celsius."""
  unit: String
}

"""Wheel signals for axle"""
type Vehicle_Chassis_Axle_Row2_Wheel_Right {
  """Brake signals for wheel"""
  brake: Vehicle_Chassis_Axle_Row2_Wheel_Right_Brake

  """Tire signals for wheel."""
  tire: Vehicle_Chassis_Axle_Row2_Wheel_Right_Tire
}

"""Brake signals for wheel"""
type Vehicle_Chassis_Axle_Row2_Wheel_Right_Brake {
  """Brake fluid level as percent. 0 = Empty. 100 = Full."""
  fluidLevel: Vehicle_Chassis_Axle_Row2_Wheel_Right_Brake_FluidLevel

  """
  Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
  """
  isFluidLevelLow: Vehicle_Chassis_Axle_Row2_Wheel_Right_Brake_IsFluidLevelLow

  """Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  padWear: Vehicle_Chassis_Axle_Row2_Wheel_Right_Brake_PadWear

  """Brake pad wear status. True = Worn. False = Not Worn."""
  isBrakesWorn: Vehicle_Chassis_Axle_Row2_Wheel_Right_Brake_IsBrakesWorn
}

"""Brake fluid level as percent. 0 = Empty. 100 = Full."""
type Vehicle_Chassis_Axle_Row2_Wheel_Right_Brake_FluidLevel {
  """Value: Brake fluid level as percent. 0 = Empty. 100 = Full."""
  value: Int

  """Timestamp: Brake fluid level as percent. 0 = Empty. 100 = Full."""
  timestamp: String

  """Unit of Brake fluid level as percent. 0 = Empty. 100 = Full."""
  unit: String
}

"""
Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
"""
type Vehicle_Chassis_Axle_Row2_Wheel_Right_Brake_IsFluidLevelLow {
  """
  Value: Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
  """
  value: Boolean

  """
  Timestamp: Brake fluid level status. True = Brake fluid level low. False = Brake fluid level OK.
  """
  timestamp: String
}

"""Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
type Vehicle_Chassis_Axle_Row2_Wheel_Right_Brake_PadWear {
  """Value: Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  value: Int

  """Timestamp: Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  timestamp: String

  """Unit of Brake pad wear as percent. 0 = No Wear. 100 = Worn."""
  unit: String
}

"""Brake pad wear status. True = Worn. False = Not Worn."""
type Vehicle_Chassis_Axle_Row2_Wheel_Right_Brake_IsBrakesWorn {
  """Value: Brake pad wear status. True = Worn. False = Not Worn."""
  value: Boolean

  """Timestamp: Brake pad wear status. True = Worn. False = Not Worn."""
  timestamp: String
}

"""Tire signals for wheel."""
type Vehicle_Chassis_Axle_Row2_Wheel_Right_Tire {
  """Tire pressure in kilo-Pascal."""
  pressure: Vehicle_Chassis_Axle_Row2_Wheel_Right_Tire_Pressure

  """
  Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
  """
  isPressureLow: Vehicle_Chassis_Axle_Row2_Wheel_Right_Tire_IsPressureLow

  """Tire temperature in Celsius."""
  temperature: Vehicle_Chassis_Axle_Row2_Wheel_Right_Tire_Temperature
}

"""Tire pressure in kilo-Pascal."""
type Vehicle_Chassis_Axle_Row2_Wheel_Right_Tire_Pressure {
  """Value: Tire pressure in kilo-Pascal."""
  value: Int

  """Timestamp: Tire pressure in kilo-Pascal."""
  timestamp: String

  """Unit of Tire pressure in kilo-Pascal."""
  unit: String
}

"""
Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
"""
type Vehicle_Chassis_Axle_Row2_Wheel_Right_Tire_IsPressureLow {
  """
  Value: Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
  """
  value: Boolean

  """
  Timestamp: Tire Pressure Status. True = Low tire pressure. False = Good tire pressure.
  """
  timestamp: String
}

"""Tire temperature in Celsius."""
type Vehicle_Chassis_Axle_Row2_Wheel_Right_Tire_Temperature {
  """Value: Tire temperature in Celsius."""
  value: Float

  """Timestamp: Tire temperature in Celsius."""
  timestamp: String

  """Unit of Tire temperature in Celsius."""
  unit: String
}

"""Number of axles on the vehicle"""
type Vehicle_Chassis_AxleCount {
  """Value: Number of axles on the vehicle"""
  value: Int

  """Timestamp: Number of axles on the vehicle"""
  timestamp: String
}

"""Parking brake signals"""
type Vehicle_Chassis_ParkingBrake {
  """
  Parking brake status. True = Parking Brake is Engaged. False = Parking Brake is not Engaged.
  """
  isEngaged: Vehicle_Chassis_ParkingBrake_IsEngaged
}

"""
Parking brake status. True = Parking Brake is Engaged. False = Parking Brake is not Engaged.
"""
type Vehicle_Chassis_ParkingBrake_IsEngaged {
  """
  Value: Parking brake status. True = Parking Brake is Engaged. False = Parking Brake is not Engaged.
  """
  value: Boolean

  """
  Timestamp: Parking brake status. True = Parking Brake is Engaged. False = Parking Brake is not Engaged.
  """
  timestamp: String
}

"""Steering wheel signals"""
type Vehicle_Chassis_SteeringWheel {
  """
  Steering wheel angle. Positive = degrees to the left. Negative = degrees to the right.
  """
  angle: Vehicle_Chassis_SteeringWheel_Angle

  """
  Steering wheel column tilt. 0 = Lowest position. 100 = Highest position.
  """
  tilt: Vehicle_Chassis_SteeringWheel_Tilt

  """
  Steering wheel column extension from dashboard. 0 = Closest to dashboard. 100 = Furthest from dashboard.
  """
  extension: Vehicle_Chassis_SteeringWheel_Extension

  """
  Position of the steering wheel on the left or right side of the vehicle.
  """
  position: Vehicle_Chassis_SteeringWheel_Position
}

"""
Steering wheel angle. Positive = degrees to the left. Negative = degrees to the right.
"""
type Vehicle_Chassis_SteeringWheel_Angle {
  """
  Value: Steering wheel angle. Positive = degrees to the left. Negative = degrees to the right.
  """
  value: Int

  """
  Timestamp: Steering wheel angle. Positive = degrees to the left. Negative = degrees to the right.
  """
  timestamp: String

  """
  Unit of Steering wheel angle. Positive = degrees to the left. Negative = degrees to the right.
  """
  unit: String
}

"""
Steering wheel column tilt. 0 = Lowest position. 100 = Highest position.
"""
type Vehicle_Chassis_SteeringWheel_Tilt {
  """
  Value: Steering wheel column tilt. 0 = Lowest position. 100 = Highest position.
  """
  value: Int

  """
  Timestamp: Steering wheel column tilt. 0 = Lowest position. 100 = Highest position.
  """
  timestamp: String

  """
  Unit of Steering wheel column tilt. 0 = Lowest position. 100 = Highest position.
  """
  unit: String
}

"""
Steering wheel column extension from dashboard. 0 = Closest to dashboard. 100 = Furthest from dashboard.
"""
type Vehicle_Chassis_SteeringWheel_Extension {
  """
  Value: Steering wheel column extension from dashboard. 0 = Closest to dashboard. 100 = Furthest from dashboard.
  """
  value: Int

  """
  Timestamp: Steering wheel column extension from dashboard. 0 = Closest to dashboard. 100 = Furthest from dashboard.
  """
  timestamp: String

  """
  Unit of Steering wheel column extension from dashboard. 0 = Closest to dashboard. 100 = Furthest from dashboard.
  """
  unit: String
}

"""
Position of the steering wheel on the left or right side of the vehicle.
"""
type Vehicle_Chassis_SteeringWheel_Position {
  """
  Value: Position of the steering wheel on the left or right side of the vehicle.
  """
  value: String

  """
  Timestamp: Position of the steering wheel on the left or right side of the vehicle.
  """
  timestamp: String
}

"""Accelerator signals"""
type Vehicle_Chassis_Accelerator {
  """
  Accelerator pedal position as percent. 0 = Not depressed. 100 = Fully depressed.
  """
  pedalPosition: Vehicle_Chassis_Accelerator_PedalPosition
}

"""
Accelerator pedal position as percent. 0 = Not depressed. 100 = Fully depressed.
"""
type Vehicle_Chassis_Accelerator_PedalPosition {
  """
  Value: Accelerator pedal position as percent. 0 = Not depressed. 100 = Fully depressed.
  """
  value: Int

  """
  Timestamp: Accelerator pedal position as percent. 0 = Not depressed. 100 = Fully depressed.
  """
  timestamp: String

  """
  Unit of Accelerator pedal position as percent. 0 = Not depressed. 100 = Fully depressed.
  """
  unit: String
}

"""Brake system signals"""
type Vehicle_Chassis_Brake {
  """
  Brake pedal position as percent. 0 = Not depressed. 100 = Fully depressed.
  """
  pedalPosition: Vehicle_Chassis_Brake_PedalPosition

  """
  Indicates if emergency braking initiated by driver is detected. True = Emergency braking detected. False = Emergency braking not detected.
  """
  isDriverEmergencyBrakingDetected: Vehicle_Chassis_Brake_IsDriverEmergencyBrakingDetected
}

"""
Brake pedal position as percent. 0 = Not depressed. 100 = Fully depressed.
"""
type Vehicle_Chassis_Brake_PedalPosition {
  """
  Value: Brake pedal position as percent. 0 = Not depressed. 100 = Fully depressed.
  """
  value: Int

  """
  Timestamp: Brake pedal position as percent. 0 = Not depressed. 100 = Fully depressed.
  """
  timestamp: String

  """
  Unit of Brake pedal position as percent. 0 = Not depressed. 100 = Fully depressed.
  """
  unit: String
}

"""
Indicates if emergency braking initiated by driver is detected. True = Emergency braking detected. False = Emergency braking not detected.
"""
type Vehicle_Chassis_Brake_IsDriverEmergencyBrakingDetected {
  """
  Value: Indicates if emergency braking initiated by driver is detected. True = Emergency braking detected. False = Emergency braking not detected.
  """
  value: Boolean

  """
  Timestamp: Indicates if emergency braking initiated by driver is detected. True = Emergency braking detected. False = Emergency braking not detected.
  """
  timestamp: String
}

"""OBD data."""
type Vehicle_OBD {
  """PID 00 - Bit array of the supported pids 01 to 20"""
  pidsA: Vehicle_OBD_PidsA

  """PID 01 - OBD status"""
  status: Vehicle_OBD_Status

  """
  List of currently active DTCs formatted according OBD II (SAE-J2012DA_201812) standard ([P|C|B|U]XXXXX )
  """
  dtcList: Vehicle_OBD_DTCList

  """PID 02 - DTC that triggered the freeze frame"""
  freezeDtc: Vehicle_OBD_FreezeDTC

  """PID 03 - Fuel status"""
  fuelStatus: Vehicle_OBD_FuelStatus

  """PID 04 - Engine load in percent - 0 = no load, 100 = full load"""
  engineLoad: Vehicle_OBD_EngineLoad

  """PID 05 - Coolant temperature"""
  coolantTemperature: Vehicle_OBD_CoolantTemperature

  """
  PID 06 - Short Term (immediate) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer
  """
  shortTermFuelTrim1: Vehicle_OBD_ShortTermFuelTrim1

  """
  PID 07 - Long Term (learned) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer
  """
  longTermFuelTrim1: Vehicle_OBD_LongTermFuelTrim1

  """
  PID 08 - Short Term (immediate) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer
  """
  shortTermFuelTrim2: Vehicle_OBD_ShortTermFuelTrim2

  """
  PID 09 - Long Term (learned) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer
  """
  longTermFuelTrim2: Vehicle_OBD_LongTermFuelTrim2

  """PID 0A - Fuel pressure"""
  fuelPressure: Vehicle_OBD_FuelPressure

  """PID 0B - Intake manifold pressure"""
  map: Vehicle_OBD_MAP

  """PID 0C - Engine speed measured as rotations per minute"""
  engineSpeed: Vehicle_OBD_EngineSpeed

  """PID 0D - Vehicle speed"""
  speed: Vehicle_OBD_Speed

  """PID 0E - Time advance"""
  timingAdvance: Vehicle_OBD_TimingAdvance

  """PID 0F - Intake temperature"""
  intakeTemp: Vehicle_OBD_IntakeTemp

  """PID 10 - Grams of air drawn into engine per second"""
  maf: Vehicle_OBD_MAF

  """PID 11 - Throttle position - 0 = closed throttle, 100 = open throttle"""
  throttlePosition: Vehicle_OBD_ThrottlePosition

  """PID 12 - Secondary air status"""
  airStatus: Vehicle_OBD_AirStatus

  """
  PID 13 - Presence of oxygen sensors in 2 banks. [A0..A3] == Bank 1, Sensors 1-4. [A4..A7] == Bank 2, Sensors 1-4
  """
  oxygenSensorsIn2Banks: Vehicle_OBD_OxygenSensorsIn2Banks

  """Oxygen sensors (PID 14 - PID 1B)"""
  o2: Vehicle_OBD_O2

  """PID 1C - OBD standards this vehicle conforms to"""
  obdStandards: Vehicle_OBD_OBDStandards

  """
  PID 1D - Presence of oxygen sensors in 4 banks. Similar to PID 13, but [A0..A7] == [B1S1, B1S2, B2S1, B2S2, B3S1, B3S2, B4S1, B4S2]
  """
  oxygenSensorsIn4Banks: Vehicle_OBD_OxygenSensorsIn4Banks

  """PID 1E - Auxiliary input status (power take off)"""
  isPtoActive: Vehicle_OBD_IsPTOActive

  """PID 1F - Engine run time"""
  runTime: Vehicle_OBD_RunTime

  """PID 20 - Bit array of the supported pids 21 to 40"""
  pidsB: Vehicle_OBD_PidsB

  """PID 21 - Distance traveled with MIL on"""
  distanceWithMil: Vehicle_OBD_DistanceWithMIL

  """PID 22 - Fuel rail pressure relative to vacuum"""
  fuelRailPressureVac: Vehicle_OBD_FuelRailPressureVac

  """PID 23 - Fuel rail pressure direct inject"""
  fuelRailPressureDirect: Vehicle_OBD_FuelRailPressureDirect

  """Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
  o2Wr: Vehicle_OBD_O2WR

  """PID 2C - Commanded exhaust gas recirculation (EGR)"""
  commandedEgr: Vehicle_OBD_CommandedEGR

  """PID 2D - Exhaust gas recirculation (EGR) error"""
  egrError: Vehicle_OBD_EGRError

  """PID 2E - Commanded evaporative purge (EVAP) valve"""
  commandedEvap: Vehicle_OBD_CommandedEVAP

  """PID 2F - Fuel level in the fuel tank"""
  fuelLevel: Vehicle_OBD_FuelLevel

  """PID 30 - Number of warm-ups since codes cleared"""
  warmupsSinceDtcClear: Vehicle_OBD_WarmupsSinceDTCClear

  """PID 31 - Distance traveled since codes cleared"""
  distanceSinceDtcClear: Vehicle_OBD_DistanceSinceDTCClear

  """PID 32 - Evaporative purge (EVAP) system pressure"""
  evapVaporPressure: Vehicle_OBD_EVAPVaporPressure

  """PID 33 - Barometric pressure"""
  barometricPressure: Vehicle_OBD_BarometricPressure

  """Catalyst signals"""
  catalyst: Vehicle_OBD_Catalyst

  """PID 40 - Bit array of the supported pids 41 to 60"""
  pidsC: Vehicle_OBD_PidsC

  """PID 41 - OBD status for the current drive cycle"""
  driveCycleStatus: Vehicle_OBD_DriveCycleStatus

  """PID 42 - Control module voltage"""
  controlModuleVoltage: Vehicle_OBD_ControlModuleVoltage

  """PID 43 - Absolute load value"""
  absoluteLoad: Vehicle_OBD_AbsoluteLoad

  """PID 44 - Commanded equivalence ratio"""
  commandedEquivalenceRatio: Vehicle_OBD_CommandedEquivalenceRatio

  """PID 45 - Relative throttle position"""
  relativeThrottlePosition: Vehicle_OBD_RelativeThrottlePosition

  """PID 46 - Ambient air temperature"""
  ambientAirTemperature: Vehicle_OBD_AmbientAirTemperature

  """PID 47 - Absolute throttle position B"""
  throttlePositionB: Vehicle_OBD_ThrottlePositionB

  """PID 48 - Absolute throttle position C"""
  throttlePositionC: Vehicle_OBD_ThrottlePositionC

  """PID 49 - Accelerator pedal position D"""
  acceleratorPositionD: Vehicle_OBD_AcceleratorPositionD

  """PID 4A - Accelerator pedal position E"""
  acceleratorPositionE: Vehicle_OBD_AcceleratorPositionE

  """PID 4B - Accelerator pedal position F"""
  acceleratorPositionF: Vehicle_OBD_AcceleratorPositionF

  """PID 4C - Commanded throttle actuator"""
  throttleActuator: Vehicle_OBD_ThrottleActuator

  """PID 4D - Run time with MIL on"""
  runTimeMil: Vehicle_OBD_RunTimeMIL

  """PID 4E - Time since trouble codes cleared"""
  timeSinceDtcCleared: Vehicle_OBD_TimeSinceDTCCleared

  """PID 50 - Maximum flow for mass air flow sensor"""
  maxMaf: Vehicle_OBD_MaxMAF

  """PID 51 - Fuel type"""
  fuelType: Vehicle_OBD_FuelType

  """PID 52 - Percentage of ethanol in the fuel"""
  ethanolPercent: Vehicle_OBD_EthanolPercent

  """PID 53 - Absolute evaporative purge (EVAP) system pressure"""
  evapVaporPressureAbsolute: Vehicle_OBD_EVAPVaporPressureAbsolute

  """PID 54 - Alternate evaporative purge (EVAP) system pressure"""
  evapVaporPressureAlternate: Vehicle_OBD_EVAPVaporPressureAlternate

  """PID 55 (byte A) - Short term secondary O2 trim - Bank 1"""
  shortTermO2Trim1: Vehicle_OBD_ShortTermO2Trim1

  """PID 55 (byte B) - Short term secondary O2 trim - Bank 3"""
  shortTermO2Trim3: Vehicle_OBD_ShortTermO2Trim3

  """PID 56 (byte A) - Long term secondary O2 trim - Bank 1"""
  longTermO2Trim1: Vehicle_OBD_LongTermO2Trim1

  """PID 56 (byte B) - Long term secondary O2 trim - Bank 3"""
  longTermO2Trim3: Vehicle_OBD_LongTermO2Trim3

  """PID 57 (byte A) - Short term secondary O2 trim - Bank 2"""
  shortTermO2Trim2: Vehicle_OBD_ShortTermO2Trim2

  """PID 57 (byte B) - Short term secondary O2 trim - Bank 4"""
  shortTermO2Trim4: Vehicle_OBD_ShortTermO2Trim4

  """PID 58 (byte A) - Long term secondary O2 trim - Bank 2"""
  longTermO2Trim2: Vehicle_OBD_LongTermO2Trim2

  """PID 58 (byte B) - Long term secondary O2 trim - Bank 4"""
  longTermO2Trim4: Vehicle_OBD_LongTermO2Trim4

  """PID 59 - Absolute fuel rail pressure"""
  fuelRailPressureAbsolute: Vehicle_OBD_FuelRailPressureAbsolute

  """PID 5A - Relative accelerator pedal position"""
  relativeAcceleratorPosition: Vehicle_OBD_RelativeAcceleratorPosition

  """PID 5B - Remaining life of hybrid battery"""
  hybridBatteryRemaining: Vehicle_OBD_HybridBatteryRemaining

  """PID 5C - Engine oil temperature"""
  oilTemperature: Vehicle_OBD_OilTemperature

  """PID 5D - Fuel injection timing"""
  fuelInjectionTiming: Vehicle_OBD_FuelInjectionTiming

  """PID 5E - Engine fuel rate"""
  fuelRate: Vehicle_OBD_FuelRate
}

"""PID 00 - Bit array of the supported pids 01 to 20"""
type Vehicle_OBD_PidsA {
  """Value: PID 00 - Bit array of the supported pids 01 to 20"""
  value: Float

  """Timestamp: PID 00 - Bit array of the supported pids 01 to 20"""
  timestamp: String
}

"""PID 01 - OBD status"""
type Vehicle_OBD_Status {
  """Malfunction Indicator Light (MIL) False = Off, True = On"""
  isMilOn: Vehicle_OBD_Status_IsMILOn

  """Number of sensor Trouble Codes (DTC)"""
  dtcCount: Vehicle_OBD_Status_DTCCount

  """
  Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)
  """
  ignitionType: Vehicle_OBD_Status_IgnitionType
}

"""Malfunction Indicator Light (MIL) False = Off, True = On"""
type Vehicle_OBD_Status_IsMILOn {
  """Value: Malfunction Indicator Light (MIL) False = Off, True = On"""
  value: Boolean

  """Timestamp: Malfunction Indicator Light (MIL) False = Off, True = On"""
  timestamp: String
}

"""Number of sensor Trouble Codes (DTC)"""
type Vehicle_OBD_Status_DTCCount {
  """Value: Number of sensor Trouble Codes (DTC)"""
  value: Int

  """Timestamp: Number of sensor Trouble Codes (DTC)"""
  timestamp: String
}

"""
Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)
"""
type Vehicle_OBD_Status_IgnitionType {
  """
  Value: Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)
  """
  value: String

  """
  Timestamp: Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)
  """
  timestamp: String
}

"""
List of currently active DTCs formatted according OBD II (SAE-J2012DA_201812) standard ([P|C|B|U]XXXXX )
"""
type Vehicle_OBD_DTCList {
  """
  Value: List of currently active DTCs formatted according OBD II (SAE-J2012DA_201812) standard ([P|C|B|U]XXXXX )
  """
  value: [String]

  """
  Timestamp: List of currently active DTCs formatted according OBD II (SAE-J2012DA_201812) standard ([P|C|B|U]XXXXX )
  """
  timestamp: String
}

"""PID 02 - DTC that triggered the freeze frame"""
type Vehicle_OBD_FreezeDTC {
  """Value: PID 02 - DTC that triggered the freeze frame"""
  value: String

  """Timestamp: PID 02 - DTC that triggered the freeze frame"""
  timestamp: String
}

"""PID 03 - Fuel status"""
type Vehicle_OBD_FuelStatus {
  """Value: PID 03 - Fuel status"""
  value: String

  """Timestamp: PID 03 - Fuel status"""
  timestamp: String
}

"""PID 04 - Engine load in percent - 0 = no load, 100 = full load"""
type Vehicle_OBD_EngineLoad {
  """Value: PID 04 - Engine load in percent - 0 = no load, 100 = full load"""
  value: Float

  """
  Timestamp: PID 04 - Engine load in percent - 0 = no load, 100 = full load
  """
  timestamp: String

  """Unit of PID 04 - Engine load in percent - 0 = no load, 100 = full load"""
  unit: String
}

"""PID 05 - Coolant temperature"""
type Vehicle_OBD_CoolantTemperature {
  """Value: PID 05 - Coolant temperature"""
  value: Float

  """Timestamp: PID 05 - Coolant temperature"""
  timestamp: String

  """Unit of PID 05 - Coolant temperature"""
  unit: String
}

"""
PID 06 - Short Term (immediate) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer
"""
type Vehicle_OBD_ShortTermFuelTrim1 {
  """
  Value: PID 06 - Short Term (immediate) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer
  """
  value: Float

  """
  Timestamp: PID 06 - Short Term (immediate) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer
  """
  timestamp: String

  """
  Unit of PID 06 - Short Term (immediate) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer
  """
  unit: String
}

"""
PID 07 - Long Term (learned) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer
"""
type Vehicle_OBD_LongTermFuelTrim1 {
  """
  Value: PID 07 - Long Term (learned) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer
  """
  value: Float

  """
  Timestamp: PID 07 - Long Term (learned) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer
  """
  timestamp: String

  """
  Unit of PID 07 - Long Term (learned) Fuel Trim - Bank 1 - negative percent leaner, positive percent richer
  """
  unit: String
}

"""
PID 08 - Short Term (immediate) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer
"""
type Vehicle_OBD_ShortTermFuelTrim2 {
  """
  Value: PID 08 - Short Term (immediate) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer
  """
  value: Float

  """
  Timestamp: PID 08 - Short Term (immediate) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer
  """
  timestamp: String

  """
  Unit of PID 08 - Short Term (immediate) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer
  """
  unit: String
}

"""
PID 09 - Long Term (learned) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer
"""
type Vehicle_OBD_LongTermFuelTrim2 {
  """
  Value: PID 09 - Long Term (learned) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer
  """
  value: Float

  """
  Timestamp: PID 09 - Long Term (learned) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer
  """
  timestamp: String

  """
  Unit of PID 09 - Long Term (learned) Fuel Trim - Bank 2 - negative percent leaner, positive percent richer
  """
  unit: String
}

"""PID 0A - Fuel pressure"""
type Vehicle_OBD_FuelPressure {
  """Value: PID 0A - Fuel pressure"""
  value: Float

  """Timestamp: PID 0A - Fuel pressure"""
  timestamp: String

  """Unit of PID 0A - Fuel pressure"""
  unit: String
}

"""PID 0B - Intake manifold pressure"""
type Vehicle_OBD_MAP {
  """Value: PID 0B - Intake manifold pressure"""
  value: Float

  """Timestamp: PID 0B - Intake manifold pressure"""
  timestamp: String

  """Unit of PID 0B - Intake manifold pressure"""
  unit: String
}

"""PID 0C - Engine speed measured as rotations per minute"""
type Vehicle_OBD_EngineSpeed {
  """Value: PID 0C - Engine speed measured as rotations per minute"""
  value: Float

  """Timestamp: PID 0C - Engine speed measured as rotations per minute"""
  timestamp: String

  """Unit of PID 0C - Engine speed measured as rotations per minute"""
  unit: String
}

"""PID 0D - Vehicle speed"""
type Vehicle_OBD_Speed {
  """Value: PID 0D - Vehicle speed"""
  value: Float

  """Timestamp: PID 0D - Vehicle speed"""
  timestamp: String

  """Unit of PID 0D - Vehicle speed"""
  unit: String
}

"""PID 0E - Time advance"""
type Vehicle_OBD_TimingAdvance {
  """Value: PID 0E - Time advance"""
  value: Float

  """Timestamp: PID 0E - Time advance"""
  timestamp: String

  """Unit of PID 0E - Time advance"""
  unit: String
}

"""PID 0F - Intake temperature"""
type Vehicle_OBD_IntakeTemp {
  """Value: PID 0F - Intake temperature"""
  value: Float

  """Timestamp: PID 0F - Intake temperature"""
  timestamp: String

  """Unit of PID 0F - Intake temperature"""
  unit: String
}

"""PID 10 - Grams of air drawn into engine per second"""
type Vehicle_OBD_MAF {
  """Value: PID 10 - Grams of air drawn into engine per second"""
  value: Float

  """Timestamp: PID 10 - Grams of air drawn into engine per second"""
  timestamp: String

  """Unit of PID 10 - Grams of air drawn into engine per second"""
  unit: String
}

"""PID 11 - Throttle position - 0 = closed throttle, 100 = open throttle"""
type Vehicle_OBD_ThrottlePosition {
  """
  Value: PID 11 - Throttle position - 0 = closed throttle, 100 = open throttle
  """
  value: Float

  """
  Timestamp: PID 11 - Throttle position - 0 = closed throttle, 100 = open throttle
  """
  timestamp: String

  """
  Unit of PID 11 - Throttle position - 0 = closed throttle, 100 = open throttle
  """
  unit: String
}

"""PID 12 - Secondary air status"""
type Vehicle_OBD_AirStatus {
  """Value: PID 12 - Secondary air status"""
  value: String

  """Timestamp: PID 12 - Secondary air status"""
  timestamp: String
}

"""
PID 13 - Presence of oxygen sensors in 2 banks. [A0..A3] == Bank 1, Sensors 1-4. [A4..A7] == Bank 2, Sensors 1-4
"""
type Vehicle_OBD_OxygenSensorsIn2Banks {
  """
  Value: PID 13 - Presence of oxygen sensors in 2 banks. [A0..A3] == Bank 1, Sensors 1-4. [A4..A7] == Bank 2, Sensors 1-4
  """
  value: Int

  """
  Timestamp: PID 13 - Presence of oxygen sensors in 2 banks. [A0..A3] == Bank 1, Sensors 1-4. [A4..A7] == Bank 2, Sensors 1-4
  """
  timestamp: String
}

"""Oxygen sensors (PID 14 - PID 1B)"""
type Vehicle_OBD_O2 {
  """Oxygen sensors (PID 14 - PID 1B)"""
  sensor1: Vehicle_OBD_O2_Sensor1

  """Oxygen sensors (PID 14 - PID 1B)"""
  sensor2: Vehicle_OBD_O2_Sensor2

  """Oxygen sensors (PID 14 - PID 1B)"""
  sensor3: Vehicle_OBD_O2_Sensor3

  """Oxygen sensors (PID 14 - PID 1B)"""
  sensor4: Vehicle_OBD_O2_Sensor4

  """Oxygen sensors (PID 14 - PID 1B)"""
  sensor5: Vehicle_OBD_O2_Sensor5

  """Oxygen sensors (PID 14 - PID 1B)"""
  sensor6: Vehicle_OBD_O2_Sensor6

  """Oxygen sensors (PID 14 - PID 1B)"""
  sensor7: Vehicle_OBD_O2_Sensor7

  """Oxygen sensors (PID 14 - PID 1B)"""
  sensor8: Vehicle_OBD_O2_Sensor8
}

"""Oxygen sensors (PID 14 - PID 1B)"""
type Vehicle_OBD_O2_Sensor1 {
  """PID 1x (byte A) - Sensor voltage"""
  voltage: Vehicle_OBD_O2_Sensor1_Voltage

  """PID 1x (byte B) - Short term fuel trim"""
  shortTermFuelTrim: Vehicle_OBD_O2_Sensor1_ShortTermFuelTrim
}

"""PID 1x (byte A) - Sensor voltage"""
type Vehicle_OBD_O2_Sensor1_Voltage {
  """Value: PID 1x (byte A) - Sensor voltage"""
  value: Float

  """Timestamp: PID 1x (byte A) - Sensor voltage"""
  timestamp: String

  """Unit of PID 1x (byte A) - Sensor voltage"""
  unit: String
}

"""PID 1x (byte B) - Short term fuel trim"""
type Vehicle_OBD_O2_Sensor1_ShortTermFuelTrim {
  """Value: PID 1x (byte B) - Short term fuel trim"""
  value: Float

  """Timestamp: PID 1x (byte B) - Short term fuel trim"""
  timestamp: String

  """Unit of PID 1x (byte B) - Short term fuel trim"""
  unit: String
}

"""Oxygen sensors (PID 14 - PID 1B)"""
type Vehicle_OBD_O2_Sensor2 {
  """PID 1x (byte A) - Sensor voltage"""
  voltage: Vehicle_OBD_O2_Sensor2_Voltage

  """PID 1x (byte B) - Short term fuel trim"""
  shortTermFuelTrim: Vehicle_OBD_O2_Sensor2_ShortTermFuelTrim
}

"""PID 1x (byte A) - Sensor voltage"""
type Vehicle_OBD_O2_Sensor2_Voltage {
  """Value: PID 1x (byte A) - Sensor voltage"""
  value: Float

  """Timestamp: PID 1x (byte A) - Sensor voltage"""
  timestamp: String

  """Unit of PID 1x (byte A) - Sensor voltage"""
  unit: String
}

"""PID 1x (byte B) - Short term fuel trim"""
type Vehicle_OBD_O2_Sensor2_ShortTermFuelTrim {
  """Value: PID 1x (byte B) - Short term fuel trim"""
  value: Float

  """Timestamp: PID 1x (byte B) - Short term fuel trim"""
  timestamp: String

  """Unit of PID 1x (byte B) - Short term fuel trim"""
  unit: String
}

"""Oxygen sensors (PID 14 - PID 1B)"""
type Vehicle_OBD_O2_Sensor3 {
  """PID 1x (byte A) - Sensor voltage"""
  voltage: Vehicle_OBD_O2_Sensor3_Voltage

  """PID 1x (byte B) - Short term fuel trim"""
  shortTermFuelTrim: Vehicle_OBD_O2_Sensor3_ShortTermFuelTrim
}

"""PID 1x (byte A) - Sensor voltage"""
type Vehicle_OBD_O2_Sensor3_Voltage {
  """Value: PID 1x (byte A) - Sensor voltage"""
  value: Float

  """Timestamp: PID 1x (byte A) - Sensor voltage"""
  timestamp: String

  """Unit of PID 1x (byte A) - Sensor voltage"""
  unit: String
}

"""PID 1x (byte B) - Short term fuel trim"""
type Vehicle_OBD_O2_Sensor3_ShortTermFuelTrim {
  """Value: PID 1x (byte B) - Short term fuel trim"""
  value: Float

  """Timestamp: PID 1x (byte B) - Short term fuel trim"""
  timestamp: String

  """Unit of PID 1x (byte B) - Short term fuel trim"""
  unit: String
}

"""Oxygen sensors (PID 14 - PID 1B)"""
type Vehicle_OBD_O2_Sensor4 {
  """PID 1x (byte A) - Sensor voltage"""
  voltage: Vehicle_OBD_O2_Sensor4_Voltage

  """PID 1x (byte B) - Short term fuel trim"""
  shortTermFuelTrim: Vehicle_OBD_O2_Sensor4_ShortTermFuelTrim
}

"""PID 1x (byte A) - Sensor voltage"""
type Vehicle_OBD_O2_Sensor4_Voltage {
  """Value: PID 1x (byte A) - Sensor voltage"""
  value: Float

  """Timestamp: PID 1x (byte A) - Sensor voltage"""
  timestamp: String

  """Unit of PID 1x (byte A) - Sensor voltage"""
  unit: String
}

"""PID 1x (byte B) - Short term fuel trim"""
type Vehicle_OBD_O2_Sensor4_ShortTermFuelTrim {
  """Value: PID 1x (byte B) - Short term fuel trim"""
  value: Float

  """Timestamp: PID 1x (byte B) - Short term fuel trim"""
  timestamp: String

  """Unit of PID 1x (byte B) - Short term fuel trim"""
  unit: String
}

"""Oxygen sensors (PID 14 - PID 1B)"""
type Vehicle_OBD_O2_Sensor5 {
  """PID 1x (byte A) - Sensor voltage"""
  voltage: Vehicle_OBD_O2_Sensor5_Voltage

  """PID 1x (byte B) - Short term fuel trim"""
  shortTermFuelTrim: Vehicle_OBD_O2_Sensor5_ShortTermFuelTrim
}

"""PID 1x (byte A) - Sensor voltage"""
type Vehicle_OBD_O2_Sensor5_Voltage {
  """Value: PID 1x (byte A) - Sensor voltage"""
  value: Float

  """Timestamp: PID 1x (byte A) - Sensor voltage"""
  timestamp: String

  """Unit of PID 1x (byte A) - Sensor voltage"""
  unit: String
}

"""PID 1x (byte B) - Short term fuel trim"""
type Vehicle_OBD_O2_Sensor5_ShortTermFuelTrim {
  """Value: PID 1x (byte B) - Short term fuel trim"""
  value: Float

  """Timestamp: PID 1x (byte B) - Short term fuel trim"""
  timestamp: String

  """Unit of PID 1x (byte B) - Short term fuel trim"""
  unit: String
}

"""Oxygen sensors (PID 14 - PID 1B)"""
type Vehicle_OBD_O2_Sensor6 {
  """PID 1x (byte A) - Sensor voltage"""
  voltage: Vehicle_OBD_O2_Sensor6_Voltage

  """PID 1x (byte B) - Short term fuel trim"""
  shortTermFuelTrim: Vehicle_OBD_O2_Sensor6_ShortTermFuelTrim
}

"""PID 1x (byte A) - Sensor voltage"""
type Vehicle_OBD_O2_Sensor6_Voltage {
  """Value: PID 1x (byte A) - Sensor voltage"""
  value: Float

  """Timestamp: PID 1x (byte A) - Sensor voltage"""
  timestamp: String

  """Unit of PID 1x (byte A) - Sensor voltage"""
  unit: String
}

"""PID 1x (byte B) - Short term fuel trim"""
type Vehicle_OBD_O2_Sensor6_ShortTermFuelTrim {
  """Value: PID 1x (byte B) - Short term fuel trim"""
  value: Float

  """Timestamp: PID 1x (byte B) - Short term fuel trim"""
  timestamp: String

  """Unit of PID 1x (byte B) - Short term fuel trim"""
  unit: String
}

"""Oxygen sensors (PID 14 - PID 1B)"""
type Vehicle_OBD_O2_Sensor7 {
  """PID 1x (byte A) - Sensor voltage"""
  voltage: Vehicle_OBD_O2_Sensor7_Voltage

  """PID 1x (byte B) - Short term fuel trim"""
  shortTermFuelTrim: Vehicle_OBD_O2_Sensor7_ShortTermFuelTrim
}

"""PID 1x (byte A) - Sensor voltage"""
type Vehicle_OBD_O2_Sensor7_Voltage {
  """Value: PID 1x (byte A) - Sensor voltage"""
  value: Float

  """Timestamp: PID 1x (byte A) - Sensor voltage"""
  timestamp: String

  """Unit of PID 1x (byte A) - Sensor voltage"""
  unit: String
}

"""PID 1x (byte B) - Short term fuel trim"""
type Vehicle_OBD_O2_Sensor7_ShortTermFuelTrim {
  """Value: PID 1x (byte B) - Short term fuel trim"""
  value: Float

  """Timestamp: PID 1x (byte B) - Short term fuel trim"""
  timestamp: String

  """Unit of PID 1x (byte B) - Short term fuel trim"""
  unit: String
}

"""Oxygen sensors (PID 14 - PID 1B)"""
type Vehicle_OBD_O2_Sensor8 {
  """PID 1x (byte A) - Sensor voltage"""
  voltage: Vehicle_OBD_O2_Sensor8_Voltage

  """PID 1x (byte B) - Short term fuel trim"""
  shortTermFuelTrim: Vehicle_OBD_O2_Sensor8_ShortTermFuelTrim
}

"""PID 1x (byte A) - Sensor voltage"""
type Vehicle_OBD_O2_Sensor8_Voltage {
  """Value: PID 1x (byte A) - Sensor voltage"""
  value: Float

  """Timestamp: PID 1x (byte A) - Sensor voltage"""
  timestamp: String

  """Unit of PID 1x (byte A) - Sensor voltage"""
  unit: String
}

"""PID 1x (byte B) - Short term fuel trim"""
type Vehicle_OBD_O2_Sensor8_ShortTermFuelTrim {
  """Value: PID 1x (byte B) - Short term fuel trim"""
  value: Float

  """Timestamp: PID 1x (byte B) - Short term fuel trim"""
  timestamp: String

  """Unit of PID 1x (byte B) - Short term fuel trim"""
  unit: String
}

"""PID 1C - OBD standards this vehicle conforms to"""
type Vehicle_OBD_OBDStandards {
  """Value: PID 1C - OBD standards this vehicle conforms to"""
  value: Int

  """Timestamp: PID 1C - OBD standards this vehicle conforms to"""
  timestamp: String
}

"""
PID 1D - Presence of oxygen sensors in 4 banks. Similar to PID 13, but [A0..A7] == [B1S1, B1S2, B2S1, B2S2, B3S1, B3S2, B4S1, B4S2]
"""
type Vehicle_OBD_OxygenSensorsIn4Banks {
  """
  Value: PID 1D - Presence of oxygen sensors in 4 banks. Similar to PID 13, but [A0..A7] == [B1S1, B1S2, B2S1, B2S2, B3S1, B3S2, B4S1, B4S2]
  """
  value: Int

  """
  Timestamp: PID 1D - Presence of oxygen sensors in 4 banks. Similar to PID 13, but [A0..A7] == [B1S1, B1S2, B2S1, B2S2, B3S1, B3S2, B4S1, B4S2]
  """
  timestamp: String
}

"""PID 1E - Auxiliary input status (power take off)"""
type Vehicle_OBD_IsPTOActive {
  """Value: PID 1E - Auxiliary input status (power take off)"""
  value: Boolean

  """Timestamp: PID 1E - Auxiliary input status (power take off)"""
  timestamp: String
}

"""PID 1F - Engine run time"""
type Vehicle_OBD_RunTime {
  """Value: PID 1F - Engine run time"""
  value: Float

  """Timestamp: PID 1F - Engine run time"""
  timestamp: String

  """Unit of PID 1F - Engine run time"""
  unit: String
}

"""PID 20 - Bit array of the supported pids 21 to 40"""
type Vehicle_OBD_PidsB {
  """Value: PID 20 - Bit array of the supported pids 21 to 40"""
  value: Float

  """Timestamp: PID 20 - Bit array of the supported pids 21 to 40"""
  timestamp: String
}

"""PID 21 - Distance traveled with MIL on"""
type Vehicle_OBD_DistanceWithMIL {
  """Value: PID 21 - Distance traveled with MIL on"""
  value: Float

  """Timestamp: PID 21 - Distance traveled with MIL on"""
  timestamp: String

  """Unit of PID 21 - Distance traveled with MIL on"""
  unit: String
}

"""PID 22 - Fuel rail pressure relative to vacuum"""
type Vehicle_OBD_FuelRailPressureVac {
  """Value: PID 22 - Fuel rail pressure relative to vacuum"""
  value: Float

  """Timestamp: PID 22 - Fuel rail pressure relative to vacuum"""
  timestamp: String

  """Unit of PID 22 - Fuel rail pressure relative to vacuum"""
  unit: String
}

"""PID 23 - Fuel rail pressure direct inject"""
type Vehicle_OBD_FuelRailPressureDirect {
  """Value: PID 23 - Fuel rail pressure direct inject"""
  value: Float

  """Timestamp: PID 23 - Fuel rail pressure direct inject"""
  timestamp: String

  """Unit of PID 23 - Fuel rail pressure direct inject"""
  unit: String
}

"""Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
type Vehicle_OBD_O2WR {
  """Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
  sensor1: Vehicle_OBD_O2WR_Sensor1

  """Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
  sensor2: Vehicle_OBD_O2WR_Sensor2

  """Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
  sensor3: Vehicle_OBD_O2WR_Sensor3

  """Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
  sensor4: Vehicle_OBD_O2WR_Sensor4

  """Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
  sensor5: Vehicle_OBD_O2WR_Sensor5

  """Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
  sensor6: Vehicle_OBD_O2WR_Sensor6

  """Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
  sensor7: Vehicle_OBD_O2WR_Sensor7

  """Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
  sensor8: Vehicle_OBD_O2WR_Sensor8
}

"""Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
type Vehicle_OBD_O2WR_Sensor1 {
  """
  PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  lambda: Vehicle_OBD_O2WR_Sensor1_Lambda

  """PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  voltage: Vehicle_OBD_O2WR_Sensor1_Voltage

  """PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  current: Vehicle_OBD_O2WR_Sensor1_Current
}

"""
PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
"""
type Vehicle_OBD_O2WR_Sensor1_Lambda {
  """
  Value: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  value: Float

  """
  Timestamp: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  timestamp: String
}

"""PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor1_Voltage {
  """Value: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  unit: String
}

"""PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor1_Current {
  """Value: PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 3x (byte CD) - Current for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  unit: String
}

"""Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
type Vehicle_OBD_O2WR_Sensor2 {
  """
  PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  lambda: Vehicle_OBD_O2WR_Sensor2_Lambda

  """PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  voltage: Vehicle_OBD_O2WR_Sensor2_Voltage

  """PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  current: Vehicle_OBD_O2WR_Sensor2_Current
}

"""
PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
"""
type Vehicle_OBD_O2WR_Sensor2_Lambda {
  """
  Value: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  value: Float

  """
  Timestamp: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  timestamp: String
}

"""PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor2_Voltage {
  """Value: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  unit: String
}

"""PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor2_Current {
  """Value: PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 3x (byte CD) - Current for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  unit: String
}

"""Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
type Vehicle_OBD_O2WR_Sensor3 {
  """
  PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  lambda: Vehicle_OBD_O2WR_Sensor3_Lambda

  """PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  voltage: Vehicle_OBD_O2WR_Sensor3_Voltage

  """PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  current: Vehicle_OBD_O2WR_Sensor3_Current
}

"""
PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
"""
type Vehicle_OBD_O2WR_Sensor3_Lambda {
  """
  Value: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  value: Float

  """
  Timestamp: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  timestamp: String
}

"""PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor3_Voltage {
  """Value: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  unit: String
}

"""PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor3_Current {
  """Value: PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 3x (byte CD) - Current for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  unit: String
}

"""Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
type Vehicle_OBD_O2WR_Sensor4 {
  """
  PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  lambda: Vehicle_OBD_O2WR_Sensor4_Lambda

  """PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  voltage: Vehicle_OBD_O2WR_Sensor4_Voltage

  """PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  current: Vehicle_OBD_O2WR_Sensor4_Current
}

"""
PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
"""
type Vehicle_OBD_O2WR_Sensor4_Lambda {
  """
  Value: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  value: Float

  """
  Timestamp: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  timestamp: String
}

"""PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor4_Voltage {
  """Value: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  unit: String
}

"""PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor4_Current {
  """Value: PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 3x (byte CD) - Current for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  unit: String
}

"""Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
type Vehicle_OBD_O2WR_Sensor5 {
  """
  PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  lambda: Vehicle_OBD_O2WR_Sensor5_Lambda

  """PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  voltage: Vehicle_OBD_O2WR_Sensor5_Voltage

  """PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  current: Vehicle_OBD_O2WR_Sensor5_Current
}

"""
PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
"""
type Vehicle_OBD_O2WR_Sensor5_Lambda {
  """
  Value: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  value: Float

  """
  Timestamp: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  timestamp: String
}

"""PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor5_Voltage {
  """Value: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  unit: String
}

"""PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor5_Current {
  """Value: PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 3x (byte CD) - Current for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  unit: String
}

"""Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
type Vehicle_OBD_O2WR_Sensor6 {
  """
  PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  lambda: Vehicle_OBD_O2WR_Sensor6_Lambda

  """PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  voltage: Vehicle_OBD_O2WR_Sensor6_Voltage

  """PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  current: Vehicle_OBD_O2WR_Sensor6_Current
}

"""
PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
"""
type Vehicle_OBD_O2WR_Sensor6_Lambda {
  """
  Value: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  value: Float

  """
  Timestamp: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  timestamp: String
}

"""PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor6_Voltage {
  """Value: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  unit: String
}

"""PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor6_Current {
  """Value: PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 3x (byte CD) - Current for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  unit: String
}

"""Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
type Vehicle_OBD_O2WR_Sensor7 {
  """
  PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  lambda: Vehicle_OBD_O2WR_Sensor7_Lambda

  """PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  voltage: Vehicle_OBD_O2WR_Sensor7_Voltage

  """PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  current: Vehicle_OBD_O2WR_Sensor7_Current
}

"""
PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
"""
type Vehicle_OBD_O2WR_Sensor7_Lambda {
  """
  Value: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  value: Float

  """
  Timestamp: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  timestamp: String
}

"""PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor7_Voltage {
  """Value: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  unit: String
}

"""PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor7_Current {
  """Value: PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 3x (byte CD) - Current for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  unit: String
}

"""Wide range/band oxygen sensors (PID 24 - 2B and PID 34 - 3B)"""
type Vehicle_OBD_O2WR_Sensor8 {
  """
  PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  lambda: Vehicle_OBD_O2WR_Sensor8_Lambda

  """PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  voltage: Vehicle_OBD_O2WR_Sensor8_Voltage

  """PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  current: Vehicle_OBD_O2WR_Sensor8_Current
}

"""
PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
"""
type Vehicle_OBD_O2WR_Sensor8_Lambda {
  """
  Value: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  value: Float

  """
  Timestamp: PID 2x (byte AB) and PID 3x (byte AB) - Lambda for wide range/band oxygen sensor
  """
  timestamp: String
}

"""PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor8_Voltage {
  """Value: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 2x (byte CD) - Voltage for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 2x (byte CD) - Voltage for wide range/band oxygen sensor"""
  unit: String
}

"""PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
type Vehicle_OBD_O2WR_Sensor8_Current {
  """Value: PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  value: Float

  """
  Timestamp: PID 3x (byte CD) - Current for wide range/band oxygen sensor
  """
  timestamp: String

  """Unit of PID 3x (byte CD) - Current for wide range/band oxygen sensor"""
  unit: String
}

"""PID 2C - Commanded exhaust gas recirculation (EGR)"""
type Vehicle_OBD_CommandedEGR {
  """Value: PID 2C - Commanded exhaust gas recirculation (EGR)"""
  value: Float

  """Timestamp: PID 2C - Commanded exhaust gas recirculation (EGR)"""
  timestamp: String

  """Unit of PID 2C - Commanded exhaust gas recirculation (EGR)"""
  unit: String
}

"""PID 2D - Exhaust gas recirculation (EGR) error"""
type Vehicle_OBD_EGRError {
  """Value: PID 2D - Exhaust gas recirculation (EGR) error"""
  value: Float

  """Timestamp: PID 2D - Exhaust gas recirculation (EGR) error"""
  timestamp: String

  """Unit of PID 2D - Exhaust gas recirculation (EGR) error"""
  unit: String
}

"""PID 2E - Commanded evaporative purge (EVAP) valve"""
type Vehicle_OBD_CommandedEVAP {
  """Value: PID 2E - Commanded evaporative purge (EVAP) valve"""
  value: Float

  """Timestamp: PID 2E - Commanded evaporative purge (EVAP) valve"""
  timestamp: String

  """Unit of PID 2E - Commanded evaporative purge (EVAP) valve"""
  unit: String
}

"""PID 2F - Fuel level in the fuel tank"""
type Vehicle_OBD_FuelLevel {
  """Value: PID 2F - Fuel level in the fuel tank"""
  value: Float

  """Timestamp: PID 2F - Fuel level in the fuel tank"""
  timestamp: String

  """Unit of PID 2F - Fuel level in the fuel tank"""
  unit: String
}

"""PID 30 - Number of warm-ups since codes cleared"""
type Vehicle_OBD_WarmupsSinceDTCClear {
  """Value: PID 30 - Number of warm-ups since codes cleared"""
  value: Int

  """Timestamp: PID 30 - Number of warm-ups since codes cleared"""
  timestamp: String
}

"""PID 31 - Distance traveled since codes cleared"""
type Vehicle_OBD_DistanceSinceDTCClear {
  """Value: PID 31 - Distance traveled since codes cleared"""
  value: Float

  """Timestamp: PID 31 - Distance traveled since codes cleared"""
  timestamp: String

  """Unit of PID 31 - Distance traveled since codes cleared"""
  unit: String
}

"""PID 32 - Evaporative purge (EVAP) system pressure"""
type Vehicle_OBD_EVAPVaporPressure {
  """Value: PID 32 - Evaporative purge (EVAP) system pressure"""
  value: Float

  """Timestamp: PID 32 - Evaporative purge (EVAP) system pressure"""
  timestamp: String

  """Unit of PID 32 - Evaporative purge (EVAP) system pressure"""
  unit: String
}

"""PID 33 - Barometric pressure"""
type Vehicle_OBD_BarometricPressure {
  """Value: PID 33 - Barometric pressure"""
  value: Float

  """Timestamp: PID 33 - Barometric pressure"""
  timestamp: String

  """Unit of PID 33 - Barometric pressure"""
  unit: String
}

"""Catalyst signals"""
type Vehicle_OBD_Catalyst {
  """Catalyst bank 1 signals"""
  bank1: Vehicle_OBD_Catalyst_Bank1

  """Catalyst bank 2 signals"""
  bank2: Vehicle_OBD_Catalyst_Bank2
}

"""Catalyst bank 1 signals"""
type Vehicle_OBD_Catalyst_Bank1 {
  """PID 3C - Catalyst temperature from bank 1, sensor 1"""
  temperature1: Vehicle_OBD_Catalyst_Bank1_Temperature1

  """PID 3E - Catalyst temperature from bank 1, sensor 2"""
  temperature2: Vehicle_OBD_Catalyst_Bank1_Temperature2
}

"""PID 3C - Catalyst temperature from bank 1, sensor 1"""
type Vehicle_OBD_Catalyst_Bank1_Temperature1 {
  """Value: PID 3C - Catalyst temperature from bank 1, sensor 1"""
  value: Float

  """Timestamp: PID 3C - Catalyst temperature from bank 1, sensor 1"""
  timestamp: String

  """Unit of PID 3C - Catalyst temperature from bank 1, sensor 1"""
  unit: String
}

"""PID 3E - Catalyst temperature from bank 1, sensor 2"""
type Vehicle_OBD_Catalyst_Bank1_Temperature2 {
  """Value: PID 3E - Catalyst temperature from bank 1, sensor 2"""
  value: Float

  """Timestamp: PID 3E - Catalyst temperature from bank 1, sensor 2"""
  timestamp: String

  """Unit of PID 3E - Catalyst temperature from bank 1, sensor 2"""
  unit: String
}

"""Catalyst bank 2 signals"""
type Vehicle_OBD_Catalyst_Bank2 {
  """PID 3D - Catalyst temperature from bank 2, sensor 1"""
  temperature1: Vehicle_OBD_Catalyst_Bank2_Temperature1

  """PID 3F - Catalyst temperature from bank 2, sensor 2"""
  temperature2: Vehicle_OBD_Catalyst_Bank2_Temperature2
}

"""PID 3D - Catalyst temperature from bank 2, sensor 1"""
type Vehicle_OBD_Catalyst_Bank2_Temperature1 {
  """Value: PID 3D - Catalyst temperature from bank 2, sensor 1"""
  value: Float

  """Timestamp: PID 3D - Catalyst temperature from bank 2, sensor 1"""
  timestamp: String

  """Unit of PID 3D - Catalyst temperature from bank 2, sensor 1"""
  unit: String
}

"""PID 3F - Catalyst temperature from bank 2, sensor 2"""
type Vehicle_OBD_Catalyst_Bank2_Temperature2 {
  """Value: PID 3F - Catalyst temperature from bank 2, sensor 2"""
  value: Float

  """Timestamp: PID 3F - Catalyst temperature from bank 2, sensor 2"""
  timestamp: String

  """Unit of PID 3F - Catalyst temperature from bank 2, sensor 2"""
  unit: String
}

"""PID 40 - Bit array of the supported pids 41 to 60"""
type Vehicle_OBD_PidsC {
  """Value: PID 40 - Bit array of the supported pids 41 to 60"""
  value: Float

  """Timestamp: PID 40 - Bit array of the supported pids 41 to 60"""
  timestamp: String
}

"""PID 41 - OBD status for the current drive cycle"""
type Vehicle_OBD_DriveCycleStatus {
  """Malfunction Indicator Light (MIL) - False = Off, True = On"""
  isMilOn: Vehicle_OBD_DriveCycleStatus_IsMILOn

  """Number of sensor Trouble Codes (DTC)"""
  dtcCount: Vehicle_OBD_DriveCycleStatus_DTCCount

  """
  Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)
  """
  ignitionType: Vehicle_OBD_DriveCycleStatus_IgnitionType
}

"""Malfunction Indicator Light (MIL) - False = Off, True = On"""
type Vehicle_OBD_DriveCycleStatus_IsMILOn {
  """Value: Malfunction Indicator Light (MIL) - False = Off, True = On"""
  value: Boolean

  """Timestamp: Malfunction Indicator Light (MIL) - False = Off, True = On"""
  timestamp: String
}

"""Number of sensor Trouble Codes (DTC)"""
type Vehicle_OBD_DriveCycleStatus_DTCCount {
  """Value: Number of sensor Trouble Codes (DTC)"""
  value: Int

  """Timestamp: Number of sensor Trouble Codes (DTC)"""
  timestamp: String
}

"""
Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)
"""
type Vehicle_OBD_DriveCycleStatus_IgnitionType {
  """
  Value: Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)
  """
  value: String

  """
  Timestamp: Type of the ignition for ICE - spark = spark plug ignition, compression = self-igniting (Diesel engines)
  """
  timestamp: String
}

"""PID 42 - Control module voltage"""
type Vehicle_OBD_ControlModuleVoltage {
  """Value: PID 42 - Control module voltage"""
  value: Float

  """Timestamp: PID 42 - Control module voltage"""
  timestamp: String

  """Unit of PID 42 - Control module voltage"""
  unit: String
}

"""PID 43 - Absolute load value"""
type Vehicle_OBD_AbsoluteLoad {
  """Value: PID 43 - Absolute load value"""
  value: Float

  """Timestamp: PID 43 - Absolute load value"""
  timestamp: String

  """Unit of PID 43 - Absolute load value"""
  unit: String
}

"""PID 44 - Commanded equivalence ratio"""
type Vehicle_OBD_CommandedEquivalenceRatio {
  """Value: PID 44 - Commanded equivalence ratio"""
  value: Float

  """Timestamp: PID 44 - Commanded equivalence ratio"""
  timestamp: String

  """Unit of PID 44 - Commanded equivalence ratio"""
  unit: String
}

"""PID 45 - Relative throttle position"""
type Vehicle_OBD_RelativeThrottlePosition {
  """Value: PID 45 - Relative throttle position"""
  value: Float

  """Timestamp: PID 45 - Relative throttle position"""
  timestamp: String

  """Unit of PID 45 - Relative throttle position"""
  unit: String
}

"""PID 46 - Ambient air temperature"""
type Vehicle_OBD_AmbientAirTemperature {
  """Value: PID 46 - Ambient air temperature"""
  value: Float

  """Timestamp: PID 46 - Ambient air temperature"""
  timestamp: String

  """Unit of PID 46 - Ambient air temperature"""
  unit: String
}

"""PID 47 - Absolute throttle position B"""
type Vehicle_OBD_ThrottlePositionB {
  """Value: PID 47 - Absolute throttle position B"""
  value: Float

  """Timestamp: PID 47 - Absolute throttle position B"""
  timestamp: String

  """Unit of PID 47 - Absolute throttle position B"""
  unit: String
}

"""PID 48 - Absolute throttle position C"""
type Vehicle_OBD_ThrottlePositionC {
  """Value: PID 48 - Absolute throttle position C"""
  value: Float

  """Timestamp: PID 48 - Absolute throttle position C"""
  timestamp: String

  """Unit of PID 48 - Absolute throttle position C"""
  unit: String
}

"""PID 49 - Accelerator pedal position D"""
type Vehicle_OBD_AcceleratorPositionD {
  """Value: PID 49 - Accelerator pedal position D"""
  value: Float

  """Timestamp: PID 49 - Accelerator pedal position D"""
  timestamp: String

  """Unit of PID 49 - Accelerator pedal position D"""
  unit: String
}

"""PID 4A - Accelerator pedal position E"""
type Vehicle_OBD_AcceleratorPositionE {
  """Value: PID 4A - Accelerator pedal position E"""
  value: Float

  """Timestamp: PID 4A - Accelerator pedal position E"""
  timestamp: String

  """Unit of PID 4A - Accelerator pedal position E"""
  unit: String
}

"""PID 4B - Accelerator pedal position F"""
type Vehicle_OBD_AcceleratorPositionF {
  """Value: PID 4B - Accelerator pedal position F"""
  value: Float

  """Timestamp: PID 4B - Accelerator pedal position F"""
  timestamp: String

  """Unit of PID 4B - Accelerator pedal position F"""
  unit: String
}

"""PID 4C - Commanded throttle actuator"""
type Vehicle_OBD_ThrottleActuator {
  """Value: PID 4C - Commanded throttle actuator"""
  value: Float

  """Timestamp: PID 4C - Commanded throttle actuator"""
  timestamp: String

  """Unit of PID 4C - Commanded throttle actuator"""
  unit: String
}

"""PID 4D - Run time with MIL on"""
type Vehicle_OBD_RunTimeMIL {
  """Value: PID 4D - Run time with MIL on"""
  value: Float

  """Timestamp: PID 4D - Run time with MIL on"""
  timestamp: String

  """Unit of PID 4D - Run time with MIL on"""
  unit: String
}

"""PID 4E - Time since trouble codes cleared"""
type Vehicle_OBD_TimeSinceDTCCleared {
  """Value: PID 4E - Time since trouble codes cleared"""
  value: Float

  """Timestamp: PID 4E - Time since trouble codes cleared"""
  timestamp: String

  """Unit of PID 4E - Time since trouble codes cleared"""
  unit: String
}

"""PID 50 - Maximum flow for mass air flow sensor"""
type Vehicle_OBD_MaxMAF {
  """Value: PID 50 - Maximum flow for mass air flow sensor"""
  value: Float

  """Timestamp: PID 50 - Maximum flow for mass air flow sensor"""
  timestamp: String

  """Unit of PID 50 - Maximum flow for mass air flow sensor"""
  unit: String
}

"""PID 51 - Fuel type"""
type Vehicle_OBD_FuelType {
  """Value: PID 51 - Fuel type"""
  value: String

  """Timestamp: PID 51 - Fuel type"""
  timestamp: String
}

"""PID 52 - Percentage of ethanol in the fuel"""
type Vehicle_OBD_EthanolPercent {
  """Value: PID 52 - Percentage of ethanol in the fuel"""
  value: Float

  """Timestamp: PID 52 - Percentage of ethanol in the fuel"""
  timestamp: String

  """Unit of PID 52 - Percentage of ethanol in the fuel"""
  unit: String
}

"""PID 53 - Absolute evaporative purge (EVAP) system pressure"""
type Vehicle_OBD_EVAPVaporPressureAbsolute {
  """Value: PID 53 - Absolute evaporative purge (EVAP) system pressure"""
  value: Float

  """Timestamp: PID 53 - Absolute evaporative purge (EVAP) system pressure"""
  timestamp: String

  """Unit of PID 53 - Absolute evaporative purge (EVAP) system pressure"""
  unit: String
}

"""PID 54 - Alternate evaporative purge (EVAP) system pressure"""
type Vehicle_OBD_EVAPVaporPressureAlternate {
  """Value: PID 54 - Alternate evaporative purge (EVAP) system pressure"""
  value: Float

  """Timestamp: PID 54 - Alternate evaporative purge (EVAP) system pressure"""
  timestamp: String

  """Unit of PID 54 - Alternate evaporative purge (EVAP) system pressure"""
  unit: String
}

"""PID 55 (byte A) - Short term secondary O2 trim - Bank 1"""
type Vehicle_OBD_ShortTermO2Trim1 {
  """Value: PID 55 (byte A) - Short term secondary O2 trim - Bank 1"""
  value: Float

  """Timestamp: PID 55 (byte A) - Short term secondary O2 trim - Bank 1"""
  timestamp: String

  """Unit of PID 55 (byte A) - Short term secondary O2 trim - Bank 1"""
  unit: String
}

"""PID 55 (byte B) - Short term secondary O2 trim - Bank 3"""
type Vehicle_OBD_ShortTermO2Trim3 {
  """Value: PID 55 (byte B) - Short term secondary O2 trim - Bank 3"""
  value: Float

  """Timestamp: PID 55 (byte B) - Short term secondary O2 trim - Bank 3"""
  timestamp: String

  """Unit of PID 55 (byte B) - Short term secondary O2 trim - Bank 3"""
  unit: String
}

"""PID 56 (byte A) - Long term secondary O2 trim - Bank 1"""
type Vehicle_OBD_LongTermO2Trim1 {
  """Value: PID 56 (byte A) - Long term secondary O2 trim - Bank 1"""
  value: Float

  """Timestamp: PID 56 (byte A) - Long term secondary O2 trim - Bank 1"""
  timestamp: String

  """Unit of PID 56 (byte A) - Long term secondary O2 trim - Bank 1"""
  unit: String
}

"""PID 56 (byte B) - Long term secondary O2 trim - Bank 3"""
type Vehicle_OBD_LongTermO2Trim3 {
  """Value: PID 56 (byte B) - Long term secondary O2 trim - Bank 3"""
  value: Float

  """Timestamp: PID 56 (byte B) - Long term secondary O2 trim - Bank 3"""
  timestamp: String

  """Unit of PID 56 (byte B) - Long term secondary O2 trim - Bank 3"""
  unit: String
}

"""PID 57 (byte A) - Short term secondary O2 trim - Bank 2"""
type Vehicle_OBD_ShortTermO2Trim2 {
  """Value: PID 57 (byte A) - Short term secondary O2 trim - Bank 2"""
  value: Float

  """Timestamp: PID 57 (byte A) - Short term secondary O2 trim - Bank 2"""
  timestamp: String

  """Unit of PID 57 (byte A) - Short term secondary O2 trim - Bank 2"""
  unit: String
}

"""PID 57 (byte B) - Short term secondary O2 trim - Bank 4"""
type Vehicle_OBD_ShortTermO2Trim4 {
  """Value: PID 57 (byte B) - Short term secondary O2 trim - Bank 4"""
  value: Float

  """Timestamp: PID 57 (byte B) - Short term secondary O2 trim - Bank 4"""
  timestamp: String

  """Unit of PID 57 (byte B) - Short term secondary O2 trim - Bank 4"""
  unit: String
}

"""PID 58 (byte A) - Long term secondary O2 trim - Bank 2"""
type Vehicle_OBD_LongTermO2Trim2 {
  """Value: PID 58 (byte A) - Long term secondary O2 trim - Bank 2"""
  value: Float

  """Timestamp: PID 58 (byte A) - Long term secondary O2 trim - Bank 2"""
  timestamp: String

  """Unit of PID 58 (byte A) - Long term secondary O2 trim - Bank 2"""
  unit: String
}

"""PID 58 (byte B) - Long term secondary O2 trim - Bank 4"""
type Vehicle_OBD_LongTermO2Trim4 {
  """Value: PID 58 (byte B) - Long term secondary O2 trim - Bank 4"""
  value: Float

  """Timestamp: PID 58 (byte B) - Long term secondary O2 trim - Bank 4"""
  timestamp: String

  """Unit of PID 58 (byte B) - Long term secondary O2 trim - Bank 4"""
  unit: String
}

"""PID 59 - Absolute fuel rail pressure"""
type Vehicle_OBD_FuelRailPressureAbsolute {
  """Value: PID 59 - Absolute fuel rail pressure"""
  value: Float

  """Timestamp: PID 59 - Absolute fuel rail pressure"""
  timestamp: String

  """Unit of PID 59 - Absolute fuel rail pressure"""
  unit: String
}

"""PID 5A - Relative accelerator pedal position"""
type Vehicle_OBD_RelativeAcceleratorPosition {
  """Value: PID 5A - Relative accelerator pedal position"""
  value: Float

  """Timestamp: PID 5A - Relative accelerator pedal position"""
  timestamp: String

  """Unit of PID 5A - Relative accelerator pedal position"""
  unit: String
}

"""PID 5B - Remaining life of hybrid battery"""
type Vehicle_OBD_HybridBatteryRemaining {
  """Value: PID 5B - Remaining life of hybrid battery"""
  value: Float

  """Timestamp: PID 5B - Remaining life of hybrid battery"""
  timestamp: String

  """Unit of PID 5B - Remaining life of hybrid battery"""
  unit: String
}

"""PID 5C - Engine oil temperature"""
type Vehicle_OBD_OilTemperature {
  """Value: PID 5C - Engine oil temperature"""
  value: Float

  """Timestamp: PID 5C - Engine oil temperature"""
  timestamp: String

  """Unit of PID 5C - Engine oil temperature"""
  unit: String
}

"""PID 5D - Fuel injection timing"""
type Vehicle_OBD_FuelInjectionTiming {
  """Value: PID 5D - Fuel injection timing"""
  value: Float

  """Timestamp: PID 5D - Fuel injection timing"""
  timestamp: String

  """Unit of PID 5D - Fuel injection timing"""
  unit: String
}

"""PID 5E - Engine fuel rate"""
type Vehicle_OBD_FuelRate {
  """Value: PID 5E - Engine fuel rate"""
  value: Float

  """Timestamp: PID 5E - Engine fuel rate"""
  timestamp: String

  """Unit of PID 5E - Engine fuel rate"""
  unit: String
}

"""Driver data."""
type Vehicle_Driver {
  """Identifier attributes based on OAuth 2.0."""
  identifier: Vehicle_Driver_Identifier

  """
  Distraction level of the driver will be the level how much the driver is distracted, by multiple factors. E.g. Driving situation, acustical or optical signales inside the cockpit, phone calls.
  """
  distractionLevel: Vehicle_Driver_DistractionLevel

  """Has driver the eyes on road or not?"""
  isEyesOnRoad: Vehicle_Driver_IsEyesOnRoad

  """Probability of attentiveness of the driver."""
  attentiveProbability: Vehicle_Driver_AttentiveProbability

  """
  Fatigueness level of driver. Evaluated by multiple factors like trip time, behaviour of steering, eye status.
  """
  fatigueLevel: Vehicle_Driver_FatigueLevel

  """Heart rate of the driver."""
  heartRate: Vehicle_Driver_HeartRate
}

"""Identifier attributes based on OAuth 2.0."""
type Vehicle_Driver_Identifier {
  """Subject for the authentication of the occupant. E.g. UserID 7331677."""
  subject: Vehicle_Driver_Identifier_Subject

  """
  Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  issuer: Vehicle_Driver_Identifier_Issuer
}

"""Subject for the authentication of the occupant. E.g. UserID 7331677."""
type Vehicle_Driver_Identifier_Subject {
  """
  Value: Subject for the authentication of the occupant. E.g. UserID 7331677.
  """
  value: String

  """
  Timestamp: Subject for the authentication of the occupant. E.g. UserID 7331677.
  """
  timestamp: String
}

"""
Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
"""
type Vehicle_Driver_Identifier_Issuer {
  """
  Value: Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  value: String

  """
  Timestamp: Unique Issuer for the authentication of the occupant. E.g. https://accounts.funcorp.com.
  """
  timestamp: String
}

"""
Distraction level of the driver will be the level how much the driver is distracted, by multiple factors. E.g. Driving situation, acustical or optical signales inside the cockpit, phone calls.
"""
type Vehicle_Driver_DistractionLevel {
  """
  Value: Distraction level of the driver will be the level how much the driver is distracted, by multiple factors. E.g. Driving situation, acustical or optical signales inside the cockpit, phone calls.
  """
  value: Float

  """
  Timestamp: Distraction level of the driver will be the level how much the driver is distracted, by multiple factors. E.g. Driving situation, acustical or optical signales inside the cockpit, phone calls.
  """
  timestamp: String

  """
  Unit of Distraction level of the driver will be the level how much the driver is distracted, by multiple factors. E.g. Driving situation, acustical or optical signales inside the cockpit, phone calls.
  """
  unit: String
}

"""Has driver the eyes on road or not?"""
type Vehicle_Driver_IsEyesOnRoad {
  """Value: Has driver the eyes on road or not?"""
  value: Boolean

  """Timestamp: Has driver the eyes on road or not?"""
  timestamp: String
}

"""Probability of attentiveness of the driver."""
type Vehicle_Driver_AttentiveProbability {
  """Value: Probability of attentiveness of the driver."""
  value: Float

  """Timestamp: Probability of attentiveness of the driver."""
  timestamp: String

  """Unit of Probability of attentiveness of the driver."""
  unit: String
}

"""
Fatigueness level of driver. Evaluated by multiple factors like trip time, behaviour of steering, eye status.
"""
type Vehicle_Driver_FatigueLevel {
  """
  Value: Fatigueness level of driver. Evaluated by multiple factors like trip time, behaviour of steering, eye status.
  """
  value: Float

  """
  Timestamp: Fatigueness level of driver. Evaluated by multiple factors like trip time, behaviour of steering, eye status.
  """
  timestamp: String

  """
  Unit of Fatigueness level of driver. Evaluated by multiple factors like trip time, behaviour of steering, eye status.
  """
  unit: String
}

"""Heart rate of the driver."""
type Vehicle_Driver_HeartRate {
  """Value: Heart rate of the driver."""
  value: Int

  """Timestamp: Heart rate of the driver."""
  timestamp: String
}

"""Information about exterior measured by vehicle."""
type Vehicle_Exterior {
  """Air temperature outside the vehicle."""
  airTemperature: Vehicle_Exterior_AirTemperature

  """
  Relative humidity outside the vehicle. 0 = Dry, 100 = Air fully saturated.
  """
  humidity: Vehicle_Exterior_Humidity

  """
  Light intensity outside the vehicle. 0 = No light detected, 100 = Fully lit.
  """
  lightIntensity: Vehicle_Exterior_LightIntensity
}

"""Air temperature outside the vehicle."""
type Vehicle_Exterior_AirTemperature {
  """Value: Air temperature outside the vehicle."""
  value: Float

  """Timestamp: Air temperature outside the vehicle."""
  timestamp: String

  """Unit of Air temperature outside the vehicle."""
  unit: String
}

"""
Relative humidity outside the vehicle. 0 = Dry, 100 = Air fully saturated.
"""
type Vehicle_Exterior_Humidity {
  """
  Value: Relative humidity outside the vehicle. 0 = Dry, 100 = Air fully saturated.
  """
  value: Float

  """
  Timestamp: Relative humidity outside the vehicle. 0 = Dry, 100 = Air fully saturated.
  """
  timestamp: String

  """
  Unit of Relative humidity outside the vehicle. 0 = Dry, 100 = Air fully saturated.
  """
  unit: String
}

"""
Light intensity outside the vehicle. 0 = No light detected, 100 = Fully lit.
"""
type Vehicle_Exterior_LightIntensity {
  """
  Value: Light intensity outside the vehicle. 0 = No light detected, 100 = Fully lit.
  """
  value: Float

  """
  Timestamp: Light intensity outside the vehicle. 0 = No light detected, 100 = Fully lit.
  """
  timestamp: String

  """
  Unit of Light intensity outside the vehicle. 0 = No light detected, 100 = Fully lit.
  """
  unit: String
}

"""Service data."""
type Vehicle_Service {
  """
  Indicates if vehicle needs service (of any kind). True = Service needed now or in the near future. False = No known need for service.
  """
  isServiceDue: Vehicle_Service_IsServiceDue

  """
  Remaining distance to service (of any kind). Negative values indicate service overdue.
  """
  distanceToService: Vehicle_Service_DistanceToService

  """
  Remaining time to service (of any kind). Negative values indicate service overdue.
  """
  timeToService: Vehicle_Service_TimeToService
}

"""
Indicates if vehicle needs service (of any kind). True = Service needed now or in the near future. False = No known need for service.
"""
type Vehicle_Service_IsServiceDue {
  """
  Value: Indicates if vehicle needs service (of any kind). True = Service needed now or in the near future. False = No known need for service.
  """
  value: Boolean

  """
  Timestamp: Indicates if vehicle needs service (of any kind). True = Service needed now or in the near future. False = No known need for service.
  """
  timestamp: String
}

"""
Remaining distance to service (of any kind). Negative values indicate service overdue.
"""
type Vehicle_Service_DistanceToService {
  """
  Value: Remaining distance to service (of any kind). Negative values indicate service overdue.
  """
  value: Float

  """
  Timestamp: Remaining distance to service (of any kind). Negative values indicate service overdue.
  """
  timestamp: String

  """
  Unit of Remaining distance to service (of any kind). Negative values indicate service overdue.
  """
  unit: String
}

"""
Remaining time to service (of any kind). Negative values indicate service overdue.
"""
type Vehicle_Service_TimeToService {
  """
  Value: Remaining time to service (of any kind). Negative values indicate service overdue.
  """
  value: Int

  """
  Timestamp: Remaining time to service (of any kind). Negative values indicate service overdue.
  """
  timestamp: String

  """
  Unit of Remaining time to service (of any kind). Negative values indicate service overdue.
  """
  unit: String
}

"""Connectivity data."""
type Vehicle_Connectivity {
  """
  Indicates if connectivity between vehicle and cloud is available. True = Connectivity is available. False = Connectivity is not available.
  """
  isConnectivityAvailable: Vehicle_Connectivity_IsConnectivityAvailable
}

"""
Indicates if connectivity between vehicle and cloud is available. True = Connectivity is available. False = Connectivity is not available.
"""
type Vehicle_Connectivity_IsConnectivityAvailable {
  """
  Value: Indicates if connectivity between vehicle and cloud is available. True = Connectivity is available. False = Connectivity is not available.
  """
  value: Boolean

  """
  Timestamp: Indicates if connectivity between vehicle and cloud is available. True = Connectivity is available. False = Connectivity is not available.
  """
  timestamp: String
}
