export function isPalindrome(text) {
  const cleanText = text.toLowerCase().replaceAll(' ', '');
  const reversedCleanText = cleanText.split('').reverse().join('');
  return cleanText === reversedCleanText;
}
