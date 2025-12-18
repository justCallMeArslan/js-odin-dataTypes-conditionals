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