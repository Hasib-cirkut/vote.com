import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import Post from './Pages/Post/Post';
import Search from './Pages/Search/Search';
import Request from './Pages/Request/Request';
import Notification from './Pages/Notification/Notification';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" exact component={Login} />
				<Layout>
					<Route path="/" exact component={Main} />
					<Route path="/post" exact component={Post} />
					<Route path="/search" exact component={Search} />
					<Route path="/request" exact component={Request} />
					<Route path="/notification" exact component={Notification} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
