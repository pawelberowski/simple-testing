export function findUserWithFullName(usersArray, fullName) {
  const firstName = fullName.split(' ')[0];
  const lastName = fullName.split(' ')[1];
  const user = usersArray.find((user) => {
    return user.firstName === firstName && user.lastName === lastName;
  });
  if (!user) {
    return 'User not found';
  }
  return user;
}
