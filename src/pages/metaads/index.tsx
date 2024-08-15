import { useQuery } from "react-query";
import { View } from "./view";
import { getAds } from "../../api/meta";
import { MetaAdsCtxProvider } from "../../stores/meta/ads";
import { Compare } from "../../components/compare";
import { Head } from "../../components/head";
import { Icon } from "../../components/icon";

const MetaAds = () => {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: "metaads",
    queryFn: getAds,
  });


  return (
    <>
      <Head>
        <Icon icon="meta" brand /> Meta Ads
      </Head>
      <Compare options={["Alcance", "Participacion", "Gasto", "Conversion"]}>
        <MetaAdsCtxProvider value={{ ...data?.data }}>
          <View isLoading={isLoading} error={error} />
        </MetaAdsCtxProvider>
      </Compare>
    </>
  );
};

export { MetaAds };
