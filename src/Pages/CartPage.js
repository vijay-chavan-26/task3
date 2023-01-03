import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProductCard from "../Components/CartProductCard";
import UserNavbar from "../Components/UserNavbar";

const CartPage = () => {
  const cartList = useSelector((state) => state.handleCartOperations.cartList);
  // const totalPrice = useSelector((state) => state.handleCartTotalAmount);
  console.log(cartList);
  let totalPrice = 0
  const shipping = cartList.length === 0 ? 0 : 50

  totalPrice = cartList.reduce((initialPrice, product) =>{
    initialPrice = initialPrice + (product.itemAddedQty * product.Product_Price)
    return initialPrice
  },0)
  // console.log(totalPrice)
  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);
  return (
    <>
      <UserNavbar />

      <Container className="mt-5">
        <Row className="gx-3">
          <Col xl={8} md={8} sm={12} className="bg-dark text-white py-3 px-3">
            <h1 className="cart-heading mb-5">Cart Items</h1>
            <div className="cart-products">
              <Table size="sm" className="text-white">
                <tbody>
                  {cartList.length !== 0 ? cartList.map((cartProduct) => {
                    return <CartProductCard key={cartProduct.Product_Id} cartProduct={cartProduct} />
                  }) : <h3 className='text-muted text-center mt-5'>List is Empty....</h3>}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col
            xl={4}
            md={4}
            sm={12}
            className="h-100 bg-primary text-white position-relative pb-5 px-3"
          >
            <h3 className="text-white mt-3 ms-2">Summary</h3>
            <div className="price my-5" style={{ fontSize: "1.5rem" }}>
              <div className="subtotal">
                <span className="subtotal-label">SubTotal : </span>
                <span className="subtotal-price">₹{totalPrice}</span>
              </div>
              <div className="shipping">
                <span className="shipping-label">Shipping : </span>
                <span className="shipping-price">{shipping}</span>
              </div>
              <div className="tax border-bottom pb-5">
                <span className="tax-label">Taxes : </span>
                <span className="tax-price">₹0</span>
              </div>
              <div className="total mb-5">
                <span className="total-label">Total Price : </span>
                <span className="total-price">₹{totalPrice+shipping}</span>
              </div>
            </div>
            <Link
              className="btn btn-dark position-absolute py-1 px-4"
              to={"/error"}
              style={{ bottom: "5%", left: "25%" }}
            >
              CHECKOUT
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartPage;
