//OBJECTS, ARRAYS and JSON

let animal = new Object();
//object values
animal["name"] = "Clifford";
animal["type"] = "Dog";
animal["Size"] = "Big";

console.log(animal);
console.log(animal.Size);
//colour will be added to object
animal.colour = "Red";
console.log(animal);

//Shorthand object creation
let vehicle = {
    "type" : "car",
    "seats" : "5",
    "wheels" : 4
};
console.log(vehicle);

//Object can be stored in an array
let garage = [
    vehicle,
    {"type" : "bike", "seats":"1", "wheels": 2}
];
console.log(garage);

//Lets loop through an array

let x = [1,2,3,4,5];
for (let i = 0; i < x.length; i++) {
    console.log(x[i])
}

//Enhanced FOR loop
let m = [21,22,98,4543,-99,35]
for (let i of m) {
    console.log(i)
}

//ARRAY OBJECT METHODS
//Reverse Array
console.log(m.reverse())
//join the array. put a | between the values
console.log(m.join(`|`))

//JSON
let newJSON = {
    "name" : "Connor",
    "age" : 26
}
//parse from json object
let myName = JSON.parse(`{"name" : "Connor"}`);
console.log(myName.name)
//string object
let str = JSON.stringify(newJSON);
console.log(str)

//OBJECT, ARRAYS & JSON TUTORIAL

let myArray = ["hello", "Everyone"]

console.log(myArray.length)

myArray.push("Hola", "Hey", "Yo");

console.log(myArray.length)

myArray.shift()
for (let i of myArray) {
    console.log(i)
}




