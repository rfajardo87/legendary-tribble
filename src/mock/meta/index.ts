import { http, HttpResponse } from "msw";
import { META_ADS } from "../../api/urlBase";
import mockMeta from "./meta.json";

const handlers = [
  http.get(`${META_ADS}/ads`, () => HttpResponse.json(mockMeta)),
];

export { handlers };
