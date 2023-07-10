const express = require('express')

const buildings = require('../controller/buildings.controller')
const verifyToken = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/buildings/create', verifyToken, buildings.createBuilding)

router.get('/buildings/', verifyToken, buildings.getAllBuildings)

router.get('/buildings/:id', verifyToken, buildings.getBuildingById)

router.put('/buildings', verifyToken, buildings.updateBuilding)

router.delete('/buildings', verifyToken, buildings.deleteBuilding)

module.exports = router