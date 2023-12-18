import { getRandomMonth } from './getRandomMonth';
import { getRandomNumberInRange } from './getRandomNumberInRange';

jest.mock('./getRandomNumberInRange', () => ({
  getRandomNumberInRange: jest.fn(),
}));

describe('The getRandomMonth function', () => {
  beforeEach(() => {
    getRandomNumberInRange.mockImplementation(() => {
      return 5;
    });
  });
  it('should call getRandomNumberInRange with the correct arguments', () => {
    getRandomMonth();
    expect(getRandomNumberInRange).toHaveBeenCalledWith(1, 12);
  });
  it('should return a valid month name', () => {
    const validMonths = [
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
    const randomMonth = getRandomMonth();
    expect(validMonths).toContainEqual(randomMonth);
  });
});
