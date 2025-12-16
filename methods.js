// Basic string methods in JavaScript


// String Lenght


let text = "ASDFGHJKL"
let length = text.length;
console.log(length); // 9


//Extracting String character - 4 methods to do so:

let text1 = "ASDFGHJKL";
let char = text1.charAt(3);
console.log(char); // F


let text2 = "ASDFGHJKL";
let char1 = text2.charCodeAt(3); // used to return UTF-16 code of character at a specified index
console.log(char1); // 70
let text3 = "ASD★GHJKL";
let char2 = text3.codePointAt(3) //used to return Unicode code of character at a specified index
console.log(char2); // 9733


const brand = "W3Schools";
let letter = brand.at(-2); //method at() used to return specified character, can also take negative value
let letter1 = brand.at(2)
console.log(letter); // l
console.log(letter1); // S


let letter2 = brand[2]; //another visualization as Property Access,its cannot have negative index value
console.log(letter2); // S

// String concat()

// .concat() concatenates the string argument (str1) to the calling string and returns a new string
// .concat() methos is similar to (+, +=), but with the difference in .concat() if arguments are not 
// of the string type - they are converted to string values before concatenating

const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2, "!")); // Hello World!
console.log(str2.concat(", ", str1, "!")); // World Hello!



// Extracting String Parts - 2 methods to do so:


let fruits = "Apple, Banana, Kiwi";
let part = fruits.slice(7, 13); // slice() extracts part of string and returns extracted part as new string. 
// Requires start and end positions (not including end); if only 1 position given, function takes
// 0 as START and slices string UP TO given position.
console.log(part); // Banana


let fruits1 = "Apple, Banana, Kiwi";
let part1 = fruits1.substring(7, 13); //substring() works the same as slice(), but when only 1 position
// given, it takes it as a START and cuts everything before that position, creating new string with 
// what remained. substring(does not take negative values).
console.log(part1); // Banana



//String Case conversion


let text4 = "Hello World";
let text5 = text4.toUpperCase(); // makes whole string to appear in Upper Case
console.log(text5); // HELLO WORLD


let text6 = "Hello World";
let text7 = text6.toLowerCase(); // makes whole string to appar in Lower Case
console.log(text7); // hello world











