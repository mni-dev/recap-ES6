//Destructuring Object
const fish = {id: 58, name:'king Hilsha', price:9000, phone:'017548923', address:'Chandpur', dress:'silver'};
/* const phone = fish.phone;
const price = fish.price;
const dress =fish.dress;
const id = fish.id;

console.log(phone); */

const {phone, price, dress, id} = fish; //means: const fish = {phone:..., price:..., dress:..., id:..}
console.log(id, phone);
// console.log(id, phone, code);

const company = {
    name:'GP', 
    ceo: { id: 12, name: 'ajmol', food: 'fuska'},
    web: {
    work: 'website development', 
    employee: 22, 
    framework:'react',
    tech: {
    first: 'html', second: 'css', third: 'js'}},};

//Three Ways to get object variables
//a)
const employee = company.web.employee;
console.log(employee);
//b)
const {work, framework} = company.web;
const {first, third} = company.web.tech;
console.log(framework);
console.log(third);
//c)
const {school, student, area} = {school:'CDA public', area: 'chandgaon r/a', student: 2500, teachers:65, building: 3};
console.log(student, school);

