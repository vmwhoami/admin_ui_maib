import {
  GET_DOWNLOADS, ERROR, SET_TIME_RANGE,
} from './types';

const initial = {
  downloads: [],
  error: false,
  errors: {},
  timeRange: [],
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case SET_TIME_RANGE:
      return { ...state, timeRange: action.payload };
    case GET_DOWNLOADS:
      return { ...state, downloads: action.payload };
    case ERROR:
      return { ...state, error: !state.error, errors: action.payload };
    default:
      return state;
  }
};

export default reducer;
