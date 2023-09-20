#
# Makefile to generate specifications
#

.PHONY: clean all mandatory_targets json franca yaml csv ddsidl tests binary protobuf ttl graphql ocf c overlays

all: clean json franca yaml csv ddsidl binary tests protobuf graphql overlays ttl

# All mandatory targets that shall be built and pass on each pull request for
# vehicle-signal-specification or vss-tools
mandatory_targets: clean json franca yaml binary csv graphql ddsidl overlays tests

# Additional targets that shall be built by travis, but where it is not mandatory
# that the builds shall pass.
# This is typically intended for less maintainted tools that are allowed to break
# from time to time
# Can be run from e.g. travis with "make -k optional_targets || true" to continue
# even if errors occur and not do not halt travis build if errors occur
optional_targets: clean protobuf ttl

TOOLSDIR?=./vss-tools

json:
	${TOOLSDIR}/vspec2json.py -I ./spec -u ./spec/units.yaml ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).json

franca:
	${TOOLSDIR}/vspec2franca.py -v $$(cat VERSION)  -I ./spec -u ./spec/units.yaml ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).fidl

yaml:
	${TOOLSDIR}/vspec2yaml.py -I ./spec -u ./spec/units.yaml ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).yaml

csv:
	${TOOLSDIR}/vspec2csv.py -I ./spec -u ./spec/units.yaml ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).csv

ddsidl:
	${TOOLSDIR}/vspec2ddsidl.py -I ./spec -u ./spec/units.yaml ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).idl

# Verifies that supported overlay combinations are syntactically correct.
overlays:
	${TOOLSDIR}/vspec2json.py -I ./spec -u ./spec/units.yaml -o overlays/profiles/motorbike.vspec ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION)_motorbike.json
	${TOOLSDIR}/vspec2json.py -I ./spec -u ./spec/units.yaml -o overlays/extensions/dual_wiper_systems.vspec ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION)_dualwiper.json

# Verifies that we have selected a tool version (vss-tools submodule) that is functional
tests:
	PYTHONPATH=${TOOLSDIR} pytest

binary:
	gcc -shared -o ${TOOLSDIR}/binary/binarytool.so -fPIC ${TOOLSDIR}/binary/binarytool.c
	${TOOLSDIR}/vspec2binary.py -u ./spec/units.yaml ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).binary

protobuf:
	${TOOLSDIR}/vspec2protobuf.py  -I ./spec -u ./spec/units.yaml ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).proto

graphql:
	${TOOLSDIR}/vspec2graphql.py -I ./spec -u ./spec/units.yaml ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).graphql.ts

ttl:
	${TOOLSDIR}/contrib/vspec2ttl/vspec2ttl.py -I ./spec -u ./spec/units.yaml ./spec/VehicleSignalSpecification.vspec vss_rel_$$(cat VERSION).ttl

clean:
	rm -f ${TOOLSDIR}/binary/binarytool.so
	rm -f vss_rel_*
