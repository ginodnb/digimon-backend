"use strict"

const { response } = require("express")

module.exports = (req,res,next) => {
    res.status(404).json({
        code:404,
        message:'Route not found'
    })
}