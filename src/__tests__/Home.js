import { screen } from '@testing-library/react';
import Home from '../pages/Home';
import { renderWithState } from '../test/utils';

describe('Home unhappy path', () => {
	const errorState = {
		userReducer: {
			user: {},
			isLoading: false,
			error: 'Oops',
		}
	};

	it('should display an error message', () => {
		renderWithState(<Home />, errorState);
		const errorMessage = screen.getByText(/this user doesn't exist/);
		expect(errorMessage).toBeInTheDocument();
	});
});
