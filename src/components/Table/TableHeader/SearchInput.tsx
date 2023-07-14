import { useRef } from "react";

const useDebounce = (callback: (value: string) => void, time: number) => {
  const timeout = useRef<number | undefined>(undefined);

  const onDebounce = (args: string) => {
    clearTimeout(timeout.current);

    timeout.current = window.setTimeout(() => callback(...[args]), time);
  };

  return onDebounce;
};

type SearchInputProps = {
  setSearch: (value: string) => void;
};
export const SearchInput = ({ setSearch }: SearchInputProps) => {
  const onSearch = useDebounce((value) => {
    setSearch(value);
  }, 500);

  return (
    <div>
      <label htmlFor="">Search</label>
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
};
