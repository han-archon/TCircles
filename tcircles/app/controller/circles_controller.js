const circlesModel = require("../model/circles_model");

exports.getCirclesList = (req, res, next) => {
    console.log("controller 진입");
    circlesModel.allList((err, circlesList) => {
       if (err) throw  err;
       res.send(circlesList);
    });
}
