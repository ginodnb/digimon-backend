"use strict"

const { response } = require("express")

module.exports = (error,req,res,next) => {
    res.status(500).send({
        code:500,
        message:`server error ${error}`
    })
}