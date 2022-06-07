`use strict`
require('dotenv').config();
const express=require("express")
const app = express();
const notFoundHandler=require("./errorHandler/404")
const serverErrorHandler=require("./errorHandler/500")



const CarRouter = require("./routes/Cars.routes");
const HeroRouter = require("./routes/Heros.route");

app.use(express.json());


app.use(CarRouter);
app.use(HeroRouter);


app.use("*", notFoundHandler)
app.use(serverErrorHandler)


function start (port){
    app.listen(port, ()=>{
        console.log(`Somthing magical happens on port : ${port}`)
    })
}
module.exports=({
    start:start,
    app:app,
})