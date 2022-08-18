const fizzbuzz = require("./fizz-buzz");

describe('fizz-buzz function', () => {
  it("Given the input 1, should return a string '1'", () => {
    //arrage
    const input = 1;
    const result = "1";
    //act
    const output = fizzbuzz(input);
    //assert
    expect(output).toEqual(result);
  });

  it("Given the input 2, should return a string '1,2'", () => {
    //arrage
    const input = 2;
    const result = '1,2';
    //act
    const output = fizzbuzz(input);
    //assert
    expect(output).toEqual(result);
    expect(result).toEqual("1,2");
  });

  it("Given the input 3, should return a string '1,2,Fizz'", () => {
    //arrage
    const input = 3;
    const result = '1,2,Fizz';
    //act
    const output = fizzbuzz(input);
    //assert
    expect(output).toEqual(result);
  });

  it("Given the input 5, should return a string '1,2,Fizz,4,Buzz'", () => {
    //arrage
    const input = 5;
    const result = '1,2,Fizz,4,Buzz';
    //act
    const output = fizzbuzz(input);
    //assert
    expect(output).toEqual(result);
  });



  it("Given the input 15, should return a string '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz'", () => {
    //arrage
    const input = 15;
    const result = '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz';
    //act
    const output = fizzbuzz(input);
    //assert
    expect(output).toEqual(result);
  });

  it("Given the array [], should throw a error", () => {
    //arrange
    const input = [];
    const output = () => fizzbuzz(input);
    //act and assert
    expect(output).toThrow(Error);
  });

  it("Given the string '100', should throw a error", () => {
    //arrange
    const input = "100";
    const output = () => fizzbuzz(input);
    //act and assert
    expect(output).toThrow(Error);
  });
  it('Given the input null, should throw new error', () => {
    // arrange
    const input = null;
    const output = () => fizzbuzz(input);
    //act and assert
    expect(output).toThrow(Error);
  });

});
