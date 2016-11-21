const express = require('express');
const app = express();
const db = require('./models')

app.get('/', (req, res) => {
  db.order.create();
  db.order.findAll().then(orders => res.send(orders));
});

module.exports = app;
