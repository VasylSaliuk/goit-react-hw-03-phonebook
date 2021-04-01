import React, { Component } from 'react';
import PageTitle from './components/PageTitle';
import Title from './components/Title/Title';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  submitHandler = newContact => {
    const { contacts } = this.state;
    const presentContact = contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());
    if (presentContact) {
      alert(`${presentContact.name} is already in contacts.`);
      return;
    }
    this.setState({ contacts: [newContact, ...contacts] });
  };

  filterUpdate = evt => {
    const { value } = evt.currentTarget;

    this.setState({
      filter: value,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      };
    });
  };

  render() {
    const filtered = this.state.contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(this.state.filter.toLocaleLowerCase()) || number.includes(this.state.filter),
    );

    return (
      <>
        <PageTitle title="React. HomeWork-2.2. Phone Book" />
        <Section>
          <Title title="Phone Book" />
          <ContactForm submitHandler={this.submitHandler} />
          <Title title="Сontacts" />
          <Filter filterValue={this.state.filter} filterUpdate={this.filterUpdate} />
          <ContactList filtered={filtered} onDeleteContact={this.deleteContact} />
        </Section>
      </>
    );
  }
}

export default App;
