import { questions } from "./questions.js";
import express from 'express'

const app = express();
const port = 5000;

// Routes
app.get('/api/questions',(req, resp) => {
  resp.json(questions)
})

const server = app.listen(port, () => console.log(`Server started on port ${port}`))

// server.close();