const db = require("../data/connection.js");

module.exports = {
    add,
    addTask,
    update,
    find,
    findById,
    findTasks,
    remove,

}

function find() {
    return db("projects");
}

function add(project) {
    return db("projects").insert(project, "id")
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
        .select("tasks.id", "projects.project_name", "tasks.task_number", "tasks.instructions")
        .where("project_id", id)
}