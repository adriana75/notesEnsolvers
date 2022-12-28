const { Router, request } = require('express');
const router = Router();
const _ = require('underscore');
const { notesList, updateNote } = require('../controller/note');

const callbackGenerico = (res) =>{
    return (error,resultado) =>{
        if(error){
            console.log(error)
            res.status(500).send("Error manipulando los datos")
        }else{
            res.json(resultado)
        }
    }
}

//Notes
router.get('/', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': ['*']
      })

    notesList(callbackGenerico(res))
});

/*
router.post('/', (req, res) => {
    const {title, description } = req.body;
    if (title && description) {
        const id = data.length + 1;
        const newNote = { ...req.body, id };
        data.push(newNote);
        res.json(data);
    }
    else {
        res.status(500).json({ "error": "There was an error." });
    }
});*/

router.put('/:id', async (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': ['*']
      })
      
    updateNote(req.body, callbackGenerico(res))

});

/*
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(data, (note, i) => {
        if (note.id == id) {
            data.splice(i, 1);
        }
    });
    res.send(data);
})*/

module.exports = router;