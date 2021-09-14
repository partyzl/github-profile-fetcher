import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProfileInfo, UserSearch } from './components';

const App = () => {
	return (
		<div className="app">
			<UserSearch />
			<ProfileInfo />
		</div>
	);
};

export default App;
