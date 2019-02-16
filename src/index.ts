import { domain } from './domain';
import { config } from './config';
import { run } from './bot/run';

console.log('App is running...');
run({ token: config.bot_token });
