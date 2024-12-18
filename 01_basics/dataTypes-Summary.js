// primitive Datatypes
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference type(Non premitive)
// Arrays , Objects, Functions --> datatypes : Array and Objects --> function ,, Function --> function object

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') // id and another id both are different althogh both has same symbols 

console.log(id === anotherId); // false

const bigNumber = 465386865497946641n //big int

const heros = ["shaktiman","hanuman","doga","naagraj"]; // Array
let myObj = {
    name: " hari",
    age: 20 ,
}                     // object --> data types can be anything


const myfun = function(){
    console.log("Hello world");
}

console.log(typeof outsideTemp); // object
console.log(typeof scoreValue); // number
console.log(typeof myfun); // function (function object)
console.log(typeof heros); // object



