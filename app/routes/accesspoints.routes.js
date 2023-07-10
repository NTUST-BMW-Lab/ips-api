const express = require('express')

const ap = require('../controller/accesspoints.controller')
const verifyToken = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/ap/create', verifyToken, ap.createAccessPoint)

router.get('/ap', verifyToken, ap.getAllAPs)

router.get('/ap/:id', verifyToken, ap.getAPById)

router.put('/ap', verifyToken, ap.updateAP)

router.delete('/ap', verifyToken, ap.deleteAP)

module.exports = router