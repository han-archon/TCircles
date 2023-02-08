const express = require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');

const circlesRouter = require('./app/routes/circles_route');



const app = express();
const port = 3000;

//request 분석하고 routes에 엑세스 해야하는 req.body 개체를 만들기 위해 사용
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


app.get('/', function (req, res) {
    res.send('Hello World! Circles Express Server');
});

//클라이언트에서 HTTP 요청 메소드 중 GET 를 이용해서 'host:port' 로 요청을 보내면 실행되는 라우트
//app.listen() 함수 사용해서 서버 실행
//클라이언트는 'host:port' 로 노드 서버에 요청을 보낼 수 있음
app.listen(port, () => {
    console.log(`서버가 실행됩니다., http://13.124.206.38:${port}`);
});

app.use('/circles', circlesRouter);