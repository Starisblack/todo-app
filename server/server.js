require("dotenv").config();
const express = require ("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 8080;
const todoRouter = require("./route/todoRoute")


const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI, () => {
    console.log("Connected to MongoDB")
})




app.use(express.json());
app.use(cors());

app.use("/todo", todoRouter);



app.listen(process.env.PORT || 8080, ()=> {
    console.log("app is running at port: " + PORT);
})