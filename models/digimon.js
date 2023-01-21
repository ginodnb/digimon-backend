"use strict"

const mongoose = require("./index")


const digimonSchema = new mongoose.Schema({
    username: String,
    digimonName: String,
    digimonLevel: String,
    digimonImg: String,
})

const digimonModel = mongoose.model('digimon',digimonSchema);

function seedData() {
    const newDigimon = new digimonModel({
        username: "blabla@gmail.com",
        digimonName: "Motimon",
        digimonLevel: "https://digimon.shadowsmith.com/img/motimon.jpg",
        digimonImg: "In Training"
            }
    )
    newDigimon.save();

}
// seedData();

module.exports = digimonModel;