///////////////////// TASK 1 /////////////////////////////

// var ar = [2, 4, 7, 11, -2, 1];
// var doubleArray = function (array) {
//     var res = [];
//     for (var i = 0; i < array.length; i++) {
//         res.push(array[i]);
//         res.push(array[i]);
//     }
//     return res;
// }

// console.log(doubleArray(ar));

///////////////////// TASK 2 /////////////////////////////

// var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
// var res = [];

// array.sort(function (a, b) { return a - b })
// for (var i = 0; i < array.length; i++) {
//     if (array[i] !== array[i + 1]) {
//         res[res.length] = array[i];
//     }
// }
// console.log(res);

/////////////////// TASK 3 /////////////////////////////

// var hasOdd = function (array) {
//     return array.length % 2 === 1
// }

// var arr = [8, 2, 16, 2, 24];

// console.log(hasOdd(arr));

/////////////////// TASK 3 part 2 /////////////////////////////

// var lessThenMiddle = function (array) {
//     if (!hasOdd(array)) {
//         return "Error 404";
//     }

//     var middleIndex = parseInt(array.length / 2);

//     var counter = 0;
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] < array[middleIndex]) {
//             counter++
//         }
//     }

//     return counter;
// }

// var ar = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
// console.log(lessThenMiddle(ar));

///////////////////// TASK 4 /////////////////////////////

<<<<<<< HEAD
var smallElem = function (array) {
    var sortedArr = array.slice().sort(function (a, b) { return a - b });
    var minIndex = array.lastIndexOf(sortedArr[0]);
    return {
        min: sortedArr[0],
        minIndex: minIndex
    };
}

var arr = [1, 4, -2, 11, 8, 1, -2, 3];

console.log(smallElem(arr));
=======
// var smallElem = function (array) {
//     var sortedArr = array.slice().sort(function (a, b) { return a - b });
//     varminIndex = array.lastIndexOf(sortedArr[0]);

//     return {
//         min: sortedArr[0],
//         minIndex: minIndex
//     };
// }

// var arr = [1, 4, -2, 11, 8, 1, -2, 3];
// console.log(smallElem(arr));
>>>>>>> 1930bd706572b8b2a3327cd4a43f071720d88b12

///////////////////// TASK 5 part a /////////////////////////////

// Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// // 	Output: [2, 3, -2, 4]

// var returnSmaller = function (array, givenNum) {
//     var a = [2, 3, 8, -2, 11, 4];
//     var b = [];
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] < givenNum) {
//             b.push(a[i]);
//         }
//     }
//     return b;
// }
// console.log(returnSmaller([3, 5, 7, 2, 1], 5));

///////////////////// TASK 5 part b /////////////////////////////

// var findWord = function (array) {
//     var word = "pro";
//     var b = [];
//     for (var i = 0; i < array.length; i++) {
//         var string = array[i].toLowerCase();
//         string = string.slice(0, 3)
//         if (word === string) {
//             b[b.length] = array[i];
//         }
//     }
//     return b;
// }

// var res = findWord(["JavaScript", "Programming", "fun", "product"]);
// console.log(res);

///////////////////// TASK 6 a /////////////////////////////

var list = [
    { name: 'beer', price: 100 },
    { name: 'snacks', price: 100 },
    { name: 'chocolate', price: 120 }
]
var calculate = function (array) {
    var res = 0;
    for (var i = 0; i < array.length; i++) {
        res += array[i].price;
    }
    return res;
}
console.log(calculate(list));
