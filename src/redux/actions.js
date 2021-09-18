import axios from 'axios';
import {
	LOADING_REPO,
	LOADING_USER,
	SEARCH_REPO_FAILURE,
	SEARCH_REPO_SUCCESS,
	SEARCH_USER_FAILURE,
	SEARCH_USER_SUCCESS,
} from './constants';

/**
 * Get information about a user
 * @param {string} username used to search for a specific user's information
 */
export const getUserInfo = (username) => async (dispatch) => {
	dispatch({ type: LOADING_USER });

	try {
		const { data } = await axios.get(`https://api.github.com/users/${username}`);
		dispatch({ type: SEARCH_USER_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: SEARCH_USER_FAILURE, payload: error.message });
	}
};

/**
 * Get information about a user's repositories and handle state accordingly
 * @param {string} username used to search for a specific user's information
 */
export const getRepos = (username) => async (dispatch) => {
	dispatch({ type: LOADING_REPO });

	try {
		const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
		dispatch({ type: SEARCH_REPO_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: SEARCH_REPO_FAILURE, payload: error.message });
	}
};
