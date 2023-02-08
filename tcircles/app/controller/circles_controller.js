const circlesModel = require("../model/circles_model");

exports.getCirclesList = (req, res, next) => {
    circlesModel.allList((err, circlesList) => {
       if (err) throw  err;
       res.send(circlesList);
    });
}
