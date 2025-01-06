// src/components/AddContact.js
import React, { useState } from "react";

const AddContact = ({ addContactHandler }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email) {
      alert("All fields are required!");
      return;
    }
    addContactHandler(contact);
    setContact({ name: "", email: "" });
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-20 mx-auto max-w-lg">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Add Contact
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
          className="w-full border-2 border-gray-300 focus:border-teal-400 rounded-lg p-2 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
          className="w-full border-2 border-gray-300 focus:border-teal-400 rounded-lg p-2 outline-none"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white py-2 rounded-lg hover:opacity-90 transition"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
