type TableLengthProps = {
  length: number;
  minPageItem: number;
  maxPageItem: number;
};
/**
 * description - component to display the number of items for the current page
 *  @component
 * @param {number} length - length of the datas
 * @param {number} minPageItem - min item for the current page
 * @param {number} maxPageItem - max item for the current page
 * @example
 * <TableLength
 * length={length}
 * minPageItem={minPageItem}
 *
 * maxPageItem={maxPageItem}
 * />
 */
export const TableLength = ({
  length,
  minPageItem,
  maxPageItem,
}: TableLengthProps) => {
  return (
    <>
      Showing {minPageItem} to {length < maxPageItem ? length : maxPageItem} of{" "}
      {length} entries
    </>
  );
};
