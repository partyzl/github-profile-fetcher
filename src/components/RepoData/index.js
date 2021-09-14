import React from 'react';

export default ({ repoLink, repoTitle, forks, stargazers, watchers }) => {
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
