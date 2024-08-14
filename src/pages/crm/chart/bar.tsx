import { useContext } from "react";
import { Chart } from "../../../components/chart";
import { Container } from "../../../components/container";
import { CrmDataCtx } from "../../../stores/crm/data";

const BarChart = () => {
  const { leads } = useContext(CrmDataCtx);
  const data = {
    labels: leads.map((lead) => lead.nombre),
    datasets: [
      {
        label: "costo adquisicion",
        type: "line",
        data: leads.map((lead) => lead.costoAdquisicion),
      },
      {
        type: "bar",
        label: "valorDeVida",
        data: leads.map((lead) => lead.valorDeVida),
      },
    ],
  };
  return (
    <Container>
      <Chart type="bar" data={data} />
    </Container>
  );
};

export { BarChart };
