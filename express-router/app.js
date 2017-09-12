/* jshint esversion: 6 */
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = 3000;

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

const itemRoutes = require('./routes/items');

app.use('/items', itemRoutes);

app.get('/', function(req, res, next) {
  res.redirect('/items');
});

app.listen(PORT, function() {
  console.log(`Server is listening on port ${PORT}`);
});
