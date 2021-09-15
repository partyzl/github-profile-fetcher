import React from 'react';
import { useSelector } from 'react-redux';
import { ProfileInfo, RepoList, UserSearch } from '../../components';

const Home = () => {
	const { error } = useSelector((state) => state.userReducer);
	return (
		<>
			<UserSearch />
			{error ? (
				// error
				<p className="d-flex justify-content-center">Ruh Roh this user doesn't exist, try again</p>
			) : (
				<>
					<ProfileInfo />
					<RepoList />
				</>
			)}
		</>
	);
};

export default Home;
