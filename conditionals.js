

// Comparison

//all comparison operators return boolean value: true or false


// String comparison


//Numbers compared by values 
//Strings compared by lexicographical order (value of character as per Unicode value (A != a)):
//The algorithm to compare two strings is simple:
// - Compare the first character of both strings.
// - If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
// - Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
// - Repeat until the end of either string.
// - If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.


console.log("Z" > "A"); //true
console.log("Glow" > "Glee"); //true
console.log("PARADE" > "parade"); //false


//Different type comparison


//when comparing different types, JavaScript converts the values to numbers.

console.log("2" > 1); //true, as 2 > 1 
console.log("01" == 1); // true, as 1 = 1

console.log(true == 1); // true, boolean true = 1 , so 1 = 1 is true
console.log(false == 0); // true, boolean false = 0, so 0 = 0 is true


//Strict equality


console.log("" == false); // true,cause empty string equals to 0 and check done only by value == is loosen equality
console.log("" === false); // false, cause string != boolean. this check is strict equation and it compares not
// only value as == does, but also a type



// Compatison with null and undefined

// null = 0, undefined = NaN - as a basic rule for math comparisons

console.log(null == undefined); //true, as their values equal to each other
console.log(null === undefined); // false, as their values are equal, but types are different

console.log(null > 0); //false, cause null converts to zero and 0 !> 0
console.log(null == 0); // false , cause null == undefined and nothing else
console.log(null >= 0); // true, cause 0 = 0, as >= or == work differently

console.log(undefined > 0); // false, cause undefined is NaN,special numeric value which returns false for all comparisons
console.log(undefined < 0); // false, cause undefined is NaN,special numeric value which returns false for all comparisons
console.log(undefined == 0); // false, cause undefined == null and nothing else



//Logical operators



//There are 4 logical operators || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).


// || (OR) 


console.log(true || true); //true
console.log(false || true); //true
console.log(true || false); //true
console.log(false || false); //false

//if operand is not boolean, its converted to a boolean for the evaluation

if (1 || 0) {  //works the same way as if (true || false)
    console.log("truthy!"); // truthy
};

let hour = 9;
if (hour < 10 || hour > 18) { //used to check if statement is true and if true prints a message
    console.log("The office is closed"); // true; The office is closed.
}

let workingHour = 12;
let isWeekend = true; // this variable should have a function determining correct day to pass true or false
if (workingHour < 10 || hour > 18 || isWeekend) {
    console.log(" The shop is closed"); //true, The shop is closed. True only because isWeekn stated
    // to be true. So its basically false || false || true.
}


//JavaScript related (OR) features

//result = value1 || value2 || value3, so the OR || operator does the following:
// - evaluates operands from left to right
// - for each operand,converts it to boolean, if result is true, stops and returns the original value
// - if all operands have been evaluated (i.e all were false), returns the last operand
// when value returns - its returned in its original form, without the conversion.

console.log(1 || 0); // 1 (1 is truthy)
console.log(null || 1); // 1 (1 is the first truthy value);
console.log(null || 0 || 1); // 1 (the first truthy value);
console.log(undefined || null || 0); // 0 (all falsy, returns the last value);

//this features give us an interesting usage:
// a) getting the first truthy value from a list of variables or expresions

let firstName = "";
let lastName = "";
let nickName = "CuttiePatootie";

console.log(firstName || "SweetieAprechot" || lastName || nickName || "Anonymous"); //"SweetyAprechot" is
// first truthy value and result
console.log(firstName || null || lastName || undefined || nickName || "Sweetie Aprechot" || "Anonymous");
// nickName and its value is a result , as its a first truthy value

// b) "short-circuit" evaluation

true || console.log("not printed"); // result won't be printed because of "short-circuit" evaluation,
// because || processes its arguments and as soon as true comes - immediately returns value, without even
// touching the other argument 
false || console.log("printed"); // result is printed, because false is omitted, so || proceeds to next
// argument and returns it


// && AND 

console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false 
console.log(false && false); // false

let hour1 = 12;
let minute = 30;

if (hour1 == 12 && minute == 30) {
    console.log("The time is 12:30"); //true && true, results in printing out value given in .log
}

if (1 && 0) { // evaluated as true && false, it returns as false and value given in .log wont be printed
    console.log("won't work, because the result is falsy");
}

//result = value1 || value2 || value3, so the AND && operator does the following:
// - evaluates operands from left to right
// - for each operand,converts it to boolean, if result is false, stops and returns the original value of operand
// - if all operands have been evaluated (i.e all were true), returns the last operannd
// AND returns the first falsy value or the last value if none were found

console.log(1 && 0); // returns 0, true && false returns false
console.log(1 && 5); // retunrs 5, true && false returns false

//same as in || OR , && AND operator check for falsy arguments, and when found, it ignores other argument:

console.log(null && 5); //null, as null considered as false
console.log(0 && "no matter what"); // 0
console.log(1 && 2 && null && 4); //null as first falsy value
console.log(1 && 2 && 3); // 3, as all values are true, last one is returned


// Precedence of AND && is higher than OR || (&& > ||);


// ! NOT

//result = !value;

//The operator accepts a single argument and does the following:
// - converts the operand to boolean type: true/false.
// - returns the inverse value

console.log(!true); // false
console.log(!0); // true

// A double NOT !! is sometimes used to convert a value to boolean type:

console.log(!!"non empty string"); // true
console.log(!!null); //false
//basically process is simple, first ! inverts value into boolean, and second ! inverts boolean to 
// correct boolean value of initial operand:
// !!null == ( !null -> true; !true ==) false;

// function Boolean == !!

console.log(Boolean("non-empty-string")); // true
console.log(Boolean(null)); //false



//Conditional branching: if, "?"


// basic exmple of if () statement

let question = console.log("Are you a human?", ""); //should be propmt, but replaced for reduced pop-ups
if (question == "Yes") {
    alert("Hello Wolrd");
}


// Boolean conversion

// if (...) statement evaluates the expresion in its parentheses and converts the result to a boolean.
// if value or expression in parentheses resulted as falsy - nothing is executed:

if (0) { // 0, "", null, undefined and NaN are all falsy values, so nothing will execute

}

// if value or expression in parentheses are truthy - action executed:

if (1) { // any results except 0, "", undefined, null, NaN will be considered as true and execute

}


//The "else" clause

// else is optional block which executes when condition is falsy:

let question1 = console.log("Are you a human?", ""); //should be propmt, but replaced for reduced pop-ups
if (question1 == "Yes") {
    alert("Hello Wolrd");
} else {
    console.log("Cyborg! Run!"); //should be alert,but too annoying
}


// Severeal conditions:"esle if"

// whenever we need to test several variants of condition, we use esle if clause: 

let question2 = console.log("Are you a human?", ""); //should be propmt, but replaced for reduced pop-ups
if (question2 == "Yes") {
    alert("Hello Wolrd");
} else if (question2 == "Maybe") { //if first expression resulted as false we can do another check
    alert("Reconsider and come again");
} else {
    console.log("Cyborg! Run!"); //should be alert, but too annoying
}

//there can be more "else if", and the last "else" is optional.



//Conditional operator "?"


//sometimes we need to assign a variable depending on a condition:

let accessAllowed;
let age = console.log("How old are you", ""); //should be prompt

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
console.log(accessAllowed);


//the same check can be done in simplier way with "conditional" or "question mark" operator.

let accessAllowed1 = age > 18 ? true : false;

//general syntax is:

// let result = ( condition ) ? value1 : value2; // condition is evaluated: if its truthy then value1 is returned,
// otherwise - value2.

// the operator is represented by question mark ? (ternary, called so because operator has three operands.



//Multiple "?"

// a sequence of question mark operators ? can return a value that depends on more than one condition:


let growthness = console.log("Your age?", "");

let message = (growthness < 3) ? "Hi, Baby" :
    (growthness < 18) ? "Hello" :
        (growthness < 100) ? "Greetings" :
            "What an unusual age!";

console.log(message);

// in if expresion it will look as following:

let age1 = console.log("Your age?", ""); //should be prompt

if (age1 >= 0.1 && age1 <= 3) {
    alert("Hi, baby");
} else if (age1 > 3 && age1 <= 18) {
    alert("Hello");
} else if (age1 > 18 && age1 < 100) {
    alert("Greetings");
} else {
    console.log("What an unsual age"); //should be alert, but too annoying
}



//Non - traditional use of "?"


//sometimes the question mark ? is used as a replacement for if:

let company = console.log("Which company created JavaScript?", ""); //should be prompt 

//(company == "Netscape") ? alert("Right") : alert ("Wrong"); should be uncommented

//its not recommended to use ? this way as its less readable, even statement shorter.

//the purpose of the question mark ? operator is to return one value or another depending on its condition,
// so its better to use it for the purpose. 
// the purpose of if construct to execute different branches of code, so no need to mix things upside down.



//The "switch" statement

// A switch can replace multiple if checks, which gives a more descriptive waay to compare a value with 
// multiple variants.

// the syntax
// the switch has one or more case blocks and an optional default:

switch (x) { //value x is going to be checked for strict equality
    case "value1": // if (x === "value1")
        console.log(); //some code which need to be executed if value1 is true, until break or end of switch
        break;
    case "value2": // if (x === "value2")
        console.log(); //some code which need to be executed if value2 is true, until break or 
        break;

    default: // in no case is matched then the default is executed
        console.log(); // some code which need to be executed in case both value1 and value 2 are false
        break;
}

