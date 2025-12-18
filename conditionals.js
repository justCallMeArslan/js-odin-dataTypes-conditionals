

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
if(workingHour < 10 || hour > 18 || isWeekend) {
    console.log(" The shop is closed"); //true, The shop is closed.
}


//JavaScript (OR) features

//result = value1 || value2 || value3, so the OR || operator does the following:
// - evaluates operands from left to right
// - for each operand,converts it to boolean, if result is true, stops and returns the original value
// - if all operands have been evaluated (i.e all were false), returns the last operannd
// when value returns - its returned in its original form, without the conversion.

console.log( 1 || 0 ); // 1 (1 is truthy)
console.log( null || 1); // 1 (1 is the first truthy value);
console.log( null || 0 || 1 ); // 1 (the first truthy value);
console.log( undefined || null || 0); // 0 (all falsy, returns the last value);

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




