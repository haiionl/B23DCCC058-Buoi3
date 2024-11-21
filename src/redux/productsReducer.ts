import { createSlice } from "@reduxjs/toolkit";
interface Product {}
  // Lấy danh sách hàng hóa từ localStorage khi khởi động
const loadProductsFromLocalStorage = () => {
  const products = localStorage.getItem("products");
  return products ? JSON.parse(products) : [];
};

// Lưu danh sách hàng hóa vào localStorage
const saveProductsToLocalStorage = (products) => {
  localStorage.setItem("products", JSON.stringify(products));
};

const productsSlice = createSlice({
  name: "products",
  initialState: loadProductsFromLocalStorage(), // Khởi tạo từ localStorage
  reducers: {
    addProduct: (state, action) => {
      const updatedState = [...state, action.payload];
      saveProductsToLocalStorage(updatedState); // Lưu vào localStorage
      return updatedState;
    },
    deleteProduct: (state, action) => {
      const updatedState = state.filter(
        (product) => product.id !== action.payload
      );
      saveProductsToLocalStorage(updatedState); // Lưu vào localStorage
      return updatedState;
    },
    updateProduct: (state, action) => {
      const { id, name, price } = action.payload;
      const updatedState = state.map((product) =>
        product.id === id ? { ...product, name, price } : product
      );
      saveProductsToLocalStorage(updatedState); // Lưu vào localStorage
      return updatedState;
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
