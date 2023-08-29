import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { SortedDefinition } from "./TableHead";
type HeaderCellProps = {
  label: string;
  sortedDefinition: SortedDefinition;
  param: string;
  handleSort: (param: string) => void;
};

/**
 * description - header cell component for a table
 * @param {string} label - label of the cell
 * @param {string} param - param of the cell
 * @param {object} sortedDefinition - sorted definition of the table
 * @param {function} handleSort - function to sort the table
 * @example
 * <HeaderCell
 * label={label}
 * param={param}
 * sortedDefinition={sortedDefinition}
 * handleSort={handleSort}
 * />
 */
export const HeaderCell = ({
  label,
  param,
  sortedDefinition,
  handleSort,
}: HeaderCellProps) => {
  const icon =
    sortedDefinition && sortedDefinition.param === param
      ? sortedDefinition.icon
      : faSort;

  return (
    <th onClick={() => handleSort(param)} className="tableHeadCell">
      <div className="tableHeadCellContent">
        {label}
        <FontAwesomeIcon icon={icon} />
      </div>
    </th>
  );
};
