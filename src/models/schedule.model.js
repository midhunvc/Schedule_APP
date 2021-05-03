const mongoose = require('mongoose');
const validator = require('validator');
const Schedule = mongoose.model('schedule', {
    days: {
        type: [{
            type: String
        }],
        required: true,

    },
    worktime: {
        type: [{
            type: Object
        }],
        required: true
    },
    blocklist: {
        type: [{
            type: String
        }],
    },
    weekdaylimit: {
        type: [{
            type: Object
        }],
    },
    weekendlimit: {
        type: [{
            type: Object
        }],
    }
})
module.exports = Schedule;
