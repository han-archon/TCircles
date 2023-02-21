const express = require('express');
const router  = express.Router();
const circlesController = require('../controller/circles_controller');


router.post('/create', circlesController.circlesCreate);
router.get("/", circlesController.getCirclesList);
router.put('/update/:index', circlesController.circlesUpdate);
router.post('/delete/:index', circlesController.circlesDelete);

module.exports = router;