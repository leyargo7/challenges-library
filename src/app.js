import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express()


import router from "./routes/routes.js";

//settings
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views'));


//routes
app.use('/', router)

//static files
app.use(express.static(path.join(__dirname, 'public')))


export default app