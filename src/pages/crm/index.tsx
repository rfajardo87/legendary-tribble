import { useQuery } from "react-query";
import { View } from "./view";
import { getCrmData } from "../../api/crm";
import { CrmDataCtxProvider } from "../../stores/crm/data";
import { data as mockData } from "../../mock/crm/data.json";
import { useMock } from "../../hooks/useMock";
import { DataHook } from "../../types/hooks";
import { CrmData as CrmDataType } from "../../types/crm";

const CrmData = () => {
  const {
    data: crmData,
    isLoading,
    error,
  } = useQuery({
    queryKey: "crmData",
    queryFn: getCrmData,
  });

  const data = useMock<CrmDataType>(crmData as DataHook, mockData);

  return (
    <CrmDataCtxProvider value={{ ...data }}>
      <View isLoading={isLoading} error={error} />
    </CrmDataCtxProvider>
  );
};

export { CrmData };
