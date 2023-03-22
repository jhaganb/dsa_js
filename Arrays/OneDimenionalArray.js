class OneDimenionalArray {
  constructor(sizeOfArray) {
    this.myArray = new Array(sizeOfArray);
    this.myArray.fill(0);
    this.size = sizeOfArray;
  }

  myinsert(location, valueToBeInserted) {
    if (this.myArray[location] == 0) {
      this.myArray[location] = valueToBeInserted;
      console.log("Successfully Inserted");
    } else {
      console.log("This cell is already occupied");
    }
  }
}


// export default OneDimenionalArray;
module.exports = OneDimenionalArray;
