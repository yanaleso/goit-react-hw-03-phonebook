import PropTypes from 'prop-types';
import ContactListItem from "components/ContactListItem";
import { Item } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => (
    <ul>
        {contacts.map((contact) => (
            <Item key={contact.id}>
                <ContactListItem contact={contact} onDelete={onDelete}/>
            </Item>
        ))}
    </ul>
)

ContactListItem.propTypes = {
    contacts: PropTypes.array,
    onDelete: PropTypes.func.isRequired,
}

export default ContactList;