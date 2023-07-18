const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant.model");

//Insert restaurant to database
//http://localhost:5000/restaurant
router.post("/restaurants", (req, res)=>{
    //Create Restaurant instance
    const newRestaurant = new Restaurant({
        name: req.body.name,
        type: req.body.type,
        imageurl : req.body.imageurl
    })

    //Inseart to DB
    Restaurant.create(newRestaurant, (err, data)=>{
        if(err){
            res.status(500).send({
                message:err.message || "Some error occured while inserting the new restaurant"
            })
        }else{
            res.send({ message: "Restaurant deleted successfully." });
        }
    })
})

//Get all Restaurants
//http://localhost:5000/restaurant
router.get("/restaurants",(req,res)=>{
    Restaurant.getAll((err, data)=>{
        if(err){
            res.status(500).send({
                message:
                err.message ||
                "Some error occured while inserting the new restaurant",
            });
        }else{
            res.send(data);
        }
    })
})

//Get restaurant by Id
//http://localhost:5000/restaurant/3
router.get("/restaurants/:id",(req,res)=>{
    const restaurantId = Number.parseInt(req.params.id);
    Restaurant.getById(restaurantId, (err, data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(400).send({
                    message:"Restaurant not found  with this id"+restaurantId
            })
            }else{
                res.status(500).send({
                    message:
                    err.message ||
                    "Some error occured while inserting the new restaurant",
                });
            }
        }else{
            res.send(data)
        }
    })
});

//Update restaurant attributes
router.put("/restaurant/:id", (req,res)=>{
    const restaurantId = Number.parseInt(req.params.id);
    if(req.body.constructor === Object && Object.keys(req.body).length ===0){
        res.status(400).send({
            message: "Attributes can not be empty !"
        })
    }
    Restaurant.updateById(restaurantId, new Restaurant(req.body), (err,data)=>{
        if(err){
            if(err.kind === "not_found"){
                res.status(400).send({
                    message:"Restaurant not found  with this id" + restaurantId
                });
            }else{
                res.status(500).send({
                    message:
                    err.message ||
                    "Some error occured while inserting the new restaurant"
            });
        }
        }else{
            res.send(data);
        }
    })
})

router.delete("/restaurant/:id", (req, res)=>{
    const restaurantId =Number.parseInt(req.params.id);
    Restaurant.deleteById(restaurantId, (err, data)=>{
        if (err) {
            if (err.kind === "not_found") {
                res.status(400).send({
                    message: "Restaurant not found  with this id" + restaurantId,
                });
            }else{
                res.status(500).send({
                    message:
                    err.message ||
                    "Some error occured while inserting the new restaurant"
            });
            }
        }else{
            res.send(data);
        }
    })
})


module.exports = router;