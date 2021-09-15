import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ProfileInfo } from '../../components';

const RepoData = () => {
	const { results } = useSelector((state) => state.reposReducer);
	const { repo } = useParams();

	// Filters all the results using the repo's name and then grabs the only repo object that's in the array
	const selectedRepo = results.filter((repository) => repository.name === repo)[0];
	const { name, html_url, stargazers_count, watchers_count, forks_count, language } = selectedRepo;

	return (
		<>
			<ProfileInfo />
			<h1>
				<a href={html_url}>{name}</a>
			</h1>
			<div className="repo-info">
				<p>Number of Forks: {forks_count}</p>
				<p>Number of Stargazers: {stargazers_count}</p>
				<p>Number of Watchers: {watchers_count}</p>
				<p>Main Language: {language}</p>
			</div>
		</>
	);
};

export default RepoData;
