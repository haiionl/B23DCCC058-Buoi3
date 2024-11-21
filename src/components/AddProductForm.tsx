import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productsReducer";
import Select from "./Select";

interface NotificationItem {
  id: string;
  message: string;
  type: string;
}

interface AddProductFormProps {
  setVisibleForm: (visible: boolean) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ setVisibleForm }) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const dispatch = useDispatch();
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const addNotification = (message: string, type: string) => {
    const id = Date.now().toString();
    setNotifications([...notifications, { id, message, type }]);
  };

  const options = [
    { label: "Văn phòng phẩm", value: "1" },
    { label: "Thực phẩm", value: "2" },
    { label: "Khác", value: "3" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      type: selectedOption,
    };
    dispatch(addProduct(newProduct));
    setVisibleForm(false);
  };

  return (
    <div className="form-container">
      <h2>Thêm Hàng Hóa</h2>
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
        <Select
          options={options}
          value={selectedOption}
          onChange={(value) => setSelectedOption(value)}
          placeholder="Loại hàng hóa"
        />
        {selectedOption === "2" && (
          <input type="text" placeholder="Hạn sử dụng" required />
        )}
        <button type="submit">Thêm hàng hóa</button>
      </form>
      <button className="back-btn" onClick={() => setVisibleForm(false)}>
        Đóng
      </button>
    </div>
  );
};

export default AddProductForm;