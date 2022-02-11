import { useState } from 'react';
import PropTypes from 'prop-types';

import isEmailValid from '../../utils/isEmailValid';
import { useErrors } from '../../hooks/useErrors';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import { InputGroup } from '../InputGroup';

import { ButtonContainer } from './styles';

export function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const { setError, removeError, getErrorMessageByFieldName } = useErrors();

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      name, email, phone, category,
    });
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <InputGroup error={getErrorMessageByFieldName('name')}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />
      </InputGroup>

      <InputGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </InputGroup>

      <InputGroup>
        <Input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </InputGroup>

      <InputGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="" disabled>Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </InputGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
