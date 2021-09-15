import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import '@testing-library/jest-dom/extend-expect';

const TestProvider = ({ initialState }) => {
	initialState ||= {
		userReducer: {
			user: {},
			isLoading: false,
			error: '',
		},
		reposReducer: {
			results: [],
			isLoading: false,
			error: '',
		},
	};

	const testReducer = () => rootReducer(initialState, { type: '' });
	const testStore = createStore(testReducer, applyMiddleware(thunk));
	return ({ children }) => <Provider store={testStore}>{children}</Provider>;
};

const renderWithRedux = (ui, options = {}) => {
	const TestWrapper = TestProvider(options);
	render(ui, { wrapper: TestWrapper, ...options });
};

global.React = React;
global.render = render;
global.userEvent = userEvent;
global.screen = screen;
global.renderWithRedux = renderWithRedux;
