import mongoose from "mongoose";

const connectToMongoDB= async()=>{
    try{
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to mongoDB");
    }
    catch(error){
        console.log("Error coonecting to MongoDB : ",error.message);
    }
};

export default connectToMongoDB;