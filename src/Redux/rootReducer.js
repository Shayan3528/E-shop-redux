import { combineReducers } from "redux";
import productReducer from "../Redux/AddingProduct/reducer";
import shoppingReducer from "../Redux/ShoppingProduct/reducer";

const rootReducer = combineReducers({
  product: productReducer,
  shoppingReducer: shoppingReducer,
});

export default rootReducer;
