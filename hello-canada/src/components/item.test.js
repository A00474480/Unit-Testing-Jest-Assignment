import { render, screen, fireEvent } from '@testing-library/react';
import Item from './item';

describe('Item Component', () => {
  const mockProps = {
    name: "Quebec",
    capital: "Quebec City",
    flagUrl: "https://testurl.com/Quebec-flag.svg"
  };

  test('Test 3: To check rendering of list items', () => {
    render(<Item {...mockProps} />);
    expect(screen.getByText('Quebec')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mockProps.flagUrl);
    // Capital should not be visible initially
    expect(screen.queryByText('Quebec City')).toBeNull(); 
  });


  test('Test 4: Check for capital toggle button', () => {
    render(<Item {...mockProps} />);
    const toggleButton = screen.getByText('Show Capital');
    fireEvent.click(toggleButton); // Show
    fireEvent.click(toggleButton); // Hide
    fireEvent.click(toggleButton); // Show again
    expect(screen.getByText('Quebec City')).toBeInTheDocument(); // Final state should be visible
  });
  
});