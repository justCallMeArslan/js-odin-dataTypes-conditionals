const string = "The revolution will not be televised";
console.log(string);

const badString = string;
console.log(badString);

//"doubleQoutes" and 'singleQoutes' have the same purpose, but better to stack with one for project
// `backticks` also called template literal - the way to declare strings, but it also has special usage:
// - You can embed JS in them
// - You can declare template literals over multiple lines.



//Embedding JavaScript

// Inside a template literal, you can wrap JS variables or expression using ${}, and result will be included:

const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); //output Hello, Chris

const one = "Hello cutie, ";
const two = "how are you doing?";
const joined = `${one}${two}`;
console.log(joined);


// Concatenation using "+"

//We can use ${} only with template literals, not normal strings. For normal strings we can use + operator:

const greeting2 = "Hello";
const name2 = "Bobby";
const joined2 = greeting2 + ", " + name2;
console.log(joined2);

// option with template literals :

const greetings3 = "Hello";
const name3 = "Mansurio";
const joined3 = `${greetings3}, ${name3}`;
console.log(joined3); //output Hello, Mansurio


//Including expressions in strings:

//You can include JavaScript expressions and variables, and the results will be included in created string:

const song = "Fight with Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I rated it ${(score/highestScore) * 100}% on Spotify.`;
console.log(output); // I like the song Fight with Youth. I rated it 90% on Spotify.

//Multiple strings

//Template literals respect the line breaks in code,so you can write strings that span multiple lines:

const newLine = `One day you finnaly knew
what you had to do. This day will
eventually come. Wait for it.`
console.log(newLine); 

// to have equivalent in normal string we will have to use \n (line break)


//Including quotes in strings

const goodQuotes = 'She said "I think so"'; //two different qoutes used to complete string
console.log(goodQuotes);

const bigMouth = 'I\'ve got no right to take my place..'; // \' used to place ' in string
console.log(bigMouth);


const coolBandName = "Front";
const number = 242;
console.log(coolBandName + number); //Front242

//Number() function or +variable converts anything passed to as a number (if possible).

const numberString = "56789";
const myNum = Number(numberString);
console.log(typeof myNum); //number

// String() function converts its argument to a string.

const myNum2 = 98765;
const numberString2 = String(myNum2);
console.log(typeof numberString2); // string

