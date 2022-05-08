import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import styles from './Phonebook.module.css';

class Phonebook extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label htmlFor={this.nameInputId} className={styles.label}>
          <p className={styles.text}>Name</p>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={this.state.name}
            id={this.nameInputId}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor={this.numberInputId} className={styles.label}>
          <p className={styles.text}>Number</p>
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces,dashes, parentheses and can start with +"
            required
            id={this.numberInputId}
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Phonebook;
