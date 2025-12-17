// Basic string methods in JavaScript


// String Lenght


let text = "ASDFGHJKL"
let length = text.length; //method used to measure variable length
console.log(length); // 9


//Extracting String character - 4 methods to do so:

let text1 = "ASDFGHJKL";
let char = text1.charAt(3); // method gives character requested in (index)
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

// .concat() concatenates the string argument (str2) to the calling string and returns a new string
// .concat() methods is similar to (+, +=), but with the difference. in .concat() if arguments are not 
// of the string type - they are converted to string values before concatenating

const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2, "!")); // Hello World!
console.log(str2.concat(", ", str1, "!")); // World, Hello!



// Extracting String Parts - 2 methods to do so:


let fruits = "Apple, Banana, Kiwi";
let part = fruits.slice(7, 13); // slice() extracts part of string and returns extracted part as new string. 
// Requires start and end positions; if only 1 position given, method takes given position as START and cuts
// everything before that. 
// Can be used in strings and arrays. 
// If startIndex higher than endIndex (5, 2), returns empty string.
console.log(part); // Banana


let fruits1 = "Apple, Banana, Kiwi";
let part1 = fruits1.substring(7, 13); //substring() works the same as slice(), but does not take negative values.
// Can only be used in strings. 
// If startIndex higher then endIndex, e.g (5 , 2), automatically swaps values to (2, 5).
console.log(part1); // Banana



//String Case conversion


let text4 = "Hello World";
let text5 = text4.toUpperCase(); // makes whole string to appear in Upper Case
console.log(text5); // HELLO WORLD


let text6 = "Hello World";
let text7 = text6.toLowerCase(); // makes whole string to appar in Lower Case
console.log(text7); // hello world



//String formating methods


let abc = "Hello World";
let result = abc.isWellFormed(); //method that check either string has lone surrogates or not
console.log(result); // true

//lone surrogates is 1 out of 2 parts of pair surrogate (which is UTF-16 required feature to acquire more code points for larger parts)
let cba = "Hello World \uD800";
let res = cba.isWellFormed();
console.log(res); // false


let zxc = "Hello World \uD800";
let result1 = zxc.toWellFormed(); //method where all "lone surrogates" replaced with Unicode characters
console.log(result1); // Hello World �


let asd = "          Hello World            ";
let result2 = asd.trim(); //method removes all whitespaces from both sides of string
console.log(result2); // Hello World

let dsa = "              Hello World            |";
let result3 = dsa.trimStart(); //method remove whitespaces only from the start of the string
console.log(result3); // Hello World           |

let qwe = "          Hello World              ";
let result4 = qwe.trimEnd(); //method to remove whitespaces only from the end of the string
console.log(result4); //              Hello World



//String Padding


const str = "5";
const padding = str.padStart(5, "*"); // method takes 2 values (a , b), where a length of desired new string 
// and b which is the way how padding will be filled
console.log(padding); // ****5 

const str3 = "239000996548";
const last4Digits = str3.slice(-4); // slice() specifies numbers which will be shown, useful for long strings
const maskedNumber = last4Digits.padStart(str3.length, "*"); //.length used for automatization of flow
console.log(maskedNumber); //********6548

//in order to pad number we need to convert it to string (String())

const str4 = "Beautiful smile";
const padding2 = str4.padEnd(30, "."); //works the same as padStart(), but adds specified padding to the end of 
//the string
console.log(padding2); // Beautiful smile...............

const str5 = "Lorem ipsum dolor aitus benitus covim sador";
const shortParagraph = str5.substring(0, 20); // used to specify where we want text to end and padding start
const padding3 = shortParagraph.padEnd(str5.length, "."); 
console.log(padding3); // Lorem ipsum dolor ai.......................




//String repeat


const mood = "Chill ";
const myBehavior = `Day by day I become more ${mood}. Its like someone in my head tells me :"${mood.repeat(3)}"`; 
// repeat() used toreturn new string which contains the specified in (index) number of copies of the string,
// concatenated together. This method doesnt change original string.
console.log(myBehavior); // Day by day I become more Chill . Its like someone in my head tells me :"Chill Chill Chill "




//Replace String Content


const paragpaph = "I think Ruth's dog is cuter than your dog";
const replacement = paragpaph.replace("cuter", "darker"); // replace() method used for replacing one part of 
// string pattern (startIndex) with another part replacement (endIndex) value. Replaces only first match.
// pattern - string or object with Symbol.replace
// replacement - string or function
console.log(replacement); //I think Ruth's dog is darker than your dog.


const paragraph1 = "I think grass greener on the other side. Yeah, grass is always greener there.";
const replacement2 = paragraph1.replaceAll("grass", "trees"); // this method has the same functionality as .replace()
// but replacement used for all patterns in string.
console.log(replacement2); //I think trees greener on the other side. Yeah, trees is always greener there.



//String Split


const str6 = "The slow green turtle jumps over lazy elephant";

const words = str6.split(" "); // method turns string into array, which can differ in accordance with separator 
// type. Separator " " returns words as arrays
console.log(words); // ['The', 'slow', 'green', 'turtle', 'jumps', 'over', 'lazy', 'elephant']

const characters = str6.split(""); // separator "" returns letters as arrays
console.log(characters[19]); //l

const strCopy = str6.split(); // empty separator copies initial strings and turns it to array with string inside
console.log(strCopy); //
