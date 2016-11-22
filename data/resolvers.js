import db from './models';

export default {
  Query: {
    orders() {
      return db.Order.findAll().then(orders => orders);
    },
  },
};

