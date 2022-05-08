import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsItem.module.css';

const ContactsItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <span className={styles.decoration}></span>
        <p className={styles.text}>
          {name}: <span className={styles.number}>{number}</span>
        </p>
      </div>
      <button
        className={styles.button}
        type="Submit"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsItem;
