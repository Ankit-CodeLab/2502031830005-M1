document.getElementById("demo").innerHTML = "Hello Bachoo Wapis Se";

var x = 5;
var y = 10;
var sub = x - y;
var add = x + y;
var mul = x * y;
var div = x / y;

document.getElementById("additon").innerHTML = "Additon: " + add + "<br>" + "Subtraction: " + sub + "<br>" + "Multiply: " + mul + "<br>" + "Division: " + div;


var a = true

var b = "Hello"

var c = [1, 2, 3]

document.getElementById("datat").innerHTML = "Data type of Y is: " + typeof (y) + "<br>" + "Data type of A is: " + typeof (a) + "<br>" + "Data type of B is: " + typeof (b) + "<br>" + "Data type of C is: " + typeof (c)


let i = 5;
i++;
document.getElementById("posti").innerHTML = "Post increament: " + i ;

i--;
document.getElementById("postd").innerHTML = "Post decreament: " + i ;

++i;
document.getElementById("prei").innerHTML = "Pre increament: " + i ;

--i;
document.getElementById("pred").innerHTML = "Pre decreament: " + i ;

let num = 2;

if (num % 2 == 0 ) {

    document.getElementById("odd").innerHTML = "Even"

} else {

    document.getElementById("odd").innerHTML = "Odd"

}

let marks = 50;

if (marks >= 23 ) {

    document.getElementById("Pass").innerHTML = "Pass"

} else {

    document.getElementById("Pass").innerHTML = "Fail"

}

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){

    document.getElementById("year").innerHTML = "Leap Year"

} else {

    document.getElementById("year").innerHTML = "Non Leap Year"

}

let age = 19;

if (age >= 18 ) {

    document.getElementById("DR").innerHTML = "Eligible"

} else {

    document.getElementById("DR").innerHTML = "Not Eligible"

}

let temp = 45;

if (temp >= 60) {

    document.getElementById("temp").innerHTML = "High Temperature"

} else {

    document.getElementById("temp").innerHTML = "Low Temperature"    

}

let tmarks = 300;

if (tmarks >= 500) {

    document.getElementById("grade").innerHTML = "Grade - A"

} else if (tmarks >= 400) {

    document.getElementById("grade").innerHTML = "Grade - B"    

} else if (tmarks >= 300) {

    document.getElementById("grade").innerHTML = "Grade - C"    

} else if (tmarks >= 200) {

    document.getElementById("grade").innerHTML = "Grade - D"    

} else if (tmarks >= 100) {

    document.getElementById("grade").innerHTML = "Fail"    

}

let bal = 3000;
let amt = 10000;
 
if (bal >= amt) {

    document.getElementById("atm").innerHTML = "widthrawing"

} else {

    document.getElementById("atm").innerHTML = "Not enough balance"    

}