function formatName(firstName, lastName) {
  firstName = firstName.trim();
  lastName = lastName.trim();

  return lastName + ", " + firstName;
}

console.log(formatName('  Akewusola ', '  Habeeb '));
