export function isEven(number) {
  if (typeof number !== 'string' && typeof number !== 'number') {
    return false;
  }
  return number % 2 === 0;
}
