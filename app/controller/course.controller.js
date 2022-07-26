const db = require("../config/db.config");
const { isEmpty } = require("../config/hepler")

const getAll = (req, res) => {
    var body = req.body;
    var sqlWhere = "";
    if(body){
        var {category_id,text_search,status} = body;
        if(!isEmpty(category_id)){
            sqlWhere = "WHERE ca.category_id = "+category_id
        }
        if(!isEmpty(text_search)){
            sqlWhere += " AND co.name LIKE '%"+text_search+"%' ";
        }
    }
    var sql = "SELECT "+
        " co.course_id,"+ 
        " co.name,"+ 
        " co.full_price,"+
        " DATE_FORMAT(co.create_at,'%d/%m/%Y %h:%i %p') as create_at,"+
        " ca.category_id,"+ 
        " ca.name AS category_name"+
    " FROM course as co "+
    " INNER JOIN category as ca ON co.category_id = ca.category_id "+sqlWhere;
    db.query(sql, (err, result) => {
        if (!res.err) {
            res.json({
                list: result
            })
        } else {
            res.json({
                err: true,
                message: err
            })
        }
    })

}

// arrow function get one
const getOne = (req, res) => {
    var id = req.params.id;
    var sql_select = "SELECT * FROM course WHERE course_id = ? ";
    // sql statement
    db.query(sql_select,[id], (err, result) => {
        if (!res.err) {
            res.json({
                list: result
            })
        } else {
            res.json({
                err: true,
                message: err
            })
        }
    })

}

//  SELECT `course_id`, `category_id`, `name`, `full_price`, `description`, `status`, `create_at`, `update_at` FROM `course` WHERE 1
//  create
const create = (req, res) => {
    // url: "api/course"
    // method: "post"
    // body = {
    //     "category_id" : 0, // not null
    //     "name" : "", // not null
    //     "full_price" : 0,
    //     "description" : "",
    //     "status" : 1,
    // }
    var message = {};
    var body = req.body;
    if (body) {
        if (isEmpty(body.name)) {
            message.name = "param name require"
        }
        if (isEmpty(body.category_id)) {
            message.category_id = "param category_id require"
        }
    }
    if (Object.keys(message).length > 0) {
        res.json({
            err: true,
            message: message
        })
    } else {
        const {
            category_id,name,full_price,description,status
        } = req.body;
        // `course_id`, `category_id`, `name`, `full_price`, `description`, `status`, `update_at`
        var sql = "INSERT INTO course (`category_id`, `name`, `full_price`, `description`, `status`) VALUES(?,?,?,?,?)";
        db.query(sql,[category_id,name,full_price,description,status],(err,result)=>{
            if(!err){
                console.log(result);
                res.json({
                  
                    message : "Insert Successfully"
                })
            }else{
                res.json({
                    error : true,
                    message : err
                })
            }
        })
    }

}
// UPDATE
const update = (req, res) => {
    var message = {};
    var body = req.body;
    if (body) {
        if (isEmpty(body.category_id)) {
            message.category_id = "param category_id require"
        }
        if (isEmpty(body.course_id)) {
            message.course_id = "param course_id require"
        }
        if (isEmpty(body.name)) {
            message.name = "param name require"
        }
    }
    if (Object.keys(message).length > 0) {
        res.json({
            err: true,
            message: message
        })
    } else {
        const {
            course_id,category_id,name,full_price,description,status,create_at,update_at
        } = req.body;
        // `course_id`, `category_id`, `name`, `full_price`, `description`, `status`, `update_at`
        var sql = "UPDATE course SET `category_id` = ? , `name` = ?, `full_price` = ? , `description` = ?, `status` = ? , `update_at` = NOW() WHERE course_id = ? ";
        db.query(sql,[category_id,name,full_price,description,status,course_id],(err,result)=>{
            if(!err){
                console.log(result);
                res.json({
                  
                    message : "Update Successfully"
                })
            }else{
                res.json({
                    error : true,
                    message : err
                })
            }
        })
    }
 }
const remove = (req, res) => { 
    var message = {};
    var body = req.body;
    if (body) {
        if (isEmpty(body.course_id)) {
            message.course_id = "param course_id require"
        }
        // if (isEmpty(body.name)) {
        //     message.name = "param name require"
        // }
    }
    if (Object.keys(message).length > 0) {
        res.json({
            error: true,
            message: message
        })
    }else{
        var sql_delete="DELETE FROM course WHERE course_id = ?";
        db.query(sql_delete,[body.course_id],(err,result)=>{
            if(!err){
                if(result.affectedRows !=0){
                    res.json({
                        message: "Remove successfully"
                    })
                }else{
                    res.json({
                        error: true,
                        message : err
                    })
                }
            }
        })
    }
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}