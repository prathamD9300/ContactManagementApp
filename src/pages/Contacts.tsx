import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Important for accessibility

const Contacts: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex h-screen font-sans">
      <div className="flex-1 p-5">
      <h1 className="text-5xl font-bebas-neue mb-5 bg-gradient-to-r from-purple-800 to-purple-400 text-transparent bg-clip-text">
  Contacts
</h1>
        <div className="mb-5">
          <button onClick={openModal} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Create Contact
          </button>
        </div>
        <div className="bg-white border border-gray-300 p-5 rounded-md shadow-md">
          <ContactList />
        </div>
      </div>

      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  contentLabel="Create Contact"
  className="fixed inset-0 flex items-center justify-center"
  overlayClassName="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
>

  <div className={`p-8 bg-white rounded-md shadow-md relative max-w-md mx-auto ${isModalOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Contact</h2>
    <ContactForm onClose={closeModal} />
    <button
      onClick={closeModal}
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
    >
      &times;
    </button>
  </div>
</Modal>


    </div>
  );
};

export default Contacts;
