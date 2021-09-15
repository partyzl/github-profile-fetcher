import { LOADING_USER, SEARCH_USER_FAILURE, SEARCH_USER_SUCCESS } from '../constants';

const initialState = {
	user: {},
	isLoading: false,
	error: '',
};

const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOADING_USER:
			return { ...state, isLoading: true };
		case SEARCH_USER_SUCCESS:
			return { ...state, isLoading: false, user: payload };
		case SEARCH_USER_FAILURE:
			return { ...state, isLoading: false, error: payload };
		default:
			return state;
	}
};

export default userReducer;
