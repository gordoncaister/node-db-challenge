const db = require("../../../data/dbConfig")

module.exports = {
    getTasks,
    createTask,
}


function getTasks() {
    return db("tasks")
}

function createTask(task){
    return db("tasks").insert(task)
}