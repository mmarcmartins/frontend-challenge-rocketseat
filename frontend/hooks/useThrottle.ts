
import { useEffect, useCallback, useRef } from 'react';
import { useSnackbar } from './useSnackbar';

export const useThrottle = <T extends (...args: any[]) => void>(callback: T, rcDelay?: number): ((...args: Parameters<T>) => void) => {
  const callbackRef = useRef(callback);
  const lastCallTimeRef = useRef<number | null>(null);
  const { timeout } = useSnackbar();
  const delay = rcDelay ?? timeout;

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const throttledCallback = useCallback((...args: Parameters<T>) => {
    const now = Date.now();

    if (lastCallTimeRef.current === null || (now - lastCallTimeRef.current) >= delay) {
      callbackRef.current(...args);
      lastCallTimeRef.current = now;
    }
  }, [delay]);

  return throttledCallback;
};


