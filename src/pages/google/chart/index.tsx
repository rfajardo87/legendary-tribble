import { useContext } from "react";
import { Tabs } from "../enums/tabs";
import { DemographyChart } from "./demography";
import { ViewSessionChart } from "./viewSession";
import { GoogleDataCtx } from "../../../stores/google/data";

const GoogleChart = () => {
  const { current } = useContext(GoogleDataCtx);

  if (current === Tabs.Demografia) {
    return <DemographyChart />;
  }
  return <ViewSessionChart />;
};

export { GoogleChart };
