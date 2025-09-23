import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import App from './App';

test('renders Sign In on the login page by default', () => {
  render(
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  );
  const signInHeading = screen.getByText(/sign in/i);
  expect(signInHeading).toBeInTheDocument();
});

test("clicking 'Create One' on Login navigates to Register page", () => {
  render(
    <MemoryRouter initialEntries={['/login']}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MemoryRouter>
  );
  // Find and click the "Create One" link
  const createOneLink = screen.getByRole('link', { name: /create one/i });
  fireEvent.click(createOneLink);

  // Assert that the Register page is shown
  const signUpHeading = screen.getByText(/sign up/i);
  expect(signUpHeading).toBeInTheDocument();
});
