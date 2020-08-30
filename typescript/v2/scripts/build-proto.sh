protoc \
--plugin=./node_modules/.bin/protoc-gen-ts_proto \
--ts_proto_opt=env=node \
--ts_proto_opt=lowerCaseServiceMethods=true \
--ts_proto_opt=forceLong=long \
--ts_proto_out=./src/ \
./proto/*.proto
# --ts_proto_opt=context=true \
