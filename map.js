const numbers = [4, 6, 10, 8];
const output2 =[];
//arrow function in a varible
const doubleIt = num => num * 2;

/* for(const num of numbers){
    const result = num *2;
    output.push(result);
} */
//a)
for(const num of numbers){
    const result = doubleIt(num);
    output2.push(result);
}
// console.log(output2);
//Steps followed
/* 
1. Run loop through each element
2. Function call for each element
3. Push result in an empty array
*/
//b)Using .map() Method
const output =numbers.map(num => num * 2);
//c)
// const output =numbers.map(doubleIt);
console.log(output);

//find square of numbers using map() METHOD
const myNumbers = [10, 12, 13, 14, 15];
const square = myNumbers.map(x => x*x);
console.log(square);