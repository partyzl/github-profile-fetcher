import { cleanup, screen } from '@testing-library/react';
import { RepoList } from '../components';

describe('RepoList', () => {
	beforeEach(() => {
		renderWithState(<RepoList />);
	});

	afterEach(cleanup);

	it('should return a list with a single repository link', () => {
		const repoLink = screen.getByRole('link', { name: /arsenal/i });
		expect(repoLink).toBeInTheDocument();
	});

	it('should have a link that contains "/:name/:repoName"', () => {
		const repoLink = screen.getByRole('link', { name: /arsenal/i });
		expect(repoLink.href).toContain('/tobikuyo/Arsenal');
	});
});
