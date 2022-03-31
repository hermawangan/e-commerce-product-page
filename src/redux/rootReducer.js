import { combineReducers } from "redux";
import cartReducer from "./CartItem/cartReducer";
import discountReducer from "./Discount/discountReducer";
import priceReducer from "./Price/priceReducer";
import quantityReducer from "./Quantity/qtyReducer";

const rootReducer = combineReducers({
  price: priceReducer,
  qty: quantityReducer,
  disc: discountReducer,
  cart: cartReducer,
});

export default rootReducer;
