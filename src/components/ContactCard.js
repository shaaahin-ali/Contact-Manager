// src/components/ContactCard.js
import React from "react";

const ContactCard = ({ contact, removeContactHandler }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
        <p className="text-gray-600">{contact.email}</p>
      </div>
      <button
        onClick={() => removeContactHandler(contact.id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default ContactCard;
