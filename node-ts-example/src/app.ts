import express from "express";

import bodyParser from "body-parser";

const app = express();

const port = 3000;

import todosRoutes from "./routes/todos";

app.use(bodyParser.json());

app.use(todosRoutes);

app.listen({ port }, () => {
  console.log(`Server is running on port ${port}`);
});
