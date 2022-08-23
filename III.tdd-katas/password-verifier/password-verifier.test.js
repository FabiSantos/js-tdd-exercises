const { passwordVerifier } = require("./password-verifier");

describe('Passord-verifier function', () => {
    it('Given the input [1, 2, 3, 4, 5, 6, "F", "a"], shoud return [1,2,3,4,5,6,"F","a"]', () => {
        //arrange
        const input = [1, 2, 3, 4, 5, 6, "F", "a"]
        const expected = [1, 2, 3, 4, 5, 6, "F", "a"];
        //act
        const output = passwordVerifier(input);
        //assert
        expect(output).toEqual(expected);
    });

    it('Given the arreglo [1,2,3,4,5,6,"f","a"], shoud return "la contraseña debe tener al menos una letra mayúscula" ', () => {
        //arrange
        const array = [1, 2, 3, 4, 5, , 6, "f", "a"]
        const expected = "la contraseña debe tener al menos una letra mayúscula";
        //act
        const output = passwordVerifier(array);
        //assert
        expect(output).toEqual(expected);
    });

    it('Given the input [1,2,3,4,5,"F","A"], shoud return "la contraseña debe tener al menos una letra minúscula" ', () => {
        //arrange
        const input = [1, 2, 3, 4, 5, 6, "F", "A"];
        const expected = "la contraseña debe tener al menos una letra minúscula";
        //act
        const output = passwordVerifier(input);
        //assert
        expect(output).toEqual(expected);
    });

    it('Given the input ["a", "b", "c", "d", "e", "F", "G", "H"], shoud return la contraseña debe tener al menos un número.', () => {
        //arrange
        const input = ["a", "b", "c", "d", "e", "F", "G", "H"];
        const expected = "la contraseña debe tener al menos un número.";
        //act
        const output = passwordVerifier(input);
        //assert
        expect(output).toEqual(expected);
    });

    it('Given the input [null], shoud return "1. - la contraseña debe tener más de 8 caracteres; 2.- la contraseña debe tener al menos una letra mayúscula; 3.- la contraseña debe tener al menos una letra minúscula; 4.- la contraseña debe tener al menos un número "', () => {
        //arrange
        const input = [null];
        const expected = "la contraseña debe tener más de 8 caracteres";
        //act
        const output = passwordVerifier(input);
        //assert
        expect(output).toEqual(expected);
    });

    it('Given the input null, shoud return "1. - la contraseña debe tener más de 8 caracteres; 2.- la contraseña debe tener al menos una letra mayúscula; 3.- la contraseña debe tener al menos una letra minúscula; 4.- la contraseña debe tener al menos un número "', () => {
        //arrange
        const input = [5];
        const expected = "la contraseña debe tener más de 8 caracteres";
        //act
        const output = passwordVerifier(input);
        //assert
        expect(output).toEqual(expected);
    });


    it('Given the input type number 10, should throw a error', () => {
        //arrange
        const input = 10;
        const output = () => passwordVerifier(input);
        // act andassert
        expect(output).toThrow(Error);
    });

    it('Given the input type string "10", should throw a error', () => {
        //arrange
        const input = "10";
        const output = () => passwordVerifier(input);
        // act andassert
        expect(output).toThrow(Error);
    });

    it('Given the input true, should throw a error', () => {
        //arrange
        const input = true;
        const output = () => passwordVerifier(input);
        // act andassert
        expect(output).toThrow(Error);
    });

});
