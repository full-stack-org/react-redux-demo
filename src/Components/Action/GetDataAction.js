import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from '../Constants';

export function fectUsersRequest() {
  return { type: GET_USER_REQUEST };
}

export function fetchUsersData(users) {
  return {
    type: GET_USER_SUCCESS,
    payload: users,
  };
}

export function fetchUserError(error) {
  return {
    type: GET_USER_FAILURE,
    payload: error,
  };
}
