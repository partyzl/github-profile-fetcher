import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BackButton, ProfileInfo } from '../../components';

const RepoData = () => {
	const { results } = useSelector((state) => state.reposReducer);
	const { repo } = useParams();

	// Filters all the results using the repo's name and then grabs the only repo object that's in the array
	const selectedRepo = results.filter((repository) => repository.name === repo)[0];
	const { name, html_url, stargazers_count, watchers_count, forks_count, language } = selectedRepo;

	return (
		<>
			<BackButton />
			<ProfileInfo />
			<h1>
				<a href={html_url}>{name}</a>
			</h1>
			<div className="repo-info">
				<div className="flex-column">
					<p>Forks: {forks_count}</p>
				</div>
				<div className="flex-column">
					<p>Stargazers: {stargazers_count}</p>
				</div>
				<div className="flex-column">
					<p>Watchers: {watchers_count}</p>
				</div>
				<div className="flex-column">
					<p>Language: {language}</p>
				</div>
			</div>
		</>
	);
};

export default RepoData;
