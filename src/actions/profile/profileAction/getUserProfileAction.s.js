import axios from 'axios';
import { backendURLs } from '../../../helpers/index';
import { profileTypes } from '../../../actionTypes';

export const fetchUserProfileDetails = (token) => {
  const config = { headers: { token } };
  return (dispatch) => axios.get(`${backendURLs.HEROKU_URL}/api/profile/`, config)
    .then((response) => {
      dispatch({
        type: profileTypes.GET_USER_PROFILE__SUCCESS,
        payload: response.data.data
      });
    })
    .catch((error) => {
      dispatch({
        type: profileTypes.REQUEST_FAILURE,
        payload: error.message
      });
    });
};