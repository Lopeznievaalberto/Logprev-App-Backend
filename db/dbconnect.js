
//dbconnect refleja las funciones que van a conectar con la base de datos
const dbconnect = () => {

    //Importo mongoose
    const mongoose = require("mongoose");

    //Seteamos strictQuery a true para suprimir el warning de strictQuery
    mongoose.set('strictQuery', true);

    //URI
    //const conn_str = process.env.URI;
    //const {conn_str}= require("../config/config");
    const conn_str = //"mongodb+srv://Alberto:Mongodb123.@cluster0.wjasvao.mongodb.net/?retryWrites=true&w=majority";

    mongoose.connect(
        conn_str,
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        },(err) => {
            if (err) {
                console.log("error connecting to the database",err);
            } else {
                console.log("mongodb database is connected");
        }});
}

module.exports = dbconnect;