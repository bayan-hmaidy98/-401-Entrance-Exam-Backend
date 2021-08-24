const axios = require('axios');

const { flowerModel } = require('../model/flower.model')


const getApi = (req, res) => {
    axios.get('https://flowers-api-13.herokuapp.com/getFlowers').then(response => {
        res.send(response.data.flowerslist)
    }).catch(err => alert(err));
}

const createFav = (req, res) => {
    const { name, photo, instructions } = req.body;
    const newFlower = new flowerModel , {
        name: name,
        photo: photo,
        instructions: instructions,
    };
    newFlower.save()

}

const favFlower = (req, res) => {
    flowerModel.find({}, (err, result => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
        }
    }))
}

const deleteFlower = (req, res) => {
    const { flower_id } = req.params;
    flowerModel.deleteOne({}, (err, result => {
        res.send(result)
    }))
}

const updateFlower = (req, res) => {
    const { id } = req.params;
    const { name, photo, instructions } = req.body;

    flowerModel.findIdandUpdate({ _id: flowerId },
        {
            name: name,
            photo: photo,
            instructions: instructions
        }
    )}

module.exports = {
    getApi,
    createFav,
    favFlower,
    deleteFlower,
    updateFlower,
};