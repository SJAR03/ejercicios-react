import React, { useRef } from 'react';
import '../styles/contact_form.css';
import { Contact } from '../models/contact.class';
import PropTypes from 'prop-types';

const ContactForm = ({ add }) => {
  const nameRef = useRef('');
  const lastNameRef = useRef('');
  const emailRef = useRef('');

  function addContact(e) {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value,
      false
    );
    add(newContact);

    // Vaciar los campos de entrada
    e.target.reset();
  }

  return (
    <div>
      <div className='form-container mt-5'>
        <h2>Add New Contact</h2>
        <form onSubmit={addContact}>
          {/* <!-- Name input --> */}
          <div className='form-outline mb-4'>
            <label className='form-label' htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              id='name'
              className='form-control'
              ref={nameRef}
              required
            />
          </div>

          {/* <!-- Last name input --> */}
          <div className='form-outline mb-4'>
            <label className='form-label' htmlFor='lastName'>
              Last name
            </label>
            <input
              type='text'
              id='lastName'
              className='form-control'
              ref={lastNameRef}
              required
            />
          </div>

          {/* <!-- Email input --> */}
          <div className='form-outline mb-4'>
            <label className='form-label' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='form-control'
              ref={emailRef}
              required
            />
          </div>

          {/* <!-- Submit button --> */}
          <button type='submit' className='btn btn-primary btn-block'>
            Add contact
          </button>
        </form>
      </div>
    </div>
  );
};

ContactForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default ContactForm;
