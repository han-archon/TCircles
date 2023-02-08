//DB 연결 객체 가져오기
const db = require('../../dbConnect/dbConnect');

//생성자
const circlesList = ((circles) => {
   this.member_id                 = circles.member_id;
   this.circles_name              = circles.circles_name;
   this.circles_contents          = circles.circles_contents;
   this.type_id                   = circles.type_id;
   this.circles_join_limit        = circles.circles_join_limit;
   this.circles_private_yn        = circles.circles_private_yn;              // 방 공개 여부
   this.circles_private_password  = circles.circles_private_password;        // 방 비공개 시 방 비밀번호
   this.regdate                   = circles.regdate;
});

let returnData  = "";
const successCode = 0;
const errCode     = 0;

const allListQuery = "SELECT *  FROM circles";

circlesList.allList = (result) => {
   db.query(allListQuery, (err, res) => {
      if(!err)  {
         returnData =  ({data: err, message: "circles Not List" , successCode: successCode, errorCode: 403});
         result(null, returnData);
      } else {
         returnData = {data: res, successCode: 200, errorCode: errCode};
         result(null, returnData);
      }
   });
}

module.exports = circlesList;

