import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Header from './Header/Header';
import { StoreContext } from '../Context/StoreContext';

// Mock the StoreContext
const mockContextValue = {
  getTotalCartAmount: () => 0,
  token: '',
  setToken: () => {}
};

// Create a wrapper component with the required providers
const TestWrapper = ({ children }) => (
  <BrowserRouter>
    <StoreContext.Provider value={mockContextValue}>
      {children}
    </StoreContext.Provider>
  </BrowserRouter>
);

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />, { wrapper: TestWrapper });
    // Basic test to ensure component renders
    expect(document.body).toBeDefined();
  });

  it('contains the correct text', () => {
    render(<Header />, { wrapper: TestWrapper });
    // Check for text that should be in the header
    const headerText = screen.getByText(/order your favourite food here/i);
    expect(headerText).toBeInTheDocument();
  });
});
