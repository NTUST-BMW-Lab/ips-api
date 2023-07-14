const Model = require('../models/access-point')

const store = async (req, res) => {
    try {
        const ap = await Model.create(req.body)
        res.status(201).json(ap)
    } catch (err) {
        //console.log(err)
        res.status(500).json({
            error: 'Failed to create Access Point'
        })
    }
}

const index = async (req, res) => {
    try {
        const aps = await Model.find()
        res.status(200).json(aps)
    } catch (err) {
        res.status(500).json({
            error: 'Failed to fetch APs.'
        })
    }
}

const show = async (req, res) => {
    try {
        const ap = await Model.findById(req.params.id);
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

const update = async (req, res) => {
    try {
        const id = req.query.id

        if (!id) {
            return res.status(400).json({
                error: 'Missing id parameter'
            })
        }

        const ap = await Model.findByIdAndUpdate(
            id,
            req.body,
            {new: true}
        )

        if (!ap) {
            return res.status(404).json({
                error: 'AP not found!'
            })
        }
        res.status(200).json(ap)
    } catch (err) {
        res.status(500).json({
            error: 'Failed to update AP.'
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

        const ap = await Model.findByIdAndDelete(id)
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
    store,
    index,
    show,
    update,
    destroy
}
