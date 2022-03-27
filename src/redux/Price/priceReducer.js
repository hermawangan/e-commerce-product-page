import { PRICE_TAG } from "./priceType";

const initiaState = {
  price: 250.0,
};

const priceReducer = (state = initiaState, action) => {
  switch (action.type) {
    case PRICE_TAG:
      return {
        ...state,
        price: state.price * action.payload,
      };

    default:
      return state;
  }
};

export default priceReducer;
