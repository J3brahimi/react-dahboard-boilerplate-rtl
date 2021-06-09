import authActionType from "Store/_types/auth.type";
import { loginUser, registerUser } from "Services/auth.crud";

//Register
const requestRegister = () => ({ type: authActionType.REGISTER_REQUEST });
const successRegister = data => ({
  type: authActionType.REGISTER_SUCCESS,
  payload: data,
});
const failureRegister = error => ({
  type: authActionType.REGISTER_FAILURE,
  payload: error,
});

export const register = user => async dispatch => {
  dispatch(requestRegister());
  await registerUser(user)
    .then(data => {
      dispatch(successRegister(data));
    })
    .catch(err => {
      const error = err.response && (err.response || err.message);
      dispatch(failureRegister(error));
      throw error;
    });
};

//Login
const requestLogin = () => ({ type: authActionType.LOGIN_REQUEST });
const successLogin = auth => ({
  type: authActionType.LOGIN_SUCCESS,
  payload: auth,
});
const failureLogin = error => ({
  type: authActionType.LOGIN_FAILURE,
  payload: error,
});

export const login = data => async dispatch => {
  dispatch(requestLogin());
  await loginUser(data)
    .then(res => {
      dispatch(successLogin(res));
    })
    .catch(err => {
      const error = err.response && (err.response || err.message);
      dispatch(failureLogin());
      throw error;
    });
};

//Logout
const successLogOut = () => ({ type: authActionType.LOGOUT_SUCCESS });

export const logout = () => dispatch => {
  dispatch(successLogOut());
};
