import { LOAD_USER } from "../context/constants";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: payload ? true : false,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
