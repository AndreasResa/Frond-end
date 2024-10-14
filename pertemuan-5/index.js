//JavaScript Function
//cara1.Function Declaration
// function greetings1() {
//     console.log("Hello World");
// }

// greetings1(); //call /Execute Function

// //cara 2. Function Expression 
// let greetings2 = function (){
//     console.log("Hello World");
// };
// greetings2();

//Parameter & Argument (input), Return (output)
//cara 1.
//                  parameter
// function greetings1(fullName){
//     return "Hello" + fullName;
// }
// //                      argument
// let output = greetings1("John Doe");
// console.log(output);

// //cara 2
// let greetings2 = function(fullName){
//     return "Hello" + fullName;
// };

// let output2 = greetings2("John Doe");
// console.log(output2);

//Function Hoisting
//cara 1.

//                      argument
// let output = greetings1("John Doe");
// console.log(output1);

// function greetings1(fullName){
//     return "Hello" + fullName;
// }
// //cara 2. /error

// let output2 = greetings2("John Doe");
// console.log(output2);

// let greetings2 = function(fullName){
//     return "Hello" + fullName;
// };

//Global Scope & Local Scope

//Global bisa dipanggil dalam function dan luar function
//local hanya bisa dipanggil dalam function
let x=10 //global

function foo(){
    let y=20; //local
    console.log(x);//10
    console.log(y);//20
    if(y > 10){
        let z = 30; //local block
        console.log(x);//10
        console.log(y);//20
        console.log(z);//30
    }
    console.log(z); //Error
}


console.log(x);
foo();




