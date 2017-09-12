/* jshint esversion: 6 */
const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/shopping-list-app');
mongoose.Promise = global.Promise;

module.exports.Item = require('./item');
