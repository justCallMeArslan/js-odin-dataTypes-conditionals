

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

console.log(null > 0); //false, cause null converts to zero and 0 !> 0, but 0 = 0
console.log(null == 0); // false , cause null == undefined and nothing else
console.log(null >= 0); // true, cause 0 = 0, as >= or == work differently

console.log(undefined > 0); // false, cause undefined = NaN,special numeric value which returns false for all comparisons
console.log(undefined < 0); // false, cause undefined = NaN,special numeric value which returns false for all comparisons
console.log(undefined == 0); // false, cause undefined == null and nothing else



5 > 4; //true 
"apple" > "pineapple"; //false
"2" > "12"; // true
undefined == null; // true
undefined === null; //false 
null == "\n0\n"; //false
null === +"\n0\n"; //false





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
    console.log(" The shop is closed"); //true, The shop is closed.
}


//JavaScript related (OR) features

//result = value1 || value2 || value3, so the OR || operator does the following:
// - evaluates operands from left to right
// - for each operand,converts it to boolean, if result is true, stops and returns the original value
// - if all operands have been evaluated (i.e all were false), returns the last operannd
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



// Tasks

console.log(null || 2 && 3 || 4); // precedence takes place so 2 && 3, going to be first to evaluate,
// it will return 3, as both are true and in that case && give the last operand, which is 3.
// equation turns into null || 3 || 4 , || searches from left to right for truthy value, which is 3.


// Write an if condition to check that age is between 14 and 90 inclusively, means that age can reach 
// the edges 14 or 90, assign random values for age variable:

let age = 12 || Math.floor(Math.random() * 100);

if (age >= 14 && age <= 90) {
    console.log("You are still pretty young");
} else {
    console.log("We can't let you in");
}

//Write an if condition to check that age is NOT between 14 and 90 inclusively. Create two variants: 
// the first one using NOT !, the second one – without it.

if (!(age >= 14 && age <= 90)){
console.log("Too young or too old");}

if(age < 14 || age > 90){
    console.log("Too old or too young");
}


