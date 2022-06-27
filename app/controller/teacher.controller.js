
const teacher = [
    {
        id  : 101,
        name : "Sok",
        gender : "male",

    },
    {
        id  : 101,
        name : "Sok",
        gender : "male",
        
    },
    {
        id  : 101,
        name : "Sok",
        gender : "male",
        
    }
]

const getLists = (req,res) =>{
    res.json({
        list : teacher
    })
}
const create = (req,res) => {
    res.send("Create Teacher")
}
const edit = (req,res) => {
    res.send("Edit Teacher")
}
const remove = (req,res) => {
    res.send("Delete Teacher")
}
module.exports =  {
    getLists,
    create,
    edit,
    remove
}