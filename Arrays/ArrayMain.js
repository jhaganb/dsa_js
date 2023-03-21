import  OneDimenionalArray from "./OneDimenionalArray.js";
// const OneDimenionalArray = require("./OneDimenionalArray");

const arr = new OneDimenionalArray(5);
console.log(arr);
arr.insert(2,3)
console.log(arr);
console.log(arr.myArray[2]);
arr.insert(3,3)
console.log(arr.myArray[2]);
