var i = 0;

while (i<=10) {

    document.getElementById("num").innerHTML += i + " ";
    i++;
}

var students = ["Ankit", "Rahul", "Het", "Rohan"];

for (var j=0; j<students.length; j++) {
    document.getElementById("students").innerHTML += students[j] + " ";
}

var marks = [85, 90, 78, 92];
var total = 0;

for (var k=0; k<marks.length; k++) {
    total += marks[k];
}

document.getElementById("marks").innerHTML = "Total Marks: " + total;

for (var l=0; l<=10; l++) {

    document.getElementById("table").innerHTML += l + " * 2 = " + l*2 + "<br>";

} 

for (var m=1; m<=10; m++) {

    if (m % 2 === 0) {
        document.getElementById("even").innerHTML += m + " ";
    }
}

for (var n=1; n<=10; n++) {

    if (n % 2 !== 0) {
        document.getElementById("odd").innerHTML += n + " ";
    } 
}

var t;

for (t= 10; t>=1; t--) {

    document.getElementById("timer").innerHTML += t + " ";

}

// const pin = 2323;

// for (let atm = 0; atm <= 3; atm++) {

//     let pinEntered = prompt("Enter your PIN:");

//     if (pinEntered == pin) {

//         console.log("PIN correct. Access granted.");
//         break;

//     } else {

//         console.log("Incorrect PIN. Try again.");

//     }

// }

// const pass = 2003;

// for (let i = 0; i <= 3; i++) {

//     let passEntered = prompt("Enter your Password:");

//     if (passEntered == pass) {

//         console.log("Password correct. Access granted.");
//         break;

//     } else {

//         console.log("Incorrect Password. Try again.");

//     }

// }

var Car = new Array(3);

Car[0] = "BMW";
Car[1] = "Audi";
Car[2] = "Mercedes";

var Car2 = new Array("Ferrari", "Lamborghini", "McLaren");

var Car3 = ["Tesla", "Lexus", "Porsche"];

document.getElementById("car2").innerHTML = Car2;

Car2.push("Bugatti");

document.getElementById("car22").innerHTML = Car2;

Car2.pop();

document.getElementById("car222").innerHTML = Car2;

var data = Car2.concat(Car3);

document.getElementById("car2222").innerHTML = data;


function foo (p1) {

    if (typeof(p1)== "number")
        return 0;
    else if (typeof(p1)=="string")
        return "zero";

}

console.log(foo(1))
console.log(foo("abc"))
console.log(foo())

str1 = "Hello Guys";
str2 = "Hellow";

document.getElementById("strfun").innerHTML = str1.charAt(2);

document.getElementById("conc").innerHTML = str1.concat(" ", str2) + "<hr>" + str1.indexOf("Guys") + "<hr>" + str1.replace("Hello","Hey") + "<hr>" + str1.slice(2,4) + "<hr>" + str1.toUpperCase()