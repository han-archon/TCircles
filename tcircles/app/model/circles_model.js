//DB 연결 객체 가져오기
const db = require('../../dbConnect/dbConnect');
const util = require('../common/util');
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
const successCode = 200;
const errCode     = 0;

const allListQuery = "SELECT *  FROM circles";
const insertQuery  = `INSERT INTO circles (member_id, circles_name, circles_contents, type_id, circles_join_limit, circles_private_yn, circles_private_password, regdate)
                      VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`;
const updateQuery  = `UPDATE circles 
                         SET circles_name = ?, circles_contents = ?, type_id = ?, circles_join_limit = ?, circles_private_yn = ?, circles_private_password = ?
                       WHERE circles_idx = ?`;
const countQuery   = `SELECT COUNT(*)  AS count
                        FROM circles 
                       WHERE circles_idx = ?`;

/**
 * 동아리 방 List
 * @param result
 */
circlesList.allList = (result) => {
   db.query(allListQuery, (err, res) => {
      if (err)  {
         returnData = util.returnMessage(err, "circles Not List", successCode, 403 );
         result(null, returnData);
      } else {
         returnData = util.returnMessage(null, successCode, errCode);
         result(null, returnData);
      }
   });
}

/**
 * 동아리 방 Create
 * @param data
 * @param result
 */
circlesList.create = (data, result) => {

   const insertParms = [
      data.id,
      data.name,
      data.contents,
      data.typeId,
      data.joinLimit,
      data.isPrivate,
      data.password,
   ];

   db.query(insertQuery, insertParms, (err, res) => {
      if (err) {
         returnData = util.returnMessage(err, "Circles Not Create", successCode, 403);
         result(null, returnData);
      } else {
         returnData = util.returnMessage(null, "Circles Success Create ", successCode, 0);
         result(null, returnData);
      }
   });
}

/**
 * 동아리 방 Update
 * @param data
 * @param result
 */
circlesList.update = (data, result) => {
   db.query(countQuery, data.index, (err, res) => {
      if (!err) {
         const count = JSON.stringify(res[0].count);
         if (count[0] < 1) {
            returnData = util.returnMessage(null, 'Circles Index Not Exits', 0, 403);
            result(null, returnData);
         } else {

            let updateParms = [
                data.name,
                data.contents,
                data.typeId,
                data.joinLimit,
                data.isPrivate,
                data.password,
                data.index
            ];

            db.query(updateQuery, updateParms, (err, res) => {
               if (err) {
                  returnData = util.returnMessage(err, "Circles Not Update", successCode, 403);
                  result(null, returnData);
               } else {
                  returnData = util.returnMessage(null, "Circles Success Update", 200, errCode);
                  result(null, returnData);
               }
            });
         }
      }
   });
}



module.exports = circlesList;

