import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProduct } from "../redux/productsReducer";

interface EditProductFormProps {
  setVisibleForm: React.Dispatch<React.SetStateAction<boolean>>;
  idSanPham: number;
}

const EditProductForm: React.FC<EditProductFormProps> = ({ setVisibleForm, idSanPham }) => {
  const product = useSelector((state: any) =>
    state.products.find((product: any) => product.id === idSanPham)
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
    }
  }, [product]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateProduct({ id: product.id, name, price }));
    setVisibleForm(false);
    navigate("/products");
  };

  return (
    <div className="form-container">
      <h2>Chỉnh Sửa Hàng Hóa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên hàng hóa"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Giá hàng hóa"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Lưu Thay Đổi</button>
      </form>
      <button className="back-btn" onClick={() => setVisibleForm(false)}>
        Quay Lại
      </button>
    </div>
  );
};

export default EditProductForm;
