import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, removeContactHandler }) => {
  return (
    <div className="container mx-auto mt-28 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Your Contacts
      </h2>
      <div className="space-y-4">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            removeContactHandler={removeContactHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
