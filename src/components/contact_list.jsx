import React, { useState } from 'react';
import ContactComponent from './contact';
import { Contact } from '../models/contact.class';
import '../styles/contact_list.css';

const Contact_list = () => {
  const defaultContact1 = new Contact(
    'Nombre 1',
    'Apellido 1',
    'Email 1',
    false
  );

  const defaultContact2 = new Contact(
    'Nombre 2',
    'Apellido 2',
    'Email 2',
    true
  );

  const [contacts, setContacts] = useState([defaultContact1, defaultContact2]);

  function statusContact(contact) {
    console.log('Changed status of this contact:', contact);
    const index = contacts.indexOf(contact);
    const tempContact = [...contacts];
    tempContact[index].status = !tempContact[index].status;
    setContacts(tempContact);
  }

  function deleteContact(contact) {
    console.log('Delete this contact:', contact);
  }

  return (
    <div>
      <div className='page-content page-container' id='page-content'>
        <div className='padding'>
          <div className='row container d-flex justify-content-center'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='card-title'>Contact list</h4>
                <div className='table-responsive'>
                  <table className='table'>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map((contact, index) => {
                        return (
                          <ContactComponent
                            key={index}
                            contact={contact}
                            status={statusContact}
                            deleted={deleteContact}></ContactComponent>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_list;
