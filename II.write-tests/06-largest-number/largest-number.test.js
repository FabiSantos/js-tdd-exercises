
const { getLargestNumber } = require("./largest-number");
describe("Given the array[3, 21, 88, 4, 36], must order it and return largest number (88); ", () => {
  it("second third", () => {
    //arrange
    const input = [3, 21, 88, 4, 36];
    const expected =  88;
    //act
    const output = getLargestNumber(input);
    //assert
    expect(output).toEqual(expected);
  });
/*   it("also test that the original array has not changed", () => {
    //arrange
    const input = [3, 21, 88, 4, 36];
    const expected = [3, 21, 88, 4, 36];
    //act
    const output = getLargestNumber(input);
    //assert
    expect(output).toEqual(expected);
  });
 */
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
