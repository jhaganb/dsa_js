class TwoDimensionalArray {
  constructor(row, col) {
    this._my2DArray = new Array(row);
    for (let i = 0; i < col; i++) {
      const colArray = new Array(col);
      for (let j = 0; j < col; j++) {
        colArray[j] = 0;
      }
      this._my2DArray[i] = colArray;
    }
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        console.log(this._my2DArray[i][j]);
      }
    }
  }

  accessCell(row,col) {
    if (row >= this._my2DArray.length || col >= this._my2DArray[0].length) {
        console.log(`Invalid index for 2D Array`);
      return;
    }
    console.log(`Accessing row: ${row} col: ${col}`);
    console.log(`Cell value is  : ${this._my2DArray[row][col]}`);
  }

  insert(row, col, valueToBeInserted) {
    if (row >= this._my2DArray.length || col >= this._my2DArray[0].length) {
      console.error(`Array Index Out Of Bounds Exception`);
      return;
    }
    if (this._my2DArray[row][col] == 0) {
      this._my2DArray[row][col] = valueToBeInserted;
      console.log("Successfully Inserted");
    } else {
      console.log("This cell is already occupied");
    }
  }

  traverseArray() {
    let resultArray = [];
    for (let i = 0; i < this._my2DArray.length; i++) {
      resultArray.push(this._my2DArray[i]);
    }
    console.log(resultArray);
  }

  //Linear Search - separate section is written for it
  searchInArray(valueToSearch) {
    for (let i = 0; i < this._my2DArray.length; i++) {
      for (let j = 0; j < this._my2DArray[i].length; j++) {
        if (this._my2DArray[i][j] === valueToSearch) {
            console.log(`Value is found at row: ${i} col: ${j}`);
            return ;
        }
      }
    }
    console.log(`${valueToSearch} is not found`);
    
  }

  deleteValue(row,col) {
    if (row >= this._my2DArray.length || col >= this._my2DArray[0].length) {
        console.log(`The value that is provided is not in the range of array`);
      return;
    }
    console.log(`Successfully deleted  : ${this._my2DArray[row][col]}`);
    this._my2DArray[row][col] = 0;
  }
}

export default TwoDimensionalArray;
// module.exports = TwoDimensionalArray;
