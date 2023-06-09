import React from 'react';
import Navbar2 from '../Navbar/Navbar2';

const ContactUs = () => {
  const contacts = [
    { id: 1, name: 'Charan Kumar CL', email: 'ckumarcl@firstam.com', phone: '6362056132' },
    { id: 2, name: 'Nidhi', email: 'ninidhi@firstam.com', phone: '9877965539' },
   
    { id: 3, name: 'Dev Malhotra', email: 'dmalhotra@dirstam.com', phone: '9813084847' },
    { id: 4, name: 'Swayansu Abhisek', email: 'sabhisek@firstam.com', phone: '6371050899' },
    { id: 5, name: 'Lehari', email: 'lehariu@firstam.com', phone: '9353606997' },
    { id: 6, name: 'Mandadi Karthikeya Reddy', email: 'mkarthikeyanreddy@firstam.com', phone: '5551234567' },
    { id: 7, name: 'Anshika Singh', email: 'Anssingh@firstam.com', phone: '8948175337' },

    // Add more contacts here...
  ];

  return (
    <>
    <Navbar2 />
    <div className="container mx-auto p-8 ">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {contacts.map(contact => (
          <div key={contact.id} className="bg-white rounded-lg shadow-lg p-4 transform hover:scale-110">
            <h2 className="text-lg font-semibold">{contact.name}</h2>
            <p className="text-gray-600">Email: {contact.email}</p>
            <p className="text-gray-600">Phone: {contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ContactUs;
