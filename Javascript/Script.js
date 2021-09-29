//Functions
//structure
function funcName(arg1, arg2, arg3) {
    //execute some code
};

//sum - pass in variable
let x = sum(3, 5);
function sum(a,b) {
    return a + b;
}
console.log(x);


//Different types of functions - all do the same thing

let  welcome = function(){
    console.log('hello');
}

welcome();

let welcomeTwo = () => {
    console.log('hello two');
}
welcomeTwo();

welcomeThree = () => console.log('hello three');
welcomeThree();

welcomeName = fullName => console.log(`hello ${fullName}`);
welcomeName('Cameron');

//Functions Tutorials

let d = sum(99, 69);
function sum(a,b) {
    return a - b;
}
console.log(d);

aboutMe = (myName, age) => (
    console.log(`My name is ${myName}, I am ${age} years old`)
);
aboutMe('Connor', 26);

powerUp = (n1, n2) => (
    console.log(Math.pow(n1,n2))
);
powerUp(4,6);


