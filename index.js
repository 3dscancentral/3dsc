const express = require('express');
const app = express();
const models = require('./models')

app.get('/', (req, res) => res.send('test'));

app.listen(3000, 'localhost', () => console.log('express server started'));
