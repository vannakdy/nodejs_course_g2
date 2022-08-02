
const db = require("../config/db.config");
const {isEmpty} = require("../config/hepler")

const getAll = (req, res) => {
  db.query('SELECT * FROM classroom', (err, rows) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json({ classroom: rows });
    }
  });
};

const getOne = (req, res) => {
  let sql = 'SELECT * FROM classroom WHERE classroom_id = ?';
  db.query(sql, [req.params.id], (err, rows) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json({ classroom: rows });
    }
  });
};

const remove = (req, res) => {
  var message = {};
  var body = req.body;
  if (body) {
    if (isEmpty(body.classroom_id)) {
      message.classroom_id = 'param classroom_id require!';
    }
  }
  if (Object.keys(message).length > 0) {
    res.json({
      error: true,
      message: message,
    });
  } else {
    let sql = 'DELETE FROM classroom WHERE classroom_id = ?';
    db.query(sql, [body.classroom_id], (err, rows) => {
      if (err) {
        res.json({ error: err });
      } else {
        if (rows.affectedRows > 0) {
          res.json({ message: 'Delete successfully!' });
        } else {
          res.json({ error: 'Invalid classroom_id' });
        }
      }
    });
  }
};

const create = (req, res) => {
  var message = {};
  var body = req.body;
  if (body) {
    if (isEmpty(body.course_id)) {
      message.course_id = 'param course_id require!';
    }
    if (isEmpty(body.teacher_id)) {
      message.teacher_id = 'param teacher_id require!';
    }
    if (isEmpty(body.course_price)) {
      message.course_price = 'param course_price require!';
    }
    if (isEmpty(body.course_gendertion)) {
      message.course_gendertion = 'param course_gendertion require!';
    }
  }
  if (Object.keys(message).length > 0) {
    res.json({
      error: true,
      message: message,
    });
  } else {
    const {
      classroom_id,
      course_id,
      teacher_id,
      course_price,
      course_gendertion,
      time_start,
      time_end,
      date_start,
      date_end,
      duration_h,
      status,
    } = req.body;
    var sql =
      'INSERT INTO classroom (`course_id`,`teacher_id`,`course_price`,`course_gendertion`) VALUES (?,?,?,?)';
    db.query(
      sql,
      [course_id, teacher_id, course_price, course_gendertion],
      (err, result) => {
        if (!err) {
          if (result.affectedRows != 0) {
            res.json({
              message: 'Insert success',
            });
          }
        } else {
          res.json({
            error: true,
            message: err.code,
          });
        }
      }
    );
  }
};

const update = (req, res) => {
  var message = {};
  var body = req.body;
  if (body) {
    if (isEmpty(body.classroom_id)) {
      message.classroom_id = 'param classroom_id require!';
    }
    if (isEmpty(body.course_id)) {
      message.course_id = 'param course_id require!';
    }
    if (isEmpty(body.teacher_id)) {
      message.teacher_id = 'param teacher_id require!';
    }
    if (isEmpty(body.course_price)) {
      message.course_price = 'param course_price require!';
    }
    if (isEmpty(body.course_gendertion)) {
      message.course_gendertion = 'param course_gendertion require!';
    }
  }
  if (Object.keys(message).length > 0) {
    res.json({
      error: true,
      message: message,
    });
  } else {
    const {
      classroom_id,
      course_id,
      teacher_id,
      course_price,
      course_gendertion,
      time_start,
      time_end,
      date_start,
      date_end,
      duration_h,
      status,
    } = req.body;
    var sql =
      'UPDATE classroom SET `course_id` = ? ,`teacher_id` = ? ,`course_price` = ? ,`course_gendertion` = ? ,`time_start` = ? ,`time_end` = ? ,`date_start` = ? ,`date_end` = ? ,`duration_h` = ? ,`status` = ?';
    sql += ' WHERE classroom_id = ?';
    db.query(
      sql,
      [
        course_id,
        teacher_id,
        course_price,
        course_gendertion,
        time_start,
        time_end,
        date_start,
        date_end,
        duration_h,
        status,
        classroom_id,
      ],
      (err, result) => {
        if (!err) {
          if (result.affectedRows != 0) {
            res.json({
              message: 'Update success',
            });
          } else {
            res.json({
              error: true,
              message: 'Invalid classroom_id',
            });
          }
        } else {
          res.json({
            error: true,
            message: err.code,
          });
        }
      }
    );
  }
};

module.exports = { getAll, create, update, getOne, remove };
