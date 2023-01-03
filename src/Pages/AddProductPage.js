import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  handleAddProduct,
  incrementIdOfProduct,
} from "../Actions/AdminDashboardActions";
import "../css/AdminLoginForm.css";

const AddProductPage = () => {
  const [text, setText] = useState({
    Product_Id: "",
    Product_Img: "",
    Product_Name: "",
    Product_Category: "",
    Product_Desc: "",
    Product_Price: "",
    Product_Qty: "",
    itemAddedQty: 0
  });

  const dispatch = useDispatch();

  const productId = useSelector((state) => state.handleOperationId);
  const isLogin = JSON.parse(useSelector((state) => state.setLogin));
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("loginStatus", isLogin);
    if (isLogin !== true) {
      navigate("/admin");
    }
    // eslint-disable-next-line
  }, [isLogin]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setText((text) => {
      return { ...text, Product_Id: productId, [name]: value };
    });
  };

  return (
    <div>
      <div
        id="login-box"
        className="container rounded-bottom-4 py-5 px-4 mt-5 bg-white"
      >
        <h1 className="text-center text-primary">Add New Product</h1>
        <p className="text-muted mt-3 text-center mb-5">
          - Enter your product details
        </p>
        <Form id="form-box">
          <Form.Group className="mb-3">
            <Form.Label className="w-100">Product Name :</Form.Label>
            <Form.Control
              type="text"
              name="Product_Name"
              placeholder="Eg. Double Chicken Roll"
              value={text.Product_Name}
              onChange={handleInput}
              autoFocus
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Disabled Category</Form.Label>
            <Form.Select
              name="Product_Category"
              placeholder="Eg. Nonveg"
              value={text.Product_Category}
              onChange={handleInput}
            >
              <option disabled selected value="">
                Category
              </option>
              <option value="Veg">Veg</option>
              <option value="Nonveg">Nonveg</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="w-100">Product Description :</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="Product_Desc"
              placeholder="Add Product Description"
              value={text.Product_Desc}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="w-100">Price :</Form.Label>
            <Form.Control
              type="number"
              name="Product_Price"
              placeholder="Eg. 120"
              value={text.Product_Price}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="w-100">Quantity :</Form.Label>
            <Form.Control
              type="number"
              name="Product_Qty"
              placeholder="Eg. 10"
              value={text.Product_Qty}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="w-100">Image :</Form.Label>
            <Form.Control
              type="file"
              name="Product_Img"
              accept="image/jpeg"
              onChange={(e) => {
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);

                reader.onload = () => {
                  const url = reader.result;
                  setText({
                    ...text,
                    [e.target.name]: url,
                  });
                };
              }}
            />
          </Form.Group>

          <div className="buttons mt-5 text-right">
            <Link className="btn btn-danger me-4" to="/admin">
              Cancel
            </Link>
            <Link
              type="submit"
              className="btn btn-primary px-4"
              onClick={(e) => {
                e.preventDefault();
                if (
                  text.Product_Img === "" ||
                  text.Product_Name.trim() === "" ||
                  text.Product_Category === "" ||
                  text.Product_Desc.trim() === "" ||
                  text.Product_Price === "" ||
                  text.Product_Qty === ""
                ) {
                  alert("please add all fields");
                  return;
                }

                setText({
                  Product_Name: "",
                  Product_Category: "",
                  Product_Desc: "",
                  Product_Price: "",
                  Product_Qty: "",
                });
                dispatch(incrementIdOfProduct());
                dispatch(handleAddProduct(text));
                navigate("/admin");
              }}
            >
              Save
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddProductPage;
