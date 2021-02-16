const express = require('express')
const router = express.Router()

const vaccinationService = require('../services/vaccination.service')

router.get('/testData', vaccinationService.getTestData)

router.get('/download', vaccinationService.downloadData)

router.get('/', vaccinationService.getVaccData)

module.exports = router