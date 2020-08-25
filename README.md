# grpc

gRPC 🧬 Node 💅 Go

## notes

### What Is gRPC?

> gRPC is an open-source Remote Procedure Call framework that is used for high-performance communication between services.

> gRPC uses protocol buffers. Protocol buffers can describe the structure of data and the code can be generated from that description for generating or parsing a stream of bytes that represents the structured data.

### Field Numbers

Field numbers are used to **identify** your fields in the message binary format, and should not be changed once your message type is in use. Note that field numbers in the range **1 through 15** take **one byte to encode**, including the field number and the field's type (you can find out more about this in Protocol Buffer Encoding). Field numbers in the range **16 through 2047** take **two bytes**. **So you should reserve the numbers 1 through 15 for very frequently occurring message elements**.

## documents

- [Language Guide](https://developers.google.com/protocol-buffers/docs/overview)
- [Understanding gRPC](https://medium.com/better-programming/understanding-grpc-60737b23e79e)
- [[Tutorial, Part 1] How to develop Go gRPC microservice with HTTP/REST endpoint, middleware, Kubernetes deployment, etc.](https://medium.com/@amsokol.com/tutorial-how-to-develop-go-grpc-microservice-with-http-rest-endpoint-middleware-kubernetes-daebb36a97e9)
- [[Tutorial, Part 2] How to develop Go gRPC microservice with HTTP/REST endpoint, middleware, Kubernetes deployment, etc.](https://medium.com/@amsokol.com/tutorial-how-to-develop-go-grpc-microservice-with-http-rest-endpoint-middleware-kubernetes-af1fff81aeb2)
- [[Tutorial, Part 3] How to develop Go gRPC microservice with HTTP/REST endpoint, middleware, Kubernetes deployment, etc.](https://medium.com/@amsokol.com/tutorial-part-3-how-to-develop-go-grpc-microservice-with-http-rest-endpoint-middleware-739aac8f1d7e)
- [GraphQL & gRPC (Part 1)](https://blog.datank.ai/graphql-grpc-part-1-54d92a109619)
- [GraphQL & gRPC (Part 2)](https://blog.datank.ai/graphql-grpc-part-2-37b68765fb0a)
- [When GraphQL meets gRPC… 😍](https://medium.com/@svengau/when-graphql-meets-grpc-3e9729d32e05)
