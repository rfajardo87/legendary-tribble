interface Campana {
  nombre: string;
  impresiones: number;
  clics: number;
  conversiones: number;
  costo: number;
}

interface GoogleAdsProps {
  campanas: Campana[];
}

export type { GoogleAdsProps, Campana };
