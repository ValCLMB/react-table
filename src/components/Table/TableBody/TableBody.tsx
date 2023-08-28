import { TableProps } from "../Table";

/**
 * description - component to display the body of a table
 * @component
 * @param {object} datas - datas to display
 * @param {object} columns - columns to display
 * @example
 * <TableBody
 * datas={datas}
 * columns={columns}
 * />
 */
export const TableBody = <T extends object>({
  datas,
  columns,
}: Omit<TableProps<T>, "range">) => {
  return (
    <tbody>
      {datas.map((item: T, key) => (
        <tr key={key}>
          {columns.map(({ param }) => (
            <td key={param}>{item[param as keyof typeof item]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
