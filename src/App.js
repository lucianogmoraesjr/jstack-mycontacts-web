import { ThemeProvider } from 'styled-components';

import GlobalStyles from './assets/styles/global';
import commonTheme from './assets/styles/themes/common';

function App() {
  return (
    <ThemeProvider theme={commonTheme}>
      <GlobalStyles />
      <h1>Hello World</h1>
    </ThemeProvider>
  );
}

export default App;
