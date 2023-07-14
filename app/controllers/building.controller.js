const Model = require('../models/Building')

const store = async (req, res) => {
    try {
        const data = await Model.create(req.body)
        res.status(201).json(data)
    } catch (err) {
        res.status(500).json({
            error: 'Failed to create Building.'
        })
    }
}

const index = async (req, res) => {
    try {
        const data = await Model.find()
        if (!data) {
            res.status(404).json({
                error: 'No Buildings entry found!'
            })
        }
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch Buildings.'
        })
    }
}

const show = async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        if (!data) {
            return res.status(404).json({
                error: 'Building not found!'
            })
        }
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch Building.'
        })
    }
}

const update = async (req, res) => {
    try {
        const id = req.query.id

        if (!id) {
            return res.status(400).json({
                error: 'Missing id parameter'
            })
        }

        const data = await Model.findByIdAndUpdate(
            id,
            req.body,
            {new: true}
        )
        if (!data) {
            return res.status(404).json({
                error: 'Building not found!'
            })
        }
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({
            error: 'Failed to update Building.'
        })
    }
}

const destroy = async (req, res) => {
    try {
        const id = req.query.id
        if (!id) {
            return res.status(400).json({
                error: 'Missing id parameter'
            })
        }

        const data = await Model.findByIdAndDelete(id)
        if (!data) {
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
    store,
    index,
    show,
    update,
    destroy
}
