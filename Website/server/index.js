// Import Express Library
const express = require("express");

// Import Mongoose Library
const mongoose = require("mongoose");

// Initiate App Variable by Assigning Express Library to it
const app = express();

// Import CORS library
const cors = require("cors");

// Import Schema Model
const RunModel = require("./models/Run");

// 
app.use(express.json());
app.use(cors());

// Connect to Database
mongoose.connect("mongodb+srv://admin101:ToiOhomai123@level6assignment3.kdtb8.mongodb.net/PMPDistributions?retryWrites=true&w=majority", { useNewUrlParser: true });

// Perform Get Command
app.get("/read", async (req, res) => {
    // Find All Data in Database
    RunModel.find({}, (error, result) => {
        // Cancel Function if an Error Occurs
        if (error) {
            res.send(error);
        }

        //Send Result
        res.send(result);
    });
});

// Run on Server Startup (Similar to Main in a Console App)
app.listen(3001, () => {
    console.log("Server running on port 3001.");
});
