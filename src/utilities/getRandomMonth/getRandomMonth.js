import { getRandomNumberInRange } from './getRandomNumberInRange';

export function getRandomMonth() {
  const monthNumber = getRandomNumberInRange(1, 12);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[monthNumber - 1];
}
