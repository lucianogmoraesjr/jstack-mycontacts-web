import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import commonTheme from '../../assets/styles/themes/common';
import { Routes } from '../../Routes';

import { Header } from '../Header';

import { Container } from './styles';

function App() {
  return (
    <ThemeProvider theme={commonTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Routes />
      </Container>
    </ThemeProvider>
  );
}

export default App;
