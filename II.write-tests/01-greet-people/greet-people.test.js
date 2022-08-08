const { greetPeople } = require("./greet-people");
describe("greet-people function", () => {
  it("print list of names prefixed with Hello", () => {
    //arrange
    const mentors = ['Irina', 'Ashleigh', 'Etza'];
    const expected = [
      "Hello Irina",
      "Hello Ashleigh",
      "Hello Etza"
    ];
    //act
    const output = greetPeople(mentors);
    //assert
    expect(output).toEqual(expected);
  });

});
