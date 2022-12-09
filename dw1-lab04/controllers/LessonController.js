'use strict';

var utils = require('../utils/writer.js');
var LessonController = require('../service/LessonControllerService');

module.exports.createLesson = function createLesson (req, res, next, body) {
  LessonController.createLesson(body)
  .then(LessonController.retrieveLesson) 
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletedLesson = function deletedLesson (req, res, next, id) {
  LessonController.deletedLesson(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveLesson = function retrieveLesson (req, res, next, id) {
  LessonController.retrieveLesson(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveLessons = function retrieveLessons (req, res, next) {
  LessonController.retrieveLessons()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLesson = function updateLesson (req, res, next, body, id) {
  LessonController.updateLesson(body, id)
    .then(LessonController.retrieveLesson)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
