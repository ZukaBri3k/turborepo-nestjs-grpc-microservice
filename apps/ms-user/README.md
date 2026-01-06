# User Microservice (ms-user)

This is the **User Microservice** for the Turborepo gRPC test project.

## Role

It is a dedicated service for handling user-related operations.

- It operates as a **gRPC Service**.
- It listens for specific gRPC messages/events defined in the shared `@kwh50/grpc` library.

## Configuration

### gRPC Setup

- **Script**: It acts as a gRPC server, requiring the `.proto` files at runtime. The `copy-proto-files` script handles this.
- **Config**: `deleteOutDir` is set to `false` in `nest-cli.json`.

## Running the App

```bash
# From root
turbo dev --filter=ms-user
```
