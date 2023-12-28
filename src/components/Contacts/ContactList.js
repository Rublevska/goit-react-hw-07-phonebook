import { useSelector, useDispatch } from 'react-redux';
import { visibleContacts } from '../../redux/selectors';
import {
  ListOfContacts,
  ContactItem,
  DeleteBtn,
  ContactWrapper,
} from './ContactList.styled';
import { deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const contacts = useSelector(visibleContacts);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ListOfContacts>
      {contacts.map(contact => {
        return (
          <ContactItem key={contact.id}>
            <ContactWrapper>
              <p>
                {contact.name}: {contact.phone}
              </p>
              <DeleteBtn
                onClick={() => {
                  handleDelete(contact.id);
                }}
              >
                Delete
              </DeleteBtn>
            </ContactWrapper>
          </ContactItem>
        );
      })}
    </ListOfContacts>
  );
};
