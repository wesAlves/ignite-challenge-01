const express = require("express");
const cors = require("cors");

const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find((user) => users.username === username);

  if (user) {
    return response.status(400).json({ error: "User Already Exists" });
  }

  request.user = user;

  return next();
}

app.post("/users", checksExistsUserAccount, (request, response) => {
  const { name, username } = request.body;

  const createUser = { id: uuidv4(), name, username, todos: [] };

  users.push(createUser);

  return response.status(201).json(createUser);
});

app.get("/todos", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.post("/todos", checksExistsUserAccount, (request, response) => {
  /* const { title, deadline } = request.body;
  const { user } = request;

  const createTodo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date(),
  };

  user.todos.push(createTodo);

  return response.status(200).json(createTodo);*/
});

app.put("/todos/:id", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch("/todos/:id/done", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete("/todos/:id", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;
