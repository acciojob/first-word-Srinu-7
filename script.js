function firstWord(s) {
  if (!s) {
    return '';
  }

  // Split the string by spaces and return the first element in the array
  const words = s.trim().split(/\s+/);
  return words[0];
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
