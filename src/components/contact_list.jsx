import React, { useState } from 'react';
import ContactComponent from './contact';
import { Contact } from '../models/contact.class';
import '../styles/contact_list.css';
import ContactForm from './contact_form';

const Contact_list = () => {
  const defaultContact1 = new Contact(
    'Name 1',
    'Last names 1',
    'Email 1',
    false
  );

  const defaultContact2 = new Contact(
    'Name 2',
    'Last names 2',
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
    const index = contacts.indexOf(contact);
    const tempContact = [...contacts];
    tempContact.splice(index, 1);
    setContacts(tempContact);
  }

  function addContact(contact) {
    console.log('Added contact', contact);
    const tempContact = [...contacts];
    tempContact.push(contact);
    setContacts(tempContact);
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
            <ContactForm add={addContact}></ContactForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_list;
