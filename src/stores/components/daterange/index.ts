import { addDays } from "date-fns";
import { create } from "zustand";

type maxMin = Date | string;

interface DateRangeState {
  min: maxMin;
  max: maxMin;
  setMin: (min: maxMin) => void;
  setMax: (max: maxMin) => void;
}
const today = new Date();

const initialValue = {
  min: today,
  max: addDays(today, 3),
};

const useDateRange = create<DateRangeState>((set) => ({
  ...initialValue,
  setMin: (min: maxMin) => set((state) => ({ ...state, min })),
  setMax: (max: maxMin) => set((state) => ({ ...state, max })),
}));

export { useDateRange };
