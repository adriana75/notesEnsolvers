const { Router, request } = require('express');
const router = Router();
//const _ = require('underscore');

const data = require('../notes.json');

//Notes
router.get('/', (req, res) => {
    res.set({
        // 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': ['*']
      })
    res.json(data);

    console.log(data);
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
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    if (title && description) {
        _.each(data, (note, i) => {
            if (note.id == id) {
                note.title = title;
                note.description = description;
            }
        });
        res.json(data);
    }
    else {
        res.status(500).json({ "error": "There was an error." });
    }
});

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