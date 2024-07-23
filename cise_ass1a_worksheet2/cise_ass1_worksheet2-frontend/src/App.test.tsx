import React from 'react';
import {render} from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const {unmount} = render(<App />);
  unmount();
});

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});