/* jshint esversion: 6 */
const mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  name: String,
  quantity: Number
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
