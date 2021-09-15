import { LOADING_REPO, SEARCH_REPO_FAILURE, SEARCH_REPO_SUCCESS } from '../constants';

const initialState = {
	results: [],
	isLoading: false,
	error: '',
};

const reposReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOADING_REPO:
			return { ...state, isLoading: true };
		case SEARCH_REPO_SUCCESS:
			return { ...state, isLoading: false, results: payload, error: '' };
		case SEARCH_REPO_FAILURE:
			return { ...state, isLoading: false, error: payload };
		default:
			return state;
	}
};

export default reposReducer;
