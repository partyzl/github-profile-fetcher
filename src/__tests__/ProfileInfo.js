import { cleanup, screen } from '@testing-library/react';
import { ProfileInfo } from '../components';

describe('ProfileInfo', () => {
	beforeEach(() => {
		renderWithState(<ProfileInfo />);
	});

	afterEach(cleanup);

	it("should display the user's avatar of the searched user", () => {
		const avatar = screen.getByRole('img', { name: /user's profile picture/i });
		expect(avatar).toBeInTheDocument();
		expect(avatar.src).toBe('https://avatars.githubusercontent.com/u/38296981?v=4');
		expect(avatar.alt).not.toBeNull();
	});

	it("should display the user's name and location of the searched user", () => {
		const username = screen.getByRole('heading', { name: /tobikuyo/i });
		const location = screen.getByRole('heading', { name: /london, uk/i });
		expect(username).toBeInTheDocument();
		expect(location.textContent).toContain('London');
	});

    it('shoudld have a link to the user\'s github page', () => {
           const visitLink = screen.getByRole('link', { name: /visit/i });
           expect(visitLink).toBeInTheDocument();
           expect(visitLink.href).not.toBeNull();
    });
});
