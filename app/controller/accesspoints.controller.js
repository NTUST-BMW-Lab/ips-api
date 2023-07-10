const AccessPoint = require('../models/accesspoints')

const createAccessPoint = async (req, res) => {
    try {
        const ap = await AccessPoint.create(req.body)
        res.status(201).json(ap)
    } catch (err) {
        //console.log(err)
        res.status(500).json({
            error: 'Failed to create Access Point'
        })
    }
}

const getAllAPs = async (req, res) => {
    try {
        const aps = await AccessPoint.find()
        res.status(200).json(aps)
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch APs.'
        })
    }
}

const getAPById = async (req, res) => {
    try {
        const ap = await AccessPoint.findById(req.params.id);
        if (!ap) {
            return res.status(404).json({
                error: 'AP not found!'
            })
        } 
        res.status(200).json(ap)
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch AP.'
        })
    }
}

const updateAP = async (req, res) => {
    try {
        const id = req.query.id

        if (!id) {
            return res.status(400).json({
                error: 'Missing id parameter'
            })
        }

        const ap = await AccessPoint.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )

        if (!ap) {
            return res.status(404).json({
                error: 'AP not found!'
            })
        }
        res.status(200).json(ap)
    } catch (err) {
        res.status(500).json( {
            error: 'Failed to update AP.'
        })
    }
}

const deleteAP = async (req, res) => {
    try {
        const id = req.query.id

        if (!id) {
            return res.status(400).json({
                error: 'Missing id parameter'
            })
        }

        const ap = await AccessPoint.findByIdAndDelete(id)
        if (!ap) {
            return res.status(404).json({
                error: 'AP not found!'
            })
        }
        res.status(204).end()
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'Failed to delete AP.'
        })
    }
}

module.exports = {
    createAccessPoint,
    getAllAPs,
    getAPById,
    updateAP,
    deleteAP
}