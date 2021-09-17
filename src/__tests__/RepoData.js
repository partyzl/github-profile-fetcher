import { cleanup, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, Route } from 'react-router';
import RepoData from '../pages/RepoData';

describe('RepoData', () => {
	const path = '/:username/:repo';
	const route = '/tobikuyo/Arsenal';
	const history = createMemoryHistory({ initialEntries: [route] });

	beforeEach(() => {
		renderWithState(
			<Router history={history}>
				<Route path={path}>
					<RepoData />
				</Route>
			</Router>
		);
	});

	afterEach(cleanup);

	it('should display the repository name with a link to the actual github repository', () => {
		const repoName = screen.getByRole('heading', { name: /arsenal/i });
		const repoLink = screen.getByRole('link', { name: /arsenal/i });
		expect(repoName).toBeInTheDocument();
		expect(repoLink.href).toContain(route);
	});

	it('should display the main language of the repository', () => {
		const language = screen.getByText(/HTML/);
		expect(language.textContent).toContain('Written in');
	});
});
