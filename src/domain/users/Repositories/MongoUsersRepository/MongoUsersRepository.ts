import { getRepository, Repository } from 'typeorm';

import { UsersRepository } from '../UsersRepository';
import { User } from './User.entity';

export class MongoUsersRepository implements UsersRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  getAllUsers() {
    return this.userRepository.find();
  }

  newUser({ user }: { user: User }) {
    return this.userRepository.save(user);
  }
}
