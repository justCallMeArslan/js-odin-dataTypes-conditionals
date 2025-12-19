const userName = prompt("Who is there?", "");


if (userName === "Admin") {
    const password = prompt("Provide password or type Cancel", "");
    if (password === "TheMaster") {
        alert("Welcome");
    } else if (password === "" || password === null) {
        alert("Canceled");
    } else {
        alert("Wrong Password");
    }
} else if (userName === "" || userName === null) {
    alert("Canceled");
} else {
    alert("I dont know you");
}



// 5 > 4; //true 
// "apple" > "pineapple"; //false
// "2" > "12"; // true
// undefined == null; // true
// undefined === null; //false 
// null == "\n0\n"; //false
// null === +"\n0\n"; //false



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

if (!(age >= 14 && age <= 90)) {
    console.log("Too young or too old");
}

if (age < 14 || age > 90) {
    console.log("Too old or too young");
}



//Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
//If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”


let question = prompt("What is the “official” name of JavaScript", "");

if (question === "ECMAScript") {
    alert("Right, You are the Millionaire");
} else {
    alert("You dont know? ECMAScript")
}


// Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.


let valueCheck = prompt("Input any number", 0);

if (valueCheck > 0) {
    alert(1);
} else if (valueCheck == 0) {
    alert(0);
} else if (valueCheck < 0) {
    alert(1);
} else {
    alert("That is not a number")
}


// Rewrite this if using the conditional operator '?':

// let result;
// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }


let a = 3; // probably should be a prompt
let b = 5; // probably should be a prompt

let result = (a + b < 4) ? ("Below") : ("Over");
console.log(result);


// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.

// let message;
// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let login = prompt("What is your position?", "");

let message = (login == "Employee") ? "Hello" :
    (login == "Director") ? "Greetings" :
        (login == "") ? "No login" :
            "";