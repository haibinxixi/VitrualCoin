const mysql = require('mysql');
var config = require('../config/index');

var pool = mysql.createPool(config.build.dbConfig);

function MysqlAccess() {
  this.InsertTaskLog = (room, contact, content, tasktype, callback) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        if (callback) callback(err);
      } else {
        connection.query(
          'INSERT INTO wxbot_group_task_log(ROOMID,ROOM,FROMUSERID,FROMUSER,CONTENT,TASKTYPE,SENDTIME) VALUES(?,?,?,?,?,?,?);',
          [
            room.toString(),
            room.topic(),
            contact.id,
            contact.toString(),
            content,
            tasktype,
            new Date()
          ],
          function(err, rows) {
            if (err) {
              if (callback) callback(err);
            } else {
              if (callback) callback(err, rows);
            }
            connection.release();
          }
        );
      }
    });
  };

  this.GetShortNews = (lastid, callback) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        if (callback) callback(err);
      } else {
        var sql = 'select * from qkl_news';
        if (lastid === 0) {
          sql += ' order by id desc limit 100';
        } else {
          sql +=
            'select * from (' +
            sql +
            ' where id>? limit 100) a order by id desc';
        }
        connection.query(sql, [lastid], function(err, rows) {
          if (err) {
            if (callback) callback(err);
          } else {
            if (callback) callback(err, rows);
          }
          connection.release();
        });
      }
    });
  };
}

module.exports = MysqlAccess;
