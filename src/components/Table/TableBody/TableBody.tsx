import { TableProps } from "../Table";

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
