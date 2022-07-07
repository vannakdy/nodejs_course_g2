
const db = require("../config/db.config")

function getAll(req,res){
    var sql = "SELECT * FROM customer;"
    db.query(sql,(err,result,field)=>{
        if(err){
            res.send(err)
        }else{
            res.json({
                customer : result,
                field : field,
            })
        }
    })
    db.end();
}

function getOne(req,res){
    var id = req.params.id;
    // var id = "2; DELETE  FROM customer WHERE id = 1"
    // var sql = "SELECT * FROM customer WHERE id = "+id+" AND statuse = " + 1;
    var sql = "SELECT * FROM customer WHERE id = ?"; 
    db.query(sql,[id],(err,result)=>{
        if(err){
            res.json({
                error:true,
                data_error : err
            })
        }else{
            res.json({
                customer : result
            })
        }
    })
}

function create(req,res){
    var {
        firstname,
        lastname,
        tel,
        dob,
        address_id,
        gender,
    } = req.body;

    var message = "";
    if(firstname == null || firstname == ""){
        message = "firstname requred!";
    }else if(lastname == null || lastname == ""){
        message = "lastname requred!";
    }else if(tel == null || tel == ""){
        message = "tel requred!";
    }else if(address_id == null || address_id == ""){
        message = "address_id requred!";
    }

    if(message != ""){
        res.json({
            error : true,
            message : message
        })
    }else{
       var sqlInsert = "INSERT INTO customer (`firstname`, `lastname`, `gender`, `dob`, `tel`, `address_id`) VALUES (?,?,?,?,?,?)";
       db.query(sqlInsert,[firstname,lastname,gender,dob,tel,address_id],(err,result,field)=>{
            if(err){
                res.json({
                    error : true,
                    message : err
                })
            }else{
                res.json({
                    message : "Insert Success",
                    field : field,
                    list : result
                })
            }
       })
    }   
}

function remove(req,res){
    if(req.body.id == null || req.body.id == ""){
        res.json({
            error : true,
            message : "param id required!",
        })
    }else{
        var sqlDelete = "DELETE FROM customer WHERE id = ?;"

        db.query(sqlDelete,[req.body.id],(err,result)=>{
            if(err){
                res.json({
                    error : true,
                    message : err,
                })
            }else{
                res.json({
                    message : result.affectedRows  != 0 ? "Delete success!" : "customer id not found!",
                })
            }
        })
    }
}

// `firstname`, `lastname`, `gender`, `dob`, `tel`, `address_id` 

module.exports = {
    getAll,
    getOne,
    create,
    remove
}

