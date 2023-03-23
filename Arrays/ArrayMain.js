import OneDimensionalArray from "./OneDimensionalArray.js";

const arr = new OneDimensionalArray(5);
arr.insert(2, 4);
arr.insert(3, 3);
arr.insert(0, 2);
arr.insert(4, 5);
arr.insert(1, 1);
arr.traverseArray();
arr.searchInArray(4);
arr.searchInArray(41);
arr.deleteValue(2);
arr.traverseArray();
arr.deleteValue(4);
arr.traverseArray();
