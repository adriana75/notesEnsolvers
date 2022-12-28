const { Router, request } = require('express');
const router = Router();
const _ = require('underscore');
const { notesList, updateNote, createNote, deleteNote } = require('../controller/note');

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

router.post('/', (req, res) => {
    console.log(req.body)
    const {title, fecha, description, archivada} = req.body;
    res.set({
        'Access-Control-Allow-Origin': ['*']
      })
      
    createNote(req.body, callbackGenerico(res))
});

router.put('/:id', async (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': ['*']
      })
      
    updateNote(req.body, callbackGenerico(res))

});

router.delete('/:id', async (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': ['*']
      })
      
    deleteNote(req.params.id, callbackGenerico(res))
});

module.exports = router;