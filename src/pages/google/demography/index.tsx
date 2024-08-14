import { useContext } from "react";
import { View } from "./view";
import { Demografia } from "../enums/demografia";
import { GoogleDataCtx } from "../../../stores/google/data";
import { useDemographySelect } from "../../../stores/google/demography";

const Demography = () => {
  const { value, setValue } = useDemographySelect((state) => state);

  const {
    data: {
      demografia: { edad, genero },
    },
  } = useContext(GoogleDataCtx);

  const isEdad = value === Demografia.EDAD;
  return (
    <View data={isEdad ? edad : genero} setCurrent={setValue} current={isEdad} />
  );
};

export { Demography };
