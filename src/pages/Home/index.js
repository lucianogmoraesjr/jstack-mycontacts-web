import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

// import { Modal } from '../../components/Modal';
import { Loader } from '../../components/Loader';
import ContactsService from '../../services/ContactsService';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import {
  Card, Container, Header, InputSearchContainer, ListHeader,
} from './styles';

export function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderby] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        const data = await ContactsService.listContacts(orderBy);

        setContacts(data);
      } catch (error) {
        console.log('Error', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [orderBy]);

  function handleToggleOrderBy() {
    setOrderby((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <Container>
      {/* <Modal danger /> */}
      <Loader isLoading={isLoading} />

      <InputSearchContainer>
        <input
          type="text"
          placeholder="Pesquisar contato..."
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </InputSearchContainer>

      <Header>
        <strong>
          {filteredContacts.length}
          {filteredContacts.length === 1 ? ' contato' : ' contatos'}
        </strong>
        <Link to="/new-contact">Novo contato</Link>
      </Header>

      {filteredContacts.length > 0 && (
        <ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Nome</span>
            <img src={arrow} alt="Ordenar" />
          </button>
        </ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.id}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category_name && (
                <small>{contact.category_name}</small>
              )}
            </div>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Editar" />
            </Link>

            <button type="button">
              <img src={trash} alt="Excluir" />
            </button>
          </div>
        </Card>
      ))}

    </Container>
  );
}
