"use strict"
const express = require("express");
const { Car }  = require("../models/index.js");


const CarRouter = express.Router();
//add routes
CarRouter.get("/", Home);
CarRouter.get("/Car", getCars);
CarRouter.get("/Car/:id", getOneCar);
CarRouter.post("/Car", createCar);
CarRouter.put("/Car/:id", updateCar);
CarRouter.delete("/Car/:id", deleteCar);

 function Home (req,res){
    res.status(200).send("This is the home page , you can find magical things happens here if you chang the routs to /Car , you will find different type of cars you can do some modefication on them")
}

async function getCars (req,res){
let CarResult=await Car.findAll();
res.status(200).json(CarResult)
}
async function getOneCar (req,res){
    let carId=parseInt(req.params.id)
    let Care = await Car.findOne({ where: { id:carId } });
    res.status(200).json(Care);
}
async function createCar (req,res){
    let newCar=req.body;
    let Cars=await Car.create(newCar)
    res.status(201).json(Cars)
}
async function updateCar (req,res){
    let carId=parseInt(req.params.id)
    let updateCar=req.body;
    let foundCar= await Car.findOne({where:{id:carId}})
    if(foundCar){
    let updatedCAr=foundCar.update(updateCar)
    res.status(201).json(updatedCAr)
}else {
    res.status(404).send("There is no car with this id ")
}

}
async function deleteCar (req,res){
    let carId=parseInt(req.params.id)
    let foundCar= await Car.findOne({where:{id:carId}})
    if(foundCar){
        let deletedCar= await Car.destroy({where : {id:carId}})
        res.status(204).json(deletedCar)
}else {
    res.status(404).send("There is no car with this id NULL  ")
}
  
}
module.exports = CarRouter;