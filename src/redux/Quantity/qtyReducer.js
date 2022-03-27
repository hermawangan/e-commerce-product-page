import { MINUS_QTY, ADD_QTY } from "./qtyType";

const initialState = {
  qty: 1,
};

const quantityReducer = (state = initialState, action) => {
  if (state.qty > 0) {
    switch (action.type) {
      case ADD_QTY:
        return {
          ...state,
          qty: state.qty + 1,
        };
      case MINUS_QTY:
        return {
          ...state,
          qty: state.qty - 1,
        };

      default:
        return state;
    }
  } else {
    switch (action.type) {
      case ADD_QTY:
        return {
          ...state,
          qty: state.qty + 1,
        };

      default:
        return state;
    }
  }
};

export default quantityReducer;
