
const mongoose = require("mongoose");

const flowerSchema = new mongoose.Schema({
    name: { type: String},
    photo: { type: String},
    instructions: { type: String}
})

const newModel = mongoose.model('flowers', flowerSchema)

module.exports = {newModel}