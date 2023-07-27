const express = require('express');
const router = express.Router();
const Users = require('../model/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




router.get('/register', async (req, res)=>{
      try{
        const users = await Users.find(); 
        res.status(200).json(users);
      }catch(err){
        res.status(500).json({message: err.message});
      }
})

// User Registration
router.post("/register", async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const existingUser = await Users.findOne({ $or: [{ email }, { username: email }] });

    if (existingUser) {
      return res.status(400).json({ error: "User with this email or username already exists." });
    }
    const saltRounds = 10;
    
    const hashedPassword = await bcrypt.hash(password, saltRounds);
      const newUser = new Users({
        name,
        email,     
        password: hashedPassword,
        
      });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  
  
  // User Login
  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("Received login request:", email, password);
  
      const user = await Users.findOne({ email });
      console.log("User object:", user);
  
      if (!user) {
        console.log("User not found:", email);
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log(isPasswordValid, email);

      console.log("Received password:", password);

      if (!isPasswordValid) {  
        console.log("Invalid password for user:", email);
        return res.status(401).json({ error: "Invalid credentials" });
      }
      const token = jwt.sign({ userId: user._id }, "your-secret-key", {
        expiresIn: "1h",
      });
  
      console.log("User logged in successfully:", email);
      res.json({ token });
    } catch (err) {
      console.error("Error during login:", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }); 

  router.delete("/login/:id", async (req, res) => {
    const user = await Users.findById(req.params.id);
    try {
      if (!user) {
        return res.status(404).json({ error: "User not found." });
      }
      await Users.deleteOne({ _id: req.params.id });
  
      res.status(200).json({ error: "User removed" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
 
module.exports = router;