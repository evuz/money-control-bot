import { SendMessageOptions } from 'node-telegram-bot-api';

import { FunctionBot } from '../models/FunctionBot';
import { ITelegramBotOnText } from '../../interfaces';
import { expenseFunctionBotMethods } from './methods';

export class ExpenseFunctionBot extends FunctionBot {
  public regex = /\/expense/;

  public execute({ msg, botFunctions }: ITelegramBotOnText) {
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const expense = expenseFunctionBotMethods.getExpense({ userId, clean: true });

    expenseFunctionBotMethods
      .askAmount({ msg, botFunctions })
      .then(({ amount }) => {
        expense.amount = amount;
        return expenseFunctionBotMethods.askConcept({ msg, botFunctions });
      })
      .then(({ concept }) => {
        expense.concept = concept;
        return { expense };
      })
      // TODO: Add interface Expense from domain
      .then(({ expense: { amount, concept } }) => {
        const opts: SendMessageOptions = {
          reply_markup: expenseFunctionBotMethods.confirmKeyboard,
        };
        botFunctions.sendMessage({
          chatId,
          opts,
          text: `Summary. \nAmount: ${amount}€. \nConcept: ${concept}.\nIs correct?`,
        });
      });
  }
}
