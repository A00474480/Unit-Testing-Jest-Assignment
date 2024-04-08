import { render, screen } from '@testing-library/react';
import List from './list';

describe('List Component', () => {
  const mockData = [
    { name: "Manitoba", capital: "Winnipeg", flagUrl: "https://testurl.com/Manitoba-flag.svg" },
    { name: "Saskatchewan", capital: "Regina", flagUrl: "https://testurl.com/Saskatchewan-flag.svg" }
  ];

  test('Test 5: Rendering list of items', () => {
    render(<List data={mockData} />);
    expect(screen.getByText('Manitoba')).toBeInTheDocument();
    expect(screen.getByText('Saskatchewan')).toBeInTheDocument();
  });

});
