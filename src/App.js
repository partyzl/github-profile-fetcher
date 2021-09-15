import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, RepoData } from './pages';

const App = () => {
	return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/:username/:repo" component={RepoData} />
			</Switch>
		</div>
	);
};

export default App;
