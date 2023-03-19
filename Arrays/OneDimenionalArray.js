class OneDimenionalArray {
  constructor(sizeOfArray) {
    this.myArray = new Array(sizeOfArray);
    this.myArray.fill(0);
    return this.myArray;
  }

  insert(location, valueToBeInserted) {
    if (this.myArray[location] == 0) {
      this.myArray[location] = valueToBeInserted;
      console.log("Successfully Inserted");
    } else {
      console.log("This cell is already occupied");
    }
  }
}

//export { OneDimenionalArray };
 module.exports = OneDimenionalArray;
