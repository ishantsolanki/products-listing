import React from 'react';
import { render } from '@testing-library/react'
import { InputRow } from './InputRow';

test('renders ', () => {
  const { getByText } = render(<InputRow label="some label">some content</InputRow>);

  expect(getByText('some label')).toBeInTheDocument();
  expect(getByText('some content')).toBeInTheDocument();
});
