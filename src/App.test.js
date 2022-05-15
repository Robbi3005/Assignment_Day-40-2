import { render, screen } from '@testing-library/react';
import App from './App';
import PostSection from './components/PostSection/view';
// import '@testing-library/jest-dom/extend-expect';

//---------------------------------------------------------------------------------------------------------------------

test('renders learn react link', () => {

  render(<App />);

  const linkElement = screen.getByText(/example/i);

  expect(linkElement);
});

//---------------------------------------------------------------------------------------------------------------------

test('renders another text', () => {
  render(<App />);

  const text2 = screen.getByTestId('text');

  expect(text2);
});

//---------------------------------------------------------------------------------------------------------------------

test('renders placeholder', () => {
  render(<PostSection />);

  const title = screen.getByPlaceholderText('Title');

  expect(title);
});