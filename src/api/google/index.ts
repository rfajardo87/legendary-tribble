import { googleAdsInstance, googleInstance } from "..";

const getAnalytics = async (min: string, max: string) => {
  const url = `/?minDate=${min}&maxDate=${max}`;
  return await googleInstance.get(url);
};

const getAds = async () => await googleAdsInstance.get("/");

export { getAnalytics, getAds };
