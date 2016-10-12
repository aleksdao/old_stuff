import { SIGNIN } from './types';
import axios as 'axios';

const ROOT_URL = 'http://localhost:1337';

export function signinUser(email, password) {

  return function (dispatch) {

  }
  //submit email/password to server

  //if request is good...
  //---update state to indicate user is authenticated
  //---save the JWT token
  //---redirect to route /feature

  //if request is bad...
  //---show an error to the user

  return {
    type: SIGNIN,
    payload: {
      email,
      password
    }
  }
}
