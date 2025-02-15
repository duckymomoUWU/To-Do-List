const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes/todoRoute');

require('dotenv').config();

const app = express();
const Port = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`connected to MongoDB...`))
    .catch((err) => console.log(`err`))

app.use(router)

app.listen(Port, () => console.log(`Listening on : ${Port}`));
