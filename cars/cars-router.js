const express = require('express');
const db = require('../data/connection.js');

const router = express.Router();

router.get('/', (req, res) => {
  db.select('*')
    .from('cars')
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      res.status(500).json({ err: "error retrieving data for cars" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db('cars')
    .where({ id })
    .first()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ message: "failed to retrieve car" });
    });
});

router.post('/', (req, res) => {
  db('cars')
    .insert(req.body, 'id')
    .then(ids => {
      db('cars')
        .where({ id: ids[0] })
        .then(addedCar => {
          res.status(201).json(addedCar);
        });
    })
    .catch(err => {
      res.status(500).json({ err: "unable to add car" });
    });
});

module.exports = router;
