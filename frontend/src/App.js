import 'antd/dist/antd.css';

import Main from './Pages/Main/Main';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Main} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
