import {
  GET_DOWNLOADS, ERROR,
} from './types';

const initial = {
  downloads: [],
  error: false,
  errors: {},
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case GET_DOWNLOADS:
      return { ...state, downloads: action.payload };
    case ERROR:
      return { ...state, error: !state.error, errors: action.payload };
    default:
      return state;
  }
};

export default reducer;
