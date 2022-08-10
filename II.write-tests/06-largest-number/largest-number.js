const getLargestNumber = (array) => {
/*   let largestNumber;
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      largestNumber = array[i];
    }
  }
  return largestNumber; */
  return Math.max(...array);
}

module.exports = { getLargestNumber };
