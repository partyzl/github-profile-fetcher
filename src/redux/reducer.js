import { LOADING, SEARCH_USER_FAILURE, SEARCH_USER_SUCCESS } from './constants';

const initialState = {
	results: [],
	isLoading: false,
	error: '',
};

const reposReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOADING:
			return { ...state, isLoading: true };
		case SEARCH_USER_SUCCESS:
			return { ...state, isLoading: false, results: payload };
		case SEARCH_USER_FAILURE:
			return { ...state, isLoading: false, error: payload };
		default:
			return state;
	}
};

export default reposReducer;
