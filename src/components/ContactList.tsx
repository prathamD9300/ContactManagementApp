import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ContactItem from './ContactItem';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <div className="container mx-auto p-6">
    {contacts.length === 0 ? (
      <div className="text-center text-gray-500 mt-10">
        <p className="text-xl font-semibold">No Contact Found</p>
        <p className="mt-2">Please add a contact from the Create Contact button.</p>
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white shadow-lg rounded-lg p-5 flex flex-col justify-between transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <ContactItem contact={contact} />
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

export default ContactList;