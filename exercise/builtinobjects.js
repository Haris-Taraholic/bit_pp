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

// var smallElem = function (array) {
//     var sortedArr = array.slice().sort(function (a, b) { return a - b });
//     var minIndex = array.lastIndexOf(sortedArr[0]);

//     return {
//         min: sortedArr[0],
//         minIndex: minIndex
//     };
// }

// var arr = [1, 4, -2, 11, 8, 1, -2, 3];
// console.log(smallElem(arr));

///////////////////// TASK 5 part a /////////////////////////////
