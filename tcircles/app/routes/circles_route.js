const express = require('express');
const router  = express.Router();
const circlesController = require('../controller/circles_controller');


router.get("/circles", circlesController.getCirclesList);

module.exports = router;