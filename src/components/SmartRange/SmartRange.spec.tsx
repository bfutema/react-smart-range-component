import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SmartRange, SmartRangeProps } from './SmartRange';

const makeSut = (props?: SmartRangeProps) => {
  const sut = <SmartRange {...props} />;

  return { sut };
};

describe('SmartRange', () => {
  it('should render SmartRange component', () => {
    const { sut } = makeSut();

    render(sut);

    const container = screen.getByTestId('smart-range-container');

    expect(container).toBeInTheDocument();
    expect(screen.getAllByTestId('smart-range-container')).toHaveLength(1);
  });

  it('must allow passing the className attribute for external styling', () => {
    const className = 'any-class-name';

    const { sut } = makeSut({ className });

    render(sut);

    const container = screen.getByTestId('smart-range-container');

    expect(container).toHaveClass(className);
  });

  it('must allow passing the testId attribute for external tests', () => {
    const testId = 'any-test';

    const { sut } = makeSut({ testId });

    render(sut);

    const container = screen.getByTestId(`${testId}-container`);

    expect(container).toHaveAttribute('data-testid', `${testId}-container`);
  });

  it('should change border bottom color and rotate arrow on focus', () => {
    const { sut } = makeSut();

    render(sut);

    fireEvent.focus(screen.getByTestId('smart-range-input'));

    const arrow = screen.getByTestId('smart-range-arrow');

    expect(arrow).toHaveStyle('transform: rotate(180deg);');
  });

  it('should reset state on blur', () => {
    const { sut } = makeSut();

    render(sut);

    fireEvent.focus(screen.getByTestId('smart-range-input'));

    fireEvent.blur(screen.getByTestId('smart-range-input'));

    const arrow = screen.getByTestId('smart-range-arrow');

    expect(arrow).toHaveStyle('transform: rotate(0deg);');
  });
});
