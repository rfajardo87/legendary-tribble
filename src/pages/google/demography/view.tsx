import clsx from "clsx";
import { Group } from "../../../types/google/analytics";
import { Container } from "../../../components/container";
import { Demografia } from "../enums/demografia";
import { Table } from "../../../components/table";
import { convertToDataTable } from "../../../helpers/fns";

interface Props {
  data: Group[];
  current: boolean;
  setCurrent: (current: Demografia) => void;
}

const View = ({ data, current, setCurrent }: Props) => {
  return (
    <>
      <Container
        extraClass={clsx(["d-flex", "flex-row", "justify-content-start"])}
      >
        <select
          className={clsx(["uk-select", "py-1"])}
          onChange={(e) => {
            setCurrent(
              Number(e.currentTarget.value) === 1
                ? Demografia.GENERO
                : Demografia.EDAD
            );
          }}
        >
          <option value={Demografia.EDAD}>Edad</option>
          <option value={Demografia.GENERO}>Genero</option>
        </select>
      </Container>
      <Table
        headers={[current ? "Rango edad" : "Genero", "porcentaje"]}
        data={convertToDataTable(data)}
      />
    </>
  );
};

export { View };
