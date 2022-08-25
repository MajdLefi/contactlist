//require express
const express = require("express");

//require connectDB
const connectDB = require("./config/connectDB");

const contactRouter = require("./routes/contact");

//init express
const app = express();

//Middleware
app.use(express.json());

//connectDB
connectDB();

//routes
app.use("/api", contactRouter);

//create port
const port = process.env.PORT || 5000;
//launch the server
app.listen(port, (error) =>
  error ? console.log(error) : console.log(`Server is running on port ${port}`)
);
