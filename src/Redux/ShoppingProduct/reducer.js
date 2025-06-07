import { ADDTOCART, DECREMENT, DELETE, INCREMENT } from "./actionType";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  const itemExists = state.cart.find((item) => item.id === action.payload.id);
  switch (action.type) {
    case ADDTOCART: {
      if (itemExists) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case INCREMENT: {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case DECREMENT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload) {
            if (item.quantity === 0) {
              return item;
            }
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
        // item.id === action.payload
        //   ? { ...item, quantity: item.quantity - 1 }
        //   : item

        // .filter((item) => item.quantity > 0),
      };
    case DELETE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
