//IIFE & CALLback Function
//1.IIFE (immediately Invoked FUnction Expression)
//a. No Params, args & return value
// (function () {
//     console.log("Hello World");
// })();
// //b.With params, args & return value
// let output = (function (fullName){
//     return "Hello" + fullName;
// })("John Doe"); 
// console.log(output);

//2.Callback Function
//a.No params, args & return value

function sayHello(callback) {
    callback();
}

sayHello(function (){
    console.log("Hello World"); //Callback Function
});

//b.with params,args & return value
function sayHello(callback) {
   let result = callback("John Doe");
   console.log(result);
}

let output = sayHello(function (fullName){
    return "Hello" + fullName; //Callback Function
});
console.log(output);