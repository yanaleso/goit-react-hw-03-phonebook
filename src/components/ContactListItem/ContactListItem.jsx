import PropTypes from 'prop-types';
import { Button } from './ContactListItem.styled';

const ContactListItem = ({ contact, onDelete }) => (
    <>
        <p>{contact.name}: {contact.number}</p>
        <Button onClick={() => onDelete(contact.id)}>Delete</Button> 
    </>
)

ContactListItem.propTypes = {
    contact: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default ContactListItem;