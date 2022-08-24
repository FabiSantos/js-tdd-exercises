const { convertToOldRoman, convertToNewRoman } = require("./roman-converter");

describe('Old roman numerals to arabic converter function', () => {
    it('Given the input, the number 1, should return a string "I" ', () => {
        //arrange
        const input = 1;
        const expected = "I";
        //act
        const output = convertToOldRoman(input);
        //assert
        expect(output).toEqual(expected);
    });
    it('Given the input,the number 2, should return a string "II" ', () => {
        //arrange
        const input = 2;
        const expected = "II";
        //act
        const output = convertToOldRoman(input);
        //assert
        expect(output).toEqual(expected);
    });

    it('Given the input,the number 4, should return a string "IIII"', () => {
        //arrange
        const input = 4;
        const expected = "IIII";
        //act
        const output = convertToOldRoman(input);
        //assert
        expect(output).toEqual(expected);
    });
    it('Given the input,the number 0, should return a string ""', () => {
        //arrange
        const input = 0;
        const expected = "";
        //act
        const output = convertToOldRoman(input);
        //assert
        expect(output).toEqual(expected);
    });

    it('Given the input type number 104, should return type string "CIIII"', () => {
        //arrange
        const input = 104;
        const expected = "CIIII";
        //act
        const output = convertToOldRoman(input);
        //assert
        expect(output).toEqual(expected);
    });
    it('Given the input type number 101, should return type string "CI"', () => {
        //arrange
        const input = 944;
        const expected = "DCCCCXXXXIIII";
        //act
        const output = convertToOldRoman(input);
        //assert
        expect(output).toEqual(expected);

    });

    it('Given the input 3001, should throw a error', () => {
        //arrange
        const input = 3001;
        const output = () => convertToOldRoman(input);
        //act and assert
        expect(output).toThrow(Error);

    });
    it('Given the input type string "100", should throw a error', () => {
        //arrange
        const input = "100";
        const output = () => convertToOldRoman(input);
        //act and assert
        expect(output).toThrow(Error);
    });

});
describe('New roman numerals to arabic converter function', () => {
    it('Given the input, the number 1, should return a string "I" ', () => {
        //arrange
        const input = 1;
        const expected = "I";
        //act
        const output = convertToNewRoman(input);
        //assert
        expect(output).toEqual(expected);

    });
    it('Given the input, the number 3, should return a string "III" ', () => {
        //arrange
        const input = 3;
        const expected = "III";
        //act
        const output = convertToNewRoman(input);
        //assert
        expect(output).toEqual(expected);

    });

    it('Given the input,the number 4, should return type string "IV"', () => {
        //arrange
        const input = 4;
        const expected = "IV";
        //act
        const output = convertToNewRoman(input);
        //assert
        expect(output).toEqual(expected);

    });

    it('Given the input,the number 101, should return type string "CI"', () => {
        //arrange
        const input = 101;
        const expected = "CI";
        //act
        const output = convertToNewRoman(input);
        //assert
        expect(output).toEqual(expected);

    });

    it('Given the input,the number 505, should return type string "DV"', () => {
        //arrange
        const input = 505;
        const expected = "DV";
        //act
        const output = convertToNewRoman(input);
        //assert
        expect(output).toEqual(expected);

    });

    it('Given the inputthe number904, should return type string "CMXLIV"', () => {
        //arrange
        const input = 944;
        const expected = "CMXLIV";
        //act
        const output = convertToNewRoman(input);
        //assert
        expect(output).toEqual(expected);

    });
    it('Given the input,the number 0, should return a string ""', () => {
        //arrange
        const input = 0;
        const expected = "";
        //act
        const output = convertToNewRoman(input);
        //assert
        expect(output).toEqual(expected);
    });

    it('Given the input 3001, should throw a error', () => {
        //arrange
        const input = 3001;
        //act
        const output = () => convertToNewRoman(input);
        //assert
        expect(output).toThrow(Error);

    });
    it('Given the input,a string "100", should throw a error', () => {
        //arrange
        const input = "100";
        //act
        const output = () => convertToNewRoman(input);
        //assert
        expect(output).toThrow(Error);

    });

});



