//Conditionals

//FALSEY - these are the situations where a variable will resolve as false
let falseOne = 0;
let falseTwo = '';
let falseThree;
let falseFour = null;
let falseFive = NaN;
let falseSix = false;

// everything else is TRUTHY

// IF Statement (Also ELSE IF and ELSE)

let a = 2;

if ( a == 0 ) {
    console.log('success!');
} else if ( a != 2 ) {
    console.log('not 2')
} else {
    console.log('it must be 2')
};

//Ternary IF
//normal
let b = false;

if ( b == true ) {
    console.log('b is true!');
} else {
    console.log('b is false!')
};
//Ternary
b ? console.log('true') : console.log('false')

//IF Statement Tutorial
let age = 17

if ( age < 18 ) {
    console.log('underage')
} else if ( age > 65 ) {
    console.log ('OLD')
} else {
    console.log(`age is between 18 and 65...${age}`)
};

age > 50 ? console.log('age is greater than 50') : console.log('50 or less')