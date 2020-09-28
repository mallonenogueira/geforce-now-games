import React from 'react';
import { render } from '@testing-library/react';
import LabelValue from './index';

describe('Label-Value tests', () => {
  it('should render label text', () => {
    const { getByText } = render(<LabelValue label="Label test" />);

    expect(getByText('Label test')).toBeInTheDocument();
  });

  it('should render value text', () => {
    const { getByText } = render(<LabelValue value="Value test" />);

    expect(getByText('Value test')).toBeInTheDocument();
  });

  it('should render boolean value text', () => {
    const { getByText } = render(<LabelValue value={false} />);

    expect(getByText('false')).toBeInTheDocument();
  });

  it('should render null value text', () => {
    const { getByText } = render(<LabelValue value={null} />);

    expect(getByText('null')).toBeInTheDocument();
  });
});
