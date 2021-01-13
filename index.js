// Modules import
require('dotenv').config();

const express = require('express');

const app = express();

// router import
const router = require('./app/router');

// Static files folder
app.use(express.static('./app/public'));

// Routing
app.use(router);

// 404
app.use((request, response) => {
  response.status(404).send('Error 404 - This page does not exist.');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on ${process.env.PORT || 3000}`);
  });
  