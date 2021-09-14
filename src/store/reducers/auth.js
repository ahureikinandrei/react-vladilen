import { AUTH_SUCCESS, AUTH_LOGOUT } from "../actions/actionType";

const initioaState = {
  token: null,
};

export default function authReduser(state = initioaState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
}
