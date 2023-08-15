import mongoose from "mongoose";
import colors from "colors";

const MONGO_URL = 'mongodb+srv://aknandan:aknandan@cluster0.cxhneoc.mongodb.net/';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URL)
        console.log(`Connected to DB database ${conn.connection.host}`.bgGreen.white)
    } catch (error) {
        console.log(`Error in DB ${error}`.bgRed.white)
    }
}

export default connectDB