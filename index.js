const express = require('express');
const app = express();
const db = require('./models')

app.get('/', (req, res) => res.send('test'));

app.listen(3000, 'localhost', () => console.log('express server started'));
