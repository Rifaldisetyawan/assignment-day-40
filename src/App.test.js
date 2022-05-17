import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';


test('renders React Axios example - netlify header', () => {
  render(<App />);
  const linkElement =  screen.getByText(/netlify/i);
  expect(linkElement).toBeInTheDocument();
});