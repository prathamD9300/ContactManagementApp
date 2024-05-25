import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import ContactItem from './ContactItem';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <div>
      {contacts.length === 0 ? (
        <div>No Contact Found. Please add a contact from the Create Contact button.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white shadow-md rounded-md p-4 flex flex-col justify-between"
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