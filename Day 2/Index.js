const express = require('express');
const app = express();
const mongoose = require('mongoose');
const route=require('./src/routes/route')

app.use(express.json());

const PORT = 8088;

mongoose.connect('mongodb+srv://vilasvilas566:vilas123@cluster0.jvsq0rz.mongodb.net/MyDB')
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use('/', route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});

