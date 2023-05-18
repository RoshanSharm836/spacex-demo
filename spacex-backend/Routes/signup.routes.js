const express = require("express");
const signup = require("../model/signup.schema");

const signuproutes = express.Router();
signuproutes.post("/auth", async (req, res) => {
  try {
    const data = await signup.findOne({ email: req.body.email });

    if (data) {
      console.log("already account created");
      return res.status(409).send({ message: "already account created" });
    } else {
      const data = await signup.create(req.body);
      return res.status(200).send(data);
    }
  } catch (error) {
    res.status(500).send({ data: error.message });
  }
});

module.exports = signuproutes;
