import React, { useRef, useEffect } from 'react';

export function useClickAway(
  ref: React.RefObject<HTMLElement>,
  handler: (event: Event | MouseEvent) => void,
  options: { enabled: boolean },
) {
  const { enabled } = options;

  const handlerRef = useRef(handler);

  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    if (!enabled) return () => '';

    function internalHandler(e: Event): void {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handlerRef.current(e);
      }
    }

    document.addEventListener('mousedown', internalHandler);

    return () => {
      document.removeEventListener('mousedown', internalHandler);
    };
  }, [ref, enabled]);
}
