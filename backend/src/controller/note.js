const getDB = require('../db/db')

const notesList = async(callback)=>{
    const conexion = getDB.getDB()
    await conexion.collection("note")
    .find({}).toArray(callback)
}

module.exports = notesList;


