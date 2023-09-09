import { Data } from "./SpecificCategory";

interface Action {
  product: Data;
  type: string;
}

function cartReducer(state: Data[], action: Action) {
  switch (action.type) {
    case "add":
      return [...state, action.product];
    case "remove":
      const productIndex = state.findIndex(
        (item: Data) => item.title === action.product.title
      );
      if (productIndex < 0) {
        return state;
      }
      const update = [...state];
      update.splice(productIndex, 1);
      return update;

    default:
      return state;
  }
}
export default cartReducer;
