export function isElementInArray(array, desiredElement) {
  for (let i = 0; i < array.length; ++i) {
    const element = array[i];
    if (element === desiredElement) {
      return true;
    }
  }
  return false;
}
