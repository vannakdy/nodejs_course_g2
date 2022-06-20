console.log("Welcome Node.js")
console.log("My name is Sok")
console.log(10%3)

var x = 10; // x is variable
x = 100;
x = "Jon";
x = 10.44;
x = 100+10+"10"
x = 20
var y = 10;
var y = 20;
var sum = x + y;
console.log("value x = "+x)
console.log("value y = "+y)
console.log("sum = "+sum)


let value1 = 10;

const PI = 3.14;
const country = "Cambodia";
// country = "Thai"; can not Assignment to constant variable.

var obj1 = { // object
    id : 101,
    name : "Sok",
    gender : "Male"
}
// id name gender // key of object or properties

console.log(obj1.id +"\t"+obj1.name+"\t"+obj1.gender)


var arr_course = ["ReactJS","ReactNative","Node.js","PHP"]
var arr_person = [
    {
        id : 101,
        name : "Sok",
        gender : "Male"
    },
    {
        id : 102,
        name : "Jon",
        gender : "Male"
    },
    {
        id : 103,
        name : "Som",
        gender : "Female"
    }
];

for(var i = 0 ; i < arr_course.length ; i++){
    console.log(arr_course[i])
}

for(var i = 0 ; i < arr_person.length ; i++){
    var str_person = arr_person[i].id +"\t"+ arr_person[i].name +"\t"+arr_person[i].gender  
    console.log(str_person)
}

// console.log(arr_person[1].name + "\t"+arr_person[1].gender)

// console.log(arr_course[2]);
// console.log(arr_course.length);
