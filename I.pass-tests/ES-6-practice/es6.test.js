const {
  arrow,
  defaultParameter,
  combineArrays,
  destructuring,
  templateString
} = require("./es6");
describe('Functions from es6 folder.', () => {

  it("function arrow is instance of a function", () => {
    expect(arrow).toBeInstanceOf(Function);
  });

  it("function arrow returns a string of es6 is awesome", () => {
    //arrange
    const input = "es6 is awesome!";
    //act
    const output = arrow(input);
    //assert
    expect(output).toEqual(input);
  });

  it("defaultParameter function should return Sam if no name argument passed in", () => {
    //arrange
    const defaultName = "Sam";
    const expected = "Sam";
    //act
    const output = defaultParameter(defaultName);
    //assert
    expect(output).toEqual(expected);
  });

  it("defaultParameter function should return name Samatar if name argument is passed in", () => {
    //arrange
    const name = "Samatar";
    const expected = "Samatar";
    //act
    const output = defaultParameter(name);
    //assert
    expect(output).toEqual(expected);
  });

  it("combineArrays function should combine arr1 and arr2", () => {
    //arrange
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const expected = [1, 2, 3, 4, 5, 6];
    //act
    const output = combineArrays(arr1, arr2);
    //assert
    expect(output).toEqual(expected);
  });

  it("destructuring function should return cyf property of object", () => {
    //arrange
    const testObj = {
      cyf: "awesome",
      test: "100%",
      learning: "always"
    };
    const expected = testObj.cyf;
    //act
    const output = destructuring(testObj);
    //assert
    expect(output).toEqual(expected);
  });

  it("templateString should return a string with the sum of parameter a and b", () => {
    //arrange
    const number1 = 1;
    const number2 = 2;
    const expected = "The sum is equal to 3"
    //act
    const output = templateString(number1, number2);
    //assert
    expect(output).toEqual(expected);
  });

});
