const getSecondThird = (array) => {
  const newArray = array.slice();
  newArray.sort((x, y) => x - y);
  return [newArray[1], newArray[2]];
};

module.exports = { getSecondThird };
