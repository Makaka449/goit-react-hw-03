import React from "react";
import css from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <li className = {css.contacts}>
      <div className = {css.contactItam}>
        <p className = {css.name}>{name}</p>
        <p className = {css.number}>{number}</p>
      </div>

      <button className={css.button} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;