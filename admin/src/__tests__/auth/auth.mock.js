
export const mockAdminUser = {
  id: '1',
  name: 'Admin User',
  email: 'admin@swiftbites.com',
  role: 'admin',
  createdAt: new Date().toISOString()
};

export const mockToken = 'fake-admin-token';

export const mockAuthContext = {
  user: mockAdminUser,
  token: mockToken,
  isLoading: false,
  error: null,
  login: jest.fn().mockResolvedValue({ user: mockAdminUser, token: mockToken }),
  logout: jest.fn(),
  register: jest.fn()
};
