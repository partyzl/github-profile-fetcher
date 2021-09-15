import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React from 'react';
import Home from '../pages/Home';

jest.mock('axios');
const resolvedData = {
	data: {
		login: 'tobikuyo',
		avatar_url: 'https://avatars.githubusercontent.com/u/38296981?v=4',
		location: 'London, UK',
	},
};

describe('Home', () => {
	beforeEach(() => {
		renderWithRedux(<Home />);
	});

	it('clears the username input when a user presses "Enter" key', () => {
		axios.get.mockResolvedValue(resolvedData);
		const usernameInput = screen.getByRole('textbox', { name: /github\.com\//i });
		userEvent.type(usernameInput, 'tobikuyo{enter}');
		expect(usernameInput.value).toBe('');
	});

	it('should render the username and image that was searched', async () => {
		axios.get.mockResolvedValue(resolvedData);

		const input = screen.getByRole('textbox', { name: /github\.com\//i });
		userEvent.type(input, 'tobikuyo{enter}');

		const username = await screen.findByRole('heading', { name: /tobikuyo/i });
		const avatar = await screen.findByRole('img', { name: /user's profile picture/i });
		expect(username).toBeInTheDocument();
		expect(avatar.src).not.toBeNull();
	});
});
