import { create } from "zustand";
import { Demografia } from "../../pages/google/enums/demografia";
import { DemographyValue } from "../../types/stores/google/demography";

const useDemographySelect = create<DemographyValue>((set) => ({
  value: Demografia.EDAD,
  setValue: (value: Demografia) => set({ value }),
}));

export { useDemographySelect };
