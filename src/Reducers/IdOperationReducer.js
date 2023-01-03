import { INCREMENT_ID} from "../Components/Constants";

const getLocalData = () => {
  let lastId = JSON.parse(localStorage.getItem("lastId"));
  let list = JSON.parse(localStorage.getItem("productList"));

  if (list === [] || lastId === null || lastId === 0) {
    return 6;
  } else {
    return lastId;
  }
};

const productId = getLocalData();

export const handleOperationId = (state = productId, action) => {
  switch (action.type) {
    case INCREMENT_ID:
      return state + 1;
    default:
      return state;
  }
};
