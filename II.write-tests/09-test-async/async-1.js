const fetch = require("node-fetch");

const getRepos = (url) => {
  return fetch(url)
    .then(data => data.json())
    .then((response) => {
      return response.map((rep) => rep.name);
    });
};

module.exports = { getRepos };
