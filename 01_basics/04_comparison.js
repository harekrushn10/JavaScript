// console.log(2 > 1);  // true -->greater than 
// console.log(2 >= 1); // true -->greater than equal to
// console.log(2 <= 1); // false -->less than equal to 
// console.log(2 == 1); // false -->equal to
// console.log(2 != 1); // true -->not equal

console.log("2" > 1); // true  --> by default it converts str into number datatype
console.log("02" > 1); // true


console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false
 
// we always try to avoid null and undefined datatype comparisons for clean code 


// === (strict check) it checks datatype along with the comparison

console.log("2" === 2); // false
