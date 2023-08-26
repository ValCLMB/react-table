import { useDebounce } from "../../../hooks/useDebounce";

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
