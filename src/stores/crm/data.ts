import { createContext } from "react";
import { CrmData } from "../../types/crm";

const CrmDataCtx = createContext<CrmData>({ leads: [], tasaConversion: 0 });
const CrmDataCtxProvider = CrmDataCtx.Provider;

export { CrmDataCtx, CrmDataCtxProvider };
