'use strict';

var IndexModel = require('../models/index');


var fs = require('fs');
var path = require('path');
var eventFilePath = path.join("./models", 'event.json');
var filePath = path.join("./models", 'eventType.json');

module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {
        
        res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
        
    });

    /*router.get('/eventType', function (req, res) {
        
        res.send('<code><pre>' + JSON.stringify(eventTypeModel, null, 2) + '</pre></code>');
        
    });

    router.get('/events', function (req, res) {
        
        res.send('<code><pre>' + JSON.stringify(eventModel, null, 2) + '</pre></code>');
        
    });*/

    router.get('/eventtype', function (req, res) {
        fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
           if (!err){
               var str = data;
               res.json(JSON.parse(str));
            }else{
                console.log(err);
            };
        });
    });

    router.get('/event/travel/singapore', function (req, res) {
        eventFilePath = path.join("./models", 'SingaporeTravelEvent.json');
        fs.readFile(eventFilePath, {encoding: 'utf-8'}, function(err,data){
           if (!err){
               var str = data;
               res.json(JSON.parse(str));
            }else{
                console.log(err);
            };
        });
    });

    router.get('/event/fun/singapore', function (req, res) {
        eventFilePath = path.join("./models", 'SingaporeFunEvent.json');
        fs.readFile(eventFilePath, {encoding: 'utf-8'}, function(err,data){
           if (!err){
               var str = data;
               res.json(JSON.parse(str));
            }else{
                console.log(err);
            };
        });
    });

    router.get('/event/travel/india', function (req, res) {
        eventFilePath = path.join("./models", 'IndiaTravelEvent.json');
        fs.readFile(eventFilePath, {encoding: 'utf-8'}, function(err,data){
           if (!err){
               var str = data;
               res.json(JSON.parse(str));
            }else{
                console.log(err);
            };
        });
    });

    router.get('/event/fun/india', function (req, res) {
        eventFilePath = path.join("./models", 'IndiaFunEvent.json');
        fs.readFile(eventFilePath, {encoding: 'utf-8'}, function(err,data){
           if (!err){
               var str = data;
               res.json(JSON.parse(str));
            }else{
                console.log(err);
            };
        });
    });

};
