const express = require("express");
const router = express.Router();
const Restaurant = require("../controllers/restaurant.controller");

//Creat a new restaurant
//http://localhost:5000/restaurants
router.post("/restaurant",async (req, res)=>{
    try{
        const newRestaurant = req.body;
        const createRestaurant = await Restaurant.createRestaurant(newRestaurant);
        res.status(201).json(createRestaurant);
    }catch (err) {
        res.status(500).json({error:"Failed to create restaurant"});
    }
});

//Get all restaurants
router.get("/restaurants", async(req, res)=>{
    try {
        const restaurants = await Restaurant.getAll();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({error:"Failed to get all restaurants"});
    }
});

//Get Restaurant by ID
router.get("/restaurant/:id", async(req, res)=>{
    try {
        const restaurantId = req.params.id;
        const restaurant = Restaurant.getById(restaurantId);
        res.json(restaurant)
    } catch (error) {
        if (error.kind === "not_found") {
            res.status(400).json({ error: "Restaurant not found" });
        } else {
            res.status(500).json({error:"Failed to get restaurant by Id"});
        }
    }
});

//Update a restaurant data
router.put("/restaurants/:id", async (req, res)=>{
    try {
        const restaurantId = req.params.id;
        const restaurantData = req.body;
        const updateRestaurant = await Restaurant.updateById(
            restaurantId, 
            restaurantData);
        res.status(200).json(updateRestaurant);
    } catch (error) {
        if(error.kind === "not_found") {
            res.status(400).json({ error: "Restaurant not found" });
        } else {
            res.status(500).json({ error:"Failed to update restaurant data" });
        }
    }
});

//Delete a restaurant
router.delete("/restaurant/:id", async (req, res)=>{
    try {
        const restaurantId = req.params.id;
        const isDeleted = await Restaurant.removeById(restaurantId);
        if (isDeleted) {
            res
                .status(200)
                .json({
                    message: "Restaurant id " + restaurantId + " is deleted",
                    isDeleted: isDeleted,
                });
        }
    } catch (error) {
        if (error.kind === "not_found") {
            res.status(400).json({ error: "Restaurant not found" });
        } else {
            res.status(500).json({ error: "Failed to update restaurant data" });
        }
    }
});
module.exports = router;