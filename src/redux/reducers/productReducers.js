import { ActionTypes } from "../constants/action-types";
const initialState = {
  products: [],
  tempProducts: [],
  loading: false,
  selectedProduct: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.BEGIN_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        tempProducts: action.payload,
        loading: false,
      };

    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { ...state, selectedProduct: [] };
    default:
      return state;
  }
};
