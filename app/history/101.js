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
    gender : "Male",
    child : {
        id : "101",
        name : "A",
        child : {
            id : 102,
            name : "JonSina"
        }
    }
}

console.log(obj1.child.child.name)
// id name gender // key of object or properties

console.log(obj1.id +"\t"+obj1.name+"\t"+obj1.gender)


var arr_course = ["ReactJS","ReactNative","Node.js","PHP",9,"dd"]
console.log(arr_course[arr_course.length-1]) // get last element of array

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

// for loop

// for in 
for(var x in arr_course){
    console.log(arr_course[x])
}

// for of
for(var item of arr_course){
    console.log(item)
}

arr_course.map((item,index)=>{
    console.log((index+1)+". "+(item))
})


var i = 0;
do {
    console.log(arr_course[i]);
    i++;
} while(i < arr_course.length)

var  i = 0;
while(i < arr_course.length){
    console.log(arr_course[i]);
    i++;
};


console.log("============")

arr_course.forEach((item,index)=>{
    console.log(index)
})
arr_course.forEach(item=>{
    console.log(item)
})


// for() loop
// for in // return index of array
// for of // return item of array
// map 
// forEach
// do while 
// while 


console.log("=========== Function ==========");

function myFunction(){
    console.log("Hello my function")
}
const myArrFunction = () => { // arrow function
    console.log("My arrow function")
}

const getTotalPrice = () => {
    return 100 * 10;
}



const getTotalPrice1 = (qty,price) => {
    return getTotalPrice() * qty * price;
}

var sum = 0;
const sumSeri = (n) => {
    for(var i = 1 ; i <= n ; i++){
        sum += i;
    }
    console.log("Sum = "+sum)
}

myFunction(); // calling function
myArrFunction();
var totalPrice = getTotalPrice()+1;
console.log(totalPrice)
console.log(getTotalPrice1(10,200))

sumSeri(5); // 1 + 2 + 3 + 4 +5



