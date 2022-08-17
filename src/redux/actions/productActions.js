import * as actionTypes from "../constants/productConstant";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    // console.log("Hiiiiii");
    const { data } = await axios.get(`http://localhost:4000/api/products`);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    // dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
  }
};

export const getProductDetails = (slug) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(
      `http://localhost:4000/api/product/${slug}`
    );
    console.log(data);

    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: error.response,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};
