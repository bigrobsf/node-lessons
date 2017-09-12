/* jshint esversion: 6 */

const express = require('express');
const router = express.Router();

var items = [];
var id = 1;

router.get('/', function(req, res, next) {
  res.render('index', {items});
});

router.get('/new', function(req, res, next) {
  res.render('new');
});

router.get('/:id', function(req, res, next) {
  var id = Number(req.params.id);
  var item = items.find(function(item) {
    return item.id === id;
  });

  res.render('show', {item});
});

router.get('/:id/edit', function(req, res, next) {
  var id = Number(req.params.id);
  var item = items.find(function(item) {
    return item.id === id;
  });

  res.render('edit', {item});
});

router.post('/', function(req, res, next) {
  items.push({
    name: req.body.name,
    id: id++
  });

  res.redirect('/items');
});

router.patch('/:id', function(req, res, next) {
  var id = Number(req.params.id);
  var item = items.find(function(item) {
    return item.id === id;
  });

  item.name = req.body.name;
  res.redirect('/items');
});

router.delete('/:id', function(req, res, next) {
  var id = Number(req.params.id);
  var itemIndex = items.findIndex(function(item) {
    return item.id === id;
  });

  items.splice(itemIndex, 1);
  res.redirect('/items');
});

module.exports = router;
