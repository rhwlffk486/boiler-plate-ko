const express = require('express')
const app = express()
const port = 5000
// express 4.16 버전 이상부터는 bodyparser을 지원하기 때문에 express.urlencoded 로 사용해야한다.
// const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const { User } = require('./models/User');

const config = require('./config/key');
const { mongoURI } = require('./config/dev');

// 데이터를 분석해서 가져온다.
app.use(express.urlencoded({extended: true}))

// json 타입으로 된 데이터를 분석해서 가져온다
app.use(express.json());

mongoose.connect(config, mongoURI {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World'))

app.post('/register', (req, res) => {
    // 회원 가입 할때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어준다.

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))