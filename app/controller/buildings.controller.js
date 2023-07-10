const Building = require('../models/buildings')

const createBuilding = async (req, res) => {
    try {
        const building = await Building.create(req.body)
        res.status(201).json(building)
    } catch (err) {
        res.status(500).json({
            error: 'Failed to create Building.'
        })
    }
}

const getAllBuildings = async (req, res) => {
    try {
        const buildings = await Building.find()
        if (!buildings) {
            res.status(404).json({
                error: 'No Buildings entry found!'
            })
        }
        res.status(200).json(buildings)
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch Buildings.'
        })
    }
}

const getBuildingById = async (req, res) => {
    try {
        const building = await Building.findById(req.params.id);
        if (!building) {
            return res.status(404).json({
                error: 'Building not found!'
            })
        } 
        res.status(200).json(building)
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch Building.'
        })
    }
}

const updateBuilding = async (req, res) => {
    try {
        const id = req.query.id

        if (!id) {
            return res.status(400).json({
                error: 'Missing id parameter'
            })
        }

        const building = await Building.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        )
        if (!building) {
            return res.status(404).json({
                error: 'Building not found!'
            })
        }
        res.status(200).json(building)
    } catch (err) {
        res.status(500).json( {
            error: 'Failed to update Building.'
        })
    }
}

const deleteBuilding = async (req, res) => {
    try {
        const id = req.query.id
        console.log(id)
        if (!id) {
            return res.status(400).json({
                error: 'Missing id parameter'
            })
        }
        
        const building = await Building.findByIdAndDelete(id)
        if (!building) {
            return res.status(404).json({
                error: 'Building not found!'
            })
        }
        res.status(204).end()
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: 'Failed to delete Building.'
        })
    }
}

module.exports = {
    createBuilding,
    getAllBuildings,
    getBuildingById,
    updateBuilding,
    deleteBuilding
}