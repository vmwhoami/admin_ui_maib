import { GET_USERS, ERROR } from './types';

const initial = {
  users: [],
  error: false,
  errors: {},
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case ERROR:
      return { ...state, error: !state.error, errors: action.payload };
    default:
      return state;
  }
};

export default reducer;
