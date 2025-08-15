import mongoose from 'mongoose';

export const dbConnection = () => {
    console.log("Connecting to URI:", process.env.MONGO_URI);

    mongoose
       .connect(process.env.MONGO_URI)
       .then(() => {
           console.log("connection estalished successfully");
       })
       .catch((err) => {
           console.log(`error while connecting to database ${err}`);
       })
}