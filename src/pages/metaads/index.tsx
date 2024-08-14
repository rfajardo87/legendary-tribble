import { useQuery } from "react-query";
import { View } from "./view";
import { getAds } from "../../api/meta";
import { MetaAdsCtxProvider } from "../../stores/meta/ads";
import { Compare } from "../../components/compare";
import { Head } from "../../components/head";
import { Icon } from "../../components/icon";
import { useMock } from "../../hooks/useMock";
import { data as mockMeta } from "../../mock/meta/meta.json";
import { DataHook } from "../../types/hooks";
import { MetaAds as MetaAdsType } from "../../types/meta";

const MetaAds = () => {
  const {
    data: metaData,
    isLoading,
    error,
  } = useQuery({
    queryKey: "metaads",
    queryFn: getAds,
  });

  const data = useMock<MetaAdsType>(metaData as DataHook, mockMeta);

  return (
    <>
      <Head>
        <Icon icon="meta" brand /> Meta Ads
      </Head>
      <Compare options={["Alcance", "Participacion", "Gasto", "Conversion"]}>
        <MetaAdsCtxProvider value={{ ...data }}>
          <View isLoading={isLoading} error={error} />
        </MetaAdsCtxProvider>
      </Compare>
    </>
  );
};

export { MetaAds };
