import 'antd/dist/antd.css';

import Main from './Pages/Main/Main';
import Post from './Pages/Post/Post';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Main} />
				<Route path="/post" component={Post} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
