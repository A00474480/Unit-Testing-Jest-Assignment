import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import App from './App';


describe('App Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn((url) =>
      Promise.resolve({
        json: () => {
          if (url.endsWith('territories')) {
            return Promise.resolve([{ name: "Nunavut", capital: "Iqaluit", flagUrl: "https://testurl.com/nunavut-flag.svg" }]);
          } else {
            return Promise.resolve([{ name: "Ontario", capital: "Toronto", flagUrl: "https://testurl.com/ontario-flag.svg" }]);
          }
        },
      })
    );
  });

  afterEach(() => {
    global.fetch.mockRestore();
  });


  test('Test 1: Initial Loading of components', async () => {
    render(<App />);
  
    // Using waitFor to ensure sufficient time for api calls
    await waitFor(() => {
      expect(screen.getByText('Hello Canada')).toBeInTheDocument();
      expect(screen.getByAltText("Canada's Flag")).toBeInTheDocument();
      expect(screen.getByText('Provinces')).toBeInTheDocument();
      expect(screen.getByText('Territories')).toBeInTheDocument();
    });
  });


  test('Test 2: Change to territories view', async () => {
    render(<App />);
    const territoriesMenuItem = screen.getByText(/territories/i);

    await act(async () => {
      fireEvent.click(territoriesMenuItem);
    });

    // Use waitFor to provide time for rendering of components
    await waitFor(() => expect(screen.getByText('Nunavut')).toBeInTheDocument(), { timeout: 1000 });

    let showCapitalButton;

    await waitFor(() => {
      showCapitalButton = screen.getByRole('button', { name: /show capital/i });
      expect(showCapitalButton).toBeInTheDocument();
    }, { timeout: 1000 });

    await act(async () => {
      fireEvent.click(showCapitalButton);
    });

    await waitFor(() => expect(screen.getByText('Iqaluit')).toBeInTheDocument());

    // Assertions
    expect(screen.getByRole('img', { name: /nunavut's flag/i })).toHaveAttribute('src', 'https://testurl.com/nunavut-flag.svg');
  });



  
});
