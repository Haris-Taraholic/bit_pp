// var a = 1;
// var maxNumber = 10;

// while (a <= maxNumber) {
//     console.log(a);
//     a = a + 1;
//

// for (var d = 10; d > 0; d--) {
//     console.log("Number is:", d);
//     for (var a = 0; a <= 10; a++) {
//         console.log("Number is:", a);
//     }

// }

// Task 1 odd even if in for

// var res;

// for (var a = 0; a <= 15; a++) {
//     if (a % 2 === 0) {
//         console.log("even :", a);
//     } else {
//         console.log("odd :", a);
//     }
// }

// Task 2 


// var n;
// var res;

// for (n = 1; n <= 1000; n++) {
//     if (n % 3 === 0 && n % 5 === 0) {
//         res = n + res
//     }
// }

// console.log(res);

//Task 3

// var a = [2, 5, 8, 7];
// var sum = 0;
// var product = 1;

// for (var i = 0; i < a.length; i++) {
//     sum = a[i] + sum
//     product = a[i] * product
// }
// console.log(sum, product);

// Task 4

// var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
// var string = "";

// for (var i = 0; i < x.length; i++) {
//     string = string + x[i]
// }

// console.log(string);

//Task 5 

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
// res = 0;
// for (var i = 0; i < a.length; i++) {
//     for (var b = 0; b < 4; b++) {
//         console.log(a[i][b])
//     }
// }

// console.log(res);

//Task 6

// var sum = 0;
// for (var a = 1; a <= 20; a++) {
//     sum = (a * a) + sum
// }

// console.log(sum);

//Task 7

// var a = [80, 77, 88, 95, 68];
// var sum = 0;
// for (var i = 0; i < a.length; i++) {

//     sum = a[i] + sum
// }

// avarage = sum / a.length

// var grade;
// if (avarage < 60) {
//     grade = "F";
// } else if (avarage < 70 && avarage > 60) {
//     grade = "D";
// } else if (avarage < 80 && avarage > 70) {
//     grade = "C"
// } else if (avarage < 90 && avarage > 80) {
//     grade = "B";
// } else if (avarage < 100 && a > 90) {
//     grade = "A";
// }


// console.log(grade);

//Task 8


// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// Nenad mi je rekao da izbacim console.log iz for-a

// var d = 4;
// var star = "";
// var a = [];
// for (var i = 0; i < d; i++) {
//     star += "*\t";
//     a[i] = star;
//     for (var j = 0; j < a.length;j++)

// }
// console.log()