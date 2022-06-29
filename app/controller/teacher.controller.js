
var teacher = [
    {
        id  : 101,
        name : "Sok",
        gender : "male",
        email : "sok@gmailcom"

    },
    {
        id  : 102,
        name : "Jon",
        gender : "male",
        email : "jon@gmailcom"
        
    },
    {
        id  : 103,
        name : "Messi",
        gender : "male",
        email : "mesii@gmailcom"
        
    },
    {
        id  : 104,
        name : "Bona",
        gender : "male",
        email : "bona@gmailcom"
    }
]

const getLists = (req,res) =>{
    var record = teacher.length
    res.json({
        total_record : record,
        list : teacher
    })
}
const  getOne = (req,res) => {
    // console.log(req.query);
    // console.log(req.body);
    var params = (req.params);
    var list = teacher.filter((item,index)=> (item.id == params.id)) //item.name == params.id || 
    
    res.json({
        list : list
    })
}

const create = (req,res) => {
    var body = req.body

    var message = ""
    if(body.id == null || body.id == ""){
        message = "param id require!";
    }else if(body.name == null || body.name == ""){
        message = "param name require!";
    }else if(body.gender == null || body.gender == ""){
        message = "param gender require!";
    }else if(body.email == null || body.email == ""){
        message = "param email require!";
    }

    if(message == ""){
        // check if existing id
        var list = teacher.filter((item,index)=>item.id == body.id);
        if(list.length !=0 ){
            res.json({
                error : true,
                message : "Teacher id alread exist! Please try other"
            })
        }else{
            teacher.push(body)
            res.json({
                message : "Add success"
            })
        }
    }else {
        res.json({
            error : true,
            message :message
        })
    }
    
    
}
const edit = (req,res) => {
    res.send("Edit Teacher")
}
const remove = (req,res) => {
    res.send("Delete Teacher")
}

module.exports =  {
    getLists,
    getOne,
    create,
    edit,
    remove
}