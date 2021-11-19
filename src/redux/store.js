import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./reducers/productReducers";

const store = createStore(
  productReducer,
  composeWithDevTools(applyMiddleware())
);

export default store;
