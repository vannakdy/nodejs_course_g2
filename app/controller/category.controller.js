const db = require("../config/db.config");
const {isEmpty} = require("../config/hepler")

// table category
// `category_id`,
// `name`,
// `parent`,
// `image`,
// `sort_order`,
// `status`,
// `create_at`,
// `update_at`;

const getAll = (req, res) => {
    var sql = "SELECT *,DATE_FORMAT(create_at,'%d/%m/%Y %h:%i %p') AS create_at, DATE_FORMAT(update_at,'%d/%m/%Y %h:%i %p') AS update_at FROM category";
    var category_id = null;
    if(req.params && req.params.id != null){
        sql = sql + " WHERE category_id = ?";
        category_id = req.params.id
    }
 
  db.query(sql,[category_id],(err,resule)=>{
    if(!res.err){
        res.json({
            list : resule
        })
    }else{
        res.json({
            error : true,
            message : err
        })
    }
  })
};

const create = (req,res) => {
     // `name`,`parent`,`image`,`sort_order`,`status`,
    // url : "api/category"
    // method : "POST"
    // body = {
    //     "name" : "", // not null,
    //     "parent" : 0, 
    //     "image" : "",
    //     "sort_order" : 0,
    //     "sort_order" : 1,
    // }

    var message = {};
    var body = req.body;
    if(body){
        if(isEmpty(body.name)){
            message.name = "param name require!"
        }

    }
    if(Object.keys(message).length > 0 ){
        res.json({
            error : true,
            message : message
        })
    }else{
        const {
            name,parent,image,sort_order,status
        } = req.body;
        var sql = "INSERT INTO category (`name`,`parent`,`image`,`sort_order`,`status`) VALUES (?,?,?,?,?)";
        db.query(sql,[name,parent,image,sort_order,status],(err,result)=>{
            if(!err){
                if(result.affectedRows != 0){
                    res.json({
                        message : "Insert success"
                    })
                }
            }else{
                res.json({
                    error : true,
                    message : err
                })
            }
        })
    }
};
const update = (req,res) => {
    var message = {};
    var body = req.body;
    if(body){
        if(isEmpty(body.category_id)){
            message.category_id = "param category_id require!"
        }
        if(isEmpty(body.name)){
            message.name = "param name require!"
        }
    }
    if(Object.keys(message).length > 0 ){
        res.json({
            error : true,
            message : message
        })
    }else{
        const {
            category_id,name,parent,image,sort_order,status
        } = req.body;
        var sql = "UPDATE category SET `name` = ? ,`parent` = ? ,`image` = ? ,`sort_order` = ? ,`status` = ? , update_at = NOW()  ";
        sql += " WHERE category_id = ?"
        db.query(sql,[name,parent,image,sort_order,status,category_id],(err,result)=>{
            if(!err){
                if(result.affectedRows != 0){
                    res.json({
                        message : "Update success"
                    })
                }
            }else{
                res.json({
                    error : true,
                    message : err
                })
            }
        })
    }
};
const remove = (req,res) => {
    var body = req.body
    var message = {};
    if(body){
        if(isEmpty(body.category_id)){
            message.category_id = "param category_id require!"
        }
    }
    if(Object.keys(message).length > 0 ){
        res.json({
            error : true,
            message : message
        })
    }else{
        db.query("DELETE FROM category WHERE category_id = ?",[body.category_id],(err,result)=>{
            if(!err){
                if(result.affectedRows != 0){
                    res.json({
                        message : "Remove success"
                    })
                }
            }else{
                res.json({
                    error : true,
                    message :err
                })
            }
        })
    }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
