export function isPalindrome(text) {
  return (
    text.toLowerCase().replaceAll(' ', '') ===
    text.toLowerCase().replaceAll(' ', '').split('').reverse().join('')
  );
}
