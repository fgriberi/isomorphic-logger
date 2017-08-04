import { Meteor } from 'meteor/meteor';

// Function wrapper for logs on client side
export const logger = {
  log(level, msg, payload) {
      Meteor.call('logger', level, msg, payload);
  }
};

export const severity = {
  EMERG: 'emerg',
  ALERT: 'alert',
  CRIT: 'crit',
  ERROR: 'error',
  WARNING: 'warning',
  NOTICE: 'Notice',
  INFO: 'info',
  DEBUG: 'debug'
};
