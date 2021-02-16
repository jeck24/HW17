const router = require("express").Router();
const Activity = require("../models/activity.js");
const path = require('path');

router.post("/api/activities/:id", ({ body }, res) => {
  Activity.create(body)
    .then(dbActivity => {
      res.json(dbActivity);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/activities/:id", ({ body }, res) => {
  Activity.create(body)
    .then(dbActivity => {
      res.json(dbActivity);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/activities", (req, res) => {
  Activity.find({})
    .then(dbActivity => {
      res.json(dbActivity);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/exercise", function(req,res){
    res.status(202).sendFile(path.join(__dirname + './public/exercise.html'));
});

router.get("/stats", function(req,res){
    res.status(202).sendFile(path.join(__dirname + './public/stats.html'));
});

module.exports = router;