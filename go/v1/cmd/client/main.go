package main

import (
	"google.golang.org/grpc"
	"log"
	"github.com/103cuong/grpc_hello_world/api"
	"context"
	"time"
)

func main()  {
	clientConn, err := grpc.Dial(":50000", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("client connection failed: %v", err)
	}
	defer clientConn.Close()

	client := api.NewGreeterClient(clientConn)

	ctx, cancel := context.WithTimeout(context.Background(), 5 * time.Second)
	defer cancel()

	req := api.HelloRequest{Name: "🦄 Cuong Tran"}
	res, err := client.SayHello(ctx, &req)
	if err != nil {
		log.Fatalf("SayHello service failed: %v", err)
	}
	log.Printf("HelloResponse: %v", res)
}
