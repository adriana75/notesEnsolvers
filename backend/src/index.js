const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
    res.send("NodeJs + Express + MongoDb");
  });

//enable cors
app.use(cors())

// app.use(require('./routes/index'));
app.use('/notes', require('./routes/notes'))

//Permite que sea invocado desde otro sitio web
// app.use(cors({
//     origin: '*',
//     exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar', 'Access-Control-Allow-Origin'],
// }))

// app.options('*', cors())

// app.listen(app.get('port'), () => {
//     console.log(`Server listening on port ${app.get('port')}`);
// })
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

