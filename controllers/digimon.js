"use strict";

const axios = require('axios');
const digimonModel = require("../models/digimon")

// async function getDigimonsHandler(req,res) {
//     res.send("Home route")
// }

async function getDigimonsAPIHandler(req,res) {
    let allDigimons = await axios.get('https://digimon-api.vercel.app/api/digimon');
    res.send(allDigimons.data);
}

async function getDigimonsHandler(req,res) {
    let username = req.query.username;
    let allDigimons = await digimonModel.find({username:username});
    res.send(allDigimons)
}

async function addDigimonHandler(req,res) {
    // body
    const { name, img, level, email } = req.body;
    let newDigimon = await digimonModel.create({
        username: email,
        digimonName: name,
        digimonLevel: level,
        digimonImg: img,
    });
    res.send(newDigimon);
}

async function deleteDigimonHandler(req,res) {
    const id = req.params.id;
    let deleteDigimon = await digimonModel.findByIdAndDelete(id);
    console.log(deleteDigimon)
    // res.send(`${deleteDigimon.digimonName} digimon has been deleted`)
    let allDigimons = await digimonModel.find({});
    res.send(allDigimons)
}

async function updateDigimonHandler(req,res) {
    const id = req.params.id;
    const {digimonName,digimonLevel,digimonImg} = req.body;
    console.log('inside update', req.body);
    let updatedDigimon = await digimonModel.findByIdAndUpdate(id, {
        digimonName,
        digimonLevel,
        digimonImg,
    })
    // res.send(updatedDigimon);
    let allDigimons = await digimonModel.find({});
    res.send(allDigimons);
}

module.exports = {
    getDigimonsAPIHandler,
    getDigimonsHandler,
    addDigimonHandler,
    deleteDigimonHandler,
    updateDigimonHandler
    
}