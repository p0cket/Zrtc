import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    global.navigator.getUserMedia = jest.fn();
  });

  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn rts/i);
    expect(linkElement).toBeInTheDocument();
  });
})

