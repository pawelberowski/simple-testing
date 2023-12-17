export function shouldSetAlarm({ isEmployed, isOnVacation }) {
  return isEmployed && !isOnVacation;
}
