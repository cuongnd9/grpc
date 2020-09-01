/* eslint-disable */


export interface HelloRequest {
  name: string;
}

export interface HelloResponse {
  message: string;
}

export interface Greeter {

  SayHello(request: HelloRequest): Promise<HelloResponse>;

}
