import { ActionTypes } from "../constants/action-types";

export const beginProducts = () => {
  return {
    type: ActionTypes.BEGIN_PRODUCTS,
  };
};
//set products
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
