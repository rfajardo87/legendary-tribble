import { crmHandlers } from "./crm";
import { googleHandlers } from "./google";
import { handlers as metaHandlers } from "./meta";

export const handlers = [...googleHandlers, ...metaHandlers, ...crmHandlers];
