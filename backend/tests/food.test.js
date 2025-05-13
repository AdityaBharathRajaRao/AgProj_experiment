import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import foodModel from '../models/foodModel.js';
import { listFood, addFood } from '../controllers/foodController.js';

// Mock the foodModel
vi.mock('../models/foodModel.js', () => ({
  default: {
    find: vi.fn(),
    save: vi.fn()
  }
}));

// Mock fs module
vi.mock('fs', () => ({
  default: {
    unlink: vi.fn()
  }
}));

describe('Food Controller', () => {
  let req, res;

  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks();
    
    // Setup request and response objects
    req = {
      body: {
        name: 'Test Food',
        description: 'Test Description',
        price: 9.99,
        category: 'Test Category'
      },
      file: {
        filename: 'test-image.jpg'
      }
    };
    
    res = {
      json: vi.fn()
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should list all foods', async () => {
    // Mock data
    const mockFoods = [
      { name: 'Food 1', price: 10.99 },
      { name: 'Food 2', price: 12.99 }
    ];
    
    // Setup mock return value
    foodModel.find.mockResolvedValue(mockFoods);
    
    // Call the function
    await listFood(req, res);
    
    // Assertions
    expect(foodModel.find).toHaveBeenCalledWith({});
    expect(res.json).toHaveBeenCalledWith({ 
      success: true, 
      data: mockFoods 
    });
  });

  it('should handle errors when listing foods', async () => {
    // Setup mock to throw error
    foodModel.find.mockRejectedValue(new Error('Database error'));
    
    // Call the function
    await listFood(req, res);
    
    // Assertions
    expect(res.json).toHaveBeenCalledWith({ 
      success: false, 
      message: 'Error' 
    });
  });
});