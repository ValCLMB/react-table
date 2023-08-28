type SelectPaginationProps = {
  pageLength: number;
  changePageLength: (value: string) => void;
  range?: number[];
};

// describe this component
/**
 * description - select page length component for a table
 * @param {number} pageLength - number of items per page
 * @param {function} changePageLength - function to change the number of items per page
 * @param {array} range - range of the select
 * @example
 * <SelectPageLength
 * pageLength={pageLength}
 * changePageLength={changePageLength}
 * range={[10, 25, 50, 100]}
 * />
 */
export const SelectPageLength = ({
  pageLength,
  changePageLength,
  range = [10, 25, 50, 100],
}: SelectPaginationProps) => {
  return (
    <div>
      Show
      <select
        value={pageLength}
        onChange={(e) => changePageLength(e.target.value)}
      >
        {range.map((item: number) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      entries
    </div>
  );
};
