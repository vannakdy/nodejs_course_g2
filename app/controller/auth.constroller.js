const db = require("../config/db.config");
const {isEmpty,config}  = require("../config/hepler");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const validateToken = (req,res,next) => {
    var AuthHeader = req.headers["authorization"]
    if(AuthHeader){
        AuthHeader = AuthHeader.split(" ");
        var token = AuthHeader[1]
        jwt.verify(token,config.local_token,(err,obj_info)=>{
            if(!err){
                req.user = obj_info.user
                next();
                
            }else{
                res.json({
                    error:true,
                    message : "Invalid token"
                })
            }
        })
    }else{
        res.json({
            error:true,
            message : "Please fill in token"
        })
    }
}

const createUser = (req,res) => {
    var {
        username,
        password,
        tel,
        email
    } = req.body;
    var message = {};
    if(isEmpty(username)){
        message.username = "Please fill in username";
    }
    if(isEmpty(password)){
        message.password = "Please fill in password";
    }else if(password.length < 4 || password.length > 24){
        message.password = "Password must be between 4-24 characters";
    }

    if(Object.keys(message).length > 0){
        res.json({
            error : true,
            message : message
        })
    }else{
        password = bcrypt.hashSync(password,10);
        var sqlCheckUser = "SELECT COUNT(user_id) as total_record FROM user WHERE username = ?;";
        db.query(sqlCheckUser,[username],(err,result)=>{
            if(!err){
                if(result[0] && result[0].total_record != 0){ // user already exit 
                     res.json({
                        error:true,
                        message : "User already exist!"
                     })
                }else{
                    var sqlInsert = "INSERT INTO user (username,password,tel,email) VALUES (?,?,?,?)"
                    db.query(sqlInsert,[username,password,tel,email],(err,result)=>{
                        if(!err){
                            res.json({
                                message : "User create success!"
                            })
                        }else{
                            res.json({
                                error : true,
                                message :err
                            })
                        }
                }) 
                }
            }
        })
    
    }
}

const login = (req,res) => {
    const {
        username,
        password
    } = req.body;
    var message = {};
    if(isEmpty(username)){
        message.username = "Please fill in username";
    }
    if(isEmpty(password)){
        message.password = "Please fill in password";
    }else if(password.length < 4 || password.length > 24){
        message.password = "Password must be between 4-24 characters";
    }

    if(Object.keys(message).length > 0){
        res.json({
            error : true,
            message : message
        })
    }else{
        // - check username is exist
        var sql = "SELECT user_id , password,username,tel,email,create_at FROM user WHERE username = ? AND status = 1";
        db.query(sql,[username],(err,result)=>{
            if(!err){
                if(result.length == 0){
                    res.json({
                        error:true,
                        message : "Username does not exist!"
                    })
                }else{
                    // check password
                    var dataPassword = result[0].password; // pass from table
                    if(bcrypt.compareSync(password,dataPassword)){ ///123456 , "djal;djfqoiujpoalsjdf;laj;dlsfjal;dfj"
                        var data = result[0];
                        delete data.password;
                        const access_token = generateAccessToken({user:data})
                        res.json({
                            message : "Login success!",
                            access_token : access_token,
                            user:data
                        })
                    }else{
                        res.json({
                            error:true,
                            message : "Password incorrect!"
                        })
                    }
                }
            }
        })
    }
}

const generateAccessToken = (obj_inof) =>{
    return jwt.sign(obj_inof,config.local_token,{expiresIn:"1h"})
}

const changeStatusUser = (req,res) => {
    var user_id = req.body && req.body.user_id; // undefine.user_id
    var status = req.body && req.body.status; // undefine.user_id
    if(isEmpty(user_id)){
        res.json({
            error: true,
            message : "user_id required!"
        })
    }else if(isEmpty(status)){
        res.json({
            error: true,
            message : "status required!"
        })
    }else{
        db.query("UPDATE user set status = ? WHERE user_id = ?",[status,user_id],(err,result)=>{
            if(err){
                res.json({
                    error:true,
                    message: err
                })
            }else{
                res.json({
                    message: "user update status success"
                })
            }
        })
    }
}

module.exports = {
    createUser,
    login,
    changeStatusUser,
    validateToken
}