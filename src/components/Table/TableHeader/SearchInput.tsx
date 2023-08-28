import { useDebounce } from "../../../hooks/useDebounce";

type SearchInputProps = {
  setSearch: (value: string) => void;
};

/**
 * description - search input component for a table
 * @component
 * @param {function} setSearch - function to set the search value
 * @example
 * <SearchInput
 * setSearch={setSearch}
 * />
 */
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
