const express = require('express');
const bodyParser = require('body-parser');

const data = {
  todos: [
    { "text": "first todo", "complete": false },
    { "text": "second todo", "complete": false }
  ],
};

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,HEAD,OPTIONS');
  next();
});
app.use(bodyParser.json());
app.use((req, res, next) => {
  const delay = 400;
  setTimeout(() => {
    next();
  }, delay);
});

app.get('/todos/?(:id)?', (req, res) => {
  if (req.params.id) {
    const todoIndex = parseInt(req.params.id);
    if (todoIndex < 0 || data.todos.length - 1 < todoIndex) {
      return res.status(404).json({});
    }
    return res.status(200).json(data.todos[todoIndex]);
  }
  res.status(200).json(data.todos);
});

app.post('/todos/?', (req, res) => {
  const id = data.todos.length;
  const todo = Object.assign({}, req.body);
  data.todos.push(todo);
  res.status(201).json(data.todos);
});

app.delete('/todos/:id', (req, res) => {
  const todoIndex = parseInt(req.params.id);
  if (todoIndex < 0 || data.todos.length - 1 < todoIndex) {
    return res.status(404).json({});
  }

  data.todos = [
    ...data.todos.slice(0, todoIndex),
    ...data.todos.slice(todoIndex + 1)
  ];
  res.status(200).json(data.todos);
});

app.put('/todos/:id', (req, res) => {
  const todoIndex = parseInt(req.params.id);
  if (todoIndex < 0 || data.todos.length - 1 < todoIndex) {
    return res.status(404).json({});
  }

  const todo = Object.assign({}, data.todos[todoIndex], req.body);
  data.todos = [
    ...data.todos.slice(0, todoIndex),
    todo,
    ...data.todos.slice(todoIndex + 1)
  ];
  res.status(200).json(data.todos);
});

const server = app.listen(8081, () => {
  console.log(`Server started: ${server.address().port}`);
});

