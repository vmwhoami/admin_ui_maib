const formatDate = inputDate => {
  const date = new Date(inputDate);
  return `${date.getHours()}:${date.getMinutes()} 
  ${date.getDate() + 1}/${date.getMonth()}/${date.getFullYear()}`;
};

const checkUserName = (users, idnpSelected) => {
  const user = users.find(user => user.idnp === idnpSelected);
  if (idnpSelected.length === 13 && user) {
    console.log(user.numele);
    return `${user.numele} ${user.prenumele}`;
  }
  return 'Nespecificat';
};

export { formatDate, checkUserName };
