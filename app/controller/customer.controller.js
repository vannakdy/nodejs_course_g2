
const { response } = require("express")
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
    var sql = "SELECT * FROM customer WHERE id = ? AND address_id = ?"; 
    db.query(sql,[id,1],(err,result)=>{
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
    // db.query(sql,function(err,re,f){ // function(err,re,f){} == (err,re,f)=>{}

    // })
}

module.exports = {
    getAll,
    getOne
}

