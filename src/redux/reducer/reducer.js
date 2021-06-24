import {
  GET_USERS, ERROR, SET_IDNP, SET_PHONE, SET_ACCESS_DATE,
} from './types';

const initial = {
  users: [],
  error: false,
  errors: {},
  idnpSelected: '',
  phoneSelected: '',
  dateSelected: '',
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case SET_IDNP:
      return { ...state, idnpSelected: action.payload };
    case SET_PHONE:
      return { ...state, phoneSelected: action.payload };
    case SET_ACCESS_DATE:
      return { ...state, dateSelected: action.payload };
    case ERROR:
      return { ...state, error: !state.error, errors: action.payload };
    default:
      return state;
  }
};

export default reducer;
