import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true})); //limit the size of img
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})); 
app.use(cors());


main().catch(err => console.log(err));

async function main() {
    const CONNECTION_URL = 'mongodb+srv://admin-001:Jmjusmin44@inventory.y3lif1w.mongodb.net/?retryWrites=true&w=majority'
    await mongoose.connect(CONNECTION_URL);
    //set up a connection to MongoDB
    const PORT = process.env.PORT || 5000;

    mongoose.connect(CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=> app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
        .catch((error)=> console.log(error.message));
}