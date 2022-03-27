import { PRICE_TAG } from "./priceType";

export const priceChange = (discount = 1) => {
  return {
    type: PRICE_TAG,
    payload: discount,
  };
};
