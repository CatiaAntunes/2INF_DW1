'use strict';

var sql = require('../utils/db');

/**
 * Create Schedule
 *
 * body Schedule  (optional)
 * returns Schedule
 **/
exports.createSchedule = function(body) {
  return new Promise(
    function(resolve, reject) {
      console.log("createSchedule", body);
      sql.query("INSERT INTO schedule (name, description, color) values(?,?,?)", 
        [body.name, body.description, body.color],
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
    }
  );
}


/**
 * Delete schedule
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deletedSchedule = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("Delete from schedule where id = ?", [id], function(err,res){
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
 * Retrieve schedule
 *
 * id Long 
 * returns List
 **/
exports.retrieveSchedule = function(id) {
  return new Promise
    (function(resolve, reject) {
      sql.query("Select * from schedule where id = ?", [id], function (err, res){
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
 * Retrieve schedules
 *
 * returns List
 **/
exports.retrieveSchedules = function() {
  return new Promise(function(resolve, reject) {
    sql.query("Select * from schedule", function (err, res){
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
 * Update schedule
 *
 * body Schedule 
 * id Long 
 * no response value expected for this operation
 **/
exports.updateSchedule = function(body,id) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("update schedule set name = ?, description = ?, color = ? where id = ?", [body.name, body.description, body.color, id], function(err, res){
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

