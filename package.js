Package.describe({
  name: 'fgriberi:isomorphic-logger',
  version: '0.0.1',
  summary: 'An isomorphic logger package for meteor',
  git: 'https://github.com/fgriberi/isomorphic-logger',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.1');
  api.use('ecmascript');
  api.mainModule('isomorphic-logger.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('fgriberi:isomorphic-logger');
  api.mainModule('isomorphic-logger-tests.js');
});
