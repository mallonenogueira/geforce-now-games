/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import CardGame from './index';

const defaultValues = {
  game: {
    id: '12345',
    title: 'Um titulo para um game',
    isHighlightsSupported: true,
  },
};

const steam = {
  imageUrl: '123456',
  steamUrl: '987654',
};

describe('Card game tests', () => {
  it('should add classnames on root element', () => {
    const { container } = render(
      <CardGame className="my-custom-class" {...defaultValues} />
    );

    expect(container.firstChild).toHaveClass('my-custom-class');
  });

  it('should render steam-link', () => {
    const { container } = render(
      <CardGame
        game={{
          id: '123456',
          steam,
        }}
      />
    );

    expect(container.querySelector('a')).toHaveAttribute(
      'href',
      steam.steamUrl
    );

    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      steam.imageUrl
    );
  });

  it('should render steam parameters', () => {
    const { getByText } = render(
      <CardGame
        {...defaultValues}
        parameters={{
          title: (value) => value,
          isHighlightsSupported: (value) => value,
        }}
      />
    );
    expect(getByText('Title:')).toBeInTheDocument();
    expect(getByText(defaultValues.game.title)).toBeInTheDocument();

    expect(getByText('Is Highlights Supported:')).toBeInTheDocument();
    expect(
      getByText(defaultValues.game.isHighlightsSupported.toString())
    ).toBeInTheDocument();
  });
});
