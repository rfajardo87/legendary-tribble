import { metaAdsInstance } from "..";

const getAds = async () => await metaAdsInstance.get("/ads");

export { getAds };
