import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './index';

describe('Input tests', () => {
  it('should render label text', () => {
    const { getByText } = render(<Input label="Label test" />);

    expect(getByText('Label test')).toBeInTheDocument();
  });

  it('should add classnames on root element', () => {
    const { container } = render(<Input className="my-custom-class" />);

    expect(container.firstChild).toHaveClass('my-custom-class');
  });

  it('should add for attribute on label with id', () => {
    const { container } = render(<Input id="my-custom-id" />);

    expect(container.querySelector('label')).toHaveAttribute(
      'for',
      'my-custom-id'
    );
  });

  it('should add id attribute on input and for attribute on label', () => {
    const { container } = render(<Input id="my-custom-id" />);

    expect(container.querySelector('input')).toHaveAttribute(
      'id',
      'my-custom-id'
    );
  });

  it('should have value on input', () => {
    const { container } = render(
      <Input value="my-custom-value" onChange={jest.fn} />
    );

    expect(container.querySelector('input')).toHaveValue('my-custom-value');
  });

  it('should call onChange', () => {
    const onChange = jest.fn();
    const { container } = render(<Input value="" onChange={onChange} />);
    const input = container.querySelector('input');

    fireEvent.change(input, { target: { value: '123456' } });

    expect(onChange).toBeCalled();
  });
});
