import React from 'react';
import { Link } from 'react-router-dom';

const RepoList = () => {
	const { results } = useSelector((state) => state.reposReducer);

	return (
        {results.map((repo, idx) => {
            <Link key={idx} to={`/repo/${username}/repos/${repo.name}`}>
                <h4>{repo.name}</h4>
            </Link>;
        })}
    )
};

/*
name
html_url
stargazers_count
watchers_count
forks_count
*/
