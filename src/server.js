const express = require('express');
const path = require('path');

const router = require('./api/routes.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '../dist')));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
