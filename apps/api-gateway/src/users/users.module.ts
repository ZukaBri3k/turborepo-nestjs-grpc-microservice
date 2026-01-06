import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_PACKAGE_NAME } from '@kwh50/grpc';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: USER_PACKAGE_NAME,
          protoPath: join(__dirname, '../proto-files/user.proto'),
          url: '0.0.0.0:9000',
        }
      }
    ])
  ],
  controllers: [UsersController],
  providers: [],
})
export class UsersModule {}
