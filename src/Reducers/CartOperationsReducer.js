import {
  ADD_CART_PODUCT,
  SUBTRACT_CART_PODUCT,
  REMOVE_CART_PODUCT,
  REMOVE_ALL_CART_PODUCT,
} from "../Components/Constants";

const getLocalData = () => {
  let cartList = localStorage.getItem("cartList");
  if (cartList === null || cartList === "[]") {
    return [];
  } else {
    return JSON.parse(cartList);
  }
};

const cartInitialState = {
  cartList: getLocalData(),
};

export const handleCartOperations = (state = cartInitialState, action) => {
  switch (action.type) {
    case ADD_CART_PODUCT:
      let exsistingProduct = state.cartList.find(
        (curItem) => curItem.Product_Id === action.product.Product_Id
      );

      if (exsistingProduct) {
        let updatedProduct = state.cartList.map((curElem) => {
          if (curElem.Product_Id === action.product.Product_Id) {
            let count = curElem.itemAddedQty + 1;
            return {
              ...curElem,
              itemAddedQty: count,
            };
          } else {
            return curElem;
          }
        });

        return {
          ...state,
          cartList: updatedProduct
        };
      } else {
        const list = {
          ...action.product,
          itemAddedQty: 1
        };
        return {
          ...state,
          cartList: [...state.cartList, list],
        };
      }

      case SUBTRACT_CART_PODUCT:
      let updatedProduct = state.cartList.map((curElem) => {
        if (curElem.Product_Id === action.product.Product_Id) {
          let count = curElem.itemAddedQty - 1;
          return {
            ...curElem,
            itemAddedQty: count,
          };
        } else {
          return curElem;
        }
      })

      return {
        ...state,
        cartList: updatedProduct,
      };

    //   case UPDATE_PODUCT:
    //     const {
    //       Product_Id,
    //       Product_Name,
    //       Product_Category,
    //       Product_Desc,
    //       Product_Price,
    //       Product_Qty,
    //     } = action.updatedProduct;

    //     let newList = state.productList.map((product) => {
    //       if (product.Product_Id === action.id) {
    //         console.log("product " + Product_Id,
    //         Product_Name,
    //         Product_Category,
    //         Product_Desc,
    //         Product_Price,
    //         Product_Qty);
    //         return {
    //           ...product,
    //           Product_Id,
    //           Product_Name,
    //           Product_Category,
    //           Product_Desc,
    //           Product_Price,
    //           Product_Qty
    //         };
    //       }
    //       return product;
    //     });
    //     console.log(newList)
    //     return {
    //       ...state,
    //       productList: newList,
    //     };

      case REMOVE_CART_PODUCT:
        let updateList = state.cartList.filter(
          (product) => product.Product_Id !== action.id
        );
        console.log(updateList);
        return {
          ...state,
          cartList: updateList,
        };

    //   case REMOVE_ALL_PODUCT:
    //     return {
    //       ...state,
    //       productList: [],
    //     };
    default:
      return state;
  }
};
