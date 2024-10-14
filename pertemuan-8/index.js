//JavaScript Object & Conditional
//Deklarasi Object
//Object Literal
// let john ={
//     firstName: "John",
//     age: 30,
//     isMarried: true,
//     grade: [80, 90, 100],
//     sayGreetings: function () {
//         console.log("Hello my name is " + this.firstName);
//     },
//     address: {
//         street:"Jl. Arnold Mononutu Airmadidi",
//         city: "Minahasa Utara",
//         province: "Sulawesi Utara",
//         postalCode: 95371
//     }
// };
// console.log(john);

// //Mengakses properti dalam object
// //1. dot notation
// console.log(john.firstName); //john
// console.log(john.age); //30
// john.age = 31 //ubah nilai
// console.log(john);
// john.job = "Teacher"; //tambah properti
// console.log(john);

// //2. Bracket notation
// console.log(john["isMarried"]); //true
// john["Nasionality"] = "Indonesia"; //tambah bracket baru
// console.log(john);

// //Object method
// john.sayGreetings();

// //Object inside object
// console.log(john.address.city);

// //Delete Property dalam object
// delete john.grade;
// console.log(john);

//JavaScript Conditional
//1. if - else
//Jika suhu hari ini lebih dari atau sama dengan 37,
//Tampilkan suhu hari ini panas
//Jika tidak tampilkan suhu hari ini dingin
let temp = 38;
if (temp >= 37){
    console.log("Suhu hari ini panas");
} else {
    console.log("Suhu hari ini dingin");
}

//2. if - else if - else
//Jika nilai 100 - 80 tampilkan grade A
//Jika nilai 70 - 79 tampilkan grade B
//Jika nilai 50 - 69 tampilkan grade C
//Jika nilai dibawah 50 tampilkan grade D
let grade = 90;
if (grade >= 80 && grade <= 100) {
    console.log("Grade A");
} else if (grade >= 70 && grade < 80) {
    console.log("Grade B");
} else if (grade >=50 && grade <70) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

//3.Switch - case
//Jika angka 1 tampilkan January
//Jika angka 2 tampilkan 

let number = 1;
switch (number) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("Maret");
        break;
    case 4:
        console.log("Apr");
        break;
}