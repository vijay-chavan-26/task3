import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  handleAddCartProduct,
  handleCartCountIncrement,
} from "../Actions/CartOperations";

const ProductCard = (productObj) => {
  const { product } = productObj;
  const dispatch = useDispatch();

  const addToCart = () => {
    if (product.itemAddedQty === product.Product_Qty) {
      alert("Cannot Add More Quantity!");
    } else {
      alert("Item added to cart");
      dispatch(handleCartCountIncrement());
      dispatch(handleAddCartProduct(product));
    }
  };

  return (
    <div className="col-xl-3 col-md-4 col-sm-6 col-6">
      <Card className="h-100 shadow">
        <Card.Img
          variant="top"
          height="100rem"
          className="card-img"
          src={product.Product_Img}
        />
        <Badge
          bg={product.Product_Category === "Veg" ? "success" : "danger"}
          className="position-absolute badge"
        >
          {product.Product_Category}
        </Badge>{" "}
        <Card.Body className="position-relative pt-1">
          <Card.Title>{product.Product_Name.slice(0, 15)}...</Card.Title>
          <Card.Text className="text-muted mb-1">
            {product.Product_Desc.slice(0, 40)}...
          </Card.Text>
          <Card.Text className="text-danger h5 mb-5">
            ₹{product.Product_Price}.00
          </Card.Text>
          <Button
            variant="dark"
            className="position-absolute add-to-cart-btn"
            onClick={addToCart}
          >
            <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i> Add
            to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
