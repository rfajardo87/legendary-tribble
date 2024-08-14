import { useContext } from "react";
import { Chart } from "../../../components/chart";
import { GoogleDataCtx } from "../../../stores/google/data";
import { useDemographySelect } from "../../../stores/google/demography";
import { Demografia } from "../enums/demografia";

const DemographyChart = () => {
  
  const value = useDemographySelect((state) => state.value);

  const {
    data: {
      demografia: { edad, genero },
    },
  } = useContext(GoogleDataCtx);

  

  const isEdadSelected = value === Demografia.EDAD;

  const data = {
    labels: isEdadSelected
      ? edad.map((item) => item.rango)
      : genero.map((item) => item.tipo),
    datasets: [
      {
        data: (isEdadSelected ? edad : genero).map((item) => item.porcentaje),
      },
    ],
  };
  return <Chart type="pie" data={data} />;
};

export { DemographyChart };
