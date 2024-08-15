import { useContext } from "react";
import { Chart } from "../../../components/chart";
import { GoogleDataCtx } from "../../../stores/google/data";
import { Tabs } from "../enums/tabs";
import { useDateRange } from "../../../stores/components/daterange";
import { isBetween } from "../../../helpers/fns";
import { Sesion, Vistas } from "../../../types/google/analytics";
import { toDate } from "date-fns";

const ViewSessionChart = () => {
  const {
    current,
    data: { sesiones, vistasPagina },
  } = useContext(GoogleDataCtx);
  const { max, min } = useDateRange();

  const isVistasView = current === Tabs.Vistas;
  const sesionVistaList = (isVistasView ? vistasPagina : sesiones).filter(
    (record) => isBetween(toDate(record.fecha), min, max, true)
  );
  const labels = sesionVistaList.map((vista) => vista.fecha);
  const data = {
    labels,
    datasets: isVistasView
      ? [
          {
            label: "Vistas",
            data: sesionVistaList.map((vista) => (vista as Vistas).vistas),
          },
        ]
      : [
          {
            label: "Sesion",
            data: sesionVistaList.map((sesion) => (sesion as Sesion).sesiones),
          },
          {
            label: "Tasa",
            data: sesionVistaList.map(
              (sesion) => (sesion as Sesion).tasaRebote * 100
            ),
          },
        ],
  };
  return <Chart type="line" data={data} />;
};

export { ViewSessionChart };
