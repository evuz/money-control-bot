import { ActivityRepository } from '../Repositories/ActivityRepository';
import { Activity } from '../Entities/Activity';

export interface INewExpense {
  repository: ActivityRepository;
}