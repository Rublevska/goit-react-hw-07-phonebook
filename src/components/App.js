import { GlobalStyle } from './GlobalStyle';
import { FormContact } from './phoneForm/NewPhoneForm';
import { ContactList } from './Contacts/ContactList';
import { Section } from './Section/Section';
import { SearchBar } from './SearchBar/SearchBar';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { Message, ErrorMessage } from './App.styled';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const items = useSelector(selectContacts);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <FormContact />
      </Section>
      {isLoading && !error && <Message>Request in progress...</Message>}
      {error && (
        <ErrorMessage>Oops! {error}. Try to reload the page</ErrorMessage>
      )}
      {items.length > 0 && (
        <Section title="Contacts">
          <SearchBar />
          <ContactList />
        </Section>
      )}
      <GlobalStyle />
    </div>
  );
};
