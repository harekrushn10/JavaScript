let score = "33abc"

console.log(typeof score); //string
console.log(typeof(score)); //string

let valueInNumber = Number(score) //convert string in number datatype
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //NaN => not an number


let store = null

console.log(typeof store); //object
console.log(typeof(store)); //object

let valueToNumber = Number(store) //convert null in number datatype
console.log(typeof valueToNumber); //number
console.log(valueToNumber); //0


let count = undefined

console.log(typeof count); //undefined
console.log(typeof(count)); //undefined

let valueOfNumber = Number(count) //convert undefined in number datatype
console.log(typeof valueOfNumber); // number
console.log(valueOfNumber); //NaN



let bool = true

console.log(typeof bool); //boolean
console.log(typeof(bool)); //boolean

let valueIsNumber = Number(bool) //convert boolean in number datatype
console.log(typeof valueIsNumber); //number
console.log(valueIsNumber); //1

let Name = "hari"

console.log(typeof Name); //string
console.log(typeof(Name)); //string

let valueinNumber = Number(Name) //convert string in number datatype
console.log(typeof valueinNumber); //number
console.log(valueinNumber); //NaN => not an number


//33 => 33 
//33abc => NaN
//true => 1 , false => 0

let isLoggedIn = 11

let booleanIsLoggedIn = Boolean(isLoggedIn) //convert values in boolean datatype
console.log(booleanIsLoggedIn); 

// number => true  //1 => true ,0 => false
// empty "" => false
// name(String) => true


let someNumber = 21
let stringNumber = String(someNumber) //convert values in string datatype
console.log(typeof stringNumber); //string
console.log(someNumber); //21

