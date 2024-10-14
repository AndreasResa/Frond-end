//Variable & operators

//untuk mendeklarasikan variable menggunakan let atau const
//1.JavaScript Variable
// let fullName = "John Doe"; //camel case
// let full_name = "John Doe"; //snake case
// let FullName = "John Doe"; //pascal case

// //harus langsung bersama nilai 
// const gender = "male";
// gender = "female"; //error
// let age = 30;
// age = 31;
// let weight = 85.5; //number float
// let isMarried = true; //boolean
// let grade = null; //Null
// let address; //underfined

// console.log(fullName);
// console.log(gender);
// console.log(typeof age);
// console.log(typeof weight);
// console.log(typeof isMarried);
// console.log(grade);
// console.log(typeof address);

//2.JavaScript Operators
//a.arithmetic Operator (+,-,*,/,%,**)
// let bil1 = 20;
// let bil2 = 5;
// Console.log(bil1 + bil2);
// console.log(bil1 - bil2);
// console.log(bil1 * bil2);
// console.log(bil1 / bil2);
// console.log(bil1 % bil2);
// console.log(bil1 ** bil2);

// let alas = 5;
// let tinggi = 5;
// let luas = 0.5 * alas * tinggi;
// console.log(luas);

//b.Assignment Operator (=, +=, -=, *=, /=)
// let bilangan = 10;
// bilangan = bilangan + 10;
// bilangan += 10;
// console.log(bilangan);

//c.string Operator (+)
// let firstName = "john";
// let lastName = "doe";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

//d.Relational Operator (==, ===, >, <, >=,)

// let bil1 = 10;
// let bil2 = 10;
// let bil3 = "10";
// let bil4 = 5;

// console.log(bil1 == bil2);//True
// console.log(bil1 === bil2);//True
// console.log(bil1 == bil3);//True
// console.log(bil1 === bil3);//False

// console.log(bil1 > bil4);//True
// console.log(bil1 < bil4);//False

//e.Ternary Operator (? :)
// let age = 17;
// let isEligible = age >= 17 ? "Bisa membuat KTP" : "Belum bisa membuat KTP";
// console.log(isEligible);

//f.logical Operator (&&, ||, !)
// AND (&&)
// console.log(true && true);//true
// console.log(true && false);//false
// console.log(false && true);//false
// console.log(false && false);//false

// //OR (||)
// console.log(true || true);//true
// console.log(true || false);//true
// console.log(false || true);//true
// console.log(false || false);//false

// //NOT (!)
// console.log(!true);//false
// console.log(!false);//true

