//Declare variable based on the names of an object property
const myObject = {x:25, y: 50, z: 200, a:842};
const{x, a} = myObject;
console.log(a);

//Destructuring Array
const [c, d] = [45, 86, 456, 2546]; //c=45, d=86 and so on.
console.log(d);

const [good, excellent] = [456, 879];
console.log(excellent);

const [k, u] = ['shah alam', 'aiman'];
console.log(k);

//Chaining
const company = {
    name:'GP', 
    ceo: { id: 12, name: 'ajmol', food: 'fuska'},
    web: {
    work: 'website development', 
    employee: 22, 
    framework:'react',
    tech: {
    first: 'html', second: 'css', third: 'js'}},};
// console.log(company.web.tech.third);
console.log(company.backend?.tech.third); //Question mark tells 'if it is not found, give 'undefined'.