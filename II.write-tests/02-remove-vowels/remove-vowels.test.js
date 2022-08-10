const { removeVowels } = require("./remove-vowels");
describe("remove-Vowels function", () => {
  it("remove vowels from word", () => {
    //arrange
    const word = "samuel";
    const expected = "_a_ue_";
    //act
    const output = removeVowels(word);
    //assert
    expect(output).toEqual(expected);
  });

});