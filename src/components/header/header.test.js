/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './index';

const string = '0123456789';
const filters = {
  title: {
    value: string,
  },
};

describe('Header tests', () => {
  it('should add title', () => {
    const { getByText } = render(<Header title={string} />);

    expect(getByText(string)).toBeInTheDocument();
  });

  it('should add mobile title', () => {
    const { getByText } = render(<Header mobileTitle={string} />);

    expect(getByText(string)).toBeInTheDocument();
  });

  it('should render filters input', () => {
    const { container } = render(<Header filters={filters} />);

    expect(container.querySelector('#title')).toBeInTheDocument();
    expect(container.querySelector('#title')).toHaveValue(string);
  });

  it('should call onChange when type filters', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Header filters={filters} onChangeFilters={onChange} />
    );

    const input = container.querySelector('#title');
    fireEvent.change(input, { target: { value: '1' } });

    expect(onChange).toBeCalledWith('title', '1');
  });
  it('should add responsive class on filter', () => {
    const { container } = render(
      <Header
        filters={{
          responsive: {
            alwaysVisible: false,
          },
          visible: {
            alwaysVisible: true,
          },
        }}
      />
    );
    const responsive = container.querySelector('#responsive').parentElement;
    const visible = container.querySelector('#visible').parentElement;

    expect(responsive).toHaveClass('d-md-none');
    expect(visible).not.toHaveClass('d-md-none');
  });
});
