const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require('path');

router.post("/api/workouts/:id", ({ body }, res) => {
  Workout.create(body)
    .then(dbActivity => {
      res.json(dbActivity);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body }, res) => {
  Workout.create(body)
    .then(dbActivity => {
      res.json(dbActivity);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbActivity => {
      res.json(dbActivity);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/exercise", function(req,res){
    res.status(202).sendFile(path.join(__dirname + '/../public/exercise.html'));
});

router.get("/stats", function(req,res){
    res.status(202).sendFile(path.join(__dirname + '/../public/stats.html'));
});

module.exports = router;