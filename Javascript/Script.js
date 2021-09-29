// This is a simple console logging statement
console.log("A bit about me:");

// Different kinds of console logging
const firstName ='Connor';
const lastName ='Macphee';
const birthPlace ='Inverness';
const zodiac ='Scorpio';

console.log("First name: " + firstName);
console.log("Surname: " + lastName);
console.log("Where I'm from:: " + birthPlace);
console.log("Star Sign: " + zodiac);

// console.info(lastName);

// console.warn(birthPlace);

// console.error(zodiac);

// To make your console log look unique you can insert css

console.log('%c' + firstName + '%c' +  lastName,
 'color: orange; font-family: sans-sheriff; font-weight: bold; background-color: black; padding: 10px',
 'color: orange; font-family: sans-sheriff; font-weight: bold; background-color: black; padding: 10px'
 );