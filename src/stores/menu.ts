import { create } from "zustand";
import { EMenu, IMenuStore } from "../types/stores/menu";

const useMenuStore = create<IMenuStore>((set) => ({
  current: EMenu.GOOGLE,
  navigate: (current: EMenu) => set({ current }),
}));

export { useMenuStore };
