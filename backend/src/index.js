const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('port', process.env.PORT || 8080);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(require('./routes/index'));
app.use('/notes', require('./routes/notes'))

app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
})

