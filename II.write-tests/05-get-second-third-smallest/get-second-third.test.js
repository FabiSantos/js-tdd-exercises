
const { getSecondThird } = require("./get-second-third");
describe("get-second-third function", () => {
  it("Given the array[90, 5, 11, 8, 6], must order it and return the second and third number[6, 8]", () => {
    //arrange
    const input = [90, 5, 11, 8, 6];
    const expected = [6, 8];
    //act
    const output = getSecondThird(input);
    //assert
    expect(output).toEqual(expected);
  });
  it("given the input [90, 5, 11, 8, 6], should not change the input value", () => {
    //arrange
    const input = [90, 5, 11, 8, 6];
    const expected = [90, 5, 11, 8, 6];
    //act
    getSecondThird(input);
    //assert
    expect(input).toEqual(expected);
  });

});