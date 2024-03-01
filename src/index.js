
import express from 'express'
import cors from 'cors'

const app = express();

app.use(express.json()) 
app.use(cors()) // cho phép tất cả
app.use(express.static(".")) // định vị lại đường load tài nguyên

app.listen(8080)


import rootRoute from './routes/rootRoute.js';
app.use(rootRoute)

// ORM: Object Relational mapping
// seque

