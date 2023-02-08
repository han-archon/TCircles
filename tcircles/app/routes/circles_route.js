const express = require('express');
const router  = express.Router();
const circlesController = require('../controller/circles_controller');


router.get("/", circlesController.getCirclesList);

module.exports = router;