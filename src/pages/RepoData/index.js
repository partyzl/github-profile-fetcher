import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const RepoData = () => {
	const { results } = useSelector((state) => state.reposReducer);

	return (
		<>
			<h1>
				<a href={repoLink}>{repoTitle}</a>
			</h1>
			<div className="repo-info">
				<p>Number of Forks: {forks}</p>
				<p>Number of Stargazers: {stargazers}</p>
				<p>Number of Watchers: {watchers}</p>
			</div>
		</>
	);
};

export default RepoData;

/*
name
html_url
stargazers_count
watchers_count
forks_count
language
*/
