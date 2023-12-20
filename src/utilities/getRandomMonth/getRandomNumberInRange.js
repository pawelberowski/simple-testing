export function getRandomNumberInRange(minimum, maximum) {
  minimum = Math.ceil(minimum);
  maximum = Math.floor(maximum);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
