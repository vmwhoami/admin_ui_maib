import axios from 'axios';
import { GET_USERS, ERROR } from './types';

const setUsers = users => ({
  type: GET_USERS,
  payload: users,
});

const setError = error => ({
  type: ERROR,
  payload: error,
});
const getUsers = () => async dispatch => {
  axios.get('/api/users').then(users => {
    const { data } = users;
    dispatch(setUsers(data.users));
  }).catch(error => {
    dispatch(setError(error));
  });
};

export default getUsers;
