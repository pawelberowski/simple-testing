export function getNegativeNumbers(array) {
  return array.filter((element) => typeof element === 'number' && element < 0);
}
