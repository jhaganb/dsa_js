class OneDimensionalArray {
  constructor(sizeOfArray) {
    this.myArray = new Array(sizeOfArray);
    this.myArray.fill(0);
  }

  insert(location, valueToBeInserted) {
    if (location > this.myArray.length) {
      console.error(`Array Index Out Of Bounds Exception`);
      return;
    }
    if (this.myArray[location] == 0) {
      this.myArray[location] = valueToBeInserted;
      console.log("Successfully Inserted");
    } else {
      console.log("This cell is already occupied");
    }
  }

  traverseArray() {
    let arrayString = "";
    for (let i = 0; i < this.myArray.length; i++) {
      arrayString += `${this.myArray[i]}`;
    }
    console.log(arrayString.split(""));
  }

  //Linear Search - separate section is written for it
  searchInArray(valueToSearch) {
    for (let i = 0; i < this.myArray.length; i++) {
      if (this.myArray[i] === valueToSearch) {
        console.log(`Value is found at the index of ${i}`);
        return;
      }
    }
    console.log(`${valueToSearch} is not found`);
  }

  deleteValue(valueToDeleteIndex) {
    if (valueToDeleteIndex >= this.myArray.length) {
      console.log(`The value that is provided is not in the range of array`);
      return;
    }
    this.myArray[valueToDeleteIndex] = 0;
    console.log(`The value has been deleted successfully`);
  }
}

// export default OneDimensionalArray;
module.exports = OneDimensionalArray;

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
