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
				<Link to={`/${repo.owner.login}/${repo.name}`}> {repo.name}</Link>
			));
			setRepoList(userRepos);
		};
		renderRepos();
	}, [results]);
	//I think we need to add the below into the actions, unless you want to add them here
	return (
		<>
			<div className="repo-list">{repoList}</div>
		</>
	);
};

export default RepoList;
/*
name
html_url
stargazers_count
watchers_count
forks_count
language
*/
