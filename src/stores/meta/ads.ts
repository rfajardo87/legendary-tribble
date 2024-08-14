import { createContext } from "react";
import { MetaAds } from "../../types/meta";

const MetaAdsCtx = createContext<MetaAds>({ anuncios: [] });
const MetaAdsCtxProvider = MetaAdsCtx.Provider;

export { MetaAdsCtx, MetaAdsCtxProvider };
