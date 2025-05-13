import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Add from './Add';
import axios from 'axios';
import { toast } from 'react-toastify';

// Mock dependencies
vi.mock('axios');
vi.mock('react-toastify', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn()
  }
}));

describe('Add Component', () => {
  it('renders the form correctly', () => {
    render(<Add />);
    
    // Check for form elements
    expect(screen.getByLabelText(/food name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/category/i)).toBeInTheDocument();
    expect(screen.getByText(/add food/i)).toBeInTheDocument();
  });

  it('shows error when form is submitted without image', async () => {
    render(<Add />);
    
    // Fill form data
    fireEvent.change(screen.getByLabelText(/food name/i), { target: { value: 'Test Food' } });
    fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'Test Description' } });
    fireEvent.change(screen.getByLabelText(/price/i), { target: { value: '9.99' } });
    
    // Submit form without image
    fireEvent.click(screen.getByText(/add food/i));
    
    // Check if error toast was called
    expect(toast.error).toHaveBeenCalledWith('Image not selected');
  });
});