import axios from "axios";
import { CRM_DATA, GOOGLE_ADS, GOOGLE_ANALITICS, META_ADS } from "./urlBase";

const googleInstance = axios.create({
  baseURL: GOOGLE_ANALITICS,
});

const googleAdsInstance = axios.create({
  baseURL: GOOGLE_ADS,
});

const metaAdsInstance = axios.create({
  baseURL: META_ADS,
});

const crmAdsInstance = axios.create({
  baseURL: CRM_DATA,
});

export { googleInstance, googleAdsInstance, metaAdsInstance, crmAdsInstance };
