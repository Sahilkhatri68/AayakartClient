import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (slug, quantity) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `https://web.chatvait.com/products/slug/${slug}`
    );

    dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    console.log("Error while calling cart API");
  }
};

export const removeFromCart = (slug) => (dispatch, getState) => {
  console.log(slug);
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: slug,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
