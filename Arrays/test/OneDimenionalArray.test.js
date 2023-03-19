//import {OneDimenionalArray} from "../OneDimenionalArray";
const OneDimenionalArray = require("../OneDimenionalArray");

describe("OneDimenionalArray", () => {
  it("Check", () => {
    const arr = new OneDimenionalArray(5);
    expect(arr[0]).toEqual(0);
  });

  it("Check insert", () => {
    const arr = new OneDimenionalArray(5);
    expect(arr[1]).toEqual(0);
  });
});
// const OneDimenionalArray = require("../OneDimenionalArray");

// test("adds two number", () => {
//   const arr = new OneDimenionalArray();
//   expect(arr[0]).toEqual(0);
// });
