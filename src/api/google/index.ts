import { googleAdsInstance, googleInstance } from "..";

const getAnalytics = async () => await googleInstance.get("/");

const getAds = async () => await googleAdsInstance.get("/");

export { getAnalytics, getAds };
