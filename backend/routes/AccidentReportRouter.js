const express  = require('express')
const { 
    getAccident, 
    postAccident, 
    updateAccident,
    deltAccident,
    getOneAccident,
    deltMultiAccident,
    getMultiAccident
} = require('../controllers/AccidentReportController')
const router = express.Router()

router.route('/').get(getAccident).post(postAccident)

router.route('/:id').put(updateAccident).delete(deltAccident).get(getOneAccident)

router.route('/:ids').delete(deltMultiAccident).get(getMultiAccident)

module.exports = router