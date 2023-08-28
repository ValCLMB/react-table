import "./Table.css";
import { Pagination } from "./Pagination/Pagination";
import { TableHead } from "./TableHead/TableHead";
import { SearchInput } from "./TableHeader/SearchInput";
import { SelectPageLength } from "./TableHeader/SelectPageLength";
import { TableLength } from "./Pagination/TableLength";
import { usePagination } from "../../hooks/usePagination";
import { useSort } from "../../hooks/useSort";
import { useSearch } from "../../hooks/useSearch";
import { TableBody } from "./TableBody/TableBody";

export type SelectOption = {
  label: string;
  value: string;
};

export type columns = {
  param: string;
  label: string;
};

export type TableProps<T> = {
  columns: columns[];
  datas: T[];
  range?: number[];
};

/**
 * description - table component with pagination, search and sort
 * @component
 * @param {object} columns - columns of the table
 * @param {object} datas - datas of the table
 * @param {array} range - range of the select
 * @example
 * <Table
 * columns={columns}
 * datas={datas}
 * range={[10, 25, 50, 100]}
 * />
 */

export const Table = <T extends object>({
  columns,
  datas = [],
  range,
}: TableProps<T>) => {
  const { sorted, handleSort } = useSort(datas);
  const { filteredDatas, setSearch } = useSearch(sorted.datas);
  const {
    pageDatas,
    pageLength,
    changePageLength,
    minPageItem,
    maxPageItem,
    numberOfPages,
    setCurrentPage,
  } = usePagination(filteredDatas);

  return (
    <div className="react-table">
      <section className="tableHeader">
        <SelectPageLength
          range={range}
          pageLength={pageLength}
          changePageLength={changePageLength}
        />
        <SearchInput setSearch={setSearch} />
      </section>
      <table>
        <TableHead
          columns={columns}
          sortedDefinition={sorted.definition}
          handleSort={handleSort}
        />
        <TableBody datas={pageDatas} columns={columns} />
      </table>
      <section className="tableFooter">
        <TableLength
          length={datas.length}
          maxPageItem={maxPageItem}
          minPageItem={minPageItem}
        />
        <Pagination
          setCurrentPage={setCurrentPage}
          numberOfPages={numberOfPages}
        />
      </section>
    </div>
  );
};
