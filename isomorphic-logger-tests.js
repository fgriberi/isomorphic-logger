// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by isomorphic-logger.js.
import { name as packageName } from "meteor/fgriberi:isomorphic-logger";

// Write your tests here!
// Here is an example.
Tinytest.add('isomorphic-logger - example', function (test) {
  test.equal(packageName, "isomorphic-logger");
});
