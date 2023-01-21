"use strict";

// app.get('/digimon", getalldigimon)

const express = require('express');
const digimonRouter = express.Router();
const digimonHandlers = require("../controllers/digimon");


// digimonRouter.get("/", digimonHandlers.getDigimonsHandler)
// GET: localhost:3003/digimonapi
digimonRouter.get("/digimonapi",digimonHandlers.getDigimonsAPIHandler);

// GET 
digimonRouter.get('/digimon',digimonHandlers.getDigimonsHandler);

// POST: localhost:3003/digimon (body:{
//     {
//         "name": "Koromon",
//         "img": "https://digimon.shadowsmith.com/img/koromon.jpg",
//         "level": "In Training"
//         },
// })
digimonRouter.post("/digimon",digimonHandlers.addDigimonHandler)


// digimonRouter.post('/digimon/:id',addDigimonHandler);

// DELETE localhost:3003/digimon/63b95e82493f54377e9d5e00
digimonRouter.delete('/digimon/:id',digimonHandlers.deleteDigimonHandler);

// UPDATE: localhost
digimonRouter.put('/digimon/:id',digimonHandlers.updateDigimonHandler);





module.exports = digimonRouter;