import mongoose from "mongoose";

export const dbConnect = async () => {

    // extract mongodb uri
    const MONGODB_URI = process.env.MONGODB_URI;

    // check mongodb uri already exists or not..
    if(!MONGODB_URI) {
        throw new Error('MONGODB_URI is not defined');
    }

    try{
        // connect to mongodb
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
    }
    catch(err) {
        console.log(err);
    }


    
}