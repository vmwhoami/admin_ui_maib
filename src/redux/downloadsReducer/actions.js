import axios from 'axios';
import {
  GET_DOWNLOADS, ERROR,
} from './types';

const setDownloads = name => ({
  type: GET_DOWNLOADS,
  payload: name,
});

const setError = error => ({
  type: ERROR,
  payload: error,
});
const getDowloads = () => async dispatch => {
  axios.get('/api/downloads').then(users => {
    const { data } = users;
    dispatch(setDownloads(data.users));
  }).catch(error => {
    dispatch(setError(error));
  });
};

export {
  getDowloads, setDownloads,
};
