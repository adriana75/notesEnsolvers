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

const createNote = async(object, callback)=>{
    const conexion = getDB.getDB()
    object._id = Number(object.id)
    delete object.id
    await conexion.collection("note")
        .insertOne(object, callback)
}

const deleteNote = async(id, callback)=>{
    const conexion = getDB.getDB()
    console.log(1111, id)
    const filtro = { _id: parseInt(id) }

    await conexion.collection("note")
        .deleteOne(filtro, callback)
}

module.exports = { notesList, updateNote, createNote, deleteNote };


