--CREATE DATABASE todo;

CREATE TABLE task (
    task_id bigserial not null primary key,
    description VARCHAR(500),
    completed BOOL NOT NULL,
    updated_date DATE,
    creation_date DATE NOT NULL
);

INSERT INTO task 
(description, completed, creation_date)
VALUES
('Caminar', false, '1995-10-27');

--SELECT task_id, description, completed, updated_date, creation_date
--FROM task
--WHERE description = 'Comer';

--UPDATE task set completed = true
--where task_id = 1

--DELETE FROM task WHERE task_id = 2