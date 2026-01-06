# @kwh50/grpc

This library serves as the central repository for **gRPC Protocol Buffers (.proto)** definitions within the Turborepo monorepo.

## Purpose

It shares the contract definitions between the API Gateway and the Microservices. Instead of duplicating `.proto` files across services, they are defined here once and imported or copied to the consuming applications.

## Functionality

- **Proto Storage**: Contains all `.proto` files in the `proto-files` directory.
- **Type Generation**: Uses `ts-proto` to compile `.proto` files into strictly typed TypeScript interfaces and NestJS modules.

## Usage in NestJS

To use these definitions in a NestJS app:

1.  **Install**: Add `@kwh50/grpc` as a dependency.
2.  **Copy Protos**: Ensure the app copies the `.proto` files to its dist folder (see root README for `copy-proto-files` script).
3.  **Import**: Import the generated types/interfaces directly from this package in your code.
