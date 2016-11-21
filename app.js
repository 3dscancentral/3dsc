import express from 'express';
import db from './models';

const app = express();

app.get('/', (req, res) => {
  db.Order.create();
  db.Order.findAll().then(orders => res.send(orders));
});

export default app;
