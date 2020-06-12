const express = require('express');

const ProjectsRouter = require('./projects/projects-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectsRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up up and away" });
});

module.exports = server;