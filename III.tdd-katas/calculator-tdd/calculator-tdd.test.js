const calculator = require("./calculator")

describe('calculator function', () => {
    it('should return 0, given de input "0" ', () => {
        // arrange
        const input = "0";
        const expected = 0;
        //act
        const output = calculator(input);
        //assert
        expect(output).toEqual(expected);
    });

    it('should return 10, given de input "10" ', () => {
        // arrange
        const input = "10";
        const expected = 10;
        //act
        const output = calculator(input);
        //assert
        expect(output).toEqual(expected);
    });

    it('should return the sum 7, given de input "2,1,4"', () => {
        // arrange
        const input = "2,1,4";
        const expected = 7;
        //act
        const output = calculator(input);
        //assert
        expect(output).toEqual(expected);
    });

    it('should return the sum 10, given de input "5,,/5"', () => {
        // arrange
        const input = "5,,/5";
        const expected = 10;
        //act
        const output = calculator(input);
        //assert
        expect(output).toEqual(expected);
    });

    it('should return the number 0, given a input "" ', () => {
        // arrange
        const input = "";
        const expected = 0;
        //act
        const output = calculator(input);
        //assert
        expect(output).toEqual(expected);
    });
    it('should return the number 999, given a input "999"', () => {
        // arrange
        const input = "999";
        const expected = 999;
        //act
        const output = calculator(input);
        //assert
        expect(output).toEqual(expected);
    });

    it('should return the number 1000, given a input "999,1"', () => {
        // arrange
        const input = "999,1";
        const expected = 1000;
        //act
        const output = calculator(input);
        //assert
        expect(output).toEqual(expected);
    });

    it('should return the number 6, given a input "1\n2,3"', () => {
        // arrange
        const input = "1\n2,3";
        const expected = 6;
        //act
        const output = calculator(input);
        //assert
        expect(output).toEqual(expected);
    });

    it('Given a input number negative -1, should throw new error', () => {
        // arrange
        const input = -1;
        //act
        const output = () => calculator(input);
        //assert
        expect(output).toThrow(Error);
    });

    it('Given input of a number greater than or equal to 1000, should throw new error', () => {
        // arrange
        const input = 1000;
        //act
        const output = () => calculator(input);
        //assert
        expect(output).toThrow(Error);
    });

    it('Given the input "100, 4, -20", should throw new error', () => {
        // arrange
        const input = "100, 4, -20";
        //act
        const output = () => calculator(input);
        //assert
        expect(output).toThrow(Error);
    });
   
});
