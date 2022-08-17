const { getRepos } = require("./async-2");
const { fetcher } = require("./fetcher");
jest.mock("./fetcher");

describe('getRepos and the fetcher functions', () => {
  it("Given the name 'js-exercises', should return the name 'js-exercises' (with mock)", () => {
    // arrange
    fetcher.mockResolvedValue([{ name: "js-exercises" }]);
    const url = "https://api.github.com/users/kabaros/repos";
    // act
    return getRepos(url).then((result) => {
      // assert
      expect(result).toContain("js-exercises");
    });
  });

  it("Should return a error 404 ('not found'), if the promisse is rejected (with mock)", () => {
    //arrange
    fetcher.mockRejectedValue({ status: "not found" });
    const url = "https://api.github.com/users/kabaros/repos";
    //act
    return getRepos(url).catch((result) => {
      // assert
      expect(result).toEqual({ status: "not found" });
    });
  });

  it('Given the array "[{ name: "js-exercises" },{ name: "data-lovers" },{ name: "burguer-queen" },{ name: "card-validation" }]", should return a list of repositories names (with mock)', () => {
    //arrange
    const repos = [
      { name: "js-exercises" },
      { name: "data-lovers" },
      { name: "burguer-queen" },
      { name: "card-validation" }
    ];

    const expected = [
      "js-exercises",
      "data-lovers",
      "burguer-queen",
      "card-validation"
    ]
    fetcher.mockResolvedValue(repos);
    const url = "https://api.github.com/users/kabaros/repos";
    //act
    getRepos(url).then((result) => {
      // assert
      expect(result).toEqual(expected);
    });
  });

});


