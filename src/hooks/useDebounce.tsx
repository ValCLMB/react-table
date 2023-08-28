import { useRef } from "react";

/**
 * useDebounce
 * description - debounce function
 * @param callback - callback function
 * @param time - time in ms
 * @returns  onDebounce - debounce function
 */
export const useDebounce = (
  callback: (value: string) => void,
  time: number
) => {
  const timeout = useRef<number | undefined>(undefined);

  const onDebounce = (args: string) => {
    clearTimeout(timeout.current);

    timeout.current = window.setTimeout(() => callback(...[args]), time);
  };

  return onDebounce;
};
