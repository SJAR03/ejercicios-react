import React from 'react'
import ComponentB from './componentB'
import { Contact } from '../../models/contact.class'

const ComponentA = () => {

    const defaultContact = new Contact('Sergio', 'Rodriguez', 'sayerdisrodriguez@gmail.com', false);

  return (
    <div>
      <div>
        <h1>
            Contact Info:
        </h1>
      </div>
      <ComponentB contact={defaultContact}></ComponentB>
    </div>
  )
}

export default ComponentA
