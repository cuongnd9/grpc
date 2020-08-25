#!/usr/bin/env bash

cd ..

# JavaScript code generating
grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./src/protos \
--grpc_out=generate_package_definition:./src/protos \
-I ./protos \
./protos/*.proto

# generate d.ts codes
grpc_tools_node_protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=generate_package_definition:./src/protos \
-I ./protos \
./protos/*.proto
