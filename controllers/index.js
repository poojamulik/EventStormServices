'use strict';

var IndexModel = require('../models/index');
var EventTypeModel = require('../models/eventType');
var EventModel = require('../models/events');


var fs = require('fs');
var path = require('path');
var eventFilePath = path.join("c:/Pooja/node/nno/models", 'event.json');
var filePath = path.join("c:/Pooja/node/nno/models", 'eventType.json');

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

    /*router.get('/eventType', function (req, res) {
        
        res.send('<code><pre>' + JSON.stringify(eventTypeModel, null, 2) + '</pre></code>');
        
    });

    router.get('/events', function (req, res) {
        
        res.send('<code><pre>' + JSON.stringify(eventModel, null, 2) + '</pre></code>');
        
    });*/

    router.get('/events', function (req, res) {
        fs.readFile(eventFilePath, {encoding: 'utf-8'}, function(err,data){
           if (!err){
               var str = data;
               res.json(JSON.parse(str));
            }else{
                console.log(err);
            };
        });
    });

    router.get('/eventType', function (req, res) {
        fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
           if (!err){
               var str = data;
               res.json(JSON.parse(str));
            }else{
                console.log(err);
            };
        });
    });

};
