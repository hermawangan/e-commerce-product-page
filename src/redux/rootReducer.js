import { combineReducers } from "redux";
import discountReducer from "./Discount/discountReducer";
import priceReducer from "./Price/priceReducer";
import quantityReducer from "./Quantity/qtyReducer";

const rootReducer = combineReducers({
  price: priceReducer,
  qty: quantityReducer,
  disc: discountReducer,
});

export default rootReducer;
