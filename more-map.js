//Find length of string array elems using map() METHOD
const friends = ['tom curtze', 'salina', 'silvia', 'catrina'];
const fLength =friends.map(friend=>friend.length);
console.log(fLength);

//find each Element of Array using map() Method
const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile', price: 5000, color: 'black'},
    {name: 'watch', price: 12000, color: 'silver'},
    {name: 'mouse', price: 900, color: 'white-black'},
    {name: 'water-glass', price: 500, color: 'green'}
]
const productsName =products.map(item=>item.name);
const productsColor =products.map(item=>item.color);
console.log(productsColor);
console.log(productsName);
products.map(product => console.log(product));