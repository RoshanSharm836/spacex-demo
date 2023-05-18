const express = require("express");
const connection = require("./config/db");
const cors = require("cors");
const loginroutes = require("./Routes/login.routes");
const signuproutes = require("./Routes/signup.routes");
const rocketRoute = require("./Routes/rocket.routes");
const PORT = process.env.PORT || 3059;
const app = express();

app.use(cors());
app.use(express.json()); //very important
app.use(express.urlencoded({ extended: true })); //very important

app.use("/api", rocketRoute);
app.use("/api/login", loginroutes);
app.use("/api/register", signuproutes);

app.listen(PORT, () => {
  connection();
  console.log("server started", PORT);
});
