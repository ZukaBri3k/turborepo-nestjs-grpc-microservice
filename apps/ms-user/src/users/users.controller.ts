import {
  CreateUserRequest,
  DeleteUserRequest,
  EmptyUser,
  GetUserRequest,
  UpdateUserRequest,
  User,
  Users,
  UserServiceController,
  UserServiceControllerMethods,
} from '@kwh50/grpc';
import { Controller } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';

@Controller()
@UserServiceControllerMethods()
export class UsersController implements UserServiceController {
  constructor(private readonly usersService: UsersService) {}

  getAllUsers(_: EmptyUser): Promise<Users> | Observable<Users> | Users {
    return this.usersService.findAll();
  }

  getUser(request: GetUserRequest): Promise<User> | Observable<User> | User {
    return this.usersService.findOne(request.id);
  }

  createUser(
    request: CreateUserRequest,
  ): Promise<User> | Observable<User> | User {
    return this.usersService.create(request);
  }

  updateUser(
    request: UpdateUserRequest,
  ): Promise<User> | Observable<User> | User {
    return this.usersService.update(request);
  }

  deleteUser(
    request: DeleteUserRequest,
  ): Promise<User> | Observable<User> | User {
    return this.usersService.delete(request.id);
  }
}
