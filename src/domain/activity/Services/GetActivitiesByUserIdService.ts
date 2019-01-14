import { IService } from 'ts-domain';

import { ActivityRepository } from '../Repositories/ActivityRepository';
import { Activity } from '../Entities/Activity';
import { IGetActivitiesByUserId } from './types';

export class GetActivitiesByUserIdService implements IService {
  private repository: ActivityRepository;

  constructor({ repository }: IGetActivitiesByUserId) {
    this.repository = repository;
  }

  execute({ userId }: { userId: Activity['userId'] }) {
    return this.repository.getActivitiesByUserId({ userId });
  }
}
