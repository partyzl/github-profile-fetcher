import { useSelector } from 'react-redux';

/**
 * Filters all the results using a repository's name and returns the relevant one.
 * @param {string} repoName
 * @returns `name`, `html_url`,` stargazers_count`, `watchers_count`, `forks_count`, `language`
 */
export const useData = (repoName) => {
	const { results } = useSelector((state) => state.reposReducer);
	const selectedRepo = results.find((repository) => repository.name === repoName);
	return selectedRepo;
};
