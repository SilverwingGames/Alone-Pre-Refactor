'use strict';

var _ = require('lodash');

// Get list of features
exports.index = function(req, res) {
  res.json([
    {
      'name' : 'Completely Open Ended',
      'info' : 'Alone\'s \'Artificer\' mode is designed to suite any Roleplayer\'s needs.'
    },
    {
      'name' : 'Multiplayer Chat',
      'info' : 'Chat with other players while you build your civilization'
    },
    {
      'name' : 'Random Events',
      'info' : 'Alone goes the extra step to entertain active players with multiplayer events.'
    }
  ]);
};
