import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AdminPage from "./Pages/AdminPage";
import ErrorPage from "./Pages/ErrorPage";
import AddProductPage from "./Pages/AddProductPage";
import EditProductPage from "./Pages/EditProductPage";
import CartPage from "./Pages/CartPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/admin" exact element={<AdminPage />} />
        <Route path="/admin/addproduct" element={<AddProductPage />} />
        <Route path="/admin/editproduct/:id" element={<EditProductPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
