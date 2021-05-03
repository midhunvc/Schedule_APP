var express = require('express');
var router = express.Router();
const scheduleControl = require('../controller/schedule.controller');

router
     .route('/schedule')
     .post(scheduleControl.newSchedule)
router
     .route('/sch/:id')
     .get(scheduleControl.getOneSchedule)
     .delete(scheduleControl.deleteSchedule);
router
     .route('/all')
     .get(scheduleControl.allSchedules)

module.exports = router;
