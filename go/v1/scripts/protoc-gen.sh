protoc \
--proto_path=protos \
--go_out=plugins=grpc:api/ \
./protos/*.proto
