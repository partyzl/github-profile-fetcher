import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';
import store from '../redux/store';

/**
 * Renders the component with the actual store used in the app.
 * @param {React.FC} component
 */
export const renderWithRedux = (component) => {
	return render(<Provider store={store}>{component}</Provider>);
};

/**
 * Uses the initial state to render the appropriate JSX elements. By default, this will render elements based on successful redux actions.
 * @param {React.FC} component
 * @param {object} initialState
 */
export const renderWithState = (component, initialState) => {
	initialState ||= {
		userReducer: {
			user: {
				login: 'tobikuyo',
				avatar_url: 'https://avatars.githubusercontent.com/u/38296981?v=4',
				html_url: 'https://github.com/tobikuyo',
				location: 'London, UK',
			},
			isLoading: false,
			error: '',
		},
		reposReducer: {
			results: [
				{
					name: 'Arsenal',
					owner: { login: 'tobikuyo' },
				},
			],
			isLoading: false,
			error: '',
		},
	};

	const testReducer = () => rootReducer(initialState, { type: '@@INIT' });
	const testStore = createStore(testReducer, applyMiddleware(thunk));

	return render(
		<Provider store={testStore}>
			<MemoryRouter>{component}</MemoryRouter>
		</Provider>
	);
};
