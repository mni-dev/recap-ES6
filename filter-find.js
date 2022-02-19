//filter() , find() Methods to loop through array elems based on some condition
const numbers = [4, 5, 8, 78 ,21 ,69, 45, 34];
const bigNumbers = numbers.filter(num => num > 20);
console.log(bigNumbers);
const smallNumbers = numbers.filter(num => num < 10);
console.log(smallNumbers);
const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile', price: 5000, color: 'black'},
    {name: 'watch', price: 12000, color: 'silver'},
    {name: 'mouse', price: 900, color: 'white-black'},
    {name: 'water-glass', price: 500, color: 'green'}
]
/* const expensive = products.filter(product => product.price < 1000);
console.log(expensive); */
const expensive = products.find(product => product.price < 1000);
console.log(expensive);


//Differences between find() and filter()
/* 
1. find() gives 'undefined' and filter gives [] when elem not found
2. find() gives only the first match, filter() gives all matches
3. find() returns elem within {...}, filter() within [{...}]
*/
