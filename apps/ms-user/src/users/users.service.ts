import { CreateUserRequest, UpdateUserRequest, User, Users } from '@kwh50/grpc';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
    },
  ];

  findAll(): Users {
    return { users: this.users };
  }

  findOne(id: number): User {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException();

    return user;
  }

  create(user: CreateUserRequest): User {
    const newUser: User = {
      id: this.users.length + 1,
      name: user.name,
      email: user.email,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(user: UpdateUserRequest): User {
    const index = this.users.findIndex((u) => u.id === user.id);

    if (index === -1) throw new NotFoundException();

    this.users[index] = { ...this.users[index], ...user };

    return this.users[index];
  }

  delete(id: number): User {
    const index = this.users.findIndex((u) => u.id === id);

    if (index === -1) throw new NotFoundException();

    const deletedUser = this.users[index];
    this.users.splice(index, 1);
    return deletedUser;
  }
}
