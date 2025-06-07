import {
  ADDNEWITEM,
  RESTORE_FULL_QUANTITY,
  RESTORE_PRODUCT_QUANTITY,
  UPDATE_PRODUCT_QUANTITY,
} from "./actionType";

export const addNewItem = (newItem) => {
  return {
    type: ADDNEWITEM,
    payload: newItem,
  };
};
export const updateProductQuantity = (id) => {
  return {
    type: UPDATE_PRODUCT_QUANTITY,
    payload: id,
  };
};
export const restoreProductQuantity = (id) => {
  return {
    type: RESTORE_PRODUCT_QUANTITY,
    payload: id,
  };
};

export const restoreFullQuantity = (id, quantity) => {
  return {
    type: RESTORE_FULL_QUANTITY,
    payload: { id, quantity },
  };
};
