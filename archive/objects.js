// let options = {
//     width : 1024,
//     height : 1024,
//     name : "test"
// };

// console.log(options.name);

// options.colors = {
// border : "black",
// bg : "red"
// }

// console.log(options);

// for (let key in options) {
//     console.log("Option " + key + " is " + options[key]);
// }

// console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];

// // arr.pop();  // удаляет последний элемент массива

// // arr.push("6");  // добавляет элемент в конец массива

// // arr.shift(); // удаляет элемент в начале массива

// // arr.unshift("0"); // добавляет элмент в начало массива

// // for (let i = 0; i < arr.length; i++) {

// //     console.log(arr[i]);
// // }

// arr.forEach(function(item, i, mass) {
//     console.log(i + " : " + item + " (array: " + mass + ")");
// });


// console.log(arr);

// let mass = [1, 3, 5, 7, 9];

// for (let a in mass) {    // получить номер
//     console.log(a);
// }

// for (let a of mass) {  // получить значение
//     console.log(a);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');

// console.log(arr);

// let arr = ["awe", "zzz", "pp", "asdsdgf"],
//     i = arr.join(", .");
// console.log(i);

let arr = [5, 15, 2, 3, 7, 4],
    i = arr.sort(compareNum);

function compareNum (a,b) {
    return a-b;
}
console.log(i);