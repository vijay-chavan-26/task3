import {
  ADD_PODUCT,
  REMOVE_ALL_PODUCT,
  REMOVE_PODUCT,
  UPDATE_PODUCT,
} from "../Components/Constants";
import { defaultProductList } from "../Components/defaultProductList";

const getLocalData = () => {
  let list = localStorage.getItem("productList");
  if (list === null || list === "[]") {
    localStorage.setItem("lastId", JSON.stringify(6));
    return defaultProductList;
  } else {
    return JSON.parse(list);
  }
};

const productInitialState = {
  productList: getLocalData(),
};

export const handleOperations = (state = productInitialState, action) => {
  switch (action.type) {
    case ADD_PODUCT:
      const list = {
        ...action.product,
      };
      return {
        ...state,
        productList: [...state.productList, list],
      };

    case UPDATE_PODUCT:
      const {
        Product_Id,
        Product_Name,
        Product_Category,
        Product_Desc,
        Product_Price,
        Product_Qty,
      } = action.updatedProduct;

      let newList = state.productList.map((product) => {
        if (product.Product_Id === action.id) {
          return {
            ...product,
            Product_Id,
            Product_Name,
            Product_Category,
            Product_Desc,
            Product_Price,
            Product_Qty
          };
        }
        return product;
      });
      console.log(newList)
      return {
        ...state,
        productList: newList,
      };

    case REMOVE_PODUCT:
      let updateList = state.productList.filter(
        (product) => product.Product_Id !== action.id
      );
      console.log(updateList);
      return {
        ...state,
        productList: updateList,
      };

    case REMOVE_ALL_PODUCT:
      return {
        ...state,
        productList: [],
      };
    default:
      return state;
  }
};
