const { removeVowelsForWords } = require("./remove-vowels-in-array");
describe("remove-Vowels-For-Words function", () => {
  it("remove vowels from all words in array", () => {
    //arrange
    const input = ["Irina", "Etza", "Daniel"];
    const expected = ["__i_a", "___a", "_a_ie_"];
    //act
    const output = removeVowelsForWords(input);
    //assert
    expect(output).toEqual(expected);
  });

});
