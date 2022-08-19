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

    it('Given the arreglo [1,2,3,4,5,6,"f","a"], shoud return "Su contraseña debe contener letra mayúscula" ', () => {
        //arrange
        const array = [1, 2, 3, 4, 5, , 6, "f", "a"]
        const expected = "Su contraseña debe contener letra mayúscula";
        //act
        const output = passwordVerifier(array);
        //assert
        expect(output).toEqual(expected);
    });

    it('Given the input [1,2,3,4,5,"F","A"], shoud return "Su contraseña debe contener letra minúscula" ', () => {
        //arrange
        const input = [1, 2, 3, 4, 5, 6, "F", "A"];
        const expected = "Su contraseña debe contener letra minúscula";
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


/*    it('Given the arreglo [1,2,3,4,5,"F","a"], shoud return "Su contraseña debe contener minimo 8 caracteres" ', () => {
       //arrange
       const array = [1, 2, 3, 4, 5, "F", "a"]
       const expected = "Su contraseña debe contener minimo 8 caracteres";
       //act
       const output = passwordVerifier(array);
       //assert
       expect(output).toEqual(expected);
   });
*/

/*    it('Given the input null, should throw a error', () => {
          //arrange
          const input = null;
  
          const output = () => passwordVerifier(input);
          // act andassert
          expect(output).toThrow(Error);
      }); */

/*    it('Given the input ["Fabianes"], shoud return "Su contraseña debe contener números" ', () => {
//arrange
const input = ["hhhhhhhhhhhh"];
const expected = "Su contraseña debe contener números";
//act
const output = passwordVerifier(input);
//assert
expect(output).toEqual(expected);
}); */

/*  it('Given the input, if its length is equal to 5, should throw a error', () => {
   //arrange
   const input = 5;

   const output = () => passwordVerifier(input);
   // act andassert
   expect(output).toThrow(Error);
}); */

/*     it('Given the input, your length shoud return eight or more characters', () => {
    //arrange
    const inputLength = 8;
    const expected = 8
    //act
    const output = passwordVerifier(inputLength);
    //assert
    expect(output).toEqual(expected);
}); */

/* Cree una clase de verificación de contraseñas llamada "PasswordVerifier".

1. Agregue las siguientes verificaciones a una función maestra llamada "Verificar ()"

    1. - la contraseña debe tener más de 8 caracteres
    2.- la contraseña no debe ser nula
    3.- la contraseña debe tener al menos una letra mayúscula
    4.- la contraseña debe tener al menos una letra minúscula
    5.- la contraseña debe tener al menos un número
/cart/add-to-cart/ref=dp_start-bbf_1_glance
  Cada uno de estos debe arrojar una excepción con un mensaje diferente de su elección.

2. Agregar función: la contraseña está bien si se cumplen al menos tres de las condiciones anteriores
3. Agregar función: la contraseña nunca está bien si el elemento 1.4 no es verdadero.
4. Suponga que cada verificación tarda 1 segundo en completarse. ¿Cómo resolvería los puntos 2 y 3 para que las pruebas puedan ejecutarse más rápido?*/ 