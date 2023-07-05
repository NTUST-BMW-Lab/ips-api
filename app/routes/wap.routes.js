module.exports = app => {
    const wap = require('../controller/wap.controller.js');

    var router = require('express').Router();

    router.post('/', wap.create);

    router.get('/', wap.findAll);

    router.get('/essid/:essid', wap.findByEssid);

    router.put('/:id', wap.update);

    router.delete('/essid/:essid', wap.deleteByEssid);

    app.use('/api/wap', router);
}