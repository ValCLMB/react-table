import { useRef } from "react";

/**
 * description - debounce function
 * @param {function} callback - callback function
 * @param {number} time - time in ms
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
