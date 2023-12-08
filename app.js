const express = require('express');
const app = express();
const port = 3000;

const UserRouter = require('./router')

app.use(express.json())

app.use('/', UserRouter)

app.listen(port,() => {
    console.log('server runing this at http://localhost:3000');
})

