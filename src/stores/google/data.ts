import { createContext } from "react";
import { GoogleProps } from "../../types/google/analytics";

interface GoogleDataCtxProps {
  data: GoogleProps;
  current: number;
}
const initCtx: GoogleDataCtxProps = {
  data: {
    demografia: {
      edad: [],
      genero: [],
    },
    vistasPagina: [],
    sesiones: [],
  },
  current: 0,
};

const GoogleDataCtx = createContext<GoogleDataCtxProps>(initCtx);
const GoogleDataCtxProvider = GoogleDataCtx.Provider;

export { GoogleDataCtx, GoogleDataCtxProvider };
