import React, { useState } from "react";

const Filter = ({ setSearchQuery, setPostsPerPage }) => {
  const [search, setSearch] = useState("");
  const [perPage, setPerPage] = useState(10);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handlePerPageChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setPerPage(value);
      setPostsPerPage(value);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 w-full max-w-3xl">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={handleSearchChange}
        className="p-2 border rounded-md w-full md:w-1/2"
      />
      <input
        type="number"
        placeholder="Cards per page"
        value={perPage}
        onChange={handlePerPageChange}
        className="p-2 border rounded-md w-full md:w-1/2"
      />
    </div>
  );
};

export default Filter;
