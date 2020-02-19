///////////////////////TASK: 1//////////////////////////////////
// function isItaString(a) {
//     return typeof a === "string" ? true : false;
// }
// var n = 5;
// var result = isItaString(n);

// console.log(result);

///////////////////////TASK: 2//////////////////////////////////

// function isItaString(a) {
//     return a === " " ? true : false;
// }
// var n = "  ";
// var result = isItaString(n);

// console.log(result);

//////When it is a blank with spaces//////

// function isItBlankString(n) {
//     for (var i = 0; i < n.length; i++) {
//         if (n[i] !== " ") {
//             return false;
//         }
//     }
//     return true;
// }
// var b = "";
// var result = isItBlankString(b);

// console.log(result);

///////////////////////TASK: 3//////////////////////////////////

// function repeatingString(string, repeat) {
//     var res = "";
//     for (var i = 1; i <= repeat; i++) {
//         res += string
//     }
//     return res;
// }

// var a = "Ha";
// var n = 5;

// var result = repeatingString(a, n);

// console.log(result);

///////////////////////TASK: 4//////////////////////////////////

// function letterCounter(string, letter) {
//     var res = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] === letter) {
//             res++;
//         }

//     }
//     return res;
// }
// var n = "n";
// var a = "nisam nnn nista ni nikad";

// var result = letterCounter(a, n);

// console.log(result);

///////////////////////TASK: 5//////////////////////////////////

// function firstOccurence(string, char) {
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] === char) {
//             return i + 1;
//         }
//     }
//     return -1;
// }

// var a = "Tito je bio najveci konj";
// var b = "r";
// var result = firstOccurence(a, b);

// console.log(result);

///////////////////////TASK: 6//////////////////////////////////

// function lastOccurence(string, char) {
//     for (var i = string.length - 1; i >= 0; i--) {
//         if (string[i] === char) {
//             return i + 1;
//         }
//     } return -1
// }
// var a = "acbnnnndbe";
// var b = "b";
// var res = lastOccurence(a, b);

// console.log(res);

///////////////////////TASK: 7//////////////////////////////////

// function stringToArrayConvertion(string) {
//     var array = [];
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] !== " ") {
//             array[array.length] = string[i];
//         } else {
//             array[array.length] = null;
//         }
//     } 
//     return array;
// }
// var w = "Java Script";
// var result = stringToArrayConvertion(w);
// console.log(result);

///////////////////////TASK: 8//////////////////////////////////

// function isItAPrimeNumber(number) {
//     for (var i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return "It is NOT a prime number!";
//         }
//     }
//     return "It is a PRIME number"
// }
// var n = 15;
// var result = isItAPrimeNumber(n);
// console.log(result);

///////////////////////TASK: 9//////////////////////////////////

// function spaceReplace(string, symbol) {
//     var a = "";
//     if (symbol === undefined) {
//         symbol = "-";
//     }

//     for (i = 0; i < string.length; i++) {
//         if (string[i] === " ") {
//             a += symbol;
//         } else {
//             a += string[i];
//         }
//     }

//     return a;
// }

// var n = "asd asda asd asd "
// var b;

// console.log(spaceReplace(n, b))


///////////////////////TASK: 10//////////////////////////////////

// function newString(string, n) {
//     var newString = "";
//     for (i = 0; i < n; i++) {
//         newString += string[i];
//     }
//     newString += "...";
//     return newString;
// }

// var a = "My Random Word";
// var b = 5;

// var res = newString(a, b);

// console.log(res);

///////////////////////TASK: 11//////////////////////////////////





































