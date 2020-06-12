const db = require("../data/connection.js");

module.exports = {
    add,
    addTask,
    update,
    findProjects,
    findById,
    findTasks,
    remove,

    findResources,
    addResource,

}

function findProjects() {
    return db("projects");
}

function findResources() {
    return db("resources");
}

function add(project) {
    return db("projects").insert(project, "id")
}

function addResource(resource) {
    return db("resources").insert(resource, "id")
}

function addTask(task, project_id) {
    return db("tasks")
        .insert(task)
        .where(project_id, id)
}

function update(changes, id) {
    return db("projects")
        .where({id})
        .update(changes, "id")
        .then(() => {
            return findById(id)
        });
}

function findById(id) {
    return db("projects")
        .where({id})
        .first()
}

function remove(id) {
    return db("projects")
        .where({id})
        .del()
}

function findTasks(id) {
    return db("tasks")
        .join("projects", "projects.id", "tasks.project_id")
        .join("resources", "resources.id", "tasks.resource_id")
        .select("tasks.id", "projects.project_name", "tasks.task_number", "tasks.task_name", "resources.resource_name")
        .where("project_id", id)
}