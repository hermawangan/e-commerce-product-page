import { DISCOUNT } from "./discountType";

export const discount = (discount) => {
  return {
    type: DISCOUNT,
    payload: discount,
  };
};
