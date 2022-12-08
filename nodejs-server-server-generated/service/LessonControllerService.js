'use strict';

var sql = require('../utils/db')
/**
 * Create Lesson
 *
 * body Lesson  (optional)
 * returns Lesson
 **/
exports.createLesson = function(body) {
  return new Promise(function(resolve, reject) {
    console.log("createLesson", body);
      sql.query("INSERT INTO LESSON (subject, course, year, `group`, room, date, time, duration) values(?,?,?,?,?,?,?,?)", 
        [body.subject, body.course, body.year, body.group, body.room, body.date, body.time, body.duration],
      function (err, res){
        if(err){
          console.log(err);
          reject()
          }else{
            console.log(res.insertID)
            resolve(res.insertID)
          }
        }
      );
    
  });
}


/**
 * Delete lesson
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deletedLesson = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("Delete from lesson where id = ?", [id], function(err,res){
      if (err || !res.affectedRows){
        console.log(err);
        console.log(res);
        reject();
      }
      else {
        console.log(res);
        resolve({"deleted":id});
      }
    });
  });
}



/**
 * Retrieve lesson
 *
 * id Long 
 * returns List
 **/
exports.retrieveLesson = function(id) {
  return new Promise
    (function(resolve, reject) {
      sql.query("Select * from lesson where id = ?", [id], function (err, res){
        if (err) {
          console.log(err);
          reject(err);
        }
        else{
          console.log(res);
          resolve(res[0])
        }
      });
    });   
  }


/**
 * Retrieve lessons
 *
 * returns List
 **/
exports.retrieveLessons = function() {
  return new Promise(function(resolve, reject) {
    sql.query("Select * from lesson", function (err, res){
      if (err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res);
      }
    });
  });
}


/**
 * Update lesson
 *
 * body Lesson 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateLesson = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("update lesson set subject = ?, course = ?, year = ?, group = ?, room = ?, date = ?, time = ?, duration = ? where id = ?", [body.subject, body.course, body.year, body.group, body.room, body.date, body.time, body.duration, id], function(err, res){
        if (err){
          console.log(err);
          reject(err);
        }
        else{
          console.log(res);
          resolve(id);
        }
      });
  });
}

