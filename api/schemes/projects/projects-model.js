const db = require("../../../data/dbConfig")

module.exports = {
    getProjects,
    getProjectsByID,
    createProject,
}


function getProjects() {
    return db("projects")
}

function createProject(project){
    return db("projects").insert(project)
}

function getProjectsByID(project_id) {
    return db("projects")
}