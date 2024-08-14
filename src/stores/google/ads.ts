import { createContext } from "react";
import { GoogleAdsProps } from "../../types/google/ads";

const GoogleAdsCtx = createContext<GoogleAdsProps>({ campanas: [] });
const GoogleAdsCtxProvider = GoogleAdsCtx.Provider;

export { GoogleAdsCtx, GoogleAdsCtxProvider };
