'use strict';

var IndexModel = require('../models/index');
var EventTypeModel = require('../models/eventType');
var EventModel = require('../models/events');

module.exports = function (router) {

    var model = new IndexModel();
    var eventTypeModel = new EventTypeModel();
    var eventModel = new EventModel();

    router.get('/', function (req, res) {
        
        res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
        
    });

    router.get('/pooja', function (req, res) {
        
        res.send('<code><pre>' + "hello Pooja " + '</pre></code>');
        
    });

    router.get('/eventType', function (req, res) {
        
        res.send('<code><pre>' + JSON.stringify(eventTypeModel, null, 2) + '</pre></code>');
        
    });

    router.get('/events', function (req, res) {
        
        res.send('<code><pre>' + JSON.stringify(eventModel, null, 2) + '</pre></code>');
        
    });

};
