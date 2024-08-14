import { useContext } from "react";
import { Chart } from "../../../components/chart";
import { Container } from "../../../components/container";
import { MetaAdsCtx } from "../../../stores/meta/ads";
import {
  CompareBaseCtx,
  CompareVsCtx,
} from "../../../stores/components/compare";

enum GROUPS {
  ALCANCCE = "Alcance",
  PARTICIPACION = "Participacion",
  GASTO = "Gasto",
  CONVERSIONES = "Conversiones",
}

const BarChart = () => {
  const { anuncios } = useContext(MetaAdsCtx);
  const { value: base } = useContext(CompareBaseCtx);
  const { value: vs } = useContext(CompareVsCtx);

  const dataSets = {
    [GROUPS.ALCANCCE]: anuncios.map((anuncio) => anuncio.alcance),
    [GROUPS.PARTICIPACION]: anuncios.map((anuncio) => anuncio.participacion),
    [GROUPS.GASTO]: anuncios.map((anuncio) => anuncio.gastoPublicidad),
    [GROUPS.CONVERSIONES]: anuncios.map((anuncio) => anuncio.conversiones),
  };

  const datasets = () => {
    if (!base && !vs) {
      return Object.entries(dataSets).map((ds) => ({
        label: ds[0],
        data: ds[1],
      }));
    }
    return [
      { label: base, data: dataSets[base as GROUPS], type: "line" },
      { label: vs, data: dataSets[vs as GROUPS], type: "bar" },
    ];
  };

  const data = {
    labels: anuncios.map((anuncio) => anuncio.nombre),
    datasets: datasets(),
  };
  return (
    <Container>
      <Chart type="bar" data={data} />
    </Container>
  );
};

export { BarChart };
