

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






