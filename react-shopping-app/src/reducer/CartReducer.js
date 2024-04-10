const CartReducer = (state, action) => {
  if (action.type === "CALCULATE_TOTAL") {
    const { total, amount } = state.products.reduce(
      (cartTotal, item) => {
        const { price, quantity } = item;
        const totalprice = price * quantity;
        cartTotal.total += totalprice;
        cartTotal.amount += quantity;
        return cartTotal;
      },
      {
        // defind default value
        total: 0,
        amount: 0,
      }
    );
    return {
      ...state,
      total,
      amount,
    };
  }
};
export default CartReducer;
