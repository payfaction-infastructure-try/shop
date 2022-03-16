"use strict";

const express = require("express");
require("dotenv").config();

// Constants
const PORT = 80;
const HOST = "0.0.0.0";
const TEXT = process.env.TEXT || "Hello World";

// App
const app = express();
app.get("/", (req, res) => {
  res.send(TEXT);
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);
