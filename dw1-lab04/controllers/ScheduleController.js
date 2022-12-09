'use strict';

var utils = require('../utils/writer.js');
var ScheduleController = require('../service/ScheduleControllerService');

module.exports.createSchedule = function createSchedule (req, res, next, body) {
  ScheduleController.createSchedule(body)
  .then(ScheduleController.retrieveSchedule)  
  .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletedSchedule = function deletedSchedule (req, res, next, id) {
  ScheduleController.deletedSchedule(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveSchedule = function retrieveSchedule (req, res, next, id) {
  ScheduleController.retrieveSchedule(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveSchedules = function retrieveSchedules (req, res, next) {
  ScheduleController.retrieveSchedules()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSchedule = function updateSchedule (req, res, next, body, id) {
  ScheduleController.updateSchedule(body, id)
    .then(ScheduleController.retrieveSchedule)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
