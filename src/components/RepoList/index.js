import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './repoList.css';

const RepoList = () => {
	const [repoList, setRepoList] = useState([]);
	const { results } = useSelector((state) => state.reposReducer);

	useEffect(() => {
		const renderRepos = () => {
			const userRepos = results.map((repo) => (
				<Link to={`/${repo.owner.login}/${repo.name}`} key={repo.name}>
					{' '}
					{repo.name}
				</Link>
			));
			setRepoList(userRepos);
		};
		renderRepos();
	}, [results]);

	return (
		<>
			{results.length ? <h2 className="repo-username"> {results[0].owner.login}'s Repos</h2> : ''}
			<div className="repo-list">{repoList}</div>
		</>
	);
};

export default RepoList;
