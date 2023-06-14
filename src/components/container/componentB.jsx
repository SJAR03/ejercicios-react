import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class.js";

const ComponentB = ({ contact }) => {

    const [contactStatus, setContactStatus] = useState(contact.status);

    const handleStatusChange = () => {
        setContactStatus(!contactStatus);
    };

    const componentStyle = {
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "5px",
        textAlign: "center",
      };
    
      const nameStyle = {
        marginBottom: "5px",
      };
    
      const statusStyle = {
        marginBottom: "5px",
        color: contactStatus ? "green" : "red",
      };
    
      const buttonStyle = {
        backgroundColor: "#091238",
        color: "white",
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      };

  return (
    <div style={componentStyle}>
      <h2 style={nameStyle}>
        Name: {contact.name}
      </h2>
      <h2 style={nameStyle}>
        Last name: {contact.lastName}
      </h2>
      <h3>
        Email: {contact.email}
      </h3>
      <h3 style={statusStyle}>
        Status: {contactStatus ? 'Contact online':'Contact offline'}
      </h3>
      <button style={buttonStyle} onClick={handleStatusChange}>
        Change contact status
      </button>
    </div>
  );
};

ComponentB.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};

export default ComponentB;
