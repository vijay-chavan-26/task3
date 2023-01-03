import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  handleRemoveProduct } from "../Actions/AdminDashboardActions";
import '../css/AdminProductTable.css' 

const AdminProductTable = () => {

  const productList = useSelector(
    (state) => state.handleOperations.productList
  );
  const productId = useSelector(
    (state) => state.handleOperationId
  );
  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
    localStorage.setItem("lastId", JSON.stringify(productId))
  }, [productList,productId]);

  const dispatch = useDispatch();
  return (
    <>
      <div className="container my-3">
        <Table className="bg-white p-3" striped bordered hover>
          <thead className="bg-dark text-white">
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Desc</th>
              <th>Price</th>
              <th>Qty.</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => {
                console.log(typeof product.Product_Img)
              return (
                <tr key={product.Product_Id}>
                  <td>{product.Product_Id}</td>
                  <td>{product.Product_Name}</td>
                  {/* <td><img src={product.Product_Img} height='30px' alt="product img" /></td> */}
                  <td>{product.Product_Category}</td>
                  <td>{product.Product_Desc.slice(0, 45)}...</td>
                  <td>₹{product.Product_Price}</td>
                  <td>{product.Product_Qty}</td>
                  <td>
                    <Link className="btn btn-primary" to={`/admin/editproduct/${product.Product_Id}`}><i className="fa fa-pencil" aria-hidden="true"></i></Link>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => {
                        // dispatch(decrementIdOfProduct());
                        dispatch(handleRemoveProduct(product.Product_Id));
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AdminProductTable;
