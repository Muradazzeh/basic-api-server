"use strict"
const express = require("express");
const { Hero }  = require("../models/index.js");


const HeroRouter = express.Router();

HeroRouter.get("/Hero", getHeros);
HeroRouter.get("/Hero/:id", getOneHero);
HeroRouter.post("/Hero", createHero);
HeroRouter.put("/Hero/:id", updateHero);
HeroRouter.delete("/Hero/:id", deleteHero);

async function getHeros (req,res){
    let allHeros= await Hero.findAll();
    res.status(200).json(allHeros)
}

async function getOneHero (req,res){
    let heroId=parseInt(req.params.id)
    let heroo = await Hero.findOne({ where: { id:heroId } });
    res.status(200).json(heroo);
}
async function createHero (req,res){
    let newHero=req.body;
    let heroo=await Hero.create(newHero)
    res.status(201).json(heroo)
}
async function updateHero (req,res){
    let heroId=parseInt(req.params.id)
    let updateHero=req.body;
    let foundHero= await Hero.findOne({where:{id:heroId}})
    if(foundHero){
    let updatedHero=foundHero.update(updateHero)
    res.status(201).json(updatedHero)
}else {
    res.status(404).send("There is no superHero with this id ")
}

}
async function deleteHero (req,res){
    let heroId=parseInt(req.params.id)
    let foundHero= await Hero.findOne({where:{id:heroId}})
    if(foundHero){
        let deletedHero= await Hero.destroy({where : {id:heroId}})
        res.status(204).json(deletedHero)
}else {
    res.status(404).send("There is no SuperHero with this id it is NULL  ")
}

}



module.exports = HeroRouter;