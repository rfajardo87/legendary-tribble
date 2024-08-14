import { useContext } from "react";
import { Chart } from "../../../components/chart";
import { GoogleDataCtx } from "../../../stores/google/data";
import { Tabs } from "../enums/tabs";

const ViewSessionChart = () => {
  const {
    current,
    data: { sesiones, vistasPagina },
  } = useContext(GoogleDataCtx);

  const isVistasView = current === Tabs.Vistas;
  const labels = (isVistasView ? sesiones : vistasPagina).map(
    (vista) => vista.fecha
  );
  const data = {
    labels,
    datasets: isVistasView
      ? [
          {
            label: "Vistas",
            data: vistasPagina.map((vista) => vista.vistas),
          },
        ]
      : [
          {
            label: "Sesion",
            data: sesiones.map((sesion) => sesion.sesiones),
          },
          {
            label: "Tasa",
            data: sesiones.map((sesion) => sesion.tasaRebote * 100),
          },
        ],
  };
  return <Chart type="line" data={data} />;
};

export { ViewSessionChart };
