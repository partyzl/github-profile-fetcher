import React from 'react';
import { ProfileInfo, RepoList, UserSearch } from '../../components';

const Home = () => {
	return (
		<>
			<UserSearch />
			<ProfileInfo />
			<RepoList />
		</>
	);
};

export default Home;
