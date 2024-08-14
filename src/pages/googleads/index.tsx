import { useQuery } from "react-query";
import { View } from "./view";
import { getAds } from "../../api/google";
import { GoogleAdsCtxProvider } from "../../stores/google/ads";
import { Compare } from "../../components/compare";
import { Head } from "../../components/head";
import { Icon } from "../../components/icon";
import { useMock } from "../../hooks/useMock";
import { DataHook } from "../../types/hooks";
import { GoogleAdsProps } from "../../types/google/ads";
import { data as dataMock } from "../../mock/google/google.json";

const GoogleAds = () => {
  const {
    data: dataAds,
    isLoading,
    error,
  } = useQuery({
    queryKey: "ads",
    queryFn: getAds,
  });

  const data = useMock<GoogleAdsProps>(dataAds as DataHook, dataMock);
  return (
    <>
      <Head>
        <Icon icon="box" /> Google Ads
      </Head>
      <Compare options={["Impresiones", "Clicks", "Conversiones", "Costo"]}>
        <GoogleAdsCtxProvider value={{ ...data }}>
          <View isLoading={isLoading} error={error} />
        </GoogleAdsCtxProvider>
      </Compare>
    </>
  );
};

export { GoogleAds };
