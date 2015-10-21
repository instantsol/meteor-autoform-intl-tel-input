Package.describe({
  name: 'instantsolutions:autoform-intl-tel-input',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Int-tel-input custom autoform field.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/instantsol/meteor-autoform-intl-tel-input',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.use('aldeed:autoform@5.3.2');
  api.use('blaze');
  api.use('reactive-var');
  api.addFiles('autoform-intl-tel-input.html', ['client']);
  api.addFiles('autoform-intl-tel-input.js', ['client']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('instantsolutions:autoform-intl-tel-input');
  api.addFiles('autoform-intl-tel-input-tests.js');
});
