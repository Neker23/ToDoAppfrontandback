const taskController = require('../controllers/task.controller');

const router = require('express').Router();

router.get('/tasks', (req, res) => {
  taskController.getAll(req, res);
});
router.post('/tasks', (req, res) => {
  taskController.create(req, res);
});
router.put('/tasks/:id', (req, res) => {
  taskController.update(req, res);
});

router.delete('/tasks/:id', (req, res) => {
  taskController.deleteTask(req, res);
});

module.exports = router;
