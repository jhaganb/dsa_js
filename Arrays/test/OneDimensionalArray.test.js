const OneDimensionalArray = require("../OneDimensionalArray");

describe("OneDimensionalArray", () => {
  it("Check", () => {
    const arr = new OneDimensionalArray(5);
    expect(arr.myArray[2]).toEqual(0);
  });

  it("Check insert", () => {
    const arr = new OneDimensionalArray(5);
    arr.insert(1, 3);
    expect(arr.myArray[1]).toEqual(3);
  });
});
