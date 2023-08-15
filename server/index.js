import express from "express";
import cors from 'cors';
import morgan from "morgan";
import colors from 'colors';
import connectDB from "./config/db.js";

// import routes
// import userRoutes from './routes/userRoutes.js';


// reset objects
const app = express();

// Connect to DataBase
connectDB();

// middleman's
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
// app.use('api/vi/user', userRoutes);


// PORT
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgMagenta.white);
})
