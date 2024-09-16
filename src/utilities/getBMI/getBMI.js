export function getBMI(weight, height) {
  if (typeof weight !== 'number' || typeof height !== 'number') {
    throw new Error(
      'please provide weight as a number of kilograms and height as a number in meters',
    );
  }
  const bmi = weight / height ** 2;
  if (bmi <= 18.5) {
    return 'Underweight';
  } else if (bmi <= 25.0) {
    return 'Normal';
  } else if (bmi <= 30.0) {
    return 'Overweight';
  }
  return 'Obese';
}
