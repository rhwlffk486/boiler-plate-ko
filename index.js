const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://taehun0023:Dlxogns65143!@cluster0.2ybus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello Worldeeeeee!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))