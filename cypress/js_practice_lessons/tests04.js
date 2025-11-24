function reverseWords(sentence) {
  // 1. Trim leading/trailing spaces and split the sentence into an array of words.   // The regular expression /\s+/ handles multiple spaces between words.
  const words = sentence.trim().split(/\s+/);

  // 2. Reverse the order of words in the array.
  const reversedWords = words.reverse();

  // 3. Join the reversed words back into a sentence with a single space.
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}

// Example usage:
const originalSentence1 = 'This is a sample sentence';
const reversedSentence1 = reverseWords(originalSentence1);
console.log(reversedSentence1); // Output: "sentence sample a is This"
