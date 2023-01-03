import React from "react";
import ProductCard from "../Components/ProductCard";
import UserNavbar from "../Components/UserNavbar";
import { useSelector } from "react-redux";

const HomePage = () => {
  const productList = useSelector(
    (state) => state.handleOperations.productList
  );
  return (
    <div className="homepage">
      <UserNavbar />
      <h2 className="text-center mx-auto mt-5 shop-title">
        Roll & Shawarma Zone
      </h2>
      <div className="container my-5">
        <div className="row gy-3 gx-3">
          {productList.map((product) => {
            return <ProductCard key={product.Product_Id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
