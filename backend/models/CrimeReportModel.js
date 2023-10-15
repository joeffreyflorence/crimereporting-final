const mongoose = require('mongoose')

const crimeSchema = mongoose.Schema({
    type_crime: {
        type: String,
        required: [true, 'Please add a Value']
    },
    name_crime: {
        type: String,
        required: [true, 'Please add a Value']
    },
    location: {
        type: String,
        required: [true, 'Please add a Value']
    },
    incident_date: {
        type: String,
        required: [true, 'Please add a Value']
    },
    date_of_report: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Crime Report', crimeSchema)