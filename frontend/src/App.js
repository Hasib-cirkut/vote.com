import Main from './Pages/Main/Main';
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
				<Layout>
					<Route path="/" exact component={Main} />
					<Route path="/post" component={Post} />
					<Route path="/search" component={Search} />
					<Route path="/request" component={Request} />
					<Route path="/notification" component={Notification} />
				</Layout>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
