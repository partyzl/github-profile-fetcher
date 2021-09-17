import React from 'react';
import { useParams } from 'react-router-dom';
import { BackButton, ProfileInfo } from '../../components';
import { useData } from './useData';

const RepoData = () => {
	const { repo } = useParams();
	const { name, html_url, stargazers_count, watchers_count, forks_count, language } = useData(repo);

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
					<p>Written in {language}</p>
				</div>
			</div>
		</>
	);
};

export default RepoData;
