import { Activity } from 'money-control-domain';

export enum CallbackQuery {
  Key = 'REMOVE_ACTIVITY',
  Remove = 'REMOVE',
  Confirm = 'CONFIRM',
  Refuse = 'REFUSE',
  ChangePage = 'CHANGE_PAGE',
  ChangeMonth = 'CHANGE_MONTH',
  Empty = 'EMPTY',
}

export enum CallbackQueryData {
  Option,
  Id,
  Date,
}

export interface IKeyboard {
  activities: Activity[];
  date: number;
  total: number;
  page?: number;
}
