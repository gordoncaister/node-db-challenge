const db = require("../../../data/dbConfig")

module.exports = {
    getTasks,
    createTask,
    getTasksByProjectId,
}


function getTasks() {
    return db("tasks")
}

function createTask(task){
    return db("tasks").insert(task)
}

function getTasksByProjectId(project_id){
    return db("tasks")
        .select(
            "tasks.task_description as description",
            "tasks.task_notes as notes",
            "tasks.task_status as completed"
        )
        .where("tasks.project_id", "=", project_id)
}