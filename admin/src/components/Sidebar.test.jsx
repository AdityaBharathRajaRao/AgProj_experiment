import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Sidebar from './Sidebar/Sidebar';

describe('Sidebar Component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    
    expect(document.body).toBeDefined();
  });

  it('contains navigation links', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    
    // Check for Add Food link
    const addLink = screen.getByText(/add food/i);
    expect(addLink).toBeInTheDocument();
    
    // Check for List Food link
    const listLink = screen.getByText(/list food/i);
    expect(listLink).toBeInTheDocument();
    
    // Check for Orders link
    const ordersLink = screen.getByText(/orders/i);
    expect(ordersLink).toBeInTheDocument();
  });
});