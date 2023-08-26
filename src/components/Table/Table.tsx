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
    currentPage,
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
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numberOfPages={numberOfPages}
        />
      </section>
    </div>
  );
};
