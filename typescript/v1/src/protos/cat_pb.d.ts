// package: v1
// file: cat.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ReadAllRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReadAllRequest): ReadAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadAllRequest;
    static deserializeBinaryFromReader(message: ReadAllRequest, reader: jspb.BinaryReader): ReadAllRequest;
}

export namespace ReadAllRequest {
    export type AsObject = {
    }
}

export class ReadAllResponse extends jspb.Message { 
    clearCatsList(): void;
    getCatsList(): Array<Cat>;
    setCatsList(value: Array<Cat>): ReadAllResponse;
    addCats(value?: Cat, index?: number): Cat;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReadAllResponse): ReadAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadAllResponse;
    static deserializeBinaryFromReader(message: ReadAllResponse, reader: jspb.BinaryReader): ReadAllResponse;
}

export namespace ReadAllResponse {
    export type AsObject = {
        catsList: Array<Cat.AsObject>,
    }
}

export class ReadRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): ReadRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReadRequest): ReadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadRequest;
    static deserializeBinaryFromReader(message: ReadRequest, reader: jspb.BinaryReader): ReadRequest;
}

export namespace ReadRequest {
    export type AsObject = {
        id: string,
    }
}

export class ReadResponse extends jspb.Message { 

    hasCat(): boolean;
    clearCat(): void;
    getCat(): Cat | undefined;
    setCat(value?: Cat): ReadResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReadResponse): ReadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReadResponse;
    static deserializeBinaryFromReader(message: ReadResponse, reader: jspb.BinaryReader): ReadResponse;
}

export namespace ReadResponse {
    export type AsObject = {
        cat?: Cat.AsObject,
    }
}

export class CreateRequest extends jspb.Message { 

    hasCat(): boolean;
    clearCat(): void;
    getCat(): Cat | undefined;
    setCat(value?: Cat): CreateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRequest;
    static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
    export type AsObject = {
        cat?: Cat.AsObject,
    }
}

export class CreateResponse extends jspb.Message { 

    hasCat(): boolean;
    clearCat(): void;
    getCat(): Cat | undefined;
    setCat(value?: Cat): CreateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateResponse;
    static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
    export type AsObject = {
        cat?: Cat.AsObject,
    }
}

export class UpdateRequest extends jspb.Message { 

    hasCat(): boolean;
    clearCat(): void;
    getCat(): Cat | undefined;
    setCat(value?: Cat): UpdateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRequest;
    static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
    export type AsObject = {
        cat?: Cat.AsObject,
    }
}

export class UpdateResponse extends jspb.Message { 

    hasCat(): boolean;
    clearCat(): void;
    getCat(): Cat | undefined;
    setCat(value?: Cat): UpdateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResponse;
    static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
    export type AsObject = {
        cat?: Cat.AsObject,
    }
}

export class DeleteRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRequest;
    static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
    export type AsObject = {
        id: string,
    }
}

export class DeleteResponse extends jspb.Message { 
    getDeleted(): boolean;
    setDeleted(value: boolean): DeleteResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResponse;
    static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
    export type AsObject = {
        deleted: boolean,
    }
}

export class Cat extends jspb.Message { 
    getId(): string;
    setId(value: string): Cat;

    getName(): string;
    setName(value: string): Cat;

    getColor(): string;
    setColor(value: string): Cat;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cat.AsObject;
    static toObject(includeInstance: boolean, msg: Cat): Cat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cat;
    static deserializeBinaryFromReader(message: Cat, reader: jspb.BinaryReader): Cat;
}

export namespace Cat {
    export type AsObject = {
        id: string,
        name: string,
        color: string,
    }
}
