import React, { Component } from 'react';
import PageTitle from './components/PageTitle';
import Title from './components/Title/Title';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [],
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
        name.toLowerCase().includes(this.state.filter.toLocaleLowerCase()) ||
        number.includes(this.state.filter),
    );

    return (
      <>
        <PageTitle title="React. HomeWork-2.2. Phone Book" />
        <Section>
          <Title title="Phone Book" />
          <ContactForm
            submitHandler={this.submitHandler}
          />
          <Title title="Сontacts" />
          <Filter
            filterValue={this.state.filter}
            filterUpdate={this.filterUpdate}
          />
          <ContactList
            filtered={filtered}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
