# Test Turborepo gRPC NestJS

This project is a dedicated test environment for exploring and demonstrating the integration of **gRPC** with **NestJS** applications within a **Turborepo** monorepo architecture.

It serves as a reference for setting up microservices communication using gRPC in a modern monorepo build system.

## Project Structure

- **apps/**
    - `api-gateway`: NestJS application acting as the gateway, forwarding requests to microservices via gRPC.
    - `ms-user`: NestJS microservice handling user domains via gRPC.
- **packages/**
    - `grpc`: A shared library containing `.proto` definitions and generating TypeScript interfaces/types using `ts-proto`.

## Critical Setup for NestJS gRPC Apps

For any NestJS application in this monorepo that needs to consume the gRPC definitions or act as a gRPC service, the following configurations are strict requirements:

### 1. `package.json` Script

You must add the `copy-proto-files` script to the application's `package.json`. This ensures that the raw `.proto` files are copied to the distribution folder during the build process, making them available at runtime.

Add this to `scripts`:

```json
"copy-proto-files": "mkdir -p dist/proto-files && cp ../../packages/grpc/proto-files/*.proto dist/proto-files/"
```

### 2. `nest-cli.json` Configuration

You must configure the Nest CLI to **NOT** delete the output directory on build. This prevents the `copy-proto-files` script's work from being wiped out if it runs before the clean (though usually, it's about preserving them if run in parallel or specific build flows). More importantly, standard nest build cleans `dist` by default.

Update `nest-cli.json`:

```json
{
    "compilerOptions": {
        "deleteOutDir": false
    }
}
```

### 3. `turbo.json` Configuration

The `turbo.json` pipeline has been configured to orchestrate these tasks automatically:

- **build**: Executes the `copy-proto-files` task before running the `build` script.
- **dev**: Executes `copy-proto-files` and `^build` (building dependencies) before starting the development environment.

## Running the Project

(Standard Turborepo commands apply)

```bash
turbo dev
```