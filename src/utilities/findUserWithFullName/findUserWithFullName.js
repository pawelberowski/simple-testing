export function findUserWithFullName(usersArray, fullName) {
  const firstName = fullName.split(' ')[0];
  const lastName = fullName.split(' ')[1];
  return usersArray.find((user) => {
    return user.firstName === firstName && user.lastName === lastName;
  });
}
