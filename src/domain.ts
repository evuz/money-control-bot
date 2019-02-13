import { Domain } from 'ts-domain';
import { DatabaseUseCaseFactory, UsersUseCaseFactory, ActivityUseCaseFactory } from 'money-control-domain';

const useCases = {
  start_database: DatabaseUseCaseFactory.startDatabaseUseCase(),
  new_user: UsersUseCaseFactory.newUsersUseCase(),
  new_expense: ActivityUseCaseFactory.newExpenseByTelegramIdUseCase(),
  new_income: ActivityUseCaseFactory.newIncomeByTelegramIdUseCase(),
  get_activity: ActivityUseCaseFactory.getActivityUseCase(),
  get_activities_by_month: ActivityUseCaseFactory.getActivitiesByTelegramIdMonthUseCase(),
  get_activities_by_month_paginated: ActivityUseCaseFactory.getActivitiesByTelegramIdMonthPaginatedUseCase(),
  remove_activity: ActivityUseCaseFactory.removeActivityUseCase(),
};

export const domain = new Domain({ useCases });
