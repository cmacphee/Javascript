// // This is a simple console logging statement
// console.log("A bit about me:");

// // Different kinds of console logging
// const firstName ='Connor';
// const lastName ='Macphee';
// const birthPlace ='Inverness';
// const zodiac ='Scorpio';

// console.log("First name: " + firstName);
// console.log("Surname: " + lastName);
// console.log("Where I'm from:: " + birthPlace);
// console.log("Star Sign: " + zodiac);

// // console.info(lastName);

// // console.warn(birthPlace);

// // console.error(zodiac);

// // To make your console log look unique you can insert css

// console.log('%c' + 'Hi, my name is ' + firstName + '' + lastName,
//  'color: orange; font-family: sans-sheriff; font-weight: bold; background-color: black; padding: 10px'
//  );

let standard = 'variable';

const constant = 'variable';

var es4_DontUseThis = 'variable';

let thisIsMyNewVariable = 1;

let $myVariable = 2;

let _newVar = 3;

//DataTypes

let aBoolean = true;
let aNumber = 4;
let aString = 'this is a string';

// 'n' numeric literal requried for larger numbers
let aBigInt = 99999999999999999n;
let aBrokenBigInt = 999999999999999999999999;
console.log(aBigInt);
console.log(aBrokenBigInt);

//symbol - unique, includes descripton
let aSymbol = Symbol('description of symbol');

//undefined variables
let aNull = null;
let anUndefined;
console.log(typeof(undefined));

//JavaScript is mutable 
anUndefined = "hello";
console.log(anUndefined);
console.log(typeof(anUndefined))

console.log ("you can have" + "\r\n" + "multiple lines in lone log");

let myObject;

console.log(myObject);

myObject = {
    key: 'value',
    age: 26,
    height: '186cm',
    name: 'Connor'
};

console.log(myObject);

//concatenation
let string1 = '2 + 2 = ';
let string2 = 2+2;
console.log(string1 + string2);

//interpolation
console.log(`2 + 2 = ${2+2}`);

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;

console.log(`The total bill is £${totalMoney} the remaining amount 
of money to be paid is £${totalLeftToPay}`);