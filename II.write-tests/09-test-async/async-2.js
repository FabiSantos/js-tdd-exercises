const { fetcher } = require("./fetcher");

const getRepos = (url) => {
  return fetcher(url).then((response) => {
    return response.map((rep) => rep.name);
  });
};

module.exports = { getRepos };
