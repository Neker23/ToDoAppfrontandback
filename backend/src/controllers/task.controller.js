const statusCode = require('../utils/status-code');
const repositories = require('../repositories/task.repository');

const getAll = (req, res) => {
  repositories.getAll().then(data => res.status(statusCode.Success).json(data));
};

const create = (req, res) => {
  const description = req.body.description;

  repositories.create({
    description: description,
  });

  return res.status(statusCode.Success).json();
};

const update = (req, res) => {
  const { id } = req.params;
  const taskUpdated = req.body;

  repositories
    .update(id, taskUpdated)
    .then(() => res.status(statusCode.Success).json());
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  repositories
    .deleteTask(id)
    .then(() => res.status(statusCode.NoContent).json());
};

module.exports = {
  getAll,
  create,
  update,
  deleteTask,
};
