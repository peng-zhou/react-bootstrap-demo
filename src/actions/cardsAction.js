import { GET_CARDS, CARDS_ERROR } from "../constants/actionTypes";
import { API_JSON_BASE } from "../config";
import axios from "axios";

export const getcards = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_JSON_BASE}policies`);

    dispatch({
      type: GET_CARDS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: CARDS_ERROR,
      payload: console.log(e),
    });
  }
};
