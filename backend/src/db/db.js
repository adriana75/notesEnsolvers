const MongoDb = require('mongodb')
const dotenv = require('dotenv')

dotenv.config({path:'./.env'})

const stringConexion = process.env.DATABASE_URL;

const cliente = new MongoDb.MongoClient(stringConexion,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

let conexion;

conexionBD = (callback)=>{

    cliente.connect((error,db)=>{
        if(error){
            console.error("Error en la conexion a la db")
            return "Error"
        }
        conexion = db.db("notes")
        console.log("Conexión exitosa")
        return callback();
        
    })
}

getDB = () => {
    return conexion;
}

module.exports = { getDB, conexionBD }
