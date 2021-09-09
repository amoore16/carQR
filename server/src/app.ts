// const express = require('express')
import express from "express";
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "../../client/", "build")));

app.set("port", process.env.PORT || 8080);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from the Back-end, it's fun here" });
});

export default app;
