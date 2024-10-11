
//conectar a servidor local
const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/pasajes';

mongoose.connect(uri)
    .then(()=> console.log('conectado 👍'))
    .catch(() => console.log('fallo coneccion ❌'))

//--------------------------------------------------------------------------------------------------------

    //conectar al mongoose nube
const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri1 =
    "mongodb+srv://virginiacifarelli2018:9tIwI81EvyvcCkli@cluster0.waldc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    // "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
const client = new MongoClient(uri1);
async function run() {
    try {
    await client.connect();
    console.log("coneccion exitosa");
    
    // database and collection code goes here
    // find code goes here
    // iterate code goes here
    } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    }
}
run().catch(console.dir);