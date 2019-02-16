import { Domain } from 'ts-domain';
import {
  DatabaseUseCaseFactory,
  UsersUseCaseFactory,
  ActivityUseCaseFactory,
  repositorySelector,
} from 'money-control-domain';

import { http } from './http';

const config = { http };

repositorySelector.select({ repository: 'api' });
const useCases = {
  new_user: UsersUseCaseFactory.newUsersUseCase({ config }),
  new_expense: ActivityUseCaseFactory.newExpenseByTelegramIdUseCase({ config }),
  new_income: ActivityUseCaseFactory.newIncomeByTelegramIdUseCase({ config }),
  get_activity: ActivityUseCaseFactory.getActivityUseCase({ config }),
  get_activities_by_month: ActivityUseCaseFactory.getActivitiesByTelegramIdMonthUseCase({ config }),
  get_activities_by_month_paginated: ActivityUseCaseFactory.getActivitiesByTelegramIdMonthPaginatedUseCase({ config }),
  remove_activity: ActivityUseCaseFactory.removeActivityUseCase({ config }),
};

export const domain = new Domain({ useCases, config });
