prompt("Enter your name","");
console.log("This is console");
console.log(6+5);
document.write("<h1>Javascript</h1>");

var num1=5;
var num1=6;//we can redeclare the variable
num1=8////we can reassign the variable
console.log(num1);

let num2=9
//let num2=10//we cant redeclare the variable
num2=11//we can reassign the variable
console.log(num2)

const num3=10
//const num3=11//we cant redeclare the variable 
//num3=15//we cant reassign the variable
console.log(num3);

console.log(3 ** 4);
let x=5
x++
console.log(x)
x--
console.log(x);

let num=5
num*=2
console.log(num)

num1=5
num2="5"
console.log(num1==num2)
console.log(num1===num2)

function mul(n1,n2,n3,n4){
    return n1*n2*n3*n4;
}

document.write(mul(4,5,6,7))

function greet(){
    alert("Hello world");
}

let age=18;

if(age>=18){
document.write("Eligible for voting");
}else{
    document.write("Not eligible for voting");
}

 for(let num=10;num>=1;num--){
    console.log(num);
}


//Dom-Document Object Model
// Dom Manipulation Method
// document.getElementById()
// document.getElementByClassName()
// document.getElementByTagName()
// document.querySelector()
//  document.querySelectorAll()

let el=document.getElementById("head").innerHTML;
console.log(el);

let ele=document.querySelector("#head").innerHTML;
console.log(ele);