import React from "react";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";



const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <Contact
          key = {contact.id}
          contact = {contact}
          onDeleteContact = {onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;