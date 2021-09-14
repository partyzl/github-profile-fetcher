import React from 'react';
import { Link } from 'react-router-dom';

const RepoList = () => {
	const { results } = useSelector((state) => state.reposReducer);

	return (
		<div>
			<h2>`{results.login}'s Repos</h2>
			<div className="repo-list"></div>
		</div>
	);
};

/*
name
html_url
stargazers_count
watchers_count
forks_count
*/
