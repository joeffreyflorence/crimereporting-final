const mongoose = require('mongoose')

const accidentSchema = mongoose.Schema({
    date: {
        type: String,
        required: [true, 'Please add a Value']
    },
    location: {
        type: String,
        required: [true, 'Please add a Value']
    },
    description: {
        type: String,
        required: [true, 'Please add a Value']
    },
    fatalities: {
        type: String,
        required: [true, 'Please add a Value']
    },
    injured: {
        type: String,
        required: [true, 'Please add a Value']
    },
    vehicle_type: {
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

module.exports = mongoose.model('Accident Report', accidentSchema)