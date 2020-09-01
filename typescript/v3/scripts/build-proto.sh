protoc \
--plugin=./node_modules/.bin/protoc-gen-ts_proto \
--ts_proto_opt=env=node,forceLong=long,outputEncodeMethods=false,outputJsonMethods=false,outputClientImpl=false,useOptionals=true \
--proto_path=src/proto \
--ts_proto_out=./src/protoTypes \
./src/proto/*.proto

for f in ./src/protoTypes/*.ts; do
    if [[ ${f} != *".protoType"* ]]; then
      mv -- "$f" "${f%.ts}.protoType.ts"
    fi
done
