import { useRef, useState, useCallback } from 'react';

import { useClickAway } from '../../hooks/useClickAway';

import { ContainerRectType } from './SmartRange.types';

export function useSmartRangeStore() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dateSelectorRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [containerRect, setContainerRect] = useState<ContainerRectType>({
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    x: 0,
    y: 0,
  });

  const onInputFocus = useCallback(() => {
    if (containerRef.current) {
      setContainerRect(containerRef.current.getBoundingClientRect());
      setIsOpen(true);
    }
  }, []);

  const onInputBlur = useCallback(() => {
    setIsOpen(false);
  }, []);

  useClickAway(dateSelectorRef, () => setIsOpen(!isOpen), { enabled: isOpen });

  return {
    refs: {
      containerRef,
      dateSelectorRef,
    },
    states: {
      isOpen,
      containerRect,
    },
    events: {
      onInputFocus,
      onInputBlur,
    },
  };
}
