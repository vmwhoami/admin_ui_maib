const formatDate = inputDate => {
  const date = new Date(inputDate);
  return `${date.getHours()}:${date.getMinutes()} 
  ${date.getDate() + 1}/${date.getMonth()}/${date.getFullYear()}`;
};

const checkUserName = (users, idnpSelected) => {
  const user = users.find(user => user.idnp === idnpSelected);
  if (idnpSelected.length === 13 && user) {
    return `${user.numele} ${user.prenumele}`;
  }
  return 'Nespecificat';
};

const filterer = (users, idnpSelected, phoneSelected, reqDate, dateSelected) => {
  const filteredUsers = users.filter(user => {
    if (idnpSelected === '') {
      return true;
    }
    return user.idnp.includes(idnpSelected);
  })
    .filter(user => {
      if (phoneSelected === '') {
        return true;
      }
      return user.phone.includes(phoneSelected);
    })
    .filter(user => {
      if (dateSelected === '') {
        return true;
      }
      const lastTrans = formatDate(user.lastTransaction).split(' ')[3].trim();
      return lastTrans.includes(reqDate);
    });

  return filteredUsers;
};

export { formatDate, checkUserName, filterer };