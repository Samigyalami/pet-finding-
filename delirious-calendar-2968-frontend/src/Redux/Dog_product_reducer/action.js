import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "../actionTypes";
import axios from "axios";

export const getdogproduct = (dispatch) => {
  dispatch({ type: GET_REQUEST });

  axios
    .get(" http://localhost:8080/dogs/get")
    .then((res) => {
      console.log(res.data);
      return dispatch({ type: GET_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      return dispatch({ type: GET_FAILURE });
    });
};
