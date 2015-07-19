/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

// Stormpath Middleware
var stormpathExpressSdk = require('stormpath-sdk-express');
var spMiddleware = stormpathExpressSdk.createMiddleware();
var spAuth = spMiddleware.authenticate;

module.exports = function(app) {

  // Create an instance of stormpath middleware
  spMiddleware.attachDefaults(app);

  // Insert routes below
  app.use('/api/events', spAuth, require('./api/event'));
  app.use('/api/things', spAuth, require('./api/thing'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
