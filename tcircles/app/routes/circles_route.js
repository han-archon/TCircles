const express = require('express');
const router  = express.Router();
const circlesController = require('../controller/circles_controller');


router.post('/create', circlesController.circlesCreate);
router.get("/", circlesController.getCirclesList);


module.exports = router;