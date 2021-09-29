//SCOPE

//Function scope
function foo() {
    let bar = 'Hello World';
    console.log(bar);
};
foo();
//bar was declared inside function so cannot be called outside. Local scope
// console.log(bar);


//This is a block. block scope. again cant access outwith block
{
    let x = 1;
}
// console.log(x)

//var is not good as it allows you to access. bad practice.
{
    var y = 3;
};
console.log(y);

//Global scope - accessible outside the function if function is run first

function global() {
greeting = 'Heya';
};
global();
console.log(greeting)

//standard global - globally scoped so can be called 
//outside and inside of functions
let a = 'a';
console.log(a)

function b() {
    console.log(`a = ${a}`);
};

//order of scope:
//Local (inside the block)
//global (outside the block)
// if none exists add to the global scope

//SCOPE TUTORIAL







