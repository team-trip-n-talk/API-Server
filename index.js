'use strict';

require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Hello World');
});

module.exports = {
  server: app,
  start: port =>{
    let PORT = process.env.PORT || port;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};