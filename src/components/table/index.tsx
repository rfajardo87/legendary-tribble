import clsx from "clsx";
import { GenericType } from "../../types/components/generic";

interface Props {
  headers: string[];
  data: GenericType[];
}

const Table = ({ headers, data }: Props) => {
  return (
    <table
      className={clsx([
        "uk-table",
        "uk-table-divider",
        "uk-table-stripe",
        "uk-table-hover",
        "uk-table-small",
      ])}
    >
      {headers && (
        <thead>
          <tr>
            {headers.map((head) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {data.map((row, index) => (
          <tr key={`row_${index}`}>
            {Object.values(row).map((value, indexCol) => (
              <td key={`row_${index}_col_${indexCol}`}>{`${value}`}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { Table };
