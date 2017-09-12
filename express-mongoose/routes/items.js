/* jshint esversion: 6 */
const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function(req, res, next) {
  db.Item.find().then(function(items) {
    res.render('index', {items});
  }, function(err) {
    res.send('Error in get all items route');
  });
});

router.get('/new', function(req, res, next) {
  res.render('new');
});

router.get('/:id', function(req, res, next) {
  db.Item.findById(req.params.id).then(function(item) {
    res.render('show', {item});
  });
});

router.get('/:id/edit', function(req, res, next) {
  db.Item.findById(req.params.id).then(function(item) {
    res.render('edit', {item});
  });
});

router.post('/', function(req, res, next) {
  db.Item.create(req.body).then(function() {
  res.redirect('/');
  });
});

router.patch('/:id', function(req, res, next) {
  db.Item.findByIdAndUpdate(req.params.id, req.body)
  .then(function(data) {
    res.redirect('/');
  });
});

router.delete('/:id', function(req, res, next) {
  db.Item.findByIdAndRemove(req.params.id)
  .then(function(data) {
    res.redirect('/');
  });
});

module.exports = router;
