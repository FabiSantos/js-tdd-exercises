
const { getEven } = require("./get-even-numbers");
describe(" get-even-numbers", () => {
  it("Given the array[22, 13, 73, 82, 4], should return [22, 82, 4]", () => {
    //arrange
    const input = [22, 13, 73, 82, 4];
    const expected = [22, 82, 4];
    //act
    const output = getEven(input);
    //assert
    expect(output).toEqual(expected);
  });

});
