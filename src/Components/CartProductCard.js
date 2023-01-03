import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleAddCartProduct, handleCartCountDecrement, handleCartCountIncrement, handleRemoveCartProduct, handleSubtractCartProduct } from "../Actions/CartOperations";

const CartProductCard = ({ cartProduct }) => {
  const dispatch = useDispatch();
  return (
    <>
      <tr>
        <td className="col-1">
          <img
            src={cartProduct.Product_Img}
            height="35rem"
            width="35rem"
            alt="product img"
          />
        </td>
        <td className="col-5 ps-3">{cartProduct.Product_Name}</td>
        <td className="col-3 p-0 pt-1">
          <div className="quantity d-flex">
            <Button variant="danger" className="p-0 px-1 mx-1" onClick={() => {
                if(cartProduct.itemAddedQty === 1){
                    alert("Cannot Subtract More Quantity!")
                }else{
                dispatch(handleCartCountDecrement(1));
                dispatch(handleSubtractCartProduct(cartProduct));
                }
              }}>
              -
            </Button>
            <input
              type="number"
              className="w-25 text-center"
              value={cartProduct.itemAddedQty}
              readOnly
            />
            <Button
              variant="success"
              className="p-0 px-1 mx-1"
              onClick={() => {
                if(cartProduct.itemAddedQty === cartProduct.Product_Qty){
                    alert("Cannot Add More Quantity!")
                }else{
                dispatch(handleCartCountIncrement());
                dispatch(handleAddCartProduct(cartProduct));
                }
              }}
            >
              +
            </Button>
          </div>
        </td>
        <td className="col-2 ps-1 pt-2 text-center">₹{cartProduct.itemAddedQty*cartProduct.Product_Price}</td>
        <td className="col-1 text-center">
          <Button
            variant="outline-danger"
            onClick={() => {
                dispatch(handleCartCountDecrement(cartProduct.itemAddedQty))
              dispatch(handleRemoveCartProduct(cartProduct.Product_Id));
            }}
            className="p-0 px-2 mt-1"
          >
            <i className="fa fa-trash" aria-hidden="true"></i>
          </Button>
        </td>
      </tr>
    </>
  );
};

export default CartProductCard;
