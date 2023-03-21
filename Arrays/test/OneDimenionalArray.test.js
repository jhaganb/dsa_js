// import  OneDimenionalArray from "./OneDimenionalArray.js";
const OneDimenionalArray = require("../OneDimenionalArray");

describe("OneDimenionalArray", () => {
  it("Check", () => {
    const arr = new OneDimenionalArray(5);
    expect(arr.myArray[2]).toEqual(0);
  });

  it("Check insert", () => {
    const arr = new OneDimenionalArray(5);
    arr.myinsert(1, 3);
    expect(arr.myArray[1]).toEqual(3);
  });
});
// const OneDimenionalArray = require("../OneDimenionalArray");

// test("adds two number", () => {
//   const arr = new OneDimenionalArray();
//   expect(arr[0]).toEqual(0);
// });
