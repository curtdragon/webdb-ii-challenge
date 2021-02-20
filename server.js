const express = require("express");
const CarRouter = require("./cars/CarRouter");
const server = express();

server.use(express.json());
server.use("/api/cars", CarRouter);

server.get("/", (req, res) => {
    res.send("Server Operational")
});

module.exports = server;