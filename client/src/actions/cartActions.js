export const addToCart = () => (dispatch) => {
  const cartItem = {
    name: product.name,
    _id: product._id,
    price: product.price,
    countInStock: product.countInStock,
    quantity: product.quantity,
  };
  dispatch({ type: 'ADD_TO_CART', payload: cartItem });
};
