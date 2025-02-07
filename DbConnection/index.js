import express from "express";
import { MONGODB_URI } from "./constants.js";
import mongoose from "mongoose";
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
    console.log("Response sent");
}
);
mongoose.connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});