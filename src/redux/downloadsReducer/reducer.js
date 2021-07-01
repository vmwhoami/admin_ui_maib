import {
  GET_DOWNLOADS, ERROR, SET_TIME_RANGE, TIME_DIFFERENCE,
} from './types';

const initial = {
  downloads: [],
  error: false,
  errors: {},
  timeRange: [],
  timeDifference: 'all',
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case TIME_DIFFERENCE:
      return { ...state, timeDifference: action.payload };
    case SET_TIME_RANGE:
      return { ...state, timeRange: [...action.payload] };
    case GET_DOWNLOADS:
      return { ...state, downloads: action.payload };
    case ERROR:
      return { ...state, error: !state.error, errors: action.payload };
    default:
      return state;
  }
};

export default reducer;
