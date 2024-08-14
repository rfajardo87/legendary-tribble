import { http, HttpResponse } from "msw";
import { CRM_DATA } from "../../api/urlBase";
import data from "./data.json";

const crmHandlers = [http.get(CRM_DATA, () => HttpResponse.json(data))];

export { crmHandlers };
