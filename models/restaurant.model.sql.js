const sql = require("./db.sql");
//Constructor
const Restaurant = function (restaurant){
    //Attributes
    this.name = restaurant.name;
    this.type = restaurant.type;
    this.imageurl = restaurant.imageurl;
};

//Methods
Restaurant.create = (newRestaurant, result) => {
    //INSERT INTO restaurants SET name, type, imageurl VALUES("KFC", "Fastfood", "url")
    sql.query("INSERT INTO restaurants SET ?", newRestaurant, (err, res)=>{
        //มี error เกิดขึ้น
        if(err){
            console.log("err", err);
            result(err, null);
            return;
        }
        //ไม่มี error
        console.log("new restaurant created");
        result(null,{id:res.id, ...newRestaurant});
    });
}

//Get all restaurant
Restaurant.getAll = (result) =>{
    //SELECT * FROM restaurants
    sql.query("SELECT * FROM restaurants", (err, res) => {
        //มี error เกิดขึ้น
        if (err) {
            console.log("err", err);
            result(err, null);
            return;
        }
        //ไม่มี error
        console.log("get all restaurants");
        result(null, res);
    });
};

//Get Restaurant by Id
Restaurant.getById =(restaurantId, result) =>{
    //SELECT * From restaurant WHERE id = restaurantId
    sql.query(
        `SELECT * From restaurants WHERE id = ${restaurantId}`,
        (err, res) => {
        //มี error เกิดขึ้น
        if (err) {
            console.log("err", err);
            result(err,null);
            return;
        }
        //found 1 row

        if (res.lenght) {
            console.log("get restaurant by id");
            result(null, res[0]);
            return;
        }
        //not found
        result({ kind: "not_found" }, null);
        }
    )
};

//Update Restaurant
Restaurant.updateById = (id, restaurant, result) =>{
    //UPDATE restaurant SET name ="name", type="type", imageurl ="imageurl" WHERE id = "id"
    sql.query(
        "UPDATE restaurant SET name = ?, type= ?, imageurl = ? WHERE id = ?",
    [restaurant.name, restaurant.type, restaurant.imageurl, id ],
    (err, res) => {
        if(err){
            result(err, null)
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
        //Restaurant update
        result(null, { id: id, ...restaurant });
    }
    );
};

//Delete a restaurant
Restaurant.deleteById= (restaurantId, result)=>{
    //DELETE FROM restaurants WHERE id = 6
    sql.query("DELETE FROM restaurants WHERE id = ?", id, (err,res)=>{
        if(err){
            result(err, null)
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }
        //Restaurant deleted
        console.log("Restaurant id " + restaurantId +" is deleted");
        result(null,res);
    });
}

module.exports = Restaurant; 
