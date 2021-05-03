const schedule = require('../models/schedule.model');

const newSchedule = async(req, res, next) => {
    console.log('new schedule')
    let sch = new schedule({
        days: req.body.days,
        worktime: req.body.worktime,
        blocklist: req.body.blocklist,
        weekdaylimit: req.body.weekdaylimit,
        weekendlimit: req.body.weekendlimit
    })
    await sch.save().then(() => {
        res.status(200).json({
            status:"success",
            message: "new schedule updated"
        })
    }).catch(err => {
        res.status(400).json({
            status:"failed",
            message: "failed to create new schedule"
        })
    })
};

const allSchedules = async(req, res, next) => {
    console.log('all schedules')
    await schedule.find().then((data)=> {
        res.status(200).json({
            status:"success",
            data: data,
            message: "returning all schedules"
        })
    }).catch((err)=>{
        res.status(400).json({
            status:"failed",
            message: "failed to find schedules"
        })
    })
};

const deleteSchedule = async(req, res, next) => {
    console.log('delete one schedule')
    await schedule.findByIdAndRemove(req.params.id).then(()=> {
        res.status(200).json({
            status: "success",
            message: "schedule deleted"
        })
    }).catch((err)=> {
        console.log(err)
        res.status(404).json({
            status:"failed",
            message: "failed to delete"
        })
    })
};

const getOneSchedule = async(req, res, next) => {
    console.log('get one schedule details')
    await schedule.findById(req.params.id).then((data)=> {
        res.status(200).json({
            status:"success",
            data: data,
            message: "returning one schedule"
        })
    }).catch((err)=>{
        console.log(err)
        res.status(404).json({
            status:"failed",
            data: err,
            message: "failed to find the schedule"
        })
    })
};
 
module.exports = {
    newSchedule,
    allSchedules,
    deleteSchedule,
    getOneSchedule
};
