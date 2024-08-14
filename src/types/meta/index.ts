interface Anuncio {
  nombre: string;
  alcance: number;
  participacion: number;
  gastoPublicidad: number;
  conversiones: number;
}

interface MetaAds {
  anuncios: Anuncio[];
}

export type { MetaAds, Anuncio };
