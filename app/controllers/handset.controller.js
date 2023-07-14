const Model = require("../models/handset");

async function store(req, res) {
    try {
        const data = await Model.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({error: "Failed to create handset"});
    }
}

async function index(req, res) {
    try {
        const data = await Model.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: "Failed to fetch handsets"});
    }
}

async function show(req, res) {
    try {
        const data = await Model.findById(req.params.id);
        if (!data) {
            return res.status(404).json({error: "Handset not found"});
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({error: "Failed to fetch handset"});
    }
}

async function update(req, res) {
    try {
        const data = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!data) {
            return res.status(404).json({error: "Handset not found"});
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({error: "Failed to update handset"});
    }
}

async function destroy(req, res) {
    try {
        const data = await Model.findByIdAndRemove(req.params.id);
        if (!data) {
            return res.status(404).json({error: "Handset not found"});
        }
        res.json({message: "Handset deleted successfully"});
    } catch (error) {
        res.status(500).json({error: "Failed to delete handset"});
    }
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}
