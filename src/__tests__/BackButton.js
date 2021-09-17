import { screen } from "@testing-library/react";
import { BackButton } from "../components";
import { renderWithState } from "../test/utils";

describe('BackButton', () => {
    it('should display a back button in the document', () => {
           renderWithState(<BackButton />)
           const backButton = screen.getByRole('button', { name: /</i });
           expect(backButton).toBeInTheDocument();
    });
})
