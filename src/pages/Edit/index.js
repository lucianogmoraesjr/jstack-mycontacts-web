import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';

export function Edit() {
  return (
    <>
      <PageHeader title="Editar Luciano Moraes" />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}
