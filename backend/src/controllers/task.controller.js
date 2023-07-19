const statusCode = require('../utils/status-code');
const generateUUID = require('../utils/uuid');

let tasks = [];

const getAll = (req, res) => {
  return res.status(statusCode.Success).json(tasks);
};

const create = (req, res) => {
  const newTask = req.body;
  newTask.id = generateUUID();
  newTask.creationDate = new Date();
  newTask.completed = false;
  tasks.push(newTask);
  return res.status(statusCode.Success).json();
};

const update = (req, res) => {
  const { id } = req.params;
  const taskUpdated = req.body;

  const taskToUpdate = tasks.find(x => x.id === id);
  if (taskToUpdate) {
    taskToUpdate.name = taskUpdated.name;
    taskToUpdate.description = taskUpdated.description;
    taskToUpdate.completed = taskUpdated.completed;
    return res.status(statusCode.Success).json();
  } else {
    return res.status(statusCode.NotFound).json();
  }
};

const deleteTask = (req, res) => {
  const id = req.params.id;

  tasks = tasks.filter(x => x.id !== id);
  return res.status(statusCode.NoContent).json();
};

module.exports = {
  getAll,
  create,
  update,
  deleteTask,
};
