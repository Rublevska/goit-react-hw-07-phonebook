import { GlobalStyle } from './GlobalStyle';
import { FormContact } from './phoneForm/NewPhoneForm';
import { ContactList } from './Contacts/ContactList';
import { Section } from './Section/Section';
import { SearchBar } from './SearchBar/SearchBar';
import { useSelector } from 'react-redux';
import { selectContacts } from '../redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <Section title="Phonebook">
        <FormContact />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <SearchBar />
          <ContactList />
        </Section>
      )}
      <GlobalStyle />
    </div>
  );
};
