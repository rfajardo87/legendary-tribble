import { crmAdsInstance } from "..";

const getCrmData = async () => await crmAdsInstance.get("/");

export { getCrmData };
