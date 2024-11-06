import express from "express";
// import { postRoutes } from "./routes/post.js";
import mongoose from "mongoose";
import express from "express";
import * as dotenv from 'dotenv'
dotenv.config()

const app = express ()
const PORT = 8080;

app.use(express.json())
app.use('/api/post', postRoutes)

mongoose.connect("Aca tenes que colocar tu key de mongoose")

app.listen(PORT, () =>{
console.log(`Server listen on http://localhost:${PORT}/api/post`)
})