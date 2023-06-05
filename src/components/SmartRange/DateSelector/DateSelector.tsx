import React from 'react';

import { ContainerRectType } from '../SmartRange.types';

import { Container } from './DateSelector.styles';

interface DateSelectorProps {
  containerRect: ContainerRectType;
}

export const DateSelector: React.FC<DateSelectorProps> = ({
  containerRect,
}) => {
  console.log(containerRect);

  return (
    <Container
      style={{
        width: `${containerRect.width}px`,
        border: '1px solid red',
        background: '#FFFFFF',
        color: '#1A1A1A',
        padding: '8px',
        position: 'fixed',
        top: `calc(${containerRect.top + containerRect.height}px)`,
        left: `${containerRect.left}px`,
        opacity: 1,
        transition:
          'opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 167ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      }}
    >
      <p>DateSelector</p>
    </Container>
  );
};
