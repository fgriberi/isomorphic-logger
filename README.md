# An isomorphic logger package for meteor

isomorphic-logger is a minimal meteor package that allow isomorphic logs both client and server sides. Internally use the [winston](https://github.com/winstonjs/winston#logging-with-metadata).

## Install

`meteor add fgriberi:isomorphic-logger`

## Usage

Say you set your logger directory as follows in your code:

```javascript
Meteor.startup(() => {
  ...
  process.env.LOG_PATH = Meteor.settings.logDirectory;
  ...
});
```

So, to log a message from server side:
```javascript
import logger, { severity } from 'meteor/fgiberi:isomorphic-logger';

logger.log(severity.INFO, 'This is a dummy message for test purpose');
```

And to log a message from client side:
```javascript
import logger, { severity } from 'meteor/fgriberi:isomorphic-logger';

logger.log(severity.INFO, 'This is a dummy message for test purpose');
```

## Logging Severities
Supported severities are:

* EMERG: system is unusable
* ALERT: action must be taken immediately
* CRIT: critical conditions
* ERROR: error conditions
* WARNING: warning conditions
* NOTICE: normal but significant condition
* INFO: informational messages
* DEBUG: debug-level messages

For more information, please check [wiston-logging-levels](https://github.com/winstonjs/winston#logging-levels).