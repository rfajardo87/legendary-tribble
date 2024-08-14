import React, { useState } from "react";
import { useQuery } from "react-query";
import { format } from "date-fns";
import { View } from "./view";
import { Tabs } from "./enums/tabs";
import { GoogleDataCtxProvider } from "../../stores/google/data";
import { getAnalytics } from "../../api/google";
import { useDateRange } from "../../stores/components/daterange";
import { useMock } from "../../hooks/useMock";
import { DataHook } from "../../types/hooks";
import { GoogleProps } from "../../types/google/analytics";
import { data as mockGoogle } from "../../mock/google/analytics.json";

const GooglePage = () => {
  const [current, setCurrent] = useState(Tabs.Vistas);
  const { min, max } = useDateRange();

  const {
    data: dataGoogle,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: "analytics",
    queryFn: () =>
      getAnalytics(format(min, "yyyy-MM-dd"), format(max, "yyyy-MM-dd")),
  });

  const data = useMock<GoogleProps>(dataGoogle as DataHook, mockGoogle);

  const innerTabs = [
    { name: "Vistas", type: Tabs.Vistas },
    { name: "Sesiones", type: Tabs.Sessiones },
    { name: "Demografia", type: Tabs.Demografia },
  ];

  const clickAction = (e: React.MouseEvent, tab: Tabs) => {
    e.preventDefault();
    setCurrent(tab);
  };

  return (
    <GoogleDataCtxProvider value={{ data: { ...data }, current }}>
      <View
        isLoading={isLoading}
        error={error}
        innerTabs={innerTabs}
        onClickAction={clickAction}
        filter={() => {
          refetch();
        }}
      />
    </GoogleDataCtxProvider>
  );
};

export { GooglePage };
