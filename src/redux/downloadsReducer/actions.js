import axios from 'axios';
import {
  GET_DOWNLOADS, ERROR, SET_TIME_RANGE,
} from './types';

const setTimeRange = timeRange => ({
  type: SET_TIME_RANGE,
  payload: timeRange,
});

const setDownloads = downloads => ({
  type: GET_DOWNLOADS,
  payload: downloads,
});

const setError = error => ({
  type: ERROR,
  payload: error,
});
const getDowloads = () => async dispatch => {
  axios.get('/api/downloads').then(info => {
    const { data } = info;
    dispatch(setDownloads(data.downloads));
  }).catch(error => {
    dispatch(setError(error));
  });
};

export {
  getDowloads, setDownloads, setTimeRange,
};
