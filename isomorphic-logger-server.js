import { Meteor } from 'meteor/meteor';
import logger from './isomorphic-logger';

Meteor.autorun(() => {
  Meteor.methods({
    'logger'(level, msg, payload) {
      check([ level, msg ], [ String ]);
      check(payload, Match.Maybe(Object, undefined));

      if (payload === undefined) {
        logger.log(level, msg);
      }
      else
      {
        const user = Meteor.user();
        if (user) {
          logger.log(level, msg, {username: user.profile.name});
        } else {
          logger.log(level, msg);
        }
      }
    }
  });
});
