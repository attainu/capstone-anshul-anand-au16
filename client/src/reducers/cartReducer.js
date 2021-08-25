export const addToCartReducer = (state = { cartItem: [] }, action) => {
  switch (key) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...cartItems, action.payload],
      };

    default:
      return state;
  }
};
