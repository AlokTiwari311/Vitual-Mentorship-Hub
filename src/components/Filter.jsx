import React from "react";

function Filter({ label, value, onChange }) {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        placeholder={`Filter by ${label}...`}
        value={value}
        onChange={onChange}
        className="p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
}

export default Filter;
