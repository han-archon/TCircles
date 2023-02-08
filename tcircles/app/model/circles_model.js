//DB 연결 객체 가져오기
const db = require('../../dbConnect/dbConnect');

//생성자
const circlesList = ((circlesList) => {
   this.circlesMemberId  = circlesList.member_id;
   this.circlesName      = circlesList.circles_name;
   this.circlesContents  = circlesList.circles_contents;
   this.circlesTypeId    = circlesList.type_id;
   this.circlesJoinLimt  = circlesList.circles_join_limit;
   this.circlesIsPrivate = circlesList.circles_private_yn;              // 방 공개 여부
   this.circlesPassword  = circlesList.circles_private_password;        // 방 비공개 시 방 비밀번호
   this.circlesRegdate   = circlesList.regdate;
});

const allListQuery = "SELECT *  FROM circles";


circlesList.allList = (result) => {
   db.query(allListQuery, (err, res) => {
      if (err) {
         console.log("error : " , err);
         throw err;
      } else {
         result(null, res);
      }
   });
}

module.exports = circlesList;

