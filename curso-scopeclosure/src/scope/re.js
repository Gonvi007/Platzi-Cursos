//Asignación y declaración.
var firstName; //Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = "David"; //Declarar / asignar
lastName = 'Ana';       //Reasignar
console.log(lastName);

// Reasignación
var secondName = 'David';   //Declarando / asginando
var secondName = 'Ana';     //Reasignación
console.log(secondName);

// Let
let fruit = 'Apple';     //declara y asigna
fruit = 'kiwi';     //Reasignar
console.log(fruit);

let fruit = 'Banana'; //Con Let no se puede DECLARAR, solo REASIGNAR.

//  Const
const animal = 'dog';   //declarada y asignada
animal = 'cat';         //reasignado, pero no lo permite const
console.log(animal);        

const vehicles = [];
vehicles.push("coche");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);