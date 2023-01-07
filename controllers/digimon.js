"use strict";

const axios = require('axios');
const digimonModel = require("../models/digimon")

async function getDigimonsAPIHandler(req,res) {
    let allDigimons = await axios.get('https://digimon-api.vercel.app/api/digimon');
    res.send(allDigimons.data);
}

async function getDigimonsHandler(req,res) {
    let allDigimons = await digimonModel.find({});
    res.send(allDigimons)
}

async function addDigimonHandler(req,res) {
    // body
    const {name, img, level} = req.body;
    let newDigimon = await digimonModel.create({
        digimonName: name,
        digimonLevel: level,
        digimonImg: img,
    })
}

async function deleteDigimonHandler(req,res) {
    const id = req.params.id;
    let deleteDigimon = await digimonModel.findByIdAndDelete(id);
    console.log(deleteDigimon)
    res.send(`${deleteDigimon.digimonName} digimon has been deleted`)
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
    res.send(updatedDigimon);
}

module.exports = {
    getDigimonsAPIHandler,
    getDigimonsHandler,
    addDigimonHandler,
    deleteDigimonHandler,
    updateDigimonHandler
    
}