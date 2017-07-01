/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-ui',
    podModulePrefix: 'ember-ui/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      EXTEND_PROTOTYPES: {
        Date: false
      },
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    moment: {
          // To cherry-pick specific locale support into your application.
          // Full list of locales: https://github.com/moment/moment/tree/2.10.3/locale
          includeLocales: ['pt-br']
        },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'self'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com",
      'font-src': "'self' data: use.typekit.net fonts.gstatic.com",
      'connect-src': "'self' localhost:1337",
      'img-src': "* 'self' www.facebook.com p.typekit.net data: placehold.it placeholdit.imgix.net",
      'style-src': "'self' 'unsafe-inline' use.typekit.net fonts.googleapis.com",
      'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com "
    }
  };

  if (environment === 'development') {
    ENV.apiBaseUrl = 'http://localhost:1337';
    ENV.siteBaseUrl = 'http://localhost:4200';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }
  return ENV;
};
