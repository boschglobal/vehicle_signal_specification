#
# Makefile to generate specifications
#

.PHONY: clean all mandatory_targets json franca yaml csv ddsidl tests binary protobuf ttl graphql ocf c overlays id jsonschema

all: clean mandatory_targets optional_targets

# All mandatory targets that shall be built and pass on each pull request for
# vehicle-signal-specification or vss-tools
mandatory_targets: clean json json-noexpand franca yaml binary csv graphql ddsidl id jsonschema overlays tests

# Additional targets that shall be built by travis, but where it is not mandatory
# that the builds shall pass.
# This is typically intended for less maintainted tools that are allowed to break
# from time to time
# Can be run from e.g. travis with "make -k optional_targets || true" to continue
# even if errors occur and not do not halt travis build if errors occur
optional_targets: clean protobuf ttl

TOOLSDIR?=./vss-tools

json:
	${TOOLSDIR}/vspec2json.py -u ./spec/units.yaml --strict ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).json

json-noexpand:
	${TOOLSDIR}/vspec2json.py -u ./spec/units.yaml --no-expand --strict ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION)_noexpand.json

jsonschema:
	${TOOLSDIR}/vspec2jsonschema.py -u ./spec/units.yaml --strict ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).jsonschema

franca:
	${TOOLSDIR}/vspec2franca.py --franca-vss-version $$(cat VERSION) -u ./spec/units.yaml --strict ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).fidl

yaml:
	${TOOLSDIR}/vspec2yaml.py -u ./spec/units.yaml  --strict ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).yaml

csv:
	${TOOLSDIR}/vspec2csv.py -u ./spec/units.yaml  --strict ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).csv

ddsidl:
	${TOOLSDIR}/vspec2ddsidl.py -u ./spec/units.yaml  --strict ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).idl

# Verifies that supported overlay combinations are syntactically correct.
overlays:
	${TOOLSDIR}/vspec2json.py -u ./spec/units.yaml -o overlays/profiles/motorbike.vspec --strict ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION)_motorbike.json
	${TOOLSDIR}/vspec2json.py -u ./spec/units.yaml -o overlays/extensions/dual_wiper_systems.vspec --strict ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION)_dualwiper.json
	${TOOLSDIR}/vspec2json.py -u ./spec/units.yaml -o overlays/extensions/OBD.vspec --strict ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION)_obd.json

tests:
	PYTHONPATH=${TOOLSDIR} pytest

binary:
	cd ${TOOLSDIR}/binary && $(MAKE)
	${TOOLSDIR}/vspec2binary.py -u ./spec/units.yaml --strict ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).binary

protobuf:
	${TOOLSDIR}/vspec2protobuf.py -u ./spec/units.yaml --strict ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).proto

graphql:
	${TOOLSDIR}/vspec2graphql.py -u ./spec/units.yaml --strict ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).graphql.ts

ttl:
	${TOOLSDIR}/contrib/vspec2ttl/vspec2ttl.py -u ./spec/units.yaml  ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).ttl

id:
	${TOOLSDIR}/vspec2id.py -u ./spec/units.yaml --strict ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).vspec

clean:
	cd ${TOOLSDIR}/binary && $(MAKE) clean
	rm -f vss_rel_*
