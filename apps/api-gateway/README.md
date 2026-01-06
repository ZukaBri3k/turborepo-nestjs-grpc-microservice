# API Gateway

This is the **API Gateway** application for the Turborepo gRPC test project.

## Role

It serves as the main entry point for external HTTP requests. It is responsible for:

- Routing requests to appropriate microservices.
- Communicating with microservices (like `ms-user`) using **gRPC**.

## Configuration

### gRPC Setup

This app consumes gRPC definitions from `@kwh50/grpc`.

- **Script**: It includes the `copy-proto-files` script to move `.proto` files to `dist/`.
- **Config**: `deleteOutDir` is set to `false` in `nest-cli.json` to preserve copied assets.

## Running the App

```bash
# From root
turbo dev --filter=api-gateway
```
