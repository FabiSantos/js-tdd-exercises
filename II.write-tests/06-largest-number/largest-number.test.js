
const { getLargestNumber } = require("./largest-number");
describe("Given the array[3, 21, 88, 4, 36], must order it and return largest number (88); ", () => {
  it("second third", () => {
    //arrange
    const input = [3, 21, 88, 4, 36];
    const expected = 88;
    //act
    const output = getLargestNumber(input);
    //assert
    expect(output).toEqual(expected);
  });
  it("given the input [3, 21, 88, 4, 36], should not change the input value", () => {
    //arrange
    const input = [3, 21, 88, 4, 36];
    const expected = [3, 21, 88, 4, 36];
    //act
    getLargestNumber(input);
    //assert
    expect(input).toEqual(expected);
  });

});
