import React from 'react';
import ReactDOM from 'react-dom';

import { DateSelector } from './DateSelector';

import { useSmartRangeStore } from './SmartRange.store';
import { Container, Arrow } from './SmartRange.styles';

export interface SmartRangeProps {
  placeholder?: string;
  testId?: string;
  className?: string;
}

export const SmartRange: React.FC<SmartRangeProps> = ({
  placeholder = 'Selecione uma data',
  testId = 'smart-range',
  className,
}) => {
  const { refs, states, events } = useSmartRangeStore();

  return (
    <Container
      ref={refs.containerRef}
      isOpen={states.isOpen}
      className={className}
      data-testid={`${testId}-container`}
    >
      <input
        data-testid={`${testId}-input`}
        readOnly
        onFocus={events.onInputFocus}
        placeholder={placeholder}
      />

      <Arrow
        data-testid={`${testId}-arrow`}
        isOpen={states.isOpen}
        className="smart-range-arrow"
        onClick={events.onInputFocus}
      />

      {states.isOpen &&
        ReactDOM.createPortal(
          <DateSelector containerRect={states.containerRect} />,
          document.body,
        )}
    </Container>
  );
};
