const myProfile = {
  name: "TechNg",
  age: 25,
  country: "Nigeria",
  hobby: "coding"
};

function displayProfile(person) {
  console.log(
    `My name is ${person.name}, I am ${person.age} years old from ${person.country}, and I love ${person.hobby}.`
  );
}

displayProfile(myProfile);
