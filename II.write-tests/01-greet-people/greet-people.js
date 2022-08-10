const greetPeople = (people) => {
  const greeting = "Hello ";
  return people.map((person) => greeting + person);
}

module.exports = { greetPeople };

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
