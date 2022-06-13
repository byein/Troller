import { Global } from '@emotion/react';
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
