const express = require('express')
const router = express.Router()
const Controller = require('../controllers/access-point.controller');
const verifyToken = require('../middleware/authMiddleware')

router.get('/', verifyToken, Controller.index)
router.get('/:id', verifyToken, Controller.show)
router.post('/', verifyToken, Controller.store)
router.put('/:id', verifyToken, Controller.update)
router.delete('/:id', verifyToken, Controller.destroy)

module.exports = router