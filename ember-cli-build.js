/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('bower_components/jquery/dist/jquery.js');
  app.import('bower_components/matchHeight/jquery.matchHeight-min.js');

  app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
  app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

  app.import('bower_components/font-awesome/css/font-awesome.css');

  app.import('bower_components/metisMenu/dist/metisMenu.js');

  /*--- import sweetalert ---*/
  app.import('bower_components/sweetalert/dist/sweetalert.min.js');
  app.import('bower_components/sweetalert/dist/sweetalert.css');
  /*--- import sweetalert ---*/

  /*--- import fileimput ---*/
  app.import('bower_components/bootstrap-fileinput/css/fileinput.min.css');
  app.import('bower_components/bootstrap-fileinput/js/fileinput.min.js');

  app.import('bower_components/jquery.inputmask/dist/jquery.inputmask.bundle.js');  

  return app.toTree();
};
