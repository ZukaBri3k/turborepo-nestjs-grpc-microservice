import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, OnModuleInit } from '@nestjs/common';
import { CreateUserRequest, UpdateUserRequest, USER_PACKAGE_NAME, USER_SERVICE_NAME, UserServiceClient } from '@kwh50/grpc';
import { ClientGrpc } from '@nestjs/microservices';

@Controller('users')
export class UsersController implements OnModuleInit {
  private usersService: UserServiceClient;

  constructor(@Inject(USER_PACKAGE_NAME) private readonly userClient: ClientGrpc) {}

  onModuleInit() {
    this.usersService = this.userClient.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  @Post()
  create(@Body() createUserDto: CreateUserRequest) {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.getAllUsers({});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.getUser({ id: +id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserRequest) {
    return this.usersService.updateUser({ id: +id, ...updateUserDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.deleteUser({ id: +id });
  }
}
