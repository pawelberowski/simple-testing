export function isTextUppercase(text) {
  if (!text) {
    return false;
  }
  return text === text.toUpperCase();
}
