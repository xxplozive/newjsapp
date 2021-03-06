//alert('Kartik Nath - 2022');
//console.log('log note #1');
//console.error('error writing to file');
//console.warn('this is only a warning');


//variables
//var let and const 
// var was the original variable but we don't want to use it any more

const owner = 'Kartik Nath';
const age = 42;
//let age = 30;
//age = 31;

console.log('This page is maintained by', owner,'-', 'His age is '+ age);

//datatypes
//primitive = directly assigned to memory
//strings numbers boolean null undefined Symbol 

const isAlive = true;
const rating = 4.5; //no float or decimal datatype in Javascript
//const x = null; 
const y = undefined;

console.log (typeof y);

//objects for example arrays

// Let's talk about strings 
// Concatenation 
//Template String
const hello = `My name is ${owner} and I am ${age}`;
console.log(hello);

const s = 'Hello World';
s.toUpperCase();

console.log(s);
console.log(s.toUpperCase());
console.log(s.split(''));
//console.log(s.length);

//arrays
//Testing for git connection 

const dob = new Array(10, 12, 7, 6);
const randomStuff = ['anaaya','nilu','niko', 12, 10, 6];
dob.push('july');
randomStuff.push('kartik');

dob.pop();
randomStuff.pop();

console.log(dob);
console.log(randomStuff);

//Object literals

const person = {
    firstName: 'Kartik',
    lastName: 'Nath',
    age: 42,
    hobbies: ['sports', 'movies', 'golf', 'tech-videos'], 
    address: {
        street: '83-40 austin street',
        city: 'Kew Gardens',
        state: "NY"
    }
}

person.email = 'kartiknath@gmail.com';
console.log(person);
console.log(person.hobbies[2]);

//array of objects 
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
        
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos[2].text);

//JSON objects 
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//Loops

for (let i =0; i <= 10; i++){

    console.log(`The latest number is ${i}`);

};

let x = 0;
while(x < 10){

    console.log(`While loop number is: ${x}`);
    x++;
}

//traverse an array 
/*
for (let i=0; i < todos.length; i++) {

    console.log(todos[i].text);

};
*/

for(let todo of todos) { 
    console.log(todo.text);

};

//high order array method, forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.id);
});
const todoJustText = todos.map(function(todo){
    return todo.text;
});

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompleted);


//conditional 

const z = '10'; 
if (z == 10){
    console.log('z is 10');
}else{
    console.log('z is not 10')
}








const t = 6;
const u = 10;

if (t > 5 || u > 10){

    console.log('x is more than 5 or y is more than 10');

}


//ternary operator
const a = 9;

const color = a > 10 ? 'blue' : 'red';
console.log(color);

//switches


switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is unknown');

}

function getUser(name) {
return "my name is " + name;

}

console.log(getUser("Kartik"));

function getLast(anyNumber) {
    return "the last number is "+ anyNumber; 
}

console.log(getLast(42));



























