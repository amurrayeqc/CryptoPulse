// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoPulse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoPulse/i);
    expect(titleElement).toBeInTheDocument();
});
