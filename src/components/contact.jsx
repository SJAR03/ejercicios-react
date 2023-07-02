import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';
import '../styles/contact_list.css';

const ContactComponent = ({ contact, status, deleted }) => {
  function contactStatus() {
    if (contact.status) {
      return (
        <h6 className='mb-0'>
          <span className='badge bg-primary'>Conectado</span>
        </h6>
      );
    } else {
      return (
        <h6 className='mb-0'>
          <span className='badge bg-danger'>Desconectado</span>
        </h6>
      );
    }
  }

  const [contactsStatus, setContactsStatus] = useState(contact.status);

  function contactChangeStatus() {
    if (contactsStatus) {
      return (
        <i
          onClick={() => {
            status(contact);
            setContactsStatus(!contactsStatus);
          }}
          className='bi bi-toggle-on task-actions'
          style={{ color: 'green', fontSize: '30px' }}></i>
      );
    } else {
      return (
        <i
          onClick={() => {
            status(contact);
            setContactsStatus(!contactsStatus);
          }}
          className='bi bi-toggle-off task-actions'
          style={{ color: 'gray', fontSize: '30px' }}></i>
      );
    }
  }

  return (
    <tr>
      <th className='align-middle'>
        <span>{contact.name}</span>
      </th>
      <td className='align-middle'>
        <span>{contact.lastName}</span>
      </td>
      <td className='align-middle'>
        <span>{contact.email}</span>
      </td>
      <td className='align-middle'>{contactStatus()}</td>
      <td className='align-middle'>
        {contactChangeStatus()}
        <i
          onClick={() => deleted(contact)}
          className='bi bi-trash task-actions'
          style={{ color: 'tomato', fontSize: '30px' }}></i>
      </td>
    </tr>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  status: PropTypes.func.isRequired,
  deleted: PropTypes.func.isRequired,
};

export default ContactComponent;
