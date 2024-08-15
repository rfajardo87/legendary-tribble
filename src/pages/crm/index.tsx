import { useQuery } from "react-query";
import { View } from "./view";
import { getCrmData } from "../../api/crm";
import { CrmDataCtxProvider } from "../../stores/crm/data";

const CrmData = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: "crmData",
    queryFn: getCrmData,
  });

  return (
    <CrmDataCtxProvider value={{ ...data?.data }}>
      <View isLoading={isLoading} error={error} />
    </CrmDataCtxProvider>
  );
};

export { CrmData };
