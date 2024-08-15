import React, { useState } from "react";
import { useQuery } from "react-query";
import { View } from "./view";
import { Tabs } from "./enums/tabs";
import { GoogleDataCtxProvider } from "../../stores/google/data";
import { getAnalytics } from "../../api/google";

const GooglePage = () => {
  const [current, setCurrent] = useState(Tabs.Vistas);

  const { data, isLoading, error } = useQuery({
    queryKey: "analytics",
    queryFn: getAnalytics,
  });

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
    <GoogleDataCtxProvider value={{ ...data?.data, current }}>
      <View
        isLoading={isLoading}
        error={error}
        innerTabs={innerTabs}
        onClickAction={clickAction}
      />
    </GoogleDataCtxProvider>
  );
};

export { GooglePage };
