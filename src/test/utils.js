import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';
import { persistor, store } from '../redux/store';

/**
 * Renders the component with the actual store used in the app.
 * @param {React.FC} component
 */
export const renderWithRedux = (component) => {
	return render(
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{component}
			</PersistGate>
		</Provider>
	);
};

/**
 * Uses the initial state to render the appropriate JSX elements. By default, this will render elements based on successful redux actions.
 * @param {React.FC | any} options
 * @param {object} initialState
 */
export const renderWithState = (options, initialState) => {
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
					html_url: 'https://github.com/tobikuyo/Arsenal',
					stargazers_count: 0,
					watchers_count: 0,
					forks_count: 1,
					language: 'HTML',
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
			<PersistGate loading={null} persistor={persistor}>
				{options}
			</PersistGate>
		</Provider>
	);
};
