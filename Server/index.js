import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
import router from "./routes/route.js";
const port = 5000;
import bodyParser from "body-parser";
import Connection from "./database/db.js";
/* const nodemailer = require("nodemailer"); */
import nodemailer from "nodemailer"
/* const sendMail = require("./controllers/sendMail"); */
dotenv.config();
app.use(cors());
/* app.use(express.json({limit:"25mb"}))
app.use(express.urlencoded({limit:"25mb"}))
 */
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/",router);

/* const start = async () => {
  try {
    app.listen(5000, () => {
      console.log(" i am live on port no. 5000");
    });
  } catch (error) {
    console.log(error.message);
  }
}; */
/* start(); */
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


Connection(USERNAME, PASSWORD);
app.listen(port, console.log("listening to port 5000"));
