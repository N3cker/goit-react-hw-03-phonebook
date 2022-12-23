import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ contacts, setContacts }) => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      alert('A contact with this name already exists in the phonebook');
    } else {
      setContacts([...contacts, { name, number, id: nanoid() }]);
      localStorage.setItem(
        'contacts',
        JSON.stringify([...contacts, { name, number, id: nanoid() }])
      );
      setName('');
      setNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <label>
        Phone number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={event => setNumber(event.target.value)}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContacts: PropTypes.func.isRequired,
};
