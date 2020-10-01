const express = require('express');
const router = express.Router();
const restaurant = require('../modules/restaurant');
const User = require("../modules/user")
const cuisines = require('../modules/cuisines');
const fooditems = require('../modules/fooditems');
const customization = require('../modules/customization');
const jwt = require("jsonwebtoken");
const verify = require("../verification");

//****************************************************************************************************** */

router.get("/res/:id",verify , async (req, res) => {
    var date = new Date();
    var hour = date.getHours();

if(hour>10 && hour<22){
    try {
        res.json({
            list: await restaurant.find({ _id: req.params.id }).populate({ path: 'cuisines' , populate:{ path : "fooditems" , populate:{path:"customization"}}   })
        })
    } catch (error) { console.log(error); }
}
else{
    res.send("Sorry restaurant is closed ")
}
});


//*************************************************************************************************** */

router.post("/signup",async (req,res)=>
{
    if(await User.findOne({email: req.body.email, password:req.body.password}))
    {
        res.send("user already exist");
    }
    else{
    var uservalue = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        
      };
      console.log(uservalue);
      User.create(uservalue, (error, User)=> {
          if(error)
          {
              console.error(error);
          }else
          {
            
        res.send("data stored");
          }
       });
      
    }
    
});


//************************************************************************************************ */


router.post("/login", async(req,res)=>
{
    var ss = {
        email:req.body.email,
        password:req.body.password,   
      };
if(await User.findOne({email: req.body.email, password:req.body.password}))
{
const token = jwt.sign(ss ,"Securitykey")    

console.log(token); 
res.json({
    "token": token
});

}
else
{
    res.send("WRONG EMAIL OR PASSWORD");
}
});


router.get("/s" ,verify, (req,res)=>
{
    res.send("You have succuessfully authenticated");
});





//********************************************************************************************************* */
// To create new Database In mongodb

router.post("/res", (req, res) => {
    var values = {
        name: req.body.name,
        cuisines: req.body.cuisines,
        

    };
    console.log(values);
    restaurant.create(values, (error, restaurant) => {
        if (error) {
            console.error(error);
        } else {

            res.send("data stored");
        }
    });
});
    
router.post("/cuisines", (req, res) => {
    var values = {
        name: req.body.name,
        fooditems: req.body.fooditems,
        

    };
    console.log(values);
    cuisines.create(values, (error, cuisines) => {
        if (error) {
            console.error(error);
        } else {

            res.send("data stored");
        }
    });
});

router.post("/fooditem", (req, res) => {
    var values = {
        name: req.body.name,
        customization: req.body.customization,
        

    };
    console.log(values);
    fooditems.create(values, (error, fooditems) => {
        if (error) {
            console.error(error);
        } else {

            res.send("data stored");
        }
    });
});

router.post("/customization", (req, res) => {
    var values = {
        name: req.body.name,
        food: req.body.food,
        

    };
    console.log(values);
    customization.create(values, (error, customization) => {
        if (error) {
            console.error(error);
        } else {

            res.send("data stored");
        }
    });
});


    

module.exports = router;
