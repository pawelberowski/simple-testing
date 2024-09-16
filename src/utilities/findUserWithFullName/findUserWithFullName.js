export function findUserWithFullName(usersArray, fullName) {
  return usersArray.find((user) => {
    return user.firstName + ' ' + user.lastName === fullName;
  });
}
