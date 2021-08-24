const express = require('express')
const app = express() 

const cors = require('cors');

app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT || 3035
const axios = require('axios');
const mongoose = require("mongoose");

mongoose.connect(`${process.env.MONGO_DB_URL}/flowers`,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })

app.use(express.json());

const 
{ 
    getApi,
    createFav,
    favFlower,
    deleteFlower,
    updateFlower
} 
= require('./controller/flowers.controller');


app.get('/flowers', getApi)
app.get('/creatingFlowers', createFav)
app.post('/favFlowers', favFlower)
app.delete('/delFlower/:_id', deleteFlower)
app.put('/creFlowers/:_id', updateFlower)

app.listen(PORT, () => {
    console.log('listening to port' , PORT);
})