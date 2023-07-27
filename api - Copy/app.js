const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express(); 
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const URL = "mongodb://localhost/contacts";
mongoose.connect(URL, { useNewUrlParser: true });
const PORT = process.env.PORT || 3000;


const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

app.use(express.json());

const contactRouter = require("./routes/contactsRoute");
app.use("/contacts", contactRouter);

const userRouter = require("./routes/userRoute");
app.use("/user", userRouter);

 
