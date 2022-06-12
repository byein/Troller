import { Global, ThemeProvider } from '@emotion/react';
import Header from './components/header/header';
import Router from './Router';
import reset from './styles/global/reset';

function App() {
	return (
		<>
			<Global styles={reset} />
			<Router />
		</>
	);
}

export default App;
