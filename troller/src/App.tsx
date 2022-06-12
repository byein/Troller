import { Global, ThemeProvider } from '@emotion/react';
import Router from './Router';
import reset from './styles/global/reset';
import def from './themes/theme';

function App() {
	return (
		<ThemeProvider theme={def}>
			<Global styles={reset} />
			<Router />
		</ThemeProvider>
	);
}

export default App;
