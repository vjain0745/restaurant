const mongoose =require("mongoose");

const URI = "mongodb+srv://restaurant:Abcdef@cluster0.lvbau.mongodb.net/details?retryWrites=true&w=majority";

const connectdb= async()=>{
    await mongoose.connect(URI, { useUnifiedTopology: true , useNewUrlParser: true, useFindAndModify: false });

 console.log("db connected");
};

module.exports = connectdb;



