const express = require('express');
const { createTodo } = require('./types');
const { updateTodo } = require('./types');
const { Todos } = require('./db');

const app = express();
app.use(express.json());

app.get('/todos', (req, res) => {
  Todos.find({})
    .then((result) => {
      res.json({
        Todos: result,
      });
    })
    .catch((err) => {});
});

app.post('/todo', async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload) {
    res.status(411).json({
      msg: 'Incorrect Format',
    });
    return;
  }
  // Save it in database
  await Todos.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: 'Post created successfully',
  });
});

app.put('/completed', async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload) {
    res.status(411).json({
      msg: 'Incorect data',
    });
    return;
  }
  await Todos.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: 'Todo updated successfully',
  });
});
