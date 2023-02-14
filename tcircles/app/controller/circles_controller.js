const circlesModel = require("../model/circles_model");


exports.circlesCreate = (req, res) => {

    const createData = {
        'id'       :     req.body.member_id,
        'name'     :     req.body.circles_name,
        'contents' :     req.body.circles_contents,
        'typeId'   :     req.body.circles_join_limit,
        'joinLimit':     req.body.circles_join_limit,
        'isPrivate':     req.body.circles_private_yn,
        'password' :     req.body.circles_private_password

    }

    circlesModel.create(createData, (err, result) => {
       if (err) throw err;
       res.send(result);
    });
}

exports.getCirclesList = (req, res, next) => {
    circlesModel.allList((err, circlesList) => {
       if (err) throw  err;
       res.send(circlesList);
    });
}

