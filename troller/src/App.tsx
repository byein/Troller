import { Global, ThemeProvider } from '@emotion/react';
import def from './themes/theme';
import Router from './Router';
import reset from './styles/global/reset';

function App() {
	return (
		<ThemeProvider theme={def}>
			<Global styles={reset} />
			<Router />
		</ThemeProvider>
	);
}

export default App;
