import { http, HttpResponse } from "msw";
import { GOOGLE_ADS, GOOGLE_ANALITICS } from "../../api/urlBase";
import mockGoogle from "./google.json";

const googleHandlers = [
  http.get(GOOGLE_ANALITICS, ({ request }) => {
    const url = new URL(request.url);
    const min = url.searchParams.get("minDate");
    const max = url.searchParams.get("maxDate");
    return HttpResponse.json({
      data: {
        vistasPagina: [
          { fecha: min ?? "2024-08-01", vistas: 300 },
          { fecha: max ?? "2024-08-02", vistas: 450 },
        ],
        sesiones: [
          { fecha: min ?? "2024-08-01", sesiones: 200, tasaRebote: 0.35 },
          { fecha: max ?? "2024-08-02", sesiones: 300, tasaRebote: 0.4 },
        ],
        demografia: {
          edad: [
            { rango: "18-24", porcentaje: 25 },
            { rango: "25-34", porcentaje: 40 },
          ],
          genero: [
            { tipo: "hombre", porcentaje: 55 },
            { tipo: "mujer", porcentaje: 45 },
          ],
        },
      },
    });
  }),
  http.get(GOOGLE_ADS, () => HttpResponse.json(mockGoogle)),
];

export { googleHandlers };
