import PropTypes from 'prop-types';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import { ButtonContainer, Form } from './styles';
import { InputGroup } from '../InputGroup';

export function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <InputGroup>
        <Input type="text" placeholder="Nome" />
      </InputGroup>

      <InputGroup>
        <Input type="text" placeholder="E-mail" />
      </InputGroup>

      <InputGroup>
        <Input type="text" placeholder="Telefone" />
      </InputGroup>

      <InputGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </InputGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
