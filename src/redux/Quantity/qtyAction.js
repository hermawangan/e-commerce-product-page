import { ADD_QTY } from "./qtyType";
import { MINUS_QTY } from "./qtyType";

export const addQty = () => {
  return {
    type: ADD_QTY,
  };
};

export const minusQty = () => {
  return {
    type: MINUS_QTY,
  };
};
