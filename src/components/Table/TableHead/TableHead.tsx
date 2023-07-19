import { HeaderCell } from "./HeaderCell";
import { columns } from "../Table";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type SortedDefinition = {
  param: string;
  direction: string;
  icon: IconDefinition;
} | null;

type TableHeadProps = {
  columns: columns[];
  sortedDefinition: SortedDefinition;
  handleSort: (value: string) => void;
};

export const TableHead = ({
  columns,
  sortedDefinition,
  handleSort,
}: TableHeadProps) => {
  return (
    <thead className="tableHead">
      <tr className="tableHeadRow">
        {columns.map((col) => (
          <HeaderCell
            key={col.param}
            label={col.label}
            param={col.param}
            sortedDefinition={sortedDefinition}
            handleSort={handleSort}
          />
        ))}
      </tr>
    </thead>
  );
};
