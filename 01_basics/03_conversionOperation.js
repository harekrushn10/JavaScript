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

// **************************************** Operations ********************************************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2); //sum
console.log(2-2); //substract
console.log(2*2); //multiplt
console.log(2**3); //** => gives power of
console.log(2/3); //divide
console.log(2%3); //modulo => gives reminder

let str1 = "hello"
let str2 = " hari"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); //32

console.log((3 + 4) * 5 % 3); // 2

console.log(true); //true
console.log(+true); //1
console.log(+""); //0

let num1 , num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++; // 100+1
console.log(gameCounter); // 101



