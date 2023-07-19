import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { SortedDefinition } from "./TableHead";
type HeaderCellProps = {
  label: string;
  sortedDefinition: SortedDefinition;
  param: string;
  handleSort: (param: string) => void;
};
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
