import {
  ADDNEWITEM,
  RESTORE_FULL_QUANTITY,
  RESTORE_PRODUCT_QUANTITY,
  UPDATE_PRODUCT_QUANTITY,
} from "./actionType";

import { initialState } from "./initialState";

function nextId(state) {
  const maxId = state.reduce((maxId, state) => Math.max(state.id, maxId), -1);
  return maxId + 1;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDNEWITEM:
      return [
        ...state,
        {
          id: nextId(state),
          name: action.payload.name,
          category: action.payload.category,
          imageUrl: action.payload.imageUrl,
          price: action.payload.price,
          quantity: action.payload.quantity,
        },
      ];

    case UPDATE_PRODUCT_QUANTITY:
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      );

    case RESTORE_PRODUCT_QUANTITY:
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case RESTORE_FULL_QUANTITY:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + action.payload.quantity }
          : item
      );

    default:
      return state;
  }
};

export default reducer;
