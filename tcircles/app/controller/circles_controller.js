const circlesModel = require("../model/circles_model");


exports.circlesCreate = (req, res) => {

    const createData = {
        'id'       :     req.body.member_id,
        'name'     :     req.body.circles_name,
        'contents' :     req.body.circles_contents,
        'typeId'   :     req.body.type_id,
        'joinLimit':     req.body.circles_join_limit,
        'isPrivate':     req.body.circles_private_yn,
        'password' :     req.body.circles_private_password

    }

    circlesModel.create(createData, (err, result) => {
       if (err) throw err;
       res.send(result);
    });
}

exports.circlesUpdate = (req, res) => {
    const updateData = {
        'index'    : req.params.index,
        'name'     : req.body.circles_name,
        'contents' : req.body.circles_contents,
        'typeId'   : req.body.type_id,
        'joinLimit': req.body.circles_join_limit,
        'isPrivate': req.body.circles_private_yn,
        'password' : req.body.circles_private_password
    }

    circlesModel.update(updateData, (err, result) => {
       if (err) throw err;
       res.send(result);
    });
}

exports.circlesDelete = (req, res) => {
    const circlesIndex = req.params.index;

    circlesModel.delete(circlesIndex, (err, result) => {
        res.send(result);
    }).then().catch((err)  => {
        res.send(err);
    });
}

exports.getCirclesList = (req, res, next) => {
    circlesModel.allList((err, circlesList) => {
       if (err) throw  err;
       res.send(circlesList);
    });
}

