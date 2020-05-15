const express = require("express");

const ProjectsRouter = require("./api/schemes/projects/projects-router")
const ResourcesRouter = require("./api/schemes/resources/resources-router")
const TasksRouter = require("./api/schemes/tasks/tasks-router")

const server = express();

server.use(express.json());

server.use("/api/projects",ProjectsRouter)
server.use("/api/tasks",TasksRouter)
server.use("/api/resources",ResourcesRouter)

server.get("/",(req,res)=>{
    res.status(200).json({message:"How did you get here?"})
})



module.exports = server;