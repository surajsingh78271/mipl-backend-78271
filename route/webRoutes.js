// import  express  from "express";
const express = require('express')

const maleController = require('../controllers/maleController.js')
const incomeController = require('../controllers/maleController.js')
const carController = require('../controllers/carController.js')
const citiController = require('../controllers/citiController.js')
const homeController = require('../controllers/homeController.js')
const quoteController = require('../controllers/quoteController.js')


// import maleController from "../controllers/maleController.js";
// import incomeController from "../controllers/incomeController.js";
// import carController from "../controllers/carController.js";
// import citiController from "../controllers/citiController.js";
// import homeController from "../controllers/homeController.js";
// import quoteController from "../controllers/quoteController.js";

const router = express.Router();

router.get("/",homeController)
router.get("/male",maleController)

router.get("/income",incomeController)

router.get("/quote",quoteController)

router.get("/car",carController)

router.get("/city",citiController)

module.exports =  router;