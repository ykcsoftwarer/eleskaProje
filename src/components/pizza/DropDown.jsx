import React from "react";

function Dropdown({ label }) {
  return (
    <div className="flex flex-col space-y-4">
      <p>{label}</p>
      <select className="px-4 py-2 border border-gray-300 rounded focus:outline-none">
        <option>Seçenek 1</option>
        <option>Seçenek 2</option>
        <option>Seçenek 3</option>
        <option>Seçenek 4</option>
        <option>Seçenek 5</option>
        <option>Seçenek 6</option>
      </select>
    </div>
  );
}

export default Dropdown;