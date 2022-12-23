import PropTypes from 'prop-types';
import React from 'react';

const ContactList = ({ contacts, filter, setContacts }) => {
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              onClick={() => {
                setContacts(contacts.filter(c => c.id !== contact.id));
                localStorage.setItem(
                  'contacts',
                  JSON.stringify(contacts.filter(c => c.id !== contact.id))
                );
              }}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  setContacts: PropTypes.func.isRequired,
};
