import value from "./config";

// cada servicio debe configurar su URL
const localServer = `https://getpantry.cloud/apiv1/pantry/${value}`;

const basket = (endpoint: string) => `/basket/${endpoint}`;

const GOOGLE_ANALITICS = `${localServer}${basket("demo_analytics")}`;
const GOOGLE_ADS = `${localServer}${basket("demo_google")}`;
const META_ADS = `${localServer}${basket("demo_meta")}`;
const CRM_DATA = `${localServer}${basket("demo_crm")}`;

export { GOOGLE_ANALITICS, GOOGLE_ADS, META_ADS, CRM_DATA };
