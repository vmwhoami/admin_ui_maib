export default inputDate => {
  const date = new Date(inputDate);
  return `${date.getHours()}:${date.getMinutes()} 
  ${date.getDate() + 1}/${date.getMonth()}/${date.getFullYear()}`;
};
