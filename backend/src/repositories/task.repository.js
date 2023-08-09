const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todo',
  password: '123456',
  port: 5432,
});

const getAll = () => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT task_id, description, completed, updated_date, creation_date FROM task',
      (error, results) => {
        resolve(results.rows);
      }
    );
  });
};

const create = data => {
  return new Promise((resolve, reject) => {
    const date = new Date().toISOString().split('T')[0];
    pool.query(
      `INSERT INTO task (description, completed, creation_date) VALUES ('${data.description}', false, '${date}')`,
      (error, results) => {
        resolve(results);
      }
    );
  });
};

const update = (id, data) => {
  return new Promise((resolve, reject) => {
    const date = new Date().toISOString().split('T')[0];
    pool.query(
      `UPDATE task set description = '${data.description}', completed = ${data.completed}, updated_date = '${date}' WHERE task_id = ${id}`,
      (error, results) => {
        resolve(results);
      }
    );
  });
};

const deleteTask = id => {
  return new Promise((resolve, reject) => {
    pool.query(`DELETE FROM task WHERE task_id = ${id}`, (error, results) => {
      resolve(results);
    });
  });
};

module.exports = {
  getAll,
  create,
  update,
  deleteTask,
};
