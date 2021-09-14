import axios from 'axios';
import { LOADING, SEARCH_USER_FAILURE, SEARCH_USER_SUCCESS } from './constants';

/**
 * Get information about a user's repositories and handle state accordingly
 * @param {string} username used to search for a specific user's information
 */
export const getRepos = (username) => async (dispatch) => {
	dispatch({ type: LOADING });

	try {
		const data = await axios.get(`https://api.github.com/users/${username}/repos`);
		dispatch({ type: SEARCH_USER_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: SEARCH_USER_FAILURE, payload: error.message });
		console.error('Error getting user repos ', error);
	}
};

getRepos('tobikuyo');
