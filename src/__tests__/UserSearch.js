import { cleanup, screen } from '@testing-library/react';
import { UserSearch } from '../components';
import { store } from '../redux/store';

describe('UserSearch', () => {
	beforeEach(() => {
		renderWithRedux(<UserSearch />);
	});

	afterEach(cleanup);

	it('changes the "loading" state for both reducers, before fetching from the API', () => {
		const usernameInput = screen.getByRole('textbox', { name: /github\.com\//i });
		const searchButton = screen.getByRole('button', { name: /search/i });
		userEvent.type(usernameInput, 'tobikuyo');
		userEvent.click(searchButton);

		const state = store.getState();
		expect(state.reposReducer.isLoading).toBe(true);
		expect(state.userReducer.isLoading).toBe(true);
	});

	it('clears the username input when a user presses the "Enter" key', () => {
		const usernameInput = screen.getByRole('textbox', { name: /github\.com\//i });
		userEvent.type(usernameInput, 'tobikuyo{enter}');
		expect(usernameInput.value).toBe('');
	});
});
