const Restaurant = require("../models/restaurant.model")

//Insert Data
Restaurant.createRestaurant = async(newRestaurant)=>{
    try {
        const createRestaurant = await Restaurant.create(newRestaurant);
        console.log("created restaurant:", createRestaurant.toJSON());
        return createRestaurant.toJSON();
    } catch (error) {
        console.log("err", err);
        throw err;
    }
}
//get all restaurants
Restaurant.getAll = async () => {
    try {
        const restaurants = await Restaurant.findAll();
        //console.log(restaurants);
        return restaurants.maps(restaurant => restaurant.toJSON());
    } catch (error) {
        console.error("error:", error);
        throw error;
    }
};
//Get Restaurant By ID
Restaurant.getById = async (restaurantId) =>{
    try {
        //const restaurant = await Restaurant.findOne({ where: { id: restaurantId}});
        const restaurant = await Restaurant.findByPk(restaurantId);
        //console.log("Data ==>",restaurant);
        if(restaurant){
            // console.log(restaurant);
            return restaurant.toJSON();
        }else{
            throw {kind:"not_found"}
        }
    } catch (error) {
        console.log("error", error);
        throw error;
    }
};
//Update a restaurant 
Restaurant.updateById = async (id, restaurantData) => {
    try {
        const [rowUpdate] = await Restaurant.update(restaurantData,{
            where: { id },
        });
        if(rowUpdate === 0){
            throw { kind: "not_found" };
        }
        return {id:id, ...restaurantData};
    } catch (error) {
        console.log("error:", error);
        throw error;
    }
};

Restaurant.removeById = async (id) =>{
    try {
        const rowDeleted = await Restaurant.destroy({ where: { id } });
        if(rowDeleted === 0 ){
            throw {kind: "not_found" };
        }
        return true
    } catch (error) {
        console.log("error", error);
        throw error;
    }
};
module.exports = Restaurant;