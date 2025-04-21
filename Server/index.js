const express = require('express');
const cors = require('cors');
const { db } = require('./database/db');
const { readdirSync } = require('fs');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

readdirSync('./routes').map((file) => {
  const route = require(`./routes/${file}`);
  app.use('/test', route); 
});

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log("Listening on Port", PORT);
  });
};

server();
