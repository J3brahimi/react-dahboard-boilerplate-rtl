import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authActionType from "Store/_types/auth.type";

const initialAuthState = {
  user: null,
  authToken: null,
  error: null,
  loading: false,
};

export const authReducer = persistReducer(
  { storage, key: "v_auth", whitelist: ["user", "authToken"] },
  (state = initialAuthState, { type, payload }) => {
    switch (type) {
      case authActionType.LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case authActionType.LOGIN_SUCCESS:
        return {
          ...state,
          user: payload.user,
          authToken: payload.token,
          loading: false,
        };
      case authActionType.LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: payload.error,
        };

      case authActionType.LOGOUT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case authActionType.LOGOUT_SUCCESS:
        return {
          ...initialAuthState
        };

      case authActionType.REGISTER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case authActionType.REGISTER_SUCCESS:
        return {
          ...state,
          user: payload,
          authToken: payload.token,
          loading: false,
        };
      case authActionType.REGISTER_FAILURE:
        return {
          ...state,
          loading: false,
          error: payload.error,
        };
      default:
        return state;
    }
  },
);
