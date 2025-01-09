const express = require('express'); 
const router = express.Router();
const User = require("../models/User");

router.post('/createuser', async(req, res) =>{

try {
  await  User.create({
        name: "vishwajeet",
        email:"vishwa@gmail.com",
        password:"123",
        location:"mumbai"
    });


res.json({successs:true});  

    
} catch (error) {
    console.log(error);
    res.json({successs:false});
    
}

module.exports = router;

});


    