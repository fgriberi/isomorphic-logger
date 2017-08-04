import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import winston from 'winston';
import path from 'path';
import fs from 'fs';

const env = process.env.NODE_ENV || 'development';
let logDirectory = process.env.LOG_PATH || 'log';

if (!path.isAbsolute(logDirectory)) {
  const rootPath = path.resolve('.');
  const absolutePath = rootPath.split(path.sep + '.meteor')[0];
  logDirectory = path.resolve(absolutePath + path.sep + logDirectory);
}
// else: nothing todo, path already resolved

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}
// else: nothing todo, directory already exist

// Timestamp setting
const tsFormat = () => (new Date()).toLocaleTimeString();

// Logger configuration instance
const logger = new (winston.Logger)({
  transports: [
    new (require('winston-daily-rotate-file'))({
      filename: `${logDirectory}/-results.log`,
      timestamp: tsFormat,
      datePattern: 'yyyy-MM-dd',
      prepend: true,
      level: env === 'development' ? 'debug' : 'info'
    })
  ]
});

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

export default logger;
