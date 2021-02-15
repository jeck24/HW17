const router = require("express").Router();
const Activity = require("../models/activity.js");

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

module.exports = router;