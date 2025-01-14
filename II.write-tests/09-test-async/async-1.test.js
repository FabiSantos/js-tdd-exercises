const { getRepos } = require("./async-1");

describe('async-1 exercise', () => {
  it("gets a list of repositories names", () => {
    // arrange
    const url = "https://api.github.com/users/kabaros/repos";
    // act
    getRepos(url).then((result) => {
      // assert
      expect(result).not.toContain("js-exercises");
      expect(result).toContain("dom-ajax-repo");
    });
  });
});


