import { Component } from 'react';
import { nanoid } from "nanoid";
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Box } from './Box';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    this.setState(({ contacts }) => {
      const isContact = contacts.find(contact => contact.name === name);

      if (isContact) {
        return alert(`${name} is already in contact`);
      }

      return ({
        contacts: [...contacts, contact],
      })
    });
  }

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {
    const { filter } = this.state;
    
    const visibleContacts = this.getVisibleContacts();

    return (
      <Box width="m" p={5} as="div">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </Box>
    );
  }
}

export default App;