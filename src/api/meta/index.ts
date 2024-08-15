import { metaAdsInstance } from "..";

const getAds = async () => await metaAdsInstance.get("/");

export { getAds };
