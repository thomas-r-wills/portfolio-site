// Copyright 2024 Thomas Wills
// Licensed under the MIT License. See LICENSE file in the project root for full license information.

import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Home from '@/app/page';

expect.extend(toHaveNoViolations);

describe('Home Component', () => {
  it('renders the homepage correctly', () => {
    render(<Home />);
    expect(screen.getByText('Thomas Wills')).toBeInTheDocument();
  });

  it('toggles dark mode correctly', () => {
    render(<Home />);
    const darkModeButton = screen.getByRole('button', {
      name: /dark mode|light mode/i,
    });

 // Select the h1 element using data-testid
 const h1Element = screen.getByTestId('resume-heading');

 // Check initial background color of the h1 element for light mode
 expect(h1Element).toHaveClass('bg-indigo-200');

 // Toggle to dark mode
 fireEvent.click(darkModeButton);

 // Check background color of the h1 element after toggling to dark mode
 expect(h1Element).toHaveClass('bg-indigo-700');
  });

  it('flips a card and shows details', () => {
    render(<Home />);
    const card = screen.getByText(/Fullstack Software Engineer/i);
    fireEvent.click(card);
    expect(
      screen.getByText(/Skilled in building fullstack web applications/i)
    ).toBeVisible();
  });

  it('Home page should have no accessibility violations', async () => {
    const { container } = render(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
