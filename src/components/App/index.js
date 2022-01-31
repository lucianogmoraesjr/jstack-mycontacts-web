import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import commonTheme from '../../assets/styles/themes/common';

import { Header } from '../Header';
import { ContactsList } from '../ContactsList';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={commonTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <ContactsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
