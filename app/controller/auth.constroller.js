const db = require("../config/db.config");
const {isEmpty}  = require("../config/hepler");
const bcrypt = require("bcrypt")
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

const login = () => {

}

const changeStatusUser = () => {

}

module.exports = {
    createUser,
    login,
    changeStatusUser
}