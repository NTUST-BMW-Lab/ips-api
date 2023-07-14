const Model = require("../models/crawling");

async function store(req, res) {
    try {
        const crawling = await Model.create(req.body);
        res.status(201).json(crawling);
    } catch (error) {
        res.status(500).json({error: "Failed to create crawling data"});
    }
}

async function index(req, res) {
    try {
        const data = await Model.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({error: "Failed to fetch crawling data"});
    }
}

async function show(req, res) {
    try {
        const data = await Model.findById(req.params.id);
        if (!data) {
            return res.status(404).json({error: "Crawling data not found"});
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({error: "Failed to fetch crawling data"});
    }
}

async function update(req, res) {
    try {
        const data = await Model.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );
        if (!data) {
            return res.status(404).json({error: "Crawling data not found"});
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({error: "Failed to update crawling data"});
    }
}

async function destroy(req, res) {
    try {
        const data = await Model.findByIdAndRemove(req.params.id);
        if (!data) {
            return res.status(404).json({error: "Crawling data not found"});
        }
        res.json({message: "Crawling data deleted successfully"});
    } catch (error) {
        res.status(500).json({error: "Failed to delete crawling data"});
    }
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}
