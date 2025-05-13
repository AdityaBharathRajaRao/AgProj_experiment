import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Header from './Header';
import { CartProvider } from '../context/CartContext';

describe('Header Component', () => {
  it('renders the logo text', () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <Header />
        </CartProvider>
      </BrowserRouter>
    );
    
    const logoElement = screen.getByText(/food delivery/i);
    expect(logoElement).toBeInTheDocument();
  });

  it('displays navigation links', () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <Header />
        </CartProvider>
      </BrowserRouter>
    );
    
    const homeLink = screen.getByText(/home/i);
    const menuLink = screen.getByText(/menu/i);
    
    expect(homeLink).toBeInTheDocument();
    expect(menuLink).toBeInTheDocument();
  });
});