
const getList = (req,res) => {
    res.send("getList Student")
}
const create = (req,res) => {
    res.send("create Student")
}
const edit = (req,res) => {
    res.send("edit Student")
}
const remove = (req,res) => {
    res.send("remove Student")
}

module.exports = {
    getList,
    create,
    edit,
    remove
}