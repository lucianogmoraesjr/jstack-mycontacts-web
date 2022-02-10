import { useState } from 'react';
import PropTypes from 'prop-types';

import isEmailValid from '../../utils/isEmailValid';

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
  const [errors, setErrors] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Nome é obrigatório' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'name',
      ));
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExists = errors.find((error) => error.field === 'email');

      if (errorAlreadyExists) {
        return;
      }

      setErrors((prevState) => [
        ...prevState,
        { field: 'email', message: 'E-mail inválido.' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'email',
      ));
    }
  }

  console.log(errors);

  function handleSubmit(event) {
    event.preventDefault();

    console.log({
      name, email, phone, category,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
      </InputGroup>

      <InputGroup error="O formato do e-mail é inválido.">
        <Input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          error
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
