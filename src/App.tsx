import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductsPage from "./pages/ProductsPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import "./App.css"; // Import CSS

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          {/* Sidebar */}
          <div className="sidebar">
            <div>
              {/* Sử dụng NavLink để thêm class 'active' cho liên kết hiện tại */}
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Hướng dẫn
              </NavLink>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Quản lý hàng hóa
              </NavLink>
              {/* <NavLink
                to="/add-product"
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                Thêm hàng hóa
              </NavLink> */}
            </div>
            {/* <button className="logout-btn">Đăng xuất</button> */}
          </div>

          {/* Nội dung chính */}
          <div className="main-content">
            <Routes>
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/add-product" element={<AddProductPage />} />
              <Route path="/edit-product/:id" element={<EditProductPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;