import { useQuery } from "react-query";
import { View } from "./view";
import { getAds } from "../../api/google";
import { GoogleAdsCtxProvider } from "../../stores/google/ads";
import { Compare } from "../../components/compare";
import { Head } from "../../components/head";
import { Icon } from "../../components/icon";

const GoogleAds = () => {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: "ads",
    queryFn: getAds,
  });

  return (
    <>
      <Head>
        <Icon icon="box" /> Google Ads
      </Head>
      <Compare options={["Impresiones", "Clicks", "Conversiones", "Costo"]}>
        <GoogleAdsCtxProvider value={{ ...data?.data }}>
          <View isLoading={isLoading} error={error} />
        </GoogleAdsCtxProvider>
      </Compare>
    </>
  );
};

export { GoogleAds };
