import { Link } from 'react-router-dom';

import { Modal } from '../../components/Modal';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import {
  Card, Container, Header, InputSearchContainer, ListContainer,
} from './styles';

export function Home() {
  return (
    <Container>
      <Modal danger />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new-contact">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Ordenar" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Luciano Moraes</strong>
              <small>instagram</small>
            </div>
            <span>luciano@mail.com.br</span>
            <span>(51) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Editar" />
            </Link>

            <button type="button">
              <img src={trash} alt="Excluir" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
