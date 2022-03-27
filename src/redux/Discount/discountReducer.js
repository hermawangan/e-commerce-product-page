import { DISCOUNT } from "./discountType";

const initialState = {
  discount: 0.5,
};

const discountReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCOUNT:
      return {
        ...state,
        discount: action.payload,
      };

    default:
      return state;
  }
};

export default discountReducer;
