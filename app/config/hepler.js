
const config = {
    local_token : "JLKDJdfaljlafjl;kjl;kjfejopijsdjf;lkjl;kjdaFLKJELKJDLFJSLFK",
}
const isEmpty = (value) =>{
    if(value == null || value == undefined || value == ""){
        return true
    }
    return false;
}

module.exports = {
    isEmpty,
    config
}