Package.describe({
  name: 'fgriberi:isomorphic-logger',
  version: '0.0.1',
  summary: 'An isomorphic logger package for meteor',
  git: 'https://github.com/fgriberi/isomorphic-logger',
  documentation: 'README.md'
});

Npm.depends({
  'winston': '2.3.1',
  'winston-daily-rotate-file': '1.4.6',
  'tinytest': '1.1.4'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');
  api.use('ecmascript');
  api.mainModule('isomorphic-logger-client.js', 'client');
  api.mainModule('isomorphic-logger-server.js', 'server');
  api.mainModule('isomorphic-logger.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ecmascript');
  api.use('fgriberi:isomorphic-logger');
  api.mainModule('isomorphic-logger-tests.js');
});
