// Stationary List Management Backend Server
// This file sets up the Express server for the Stationary List Management application.
// It includes middleware for parsing JSON and URL-encoded data, and sets up routes for the application.

//importing express module
import dotenv from "dotenv";
import express from "express";
import route from "./routes/itemsRoutes.js";
import connectDB from "./DB/connectDB.js";
import cors from "cors";
const app = express();

//to use .env files values
dotenv.config();
//middleware to parse JSON data to access object from FE payload
app.use(express.json());

//use cros to interlink the FE and BE
app.use(cors());

// using router from different file and config here
app.use("/api/items", route);

//start the server
//define the port number
const PORT = process.env.PORT;

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  // Call the connectDB function to establish a connection to MongoDB
});
