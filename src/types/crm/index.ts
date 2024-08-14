interface Lead {
  nombre: string;
  costoAdquisicion: number;
  valorDeVida: number;
}

interface CrmData {
  leads: Lead[];
  tasaConversion: number;
}

export type { CrmData, Lead };
