import { useContext } from "react";
import { Chart } from "../../../components/chart";
import { Container } from "../../../components/container";
import { GoogleAdsCtx } from "../../../stores/google/ads";
import {
  CompareBaseCtx,
  CompareVsCtx,
} from "../../../stores/components/compare";

enum GROUPS {
  IMPRESIONES = "Impresiones",
  CLICKS = "Clicks",
  CONVERSIONES = "Conversiones",
  COSTO = "Costo",
}

const BarChart = () => {
  const { campanas } = useContext(GoogleAdsCtx);
  const { value: base } = useContext(CompareBaseCtx);
  const { value: vs } = useContext(CompareVsCtx);

  const dataSets = {
    [GROUPS.IMPRESIONES]: campanas.map((campana) => campana.impresiones),
    [GROUPS.CLICKS]: campanas.map((campana) => campana.clics),
    [GROUPS.CONVERSIONES]: campanas.map((campana) => campana.conversiones),
    [GROUPS.COSTO]: campanas.map((campana) => campana.costo),
  };

  const datasets =
    !base && !vs
      ? Object.entries(dataSets).map((ds) => ({
          label: ds[0],
          data: ds[1],
        }))
      : [
          { label: base, data: dataSets[base as GROUPS], type: "line" },
          { label: vs, data: dataSets[vs as GROUPS], type: "bar" },
        ];

  const data = {
    labels: campanas.map((campana) => campana.nombre),
    datasets,
  };
  return (
    <Container>
      <Chart type="bar" data={data} />
    </Container>
  );
};

export { BarChart };
