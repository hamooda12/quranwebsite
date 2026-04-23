import { useState } from "react";
import './searchsurah.css'
export function SearchSurah({ onSearch }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    const text = e.target.value;
    setValue(text);
    onSearch(text);
  }

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="🔍 ابحث عن سورة..."
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}