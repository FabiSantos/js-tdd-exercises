const {largerThanTen} = require("./numbersGreaterThan10");

describe("larger-than-ten function", () => {
  it("Get numbers greater than 10", () => {
    //arrange
    const input = [4, 10, 32, 9, 21];
    const expected =  [32, 21];
    //act
    const output = largerThanTen(input);
    //assert
    expect(output).toEqual(expected);
  });

});
