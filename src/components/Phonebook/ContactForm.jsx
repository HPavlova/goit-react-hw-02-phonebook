import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import propTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.ContactForm} onSubmit={this.handleSubmit}>
        <label className={styles.ContactForm__label}>
          Name
          <input
            className={styles.ContactForm__input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={styles.ContactForm__label}>
          Number
          <input
            className={styles.ContactForm__input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.ContactForm__button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
  name: propTypes.string,
  number: propTypes.string,
};

export default ContactForm;
