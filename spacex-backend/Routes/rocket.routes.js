const express = require("express");
const rocketRoute = express.Router();
rocketRoute.get("/", async (req, res) => {
  try {
    fetch("https://api.spacexdata.com/v3/capsules")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        res.send({ data: data });
      });
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});

module.exports = rocketRoute;
