
const db = require("../config/db.config")
const getLists = (req,res) =>{
    var sql = "SELECT * FROM teacher";
    db.query(sql,(err,result)=>{
        if(!err){
            res.json({
                list:result
            })
        }else{
            res.json({
                error : true,
                message: err
            })
        }
    })
}
const  getOne = (req,res) => {
    var params = req.params;
    if(params != null && params.id){
        sql = "SELECT * FROM teacher WHERE teacher_id = ?";
        db.query(sql,[params.id],(err,result)=>{
            if(!err){
                res.json({
                    list : result
                })
            }else{
                res.json({
                    error : true,
                    message : err
                })
            }
        })
    }else{
        res.json({
            error : true,
            message : "Param id require!"
        })
    }
}

const create = (req,res) => {
    // teacher_id
    // firstname
    // lastname
    // gender
    // tel
    // email
    // description
    const body = req.body;
    if(body){
        const {
            firstname,
            lastname,
            gender,
            tel,
            email,
            description
        } = body;
        var message = {}; //
        
        if(firstname == null || firstname == ""){
            message.firstname = "Param first name require";
        }
        if(lastname == null || lastname == ""){
            message.lastname = "Param last name require";
        }
        if(Object.keys(message).length != 0){
            res.json({
                error : true, 
                message : message
            })
        }else{
            var sql = "INSERT INTO teacher (firstname,lastname,gender,tel,email,description) VALUES (?,?,?,?,?,?)";
            db.query(sql,[firstname,lastname,gender,tel,email,description],(err,result)=>{
                if(!err){
                    res.json({
                        message : "Insert successfully!"
                    })
                }else{
                    res.json({
                        error:true,
                        message : err
                    })
                }
            })
        }

    }
}
const edit = (req,res) => {
    const body = req.body;
    if(body){
        const {
            teacher_id,
            firstname,
            lastname,
            gender,
            tel,
            email,
            description
        } = body;
        var message = {}
        if(teacher_id == null || teacher_id == ""){
            message.teacher_id = "Param teacher id require";
        }
        if(firstname == null || firstname == ""){
            message.firstname = "Param first name require";
        }
        if(lastname == null || lastname == ""){
            message.lastname = "Param last name require";
        }
        if(Object.keys(message).length != 0){
            res.json({
                error : true, 
                message : message
            })
        }else{
            var sql = "UPDATE teacher SET firstname=?, lastname=?,gender = ?,tel=?, email=?, description=? WHERE teacher_id = ?"
            db.query(sql,[firstname,lastname,gender,tel,email,description,teacher_id],(err,result)=>{
                if(!err){
                    res.json({
                        message : "Update successfully!"
                    })
                }else{
                    res.json({
                        error:true,
                        message : err
                    })
                }
            })
        }

    }
}
const remove = (req,res) => {
    var body = req.body;
    if(body){
        if(body.teacher_id != null && body.teacher_id != ""){
            sql = "DELETE FROM teacher WHERE teacher_id = ?";
            db.query(sql,[body.teacher_id],(err,result)=>{
                if(!err){
                    res.json({
                        message : "Delete successfully!"
                    })
                }else{
                    res.json({
                        error:true,
                        message : err
                    })
                }
            })
        }else{
            res.json({
                error:true,
                message : "Teacher id require!"
            })
        }
    }else{
        res.json({
            error:true,
            message : "Teacher id require!"
        })
    }
}

module.exports =  {
    getLists,
    getOne,
    create,
    edit,
    remove
}