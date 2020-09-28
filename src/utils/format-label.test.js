// import { render, fireEvent } from '@testing-library/react';
import formatLabel from './format-label';

describe('Format label', () => {
  it('should upper first letter', () => {
    expect(formatLabel('abc')).toMatch('Abc');
  });

  it('should add space before upper letter', () => {
    expect(formatLabel('abcDfgHij')).toMatch('Abc Dfg Hij');
  });
});
