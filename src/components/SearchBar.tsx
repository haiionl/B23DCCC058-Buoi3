import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Tìm kiếm hàng hóa..."
      value={query}
      onChange={handleSearch}
      style={{ marginBottom: "15px", padding: "5px", width: "300px" }}
    />
  );
};

export default SearchBar;
