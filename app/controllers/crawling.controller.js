const Model = require("../models/crawling");
const Handset = require('../models/handset');
const Building = require('../models/building');

async function store(req, res) {
    try {
        // Check building data existence
        let building = await Building.findOne(req.body.building)
        if (!building) building = await Building.create(req.body.building)
        req.body.building = building
        building = await Building.findOne(building)

        // Check handset data existence
        let handset = await Handset.findOne(req.body.handset)
        if (!handset) handset = await Handset.create(req.body.handset)
        req.body.handset = handset

        await Model.create(req.body);

        res.status(201).json(`Successfully stored ${req.body.access_points.length} crawling data from ${building.name}`);
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
