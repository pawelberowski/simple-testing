export function getNegativeNumbers(array) {
  return array.filter((element) => {
    return typeof element === 'number' && element < 0;
  });
}
