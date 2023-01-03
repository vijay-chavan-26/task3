import React, { useEffect } from 'react'
import { Container, Navbar } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const UserNavbar = () => {
    const cartCount = useSelector((state)=> state.handleCartCount)

    useEffect(()=>{
        localStorage.setItem("cartCount", JSON.stringify(cartCount))
    },[cartCount])
    // console.log(cartCount)
  return (
    <>
        <Navbar className="py-3" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand><Link to={'/'} className="text-decoration-none text-white h3">QRLise</Link></Navbar.Brand>
          <div className="buttons d-flex mt-3 cursor-pointer">
          <Link  to='/cart' className="btn btn-dark cart-trolley position-relative">
          <div><i className="fa fa-shopping-cart fa-xl" aria-hidden="true"></i></div>
          <span className='cart-count bg-primary text-white text-center rounded-circle position-absolute'>{cartCount}</span>
          </Link>
          <Link className="btn btn-primary ms-5" to='/admin'>Login</Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default UserNavbar