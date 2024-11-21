import React from "react";
import EditProductForm from "../components/EditProductForm";

const EditProductPage = () => {
  return (
    <div>
      <EditProductForm onClose={function (): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};

export default EditProductPage;
