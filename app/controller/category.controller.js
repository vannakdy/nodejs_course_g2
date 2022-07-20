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
    var sql = "SELECT * FROM category";
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

const create = () => {
    var message = "";
    var body = req.body;
    if(body){
        if(isEmpty(body.name)){
            message.name = "param name require!"
        }
    }
};
const update = () => {};
const remove = () => {};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
