import { INCREMENT_CART_COUNT, DECREMENT_CART_COUNT, INCREMENT_CART_TOTAL_AMOUNT, DECREMENT_CART_TOTAL_AMOUNT } from "../Components/Constants"

const getLocalData = () => {
  let cartCount = JSON.parse(localStorage.getItem("cartCount"));
  let list = JSON.parse(localStorage.getItem("productList"));

  if (list === [] || cartCount === null || cartCount === 0) {
    return 0;
  } else {
    return cartCount;
  }
};

const cartCount = getLocalData();

export const handleCartCount = (state = cartCount, action) => {
  switch (action.type) {
    case INCREMENT_CART_COUNT:
      return state + 1;
    case DECREMENT_CART_COUNT:
      return state - action.qty;
    default:
      return state;
  }
};

export const handleCartTotalAmount = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_CART_TOTAL_AMOUNT:
      return state + action.price;
    case DECREMENT_CART_TOTAL_AMOUNT:
      return state - action.price;
    default:
      return state;
  }
};
