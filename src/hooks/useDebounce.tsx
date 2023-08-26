import { useRef } from "react";

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
