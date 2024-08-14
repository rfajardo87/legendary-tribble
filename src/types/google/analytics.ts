interface Group {
  porcentaje: number;
  rango?: string;
  tipo?: string;
}

interface Demografia {
  edad: Group[];
  genero: Group[];
}

interface Vistas {
  fecha: Date | string;
  vistas: number;
}

interface Sesion {
  fecha: Date | string;
  sesiones: number;
  tasaRebote: number;
}

interface GoogleProps {
  vistasPagina: Vistas[];
  sesiones: Sesion[];
  demografia: Demografia;
}

export type { GoogleProps, Demografia, Group, Vistas, Sesion };
