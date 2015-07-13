'use strict';

var IndexModel = require('../models/index');
var EventTypeModel = require('../models/eventType');

module.exports = function (router) {

    var model = new IndexModel();
    var eventTypeModel = new EventTypeModel();

    router.get('/', function (req, res) {
        
        res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
        
    });

    router.get('/pooja', function (req, res) {
        
        res.send('<code><pre>' + "hello Pooja " + '</pre></code>');
        
    });

    router.get('/eventType', function (req, res) {
        
        res.send('<code><pre>' + JSON.stringify(eventTypeModel, null, 2) + '</pre></code>');
        
    });

};
