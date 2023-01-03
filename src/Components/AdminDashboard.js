import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleRemoveAllProduct } from "../Actions/AdminDashboardActions";
import { handleLogout } from "../Actions/LoginStatus";
import AdminProductTable from "./AdminProductTable";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state) => state.handleOperations.productList
  );

  return (
    <div>
      <Navbar className="py-3" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to={'/'} className="text-decoration-none text-white h3">QRLise</Link></Navbar.Brand>
          <Button
            variant="outline-danger"
            onClick={() => {
              dispatch(handleLogout());
            }}
          >
            Logout
          </Button>
        </Container>
      </Navbar>

      <h1 className="text-center mt-5">Dashboard</h1>
      <div className="container mt-5">
        <Link className="btn btn-primary" to={'/admin/addproduct'}>Add New Product</Link>
      </div>

      <AdminProductTable />
      {productList.length === 0 ? <h3 className='text-muted text-center mt-5'>Refresh page to display default products</h3>:''}
      <Button
        variant="outline-danger"
        className="px-4 d-block mx-auto my-4"
        onClick={() => dispatch(handleRemoveAllProduct())}
      >
        Delete All
      </Button>
    </div>
  );
};

export default AdminDashboard;
