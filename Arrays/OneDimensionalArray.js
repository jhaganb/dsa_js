class OneDimensionalArray {
  constructor(sizeOfArray) {
    this._myArray = new Array(sizeOfArray);
    this._myArray.fill(0);
  }

  insert(location, valueToBeInserted) {
    if (location > this._myArray.length) {
      console.error(`Array Index Out Of Bounds Exception`);
      return;
    }
    if (this._myArray[location] == 0) {
      this._myArray[location] = valueToBeInserted;
      console.log("Successfully Inserted");
    } else {
      console.log("This cell is already occupied");
    }
  }

  traverseArray() {
    let arrayString = "";
    for (let i = 0; i < this._myArray.length; i++) {
      arrayString += `${this._myArray[i]}`;
    }
    console.log(arrayString.split(""));
  }

  //Linear Search - separate section is written for it
  searchInArray(valueToSearch) {
    for (let i = 0; i < this._myArray.length; i++) {
      if (this._myArray[i] === valueToSearch) {
        console.log(`Value is found at the index of ${i}`);
        return;
      }
    }
    console.log(`${valueToSearch} is not found`);
  }

  deleteValue(valueToDeleteIndex) {
    if (valueToDeleteIndex >= this._myArray.length) {
      console.log(`The value that is provided is not in the range of array`);
      return;
    }
    console.log(`Successfully deleted  : ${this._myArray[valueToDeleteIndex]}`);
    this._myArray[valueToDeleteIndex] = 0;
  }
}

export default OneDimensionalArray;
// module.exports = OneDimensionalArray;

/** 
 * Code for ArrayMain.js to execute the One Dimensional Array
 * 
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
 */
