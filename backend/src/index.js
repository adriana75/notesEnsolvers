const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const conexionBD = require("./db/db")

const port = process.env.PORT_BACKEND || 8080;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("NodeJs + Express + MongoDb");
  });

app.use(cors())

// app.use(require('./routes/index'));
app.use('/notes', require('./routes/notes'))

const main = () => {
  return app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

conexionBD.conexionBD(main)
