import { Global, ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';
import def from './themes/theme';
import Router from './Router';
import reset from './styles/global/reset';

function App() {
  return (
    <ThemeProvider theme={def}>
      <Global styles={reset} />
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
