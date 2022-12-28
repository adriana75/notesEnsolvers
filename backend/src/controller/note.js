const getDB = require('../db/db')
const MongoDb = require('mongodb')

const notesList = async(callback)=>{
    const conexion = getDB.getDB()
    await conexion.collection("note")
    .find({}).toArray(callback)
}

const updateNote = async(object, callback)=>{
    const conexion = getDB.getDB()
    
    const filtro = { _id: object.id }
    delete object.id;
    const operacion = {
        $set:object
    }

    await conexion.collection("note")
        .findOneAndUpdate(filtro, operacion, 
            { upsert:true, returnOriginal:true },
            callback)
}

module.exports = { notesList, updateNote };


