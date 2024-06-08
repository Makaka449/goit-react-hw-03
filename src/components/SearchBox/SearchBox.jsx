import React from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ searchTerm, onSearchChange }) => {
  return (
    <div className = {css.box}>
      <label className = {css.label}>Find contacts by name</label>
      <input
        className = {css.input}
        type = "text"
        value = {searchTerm}
        onChange = {(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;