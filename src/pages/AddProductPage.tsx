import React, { useState } from "react";
import AddProductForm from "../components/AddProductForm";

const AddProductPage = () => {
  const [visibleForm, setVisibleForm] = useState<boolean>(false);

  // Hàm để cập nhật trạng thái của form
  const handleSetVisibleForm = (visible: boolean) => {
    setVisibleForm(visible);
  };

  return (
    <div>
      <AddProductForm setVisibleForm={handleSetVisibleForm} />
    </div>
  );
};

export default AddProductPage;
