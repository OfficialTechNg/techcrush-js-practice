function formatName(firstName, lastName) {
  const trimmedFirst = firstName.trim();
  const trimmedLast = lastName.trim();

  const formattedFirst =
    trimmedFirst.charAt(0).toUpperCase() + trimmedFirst.slice(1).toLowerCase();

  const formattedLast = trimmedLast.toUpperCase();

  return `${formattedLast}, ${formattedFirst}`;
}

console.log(formatName('  esther  ', '  ogbu  '));
