import { create } from "zustand";

type UIStoreProps = {
  darkMode: boolean;
  toggleDark: () => void;
  zoom: number;
  camera: {
    min: number;
    max: number;
  };

  //
};

export const useUIStore = create<UIStoreProps>()((set, get) => ({
  darkMode: true,
  toggleDark: () =>
    set({
      darkMode: !get().darkMode,
    }),
  zoom: 5,
  camera: { min: 2, max: 12 },
}));
