type TableLengthProps = {
  length: number;
  minPageItem: number;
  maxPageItem: number;
};
/**
 * description - component to display the number of items for the current page
 * @param length - length of the datas
 * @param minPageItem - min item for the current page
 * @param maxPageItem - max item for the current page
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
