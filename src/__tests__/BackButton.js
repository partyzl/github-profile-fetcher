import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { BackButton } from '../components';
import { renderWithState } from '../test/utils';

describe('BackButton', () => {
	it('should display a back button in the document', () => {
		renderWithState(
			<MemoryRouter>
				<BackButton />
			</MemoryRouter>
		);
        
		const backButton = screen.getByRole('button', { name: /</i });
		expect(backButton).toBeInTheDocument();
	});
});
