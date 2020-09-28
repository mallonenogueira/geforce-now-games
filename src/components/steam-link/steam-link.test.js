import React from 'react';
import { render } from '@testing-library/react';
import SteamLink, { WithoutSteamLink } from './index';

describe('Label-Value tests', () => {
  it('should render default element with no steam info', () => {
    const { container } = render(<SteamLink />);
    const { container: withoutContainer } = render(<WithoutSteamLink />);

    expect(container.outerHTML).toMatch(withoutContainer.outerHTML);
  });

  it('should render link with href steam', () => {
    const { container } = render(
      <SteamLink
        steam={{
          steamUrl: 'test-url',
        }}
      />
    );

    expect(container.querySelector('a')).toHaveAttribute('href', 'test-url');
  });

  it('should render image with image steam', () => {
    const { container } = render(
      <SteamLink
        steam={{
          imageUrl: 'test-url',
        }}
      />
    );

    expect(container.querySelector('img')).toHaveAttribute('src', 'test-url');
  });
});
